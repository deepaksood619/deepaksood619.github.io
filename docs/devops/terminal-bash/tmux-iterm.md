# Tmux Iterm

Tmux is a terminal multiplexer.

It lets you switch easily between several programs in one terminal, detach them (they keep running in the background) and reattach them to a different terminal.

tmux is a [software application](https://en.wikipedia.org/wiki/Software_application) that can be used to [multiplex](https://en.wikipedia.org/wiki/Terminal_multiplexer) several [virtual consoles](https://en.wikipedia.org/wiki/Virtual_console), allowing a user to access multiple separate terminal sessions inside a single terminal window or remote terminal session. It is useful for dealing with multiple programs from a [command-line interface](https://en.wikipedia.org/wiki/Command-line_interface), and for separating programs from the [Unix shell](https://en.wikipedia.org/wiki/Unix_shell) that started the program. It provides much of the same functionality as [GNU Screen](https://en.wikipedia.org/wiki/GNU_Screen), but it is distributed under a [BSD license](https://en.wikipedia.org/wiki/BSD_license)

### Iterm Commands on server

```bash
Prefix - Ctrl + b

Prefix + s – List of sessions in our tmux server
Prefix + $ – Rename session
Prefix + d – Detach current session (not about deleting it, just leaving it in the background). We go to the terminal and it will show us a message similar to [detached (from session mySession)].
Prefix + c - Create window
tmux kill-server - tmux
tmux kill-window
tmux kill-session
    tmux kill-session -t <session_name>

# Panes
Prefix +% – Divide it vertically
Prefix + “ – Divide it horizontally
Prefix + x – Close pane
Prefix + spacebar – Change the layout of the current panes
Prefix + Left/Right - For switching between panes
Prefix + c  - create a new tab
Prefix + z - full screen current pane
ctrl + d - close current tab

# Set Mouse off
Ctrl-b = : set -g mouse off
Ctrl-b = :set -g mouse on

# Scrolling
    Ctrl-b + [ (opening square bracket)
    Enter for stopping scrolling

# Maximizing
    ctrl+b + z
```

### Iterm commands on local

```bash
Command + D (split vertically)
Command + shift + D (split horizontally)
Command + W (close the pane)
Command + Shift + Enter (maximize the current pane)
Command + Shift + F (show command history)
Command + control + left/right (increase size of window)
Command + alt + left/right (move between panes)
Command + enter (maximize/minimize)
cmd + z - undo closed terminal/pane
Command + k (Clear buffer)

ctrl + w - delete one word back

tmux attach -t <name>
tmux attach -t 0
tmux ls     #list all tmux sessions
```

### Shell integration

<https://iterm2.com/documentation-shell-integration.html>

## Others

### byobu

Byobu is a [GPLv3](http://www.google.com/url?q=http%3A%2F%2Fwww.gnu.org%2Flicenses%2Fgpl-3.0.txt&sa=D&sntz=1&usg=AFQjCNGtxPHRl3Ss1GlWgGTuANClXqyvWw) open source text-based window manager and terminal multiplexer. It was originally designed to provide elegant enhancements to the otherwise functional, plain, practical [GNU Screen](http://www.google.com/url?q=http%3A%2F%2Fwww.gnu.org%2Fsoftware%2Fscreen%2F&sa=D&sntz=1&usg=AFQjCNF9f6NJD8H_5mupvdrrTmFMeeFThA), for the [Ubuntu](http://www.google.com/url?q=http%3A%2F%2Fwww.ubuntu.com%2F&sa=D&sntz=1&usg=AFQjCNHHTmFHYKsnZbVKD3XP7-6c8QSVtg) server distribution. Byobu now includes an enhanced profiles, convenient keybindings, configuration utilities, and toggle-able system status notifications for both the GNU Screen window manager and the more modern [Tmux](https://www.google.com/url?q=https%3A%2F%2Fgithub.com%2Ftmux%2Ftmux&sa=D&sntz=1&usg=AFQjCNH7yW6_x1Pj0Af4b-QzktPYakb9Ug) terminal multiplexer, and works on most Linux, BSD, and Mac distributions.

<https://www.byobu.org>
