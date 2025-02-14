# Standards

## ASCII

- 48-57 - 0-9
- 65-90 - A-Z
- 97-122 - a-z

## base64

In [computer science](https://en.wikipedia.org/wiki/Computer_science), Base64 is a group of [binary-to-text encoding](https://en.wikipedia.org/wiki/Binary-to-text_encoding) schemes that represent [binary data](https://en.wikipedia.org/wiki/Binary_data) in an [ASCII](https://en.wikipedia.org/wiki/ASCII) string format by translating it into a [radix](https://en.wikipedia.org/wiki/Radix)-64 representation. The term Base64 originates from a specific [MIME content transfer encoding](https://en.wikipedia.org/wiki/MIME#Content-Transfer-Encoding). Each Base64 digit represents exactly 6 bits of data. Three 8-bit bytes (i.e., a total of 24 bits) can therefore be represented by four 6-bit Base64 digits.

Common to all binary-to-text encoding schemes, Base64 is designed to carry data stored in binary formats across channels that only reliably support text content. Base64 is particularly prevalent on the World Wide Web its uses include the ability to embed [image files](https://en.wikipedia.org/wiki/Image_files) or other binary assets inside textual assets such as [HTML](https://en.wikipedia.org/wiki/HTML) and [CSS](https://en.wikipedia.org/wiki/CSS) files.

The difference between Base64 and hex is really just how bytes are represented. Hex is another way of saying "Base16". **Hex will take two characters for each byte - Base64 takes 4 characters for every 3 bytes, so it's more efficient than hex.** Assuming you're using UTF-8 to encode the XML document, a 100K file will take 200K to encode in hex, or 133K in Base64.

base64 is a costly instrument. It makes data about **33% larger** in terms of memory usage. So base64 is one of these little things that make software **slow**. That's why you should use it only when it's absolutely necessary.

[Base64 - Wikipedia](https://en.wikipedia.org/wiki/Base64)

[What is base64 Encoding and Why is it Necessary?](https://www.freecodecamp.org/news/what-is-base64-encoding/)

## Base64 vs UTF-8/UTF-16

UTF-8 and UTF-16 are methods to encode Unicode strings to byte sequences.

Base64 is a method to encode a byte sequence to a string.

Base64 is a way to encode binary data, while UTF8 and UTF16 are ways to encode Unicode text.

Things to keep in mind:

- Not every byte sequence represents an Unicode string encoded in UTF-8 or UTF-16
- Not every Unicode string represents a byte sequence encoded in Base64

https://stackoverflow.com/questions/3866316/whats-the-difference-between-utf8-utf16-and-base64-in-terms-of-encoding

## Unicode

A **character** is a minimal unit of text that has semantic value.

A **character set** is a collection of characters that might be used by multiple languages. For example, the Latin character set is used by English and most European languages, though the Greek character set is used only by the Greek language.

A **coded character set** is a character set where each character is assigned a unique number.

A **code point** is a value that can be used in a coded character set. A code point is a 32-bit int data type, where the lower 21 bits represent a valid code point value and the upper 11 bits are 0. Code point is a character and this is represented by one or more code units depending on the encoding.

### Intro

Unicode is a computing industry standard for the consistent encoding, representation, and handling of text expressed in most of the world's writing systems.

The latest version contains a repertoire of 136,755 [characters](https://en.wikipedia.org/wiki/Character_(computing)) covering 139 modern and historic [scripts](https://en.wikipedia.org/wiki/Script_(Unicode)), as well as multiple symbol sets.

A Unicode **code unit** is a 16-bit char value. For example, imagine a String that contains the letters "abc" followed by the Deseret LONG I, which is represented with two char values. That string contains four characters, four code points, but five code units. Code unit is the number of bits an encoding uses. So UTF-8 would use 8 and UTF-16 would use 16 units.

To express a character in Unicode, the hexadecimal value is prefixed with the string U+. The valid code point range for the Unicode standard is U+0000 to U+10FFFF, inclusive. The code point value for the Latin character A is U+0041. The character € which represents the Euro currency, has the code point value U+20AC. The first letter in the Deseret alphabet, the LONG I, has the code point value U+10400.

The following table shows code point values for several characters:

| Character       | Unicode Code Point | Glyph                                                                                                                                                                                                              |
|--------------------------|----------------------------------|------------|
| Latin A         | U+0041             | ![image](../../media/Standards-image1.gif)                                                     |
| Latin sharp S   | U+00DF             | ![image](../../media/Standards-image2.gif)                                            |
| Han for East    | U+6771             | ![image](../../media/Standards-image3.gif) |
| Deseret, LONG I | U+10400            | ![image](../../media/Standards-image4.gif)               |

As previously described, characters that are in the range U+10000 to U+10FFFF are called supplementary characters. The set of characters from U+0000 to U+FFFF are sometimes referred to as theBasic Multilingual Plane (BMP).

https://www.asciitohex.com

## Control Characters

A control [character](https://en.wikipedia.org/wiki/Character_(computing)) or non-printing character(NPC) is a [code point](https://en.wikipedia.org/wiki/Code_point) (a [number](https://en.wikipedia.org/wiki/Number)) in a [character set](https://en.wikipedia.org/wiki/Character_encoding), that does not represent a written symbol. They are used as [in-band signaling](https://en.wikipedia.org/wiki/In-band_signaling) to cause effects other than the addition of a symbol to the text. All other characters are mainly printing, printable, or [graphic characters](https://en.wikipedia.org/wiki/Graphic_character), except perhaps for the "space" character (see [ASCII printable characters](https://en.wikipedia.org/wiki/ASCII_printable_characters)).

The control characters in ASCII still in common use include:

- 0 ([null](https://en.wikipedia.org/wiki/Null_character),NUL, [0](https://en.wikipedia.org/wiki/%5C0), [^@](https://en.wikipedia.org/wiki/%5E@)), originally intended to be an ignored character, but now used by many [programming languages](https://en.wikipedia.org/wiki/Programming_language) including [C](https://en.wikipedia.org/wiki/C_programming_language) to mark the end of a string.
- 7 ([bell](https://en.wikipedia.org/wiki/Bell_character),BEL, [a](https://en.wikipedia.org/wiki/%5Ca), [^G](https://en.wikipedia.org/wiki/%5EG)), which may cause the device to emit a warning such as a bell or beep sound or the screen flashing.
- 8 ([backspace](https://en.wikipedia.org/wiki/Backspace),BS,b, [^H](https://en.wikipedia.org/wiki/%5EH)), may overprint the previous character.
- 9 ([horizontal tab](https://en.wikipedia.org/wiki/Tab_key),HT, [t](https://en.wikipedia.org/wiki/%5Ct), [^I](https://en.wikipedia.org/wiki/%5EI)), moves the printing position right to the next tab stop.
- 10 ([line feed](https://en.wikipedia.org/wiki/Newline),LF, [n](https://en.wikipedia.org/wiki/%5Cn), [^J](https://en.wikipedia.org/wiki/%5EJ)), moves the print head down one line, or to the left edge and down. Used as the end of line marker in most [UNIX systems](https://en.wikipedia.org/wiki/Unix) and variants.
- 11 ([vertical tab](https://en.wikipedia.org/wiki/Tab_key),VT, [v](https://en.wikipedia.org/wiki/%5Cv), [^K](https://en.wikipedia.org/wiki/%5EK)), vertical tabulation.
- 12 ([form feed](https://en.wikipedia.org/wiki/Page_break),FF, [f](https://en.wikipedia.org/wiki/%5Cf), [^L](https://en.wikipedia.org/wiki/%5EL)), to cause a printer to eject paper to the top of the next page, or a video terminal to clear the screen.
- 13 ([carriage return](https://en.wikipedia.org/wiki/Carriage_return),CR, [r](https://en.wikipedia.org/wiki/%5Cr), [^M](https://en.wikipedia.org/wiki/%5EM)), moves the printing position to the start of the line, allowing overprinting. Used as the end of line marker in [Classic Mac OS](https://en.wikipedia.org/wiki/Classic_Mac_OS), [OS-9](https://en.wikipedia.org/wiki/OS-9), [FLEX](https://en.wikipedia.org/wiki/FLEX_(operating_system))(and variants). ACR+LFpair is used by [CP/M](https://en.wikipedia.org/wiki/CP/M)-80 and its derivatives including [DOS](https://en.wikipedia.org/wiki/DOS) and [Windows](https://en.wikipedia.org/wiki/Microsoft_Windows), and by [Application Layer](https://en.wikipedia.org/wiki/Application_Layer)[protocols](https://en.wikipedia.org/wiki/Communications_protocol) such as [FTP](https://en.wikipedia.org/wiki/File_Transfer_Protocol), [SMTP](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol), and [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol).
- 26 ([Control-Z](https://en.wikipedia.org/wiki/Control-Z),SUB,EOF, [^Z](https://en.wikipedia.org/wiki/%5EZ)). Acts as an end-of-file for the Windows text-mode file i/o.
- 27 ([escape](https://en.wikipedia.org/wiki/Escape_character),ESC, [e](https://en.wikipedia.org/wiki/%5Ce)([GCC](https://en.wikipedia.org/wiki/GCC_(software)) only),^[). Introduces an [escape sequence](https://en.wikipedia.org/wiki/Escape_sequence).

[The Absolute Minimum Every Software Developer Absolutely, Positively Must Know About Unicode and Character Sets (No Excuses!) - Joel on Software](https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/)

It does not make sense to have a string without knowing what encoding it uses.

[There's No Such Thing As Plain Text • Dylan Beattie • YOW! 2023 - YouTube](https://www.youtube.com/watch?v=ajfb5LSbQVM&ab_channel=GOTOConferences)

## ISO/IEC 5218

- 0 = Not known;
- 1 = Male;
- 2 = Female;
- 9 = Not applicable.

[ISO/IEC 5218 - Wikipedia](https://en.wikipedia.org/wiki/ISO/IEC_5218)

## Licenses

- GPL Gnu General Public License
- CDDL Common Development and Distribution License
- Apache License (APL)

https://choosealicense.com/appendix
