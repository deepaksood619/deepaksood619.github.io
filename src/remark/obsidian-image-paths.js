import path from 'path';
import { visit } from 'unist-util-visit';

/**
 * Remark plugin to transform Obsidian-style image paths to Docusaurus-compatible relative paths
 *
 * Obsidian uses: media/image.jpg (regardless of file depth)
 * Docusaurus needs: ../../media/image.jpg (depth-dependent)
 *
 * This plugin automatically calculates the correct relative path based on file location
 */
const plugin = () => {
  return async (ast, vfile) => {
    const filePath = vfile.history[0]; // Full file path
    const docsRoot = path.join(process.cwd(), 'docs');

    // Calculate relative depth from docs root
    const fileDir = path.dirname(filePath);
    const relativeToDocsRoot = path.relative(docsRoot, fileDir);
    const depth = relativeToDocsRoot === '' ? 0 : relativeToDocsRoot.split(path.sep).length;

    // Build correct relative path prefix
    const prefix = depth === 0 ? './' : '../'.repeat(depth);

    visit(ast, 'image', (node) => {
      const url = node.url;

      // Transform Obsidian-style media/ to correct relative path
      if (url.startsWith('media/')) {
        node.url = prefix + url;
        // console.log(`[Obsidian Image] Transformed: ${url} -> ${node.url} (depth: ${depth})`);
      }
      // Also normalize existing relative paths to maintain consistency
      else if (url.match(/^\.\.\/+media\//)) {
        const imageName = url.replace(/^\.\.\/+media\//, 'media/');
        node.url = prefix + imageName;
        // console.log(`[Obsidian Image] Normalized: ${url} -> ${node.url} (depth: ${depth})`);
      }
    });
  };
};

export default plugin;
