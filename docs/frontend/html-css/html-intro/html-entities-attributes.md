# HTML Entities / Attributes

Reserved characters in HTML must be replaced with character entities.

Characters that are not present on your keyboard can also be replaced by entities.

## HTML Entities

Some characters are reserved in HTML.

If you use the less than (`<`) or greater than (`>`) signs in your text, the browser might mix them with tags.

Character entities are used to display reserved characters in HTML.

A character entity looks like this:

```html
&entity_name;
OR
&#entity_number;
```

To display a less than sign (`<`) we must write: `&lt;` or `&#60;`

Advantage of using an entity name:An entity name is easy to remember.

Disadvantage of using an entity name:Browsers may not support all entity names, but the support for numbers is good.

## Non-breaking Space

A common character entity used in HTML is the non-breaking space: `&nbsp;`

A non-breaking space is a space that will not break into a new line.

Two words separated by a non-breaking space will stick together (not break into a new line). This is handy when breaking the words might be disruptive.

Examples:

- `§ 10`
- `10 km/h`
- `10 PM`

Another common use of the non-breaking space is to prevent that browsers truncate spaces in HTML pages.

If you write 10 spaces in your text, the browser will remove 9 of them. To add real spaces to your text, you can use the `&nbsp;` character entity.

The non-breaking hyphen ([`&#8209;`](https://www.w3schools.com/charsets/ref_utf_punctuation.asp)) lets you use a hyphen character (‑) that won't break.

| **Result** | **Description** | **Entity Name** | **Entity Number** |
|---|---|---|---|
| `` | non-breaking space | `&nbsp;` | `&#160;` |
| `<` | less than | `&lt;` | `&#60;` |
| `>` | greater than | `&gt;` | `&#62;` |
| `&` | ampersand | `&` | `&#38;` |
| `"` | double quotation mark | `&quot;` | `&#34;` |
| `'` | single quotation mark (apostrophe) | `&apos;` | `&#39;` |
| `¢` | cent | `&cent;` | `&#162;` |
| `£` | pound | `&pound;` | `&#163;` |
| `¥` | yen | `&yen;` | `&#165;` |
| `€` | euro | `&euro;` | `&#8364;` |
| `©` | copyright | `&copy;` | `&#169;` |
| `®` | registered trademark | `&reg;` | `&#174;` |

A diacritical mark is a "glyph" added to a letter.

Some diacritical marks, like grave ( ̀) and acute ( ́) are called accents.

Diacritical marks can appear both above and below a letter, inside a letter, and between two letters.

Diacritical marks can be used in combination with alphanumeric characters, to produce a character that is not present in the character set (encoding) used in the page.

Here are some examples:

| **Mark** | **Character** | **Construct** | **Result** |
|---|---|---|---|
| ̀ | `a` | `a&#768;` | `à` |
| ́ | `a` | `a&#769;` | `á` |
| ̂ | `a` | `a&#770;` | `â` |
| ̃ | `a` | `a&#771;` | `ã` |
| ̀ | `O` | `O&#768;` | `Ò` |
| ́ | `O` | `O&#769;` | `Ó` |
| ̂ | `O` | `O&#770;` | `Ô` |
| ̃ | `O` | `O&#771;` | `Õ` |

## HTML Attributes

### onchange

```js
onchange="js_function(this)"

<script>
function js_function(obj) {
    console.log(obj.id)
    console.log(obj.value)

    obj.classList.add('custom-danger')
}
</script>
```
