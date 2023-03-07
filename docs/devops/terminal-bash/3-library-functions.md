# (3) Library Functions

## setvbuf

setbuf, setbuffer, setlinebuf, setvbuf - stream buffering operations

The three types of buffering available are unbuffered, block buffered, and line buffered. When an output stream is unbuffered, information appears on the destination file or terminal as soon as written; when it is block buffered many characters are saved up and written as a block; when it is line buffered characters are saved up until a newline is output or input is read from any stream attached to a terminal device (typicallystdin). The function [fflush](https://linux.die.net/man/3/fflush)(3) may be used to force the block out early. (See [fclose](https://linux.die.net/man/3/fclose)(3).) Normally all files are block buffered. When the first I/O operation occurs on a file, [malloc](https://linux.die.net/man/3/malloc)(3) is called, and a buffer is obtained. If a stream refers to a terminal (asstdoutnormally does) it is line buffered. The standard error streamstderris always unbuffered by default.

Thesetvbuf() function may be used on any open stream to change its buffer. Themodeargument must be one of the following three macros:

```bash
_IONBF
unbuffered
_IOLBF
line buffered
_IOFBF
fully buffered
```

Except for unbuffered files, thebufargument should point to a buffer at leastsizebytes long; this buffer will be used instead of the current buffer. If the argumentbufis NULL, only the mode is affected; a new buffer will be allocated on the next read or write operation. Thesetvbuf() function may only be used after opening a stream and before any other operations have been performed on it.
