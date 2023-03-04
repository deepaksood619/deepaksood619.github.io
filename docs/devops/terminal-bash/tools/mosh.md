# Mosh

Remote terminal application that allowsroaming, supportsintermittent connectivity, and provides intelligentlocal echoand line editing of user keystrokes.

Mosh is a replacement for interactive SSH terminals. It's more robust and responsive, especially over Wi-Fi, cellular, and long-distance links.

Mosh is free software, available for GNU/Linux, BSD, macOS, Solaris, Android, Chrome, and iOS.

## Features

- Mosh keeps the session alive if the client goes to sleep and wakes up later, or temporarily loses its Internet connection.
- Mosh allows the client and server to "roam" and change IP addresses, while keeping the connection alive. Unlike SSH, Mosh can be used while switching between Wi-Fi networks or from Wi-Fi to cellular data to wired Ethernet.
- The Mosh client runs a predictive model of the server's behavior in the background and tries to guess intelligently how each keystroke will affect the screen state. When it is confident in its predictions, it will show them to the user while waiting for confirmation from the server. Most typing and uses of the left- and right-arrow keys can be echoed immediately.
- Mosh adjusts its frame rate so as not to fill up network queues on slow links, so "Control-C" always works within an RTT to halt a runaway process.
- Mosh warns the user when it has not heard from the server in a while.
- Mosh supports lossy links that lose a significant fraction of their packets.
- Mosh handles some Unicode edge cases better than SSH and existing terminal emulators by themselves, but requires a UTF-8 environment to run.
- Mosh leverages SSH to set up the connection and authenticate users. Mosh does not contain any privileged (root) code.

## Installing

```bash
Mac - brew install mosh
Ubuntu - sudo apt-get install -y mosh
Allow ports 60000:61000 udp on server
```

## References

<https://github.com/mobile-shell/mosh>

<https://mosh.org>
