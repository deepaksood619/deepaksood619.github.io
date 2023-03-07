# Bash Shortcuts

## Controlling the Screen

- Ctrl+L: Clear the screen. This is similar to running the "clear" command.
- Ctrl+S: Stop all output to the screen. This is particularly useful when running commands with a lot of long, verbose output, but you don't want to stop the command itself with Ctrl+C.
- Ctrl+Q: Resume output to the screen after stopping it with Ctrl+S.

## Moving the Cursor

- Ctrl+AorHome: Go to the beginning of the line.
- Ctrl+EorEnd: Go to the end of the line.
- Alt+B: Go left (back) one word.
- Alt+F: Go right (forward) one word.
- Ctrl+XX: Move between the beginning of the line and the current position of the cursor. This allows you to press Ctrl+XX to return to the start of the line, change something, and then press Ctrl+XX to go back to your original cursor position. To use this shortcut, hold the Ctrl key and tap the Xkey twice.
- Ctrl + b - Move back one full screen
- Ctrl + f - Move forward one full screen
- Ctrl + d - Move forward 1/2 screen
- Ctrl + u - Move back (up) 1/2 screen

## Working With Processes

- Ctrl+C:Interrupt (kill) the current foreground process running in in the terminal. This sends the SIGINT signal to the process, which is technically just a request - most processes will honor it, but some may ignore it.
- Ctrl+Z: Suspend the current foreground process running in bash. This sends the SIGTSTP signal to the process. To return the process to the foreground later, use thefg process_name command.
- Ctrl+D: Close the bash shell. This sends an EOF (End-of-file) marker to bash, and bash exits when it receives this marker. This is similar to running theexitcommand.

## Deleting Text

- Ctrl+DorDelete: Delete the character under the cursor.
- Alt+D: Delete all characters after the cursor on the current line.
- Ctrl+HorBackspace: Delete the character before the cursor.

## Fixing Typos

- Alt+T: Swap the current word with the previous word.
- Ctrl+T: Swap the last two characters before the cursor with each other. You can use this to quickly fix typos when you type two characters in the wrong order.
- Ctrl+_: Undo your last key press. You can repeat this to undo multiple times.

## Cutting and Pasting

- Ctrl+W: Cut the word before the cursor, adding it to the clipboard.
- Ctrl+K: Cut the part of the line after the cursor, adding it to the clipboard.
- Ctrl+U: Cut the part of the line before the cursor, adding it to the clipboard.
- Ctrl+Y: Paste the last thing you cut from the clipboard. The y here stands for "yank".

## Capitalizing Characters

- Alt+U: Capitalize every character from the cursor to the end of the current word, converting the characters to upper case.
- Alt+L: Uncapitalize every character from the cursor to the end of the current word, converting the characters to lower case.
- Alt+C: Capitalize the character under the cursor. Your cursor will move to the end of the current word.

Bash also has a special "recall" mode you can use to search for commands you've previously run:

- Ctrl+R: Recall the last command matching the characters you provide. Press this shortcut and start typing to search your bash history for a command.
- Ctrl+O: Run a command you found with Ctrl+R.
- Ctrl+G: Leave history searching mode without running a command.

### References

<https://github.com/LeCoupa/awesome-cheatsheets/blob/master/languages/bash.sh>
