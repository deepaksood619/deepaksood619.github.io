# Bash Metacharacters

| **Symbol:** | **Meaning and Usage examples:** |
|---|---|
| `<` | Redirection: Get input for the command to the left from the file listed to the right of this symbol. Example: `sort < filename.txt` # This will print out the contents of filename.txt with the lines sorted. |
| `>` | Redirection: Send the output of the command on the left into the file named on the right of this symbol. If the file does not exist, create it. If it does exist, overwrite it (erase everything in it and put this output as the new content). Example: `cal > filename.txt` # This puts a current calendar into filename.txt |
| `>>` | Redirection: Send the output of the command on the left to the end of the file named on the right of this symbol. If the file does not exist, it will be created. If it does exist, it will be appended. Example: `date >> filename.txt` # This adds the current date and time to the end of filename.txt |
| `\|` | Pipe: This sends the output of the command to the left as the input to the command on the right of the symbol. Example: `cat filename.txt | grep it` # This will print the lines in filename.txt that contain the string "it" |
| `?` | Matching. This symbol matches any single character. Example: `ls e?.txt` # This will list all files that start with e, end with .txt and have any 1 character inbetween (like e2.txt) |
| `*` | Matching. This symbol matches any number of any characters. Example: `ls e*.txt` # This will list all files that start with e, end with .txt and have any characters inbetween (like e24ldf.txt) |
| `[]` | Matching, listing. One of the characters within the square brackets must be matched. Example: `ls -l e [abc].txt` # This will give a long listing of ea.txt, eb.txt and/or ec.txt |
| `$` | Denotes that a string is a variable name. Not used when assigning a variable. Example: `prompt: my_variable="this string"` # Assigning the variable prompt: `echo $my_variable` # Referring to the contents of the variable. Also used in parameter substitution to check if a variable is defined and determine a value. Example: `echo ${my_variable-other}` # Print the value of my_variable if defined, otherwise print "other" |
| `\` | Escape. Ignore the shell's special meaning for the character after this symbol. Treat it as though it is just an ordinary character. Example: `echo "I have \$300.00"` # Print the $ instead of using it to look up a variable name. Also used to put commands on mulitple lines. Example: `prompt1: cat filename.txt \`  # Don't run yet... prompt2: `date \` # Still don't do anything... prompt2: `cal` # No backslash on the last one, so run all the commands |
| () | Grouping commands. If you want to run two commands and send their output to the same place, put them in a group together. Example: `(cal; date) > filename.txt` # Put a calendar and the date in filename.txt |
| {} | Used in special cases for variables with the `$`. One use is in parameter substitution, the other is in arrays. Example: `numbers=( 1 2 3 4 5 ) echo ${numbers [1]}` |
| " | Quoting. Used to group strings that contain spaces and other special characters. Example: `my_variable="This is a test."` # Assign a string to the variable |
| ' | Quoting. Used to prevent the shell from interpretting special characters within the quoted string. Example: `my_variable='This is a backslash: \'` # Assign the string to the variable |
| \` | Unquoting. Used within a quoted string to force the shell to interpret and run the command between the backticks. Example: `my_variable="This is the date:`date`"` # Store the string AND the output of the date command |
| `&&` | Run the command to the right of the double-ampersand ONLY IF the command on the left succeeded in running. Example: `mkdir stuff; echo "Made the directory"` # Print a message on success of the mkdir command |
| `\|\|` | Run the command on the right of the double pipe ONLY IF the command on the left failed. Example: `mkdir stuff \|\| echo "mkdir failed!"` # Print a message on failure of the mkdir command |
| `&` | Run the process in the background, allowing you to continue your work on the command line. Example: `john /etc/passwd &;` # Try to crack the passwords - this takes a couple hours, so do it in the background. Also used in redirection when copying one stream into the same location as another stream. Example: `cat filename.txt  file2.txt 2 1` # Send Standard Error (2) to the file2.txt where Standard Output (1) is going |
| `;` | Allows you to list multiple commands on a single line, separated by this character. Example: `date;john passwd; date` # Print the date, crack the passwords and print the date again afterwards - cheap benchmarking |
| `=` | Assignment. Set the variable named on the left to the value presented on the right. Example: my_variable="Hello World!" # Note that there is NO SPACE between the variable name and the string. |

<http://www.angelfire.com/mi/genastorhotz/reality/computers/linux/bashmetachars.html>
