# Markdown

Markdown is a way to style text on the web. You control the display of the document; formatting words as bold or italic, adding images, and creating lists are just a few of the things we can do with Markdown. Mostly, Markdown is just regular text with a few non-alphabetic characters thrown in, like # or *.

## Editor

 [Online Markdown Editor - Dillinger, the Last Markdown Editor ever.](https://dillinger.io/)

### Strikethrough

~~Strikethrough~~

### Bold

**bold**

### Italics

*Italics*

### Headers

```markdown
# This is an <h1> tag
## This is an <h2> tag
###### This is an <h6> tag
```

### Emphasis

```markdown
*This text will be italic*

_This will also be italic_

**This text will be bold**

__This will also be bold__

*You **can** combine them*
```

### BlockQuotes

```markdown
As Grace Hopper said:
>  I've always been more interested
>  in the future than in the past.
```

![image](../../media/Markdown-image1.jpg)

### Lists

```markdown
1. Unordered
 *  Item 1
 *  Item 2
   *  Item 2a
   *  Item 2b
1. Ordered
 1. Item 1
 2. Item 2
 3. Item 3
   * Item 3a
   * Item 3b
```

### Images

```markdown
![Github Logo](/images/logo.jpg)

Format: ![Alt Text](url)
```

### Links

```markdown
[http://github.com](http://github.com) - automatically created

[Github](http://github.com) - Using default text
```

### Backslash Escapes

Markdown allows you to use backslash escapes to generate literal characters which would otherwise have special meaning in Markdown's formatting syntax.

\*Literal asterisks\*

| | |
|---|---|
| \ | Backslash |
| ` | Backtick |
| * | Asterisk |
| _ | Underscore |
| {} | Curly braces |
| [] | Square brackes |
| () | Parentheses |
| # | Hash mark |
| + | Plus sign |
| - | Minus sign (hyphen) |
| . | Dot |
| ! | Exclamation mark |

### Code: Block

To specify an entire block of pre-formatted code, indent every line of the block by 1 tab or 4 spaces. Ampersands and angle brackets will automatically be translated into HTML entities.

Markdown:

```markdown
 If you want to mark something as code, indent it by 4 spaces.
 <p>This has been indented 4 spaces.</p>
```

```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
    return (
        <h1>Hello, Docusaurus!</h1>
    )
}
```

```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
  return <h1>Hello, Docusaurus!</h1>;
}
```

## Github Flavored Markdown (GFM)

### Username@Mentions

Typing an '@' symbol, followed by a username, will notify that person to come and view the comment. This is called an "@mention". You can also @mention teams within an organization.

### Issue References

Any number that refers to an issues or PR will be automatically converted into a link.
github-flavored-markdown#1
defunkt/github-flavored-markdown#1

### Emoji

[www.emoji-cheat-sheet.com](http://www.emoji-cheat-sheet.com)

Examples

* :+1:
* :sparkles:
* :camel:
* :tada:
* :rocket:
* :metal:
* :octocat:

### Fenced Code Blocks

Markdown uses 4 leading spaces or 1 tab to represent a code block.
With GFM we can use ``` to create a code block withouth the leading spaces.
Optional language identifier can be added to give code syntax highlighting.

Ex:

```javascript
function test() {
 console.log("look ma', no spaces");
}
```

### Task Lists

```markdown
-[x] this is a complete item
-[ ] this is an incomplete item
-[x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
-[x] list syntax required (any unordered or ordered list supported)
```

![image](../../media/Markdown-image2.jpg)

### Tables

Tables aren't part of the core Markdown spec, but they are part of GFM and *Markdown Here* supports them.

We can create tables by assembling a list of words and dividing them with hyphens '-' (for the first row), and then separating each column with a pipe |:

![image](../../media/Markdown-image3.jpg)

Colons can be used to align columns.

| Tables | Are | Cool |
| ------------- |:-------------:| -----:|
| col 3 is | right-aligned | $1600 |
| col 2 is | centered | $12 |
| zebra stripes | are neat | $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

### Badges

![Rank](https://img.shields.io/badge/Rank-87%20out%20of%2039586-brightgreen.svg)

![Number of puzzles solved](https://img.shields.io/badge/Puzzles%20Solved-234-orange.svg)

Level | Name | Solution
:----:|:----:|:--------:
1 | The OR symbol | A
2 | A Range of characters | B
3 | Characters NOT to include | C
4 | Zero or more | A A
5 | Zero or one | A B
6 | One or more | A A
7 | Backreference | A A
8 | Specific amount | A A
9 | Space | ' '

## MDX

You write markdown with embedded components through JSX. It gets compiled to JavaScript that you can use in any framework that supports JSX.

MDX allows you to use JSX in your markdown content. You can import components, such as interactive charts or alerts, and embed them within your content. This makes writing long-form content with components a blast.

<https://mdxjs.com>

## Markdown here

<https://github.com/adam-p/markdown-here>

Google Chrome, Firefox, and Thunderbird extension that lets you write email in Markdown and render it before sending.

<https://markdown-here.com>

## Others

[Markdown vs. HTML – What Makes the Most Powerful Notes Editor?](https://www.thebrain.com/blog/markdown-vs-html)

<https://www.markdownguide.org/basic-syntax>

<https://markdown-it.github.io>

[GitHub - igorshubovych/markdownlint-cli: MarkdownLint Command Line Interface](https://github.com/igorshubovych/markdownlint-cli)
