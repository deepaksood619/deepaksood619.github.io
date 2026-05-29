#!/usr/bin/env node

/**
 * Pre-commit hook to check for broken markdown links in Docusaurus
 * Mimics Docusaurus link resolution to catch errors before GitHub Actions
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const DOCS_DIR = path.join(__dirname, 'docs');
const errors = [];

/**
 * Get list of staged markdown files
 */
function getStagedMarkdownFiles() {
  try {
    const output = execSync('git diff --cached --name-only --diff-filter=ACM', {
      encoding: 'utf-8',
    }).trim();

    if (!output) return [];

    return output
      .split('\n')
      .filter(file => file.startsWith('docs/') && file.endsWith('.md'))
      .map(file => path.join(__dirname, file));
  } catch (error) {
    // If not in a git repo or no staged files, check all files
    console.warn('Warning: Could not get staged files, checking all markdown files...');
    return getAllMarkdownFiles();
  }
}

/**
 * Get all markdown files in docs/ (fallback)
 */
function getAllMarkdownFiles() {
  const files = [];

  function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        // Skip office folder (sensitive data)
        if (entry.name === 'office') continue;
        walk(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        files.push(fullPath);
      }
    }
  }

  walk(DOCS_DIR);
  return files;
}

/**
 * Extract markdown links from file content
 * Matches [text](url) and [text](url "title")
 */
function extractMarkdownLinks(content, filePath) {
  const links = [];
  // Match markdown links: [text](url) or [text](url "title")
  const linkRegex = /\[([^\]]+)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;

  let match;
  let lineNumber = 0;
  const lines = content.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    lineNumber = i + 1;

    // Reset regex
    linkRegex.lastIndex = 0;

    while ((match = linkRegex.exec(line)) !== null) {
      const [fullMatch, text, url] = match;
      const column = match.index + 1;

      // Skip external links (http://, https://, mailto:, etc.)
      if (url.match(/^[a-z]+:\/\//i) || url.startsWith('mailto:') || url.startsWith('#')) {
        continue;
      }

      links.push({
        text,
        url,
        line: lineNumber,
        column,
        fullMatch,
      });
    }
  }

  return links;
}

/**
 * Resolve a markdown link URL relative to the source file
 * Following Docusaurus link resolution rules
 */
function resolveLinkPath(sourceFile, linkUrl) {
  const sourceDir = path.dirname(sourceFile);

  // Remove anchor/hash from URL
  const urlWithoutAnchor = linkUrl.split('#')[0];

  if (!urlWithoutAnchor) {
    // Only anchor, no file path
    return null;
  }

  // Resolve relative path
  let resolved;

  if (linkUrl.startsWith('/')) {
    // Absolute path from docs root
    resolved = path.join(DOCS_DIR, urlWithoutAnchor.substring(1));
  } else if (linkUrl.startsWith('education/')) {
    // Full path starting with education/ (common pattern in this repo)
    resolved = path.join(DOCS_DIR, urlWithoutAnchor);
  } else {
    // Relative path
    resolved = path.resolve(sourceDir, urlWithoutAnchor);
  }

  // Ensure .md extension
  if (!resolved.endsWith('.md') && !resolved.endsWith('.mdx')) {
    // Try adding .md extension
    const withMd = resolved + '.md';
    if (fs.existsSync(withMd)) {
      return withMd;
    }

    // Try as directory with readme.md
    const withReadme = path.join(resolved, 'readme.md');
    if (fs.existsSync(withReadme)) {
      return withReadme;
    }
  }

  return resolved;
}

/**
 * Check if a file exists
 */
function fileExists(filePath) {
  if (!filePath) return true; // Anchor-only links

  try {
    return fs.existsSync(filePath) && fs.statSync(filePath).isFile();
  } catch (error) {
    return false;
  }
}

/**
 * Check a single markdown file for broken links
 */
function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const links = extractMarkdownLinks(content, filePath);
  const relativeFilePath = path.relative(__dirname, filePath);

  for (const link of links) {
    const resolvedPath = resolveLinkPath(filePath, link.url);

    if (resolvedPath && !fileExists(resolvedPath)) {
      errors.push({
        file: relativeFilePath,
        line: link.line,
        column: link.column,
        url: link.url,
        resolvedPath: path.relative(__dirname, resolvedPath),
        message: `Broken link: ${link.url}`,
      });
    }
  }
}

/**
 * Main execution
 */
function main() {
  console.log('🔍 Checking markdown links...\n');

  const filesToCheck = getStagedMarkdownFiles();

  if (filesToCheck.length === 0) {
    console.log('✅ No markdown files to check');
    return;
  }

  console.log(`Checking ${filesToCheck.length} file(s)...\n`);

  for (const file of filesToCheck) {
    checkFile(file);
  }

  if (errors.length === 0) {
    console.log('✅ All markdown links are valid!');
    process.exit(0);
  } else {
    console.error('❌ Found broken markdown links:\n');

    // Group errors by file
    const errorsByFile = {};
    for (const error of errors) {
      if (!errorsByFile[error.file]) {
        errorsByFile[error.file] = [];
      }
      errorsByFile[error.file].push(error);
    }

    for (const [file, fileErrors] of Object.entries(errorsByFile)) {
      console.error(`\n${file}:`);
      for (const error of fileErrors) {
        console.error(`  Line ${error.line}:${error.column} - ${error.message}`);
        console.error(`    Resolved to: ${error.resolvedPath} (not found)`);
      }
    }

    console.error(`\n❌ Total: ${errors.length} broken link(s) found`);
    console.error('\nPlease fix these links before committing.');
    process.exit(1);
  }
}

main();
