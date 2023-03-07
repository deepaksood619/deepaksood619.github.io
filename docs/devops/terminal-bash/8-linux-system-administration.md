# (8) Linux System Administration

## sudo

sudo, sudoedit - execute a command as another user

sudo is a [program](https://en.wikipedia.org/wiki/Computer_program) for [Unix-like](https://en.wikipedia.org/wiki/Unix-like) computer [operating systems](https://en.wikipedia.org/wiki/Operating_system) that allows users to run programs with the security privileges of another user, by default the [superuser](https://en.wikipedia.org/wiki/Superuser).It originally stood for "superuser do"as the older versions ofsudowere designed to run commands only as the superuser. However, the later versions added support for running commands not only as the superuser but also as other (restricted) users, and thus it is also commonly expanded as "substitute user do".Although the latter case reflects its current functionality more accurately, sudois still often called "superuser do" since it is so often used for administrative tasks.

## brctl - ethernet bridge administration

brctlis used to set up, maintain, and inspect the ethernet bridge configuration in the linux kernel.

An ethernet bridge is a device commonly used to connect different networks of ethernets together, so that these ethernets will appear as one ethernet to the participants.

Each of the ethernets being connected corresponds to one physical interface in the bridge. These individual ethernets are bundled into one bigger ('logical') ethernet, this bigger ethernet corresponds to the bridge network interface.

## service - run a System V init script

Description

service runs a System V init script or upstart job in as predictable an environment as possible, removing most environment variables and with the current working directory set to /.

The SCRIPT parameter specifies a System V init script, located in /etc/init.d/SCRIPT, or the name of an upstart job in /etc/init. The existence of an upstart job of the same name as a script in /etc/init.d will cause the upstart job to take precedence over the init.d script. The supported values of COMMAND depend on the invoked script. service passes COMMAND and OPTIONS to the init script unmodified. For upstart jobs, start, stop, status, and reload are passed through to their upstart equivalents. Restart will call the upstart 'stop' for the job, followed immediately by the 'start', and will exit with the return code of the start command.

All scripts should support at least the start and stop commands. As a special case, if COMMAND is --full-restart, the script is run twice, first with the stop command, then with the start command. This option has no effect on upstart jobs.

## Commands

```bash
sudo service telegraf status
sudo service --status-all
```

runs all init scripts, in alphabetical order, with the status command. The status is [ + ] for running services, [ - ] for stopped services and [ ? ] for services without a 'status' command. This option only calls status for sysvinit jobs; upstart jobs can be queried in a similar manner with initctl list.

## supervisord

Supervisor is a client/server system that allows its users to monitor and control a number of processes on UNIX-like operating systems.

It shares some of the same goals of programs like [launchd](http://supervisord.org/glossary.html#term-launchd), [daemontools](http://supervisord.org/glossary.html#term-daemontools), and [runit](http://supervisord.org/glossary.html#term-runit). Unlike some of these programs, it is not meant to be run as a substitute forinitas "process id 1". Instead it is meant to be used to control processes related to a project or a customer, and is meant to start like any other program at boot time.

```bash
sudo service supervisor status

USER root
RUN apt-get install -y supervisor
COPY docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf
```

`supervisord.conf`

```toml
[supervisord]
nodaemon=true

[program:rasa_actions]
directory=/app/
command=rasa run actions
autostart=true
autorestart=true
priority=10
stdout_logfile=/dev/fd/1
stdout_logfile_maxbytes=0
stderr_logfile=/dev/fd/2
stderr_logfile_maxbytes=0

[program:rasa_run]
directory=/app/
command=rasa run
autostart=true
autorestart=true
priority=5
stdout_logfile=/dev/fd/1
stdout_logfile_maxbytes=0
stderr_logfile=/dev/fd/2
stderr_logfile_maxbytes=0
```

### Running

`/bin/bash -c /usr/bin/supervisord`

<http://supervisord.org>

<https://www.digitalocean.com/community/tutorials/how-to-install-and-manage-supervisor-on-ubuntu-and-debian-vps>

## fsck

filesystem consistency check and interactive repair

The first form of fsck preens a standard set of filesystems or the specified filesystems. It is normally used in the script /etc/rc during automatic reboot. Here fsck reads the filesystem descriptor table (using getfsent(3)) to determine which filesystems to check. Only partitions that have ``rw,''``rq'' or ``ro'' as options, and that have non-zero pass number are checked. Filesystems with pass number 1 (normally just the root filesystem) are checked one at a time. When pass 1 completes, all remaining filesystems are checked, running one process per disk drive. The disk drive containing each filesystem is inferred from the shortest prefix of the device name that ends in one or more digits; the remaining characters are assumed to be the partition designator. In preening mode, filesystems that are marked clean are skipped. Filesystems are marked clean when they are unmounted, when they have been mounted read-only, or when fsck runs on them successfully.

<https://en.wikipedia.org/wiki/Fsck>

## swapon / swapoff

enable/disable devices and files for paging and swapping

<https://linux.die.net/man/8/swapoff>

<https://linux.die.net/man/2/swapoff>
