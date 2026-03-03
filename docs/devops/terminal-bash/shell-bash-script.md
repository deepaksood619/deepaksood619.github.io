# Shell/bash Script

A **shell script** is a [computer program](https://en.wikipedia.org/wiki/Computer_program) designed to be run by the [Unix shell](https://en.wikipedia.org/wiki/Unix_shell), a [command-line interpreter](https://en.wikipedia.org/wiki/Command-line_interpreter). The various dialects of shell scripts are considered to be [scripting languages](https://en.wikipedia.org/wiki/Scripting_language). Typical operations performed by shell scripts include file manipulation, program execution, and printing text. A script which sets up the environment, runs the program, and does any necessary cleanup, logging, etc. is called a **wrapper**.

```bash
#!/bin/sh
echo "What is your name?"
read USER_NAME
echo "Hello $USER_NAME"
echo "I will create you a file called $USER_NAME_file"
touch $USER_NAME_file
```

### Passing Variables

```bash
#!/bin/bash
var_name=$1
echo ${var_name}
echo $2

./test hello 2
```

### Shortcuts

```bash
$0 - Script name
$# - Argument count
$? - Most recent exit code
$@ and $* - All the args
```

https://dev.to/rpalo/handling-arguments-in-bash-scripts-3o5m

### Loops

```bash
#!/bin/sh
for i in 1 2 3 4 5
do
  echo "Looping ... number $i"
done

 for i in {1..10}
 do
  echo "$i"
 done

 #!/bin/sh
for i in hello 1 * 2 goodbye
do
  echo "Looping ... i is set to $i"
done

 #!/bin/sh
INPUT_STRING=hello
while [ "$INPUT_STRING" != "bye" ]
do
  echo "Please type something in (bye to quit)"
  read INPUT_STRING
  echo "You typed: $INPUT_STRING"
done

#!/bin/zsh
# check if server name is passed
if [ "$1" ]; then
        # server name is passed, ssh
        ssh ubuntu@$1.abc.com
else
        # get server name since not passed
        echo "Enter server name to ssh - "
        read SERVER_NAME
        ssh ubuntu@$SERVER_NAME.abc.com
fi
```

### Examples

```bash
# Write date to a file every second
#!/bin/bash
mkdir -p /var/log/apache
touch /var/log/apache/access.log
while true
do
        echo $(date) >> /var/log/apache/access.log
    sleep 1
done

# Loop through and run all commands
#!/bin/bash

VAL="$(kubectl get pods -n example | awk '{if (NR!=1) { print $1 }}')"

for i in $VAL
do
        kubectl delete -n example pods $i
done

while true; do echo `date` | kafkacat -P -b my-cluster-kafka-brokers.kafka:9092 -t test; done

# find and replace filename
find . -name '*---*' -type f | grep -v "media" -exec sh -c '
for f; do
    mv "$f" "${f%/*}/${f##*/123_}"
done' sh {} +

find . -type f | grep -v "media" | sed 's|\(.*/\)[^A-Z]*\([A-Z].*\)|mv \"&\" \"\1\2\"|' | sh

```

## Others

### Shell Scripting: Error Handling with `set -e`

By default, Bash scripts continue executing even if a command fails (returns a non-zero exit code). Using `set -e` (also known as `errexit`) changes this behavior to make scripts more robust.

Include `set -e` at the top of your scripts to ensure they exit immediately upon the first failure:

#### Why use it?

- **Prevents Domino Effects:** Stops a script before it can run "downstream" logic on bad data or in the wrong directory.
- **Easier Debugging:** The script dies exactly where the problem occurred, rather than failing silently and causing issues later.

#### Exceptions (When it won't exit)

The shell will **not** exit if the failing command is:

1. Part of an `if` or `while` test.
2. Part of a logical list (e.g., `command || echo "failed"`).
3. Preceded by `!` (inverted exit code).

#### Best Practice: The "Unofficial Bash Strict Mode"

For maximum reliability, many developers use this combined string:

```bash
set -euo pipefail
```

- **`-e`**: Exit on error.
- **`-u`**: Exit if an undefined variable is used (prevents typos).
- **`-o pipefail`**: Returns the exit code of the _first_ command in a pipeline that fails (e.g., `grep "x" | sort` will fail if grep fails).

## References

- https://en.wikipedia.org/wiki/Shell_script
- https://www.shellscript.sh
- https://www.shellscript.sh/loops.html
- [Top Shell Scripting Interview Questions (2024) - InterviewBit](https://www.interviewbit.com/shell-scripting-interview-questions/)
- [Top 30 Shell Scripting Interview Questions And Answers for 2023](https://www.simplilearn.com/shell-scripting-interview-questions-article)
