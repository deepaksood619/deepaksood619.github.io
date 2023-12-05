# Functions

## MySQL String Functions

| **Function** | **Description** |
|---|---|
| [ASCII](https://www.w3schools.com/sql/func_mysql_ascii.asp) | Returns the ASCII value for the specific character |
| [CHAR_LENGTH](https://www.w3schools.com/sql/func_mysql_char_length.asp) | Returns the length of a string (in characters) |
| [CHARACTER_LENGTH](https://www.w3schools.com/sql/func_mysql_character_length.asp) | Returns the length of a string (in characters) |
| [CONCAT](https://www.w3schools.com/sql/func_mysql_concat.asp) | Adds two or more expressions together |
| [CONCAT_WS](https://www.w3schools.com/sql/func_mysql_concat_ws.asp) | Adds two or more expressions together with a separator |
| [FIELD](https://www.w3schools.com/sql/func_mysql_field.asp) | Returns the index position of a value in a list of values |
| [FIND_IN_SET](https://www.w3schools.com/sql/func_mysql_find_in_set.asp) | Returns the position of a string within a list of strings |
| [FORMAT](https://www.w3schools.com/sql/func_mysql_format.asp) | Formats a number to a format like "#,###,###.##", rounded to a specified number of decimal places |
| [INSERT](https://www.w3schools.com/sql/func_mysql_insert.asp) | Inserts a string within a string at the specified position and for a certain number of characters |
| [INSTR](https://www.w3schools.com/sql/func_mysql_instr.asp) | Returns the position of the first occurrence of a string in another string |
| [LCASE](https://www.w3schools.com/sql/func_mysql_lcase.asp) | Converts a string to lower-case |
| [LEFT](https://www.w3schools.com/sql/func_mysql_left.asp) | Extracts a number of characters from a string (starting from left) |
| [LENGTH](https://www.w3schools.com/sql/func_mysql_length.asp) | Returns the length of a string (in bytes) |
| [LOCATE](https://www.w3schools.com/sql/func_mysql_locate.asp) | Returns the position of the first occurrence of a substring in a string |
| [LOWER](https://www.w3schools.com/sql/func_mysql_lower.asp) | Converts a string to lower-case |
| [LPAD](https://www.w3schools.com/sql/func_mysql_lpad.asp) | Left-pads a string with another string, to a certain length |
| [LTRIM](https://www.w3schools.com/sql/func_mysql_ltrim.asp) | Removes leading spaces from a string |
| [MID](https://www.w3schools.com/sql/func_mysql_mid.asp) | Extracts a substring from a string (starting at any position) |
| [POSITION](https://www.w3schools.com/sql/func_mysql_position.asp) | Returns the position of the first occurrence of a substring in a string |
| [REPEAT](https://www.w3schools.com/sql/func_mysql_repeat.asp) | Repeats a string as many times as specified |
| [**REPLACE**](https://www.w3schools.com/sql/func_mysql_replace.asp)(salary, '0', '') | **Replaces all occurrences of a substring within a string, with a new substring** |
| [REVERSE](https://www.w3schools.com/sql/func_mysql_reverse.asp) | Reverses a string and returns the result |
| **[RIGHT](https://www.w3schools.com/sql/func_mysql_right.asp)(NAME, 3)** | **Extracts a number of characters from a string (starting from right)** |
| [RPAD](https://www.w3schools.com/sql/func_mysql_rpad.asp) | Right-pads a string with another string, to a certain length |
| [RTRIM](https://www.w3schools.com/sql/func_mysql_rtrim.asp) | Removes trailing spaces from a string |
| [SPACE](https://www.w3schools.com/sql/func_mysql_space.asp) | Returns a string of the specified number of space characters |
| [STRCMP](https://www.w3schools.com/sql/func_mysql_strcmp.asp) | Compares two strings |
| [SUBSTR](https://www.w3schools.com/sql/func_mysql_substr.asp) | Extracts a substring from a string (starting at any position) |
| [SUBSTRING](https://www.w3schools.com/sql/func_mysql_substring.asp) | Extracts a substring from a string (starting at any position) |
| [SUBSTRING_INDEX](https://www.w3schools.com/sql/func_mysql_substring_index.asp) | Returns a substring of a string before a specified number of delimiter occurs |
| [TRIM](https://www.w3schools.com/sql/func_mysql_trim.asp) | Removes leading and trailing spaces from a string |
| [UCASE](https://www.w3schools.com/sql/func_mysql_ucase.asp) | Converts a string to upper-case |
| [UPPER](https://www.w3schools.com/sql/func_mysql_upper.asp) | Converts a string to upper-case |

## MySQL Numeric Functions

| **Function** | **Description** |
|---|---|
| ABS | Returns the absolute value of a number |
| ACOS | Returns the arc cosine of a number |
| ASIN | Returns the arc sine of a number |
| ATAN | Returns the arc tangent of one or two numbers |
| ATAN2 | Returns the arc tangent of two numbers |
| AVG | Returns the average value of an expression |
| CEIL | Returns the smallest integer value that is `>`= to a number |
| CEILING | Returns the smallest integer value that is `>`= to a number |
| COS | Returns the cosine of a number |
| COT | Returns the cotangent of a number |
| COUNT | Returns the number of records returned by a select query. For MyISAM the total row count is stored for each table so `SELECT COUNT(*) FROM yourtable` is an operation `O(1)`. It just needs to read this value. For InnoDB the total row count is not stored so a full scan is required. This is an O(n) operation. InnoDBdoes not keep an internal count of rows in a table. (In practice, this would be somewhat complicated due to multi-versioning.) To process a `SELECT COUNT(*) FROM tstatement`, InnoDB must scan an index of the table, which takes some time if the index is not entirely in the buffer pool. If your table does not change often, using the MySQL query cache is a good solution. To get a fast count, you have to use a counter table you create yourself and let your application update it according to the inserts and deletes it does. `SHOW TABLE STATUS` also can be used if an approximate row count is sufficient. https://stackoverflow.com/questions/5257973/mysql-complexity-of-select-count-from-mytable |
| DEGREES | Converts a value in radians to degrees |
| DIV | Used for integer division |
| EXP | Returns e raised to the power of a specified number |
| FLOOR | Returns the largest integer value that is less than equal to a number |
| GREATEST | Returns the greatest value of the list of arguments |
| LEAST | Returns the smallest value of the list of arguments |
| LN | Returns the natural logarithm of a number |
| LOG | Returns the natural logarithm of a number, or the logarithm of a number to a specified base |
| LOG10 | Returns the natural logarithm of a number to base 10 |
| LOG2 | Returns the natural logarithm of a number to base 2 |
| MAX | Returns the maximum value in a set of values |
| MIN | Returns the minimum value in a set of values |
| MOD | Returns the remainder of a number divided by another number |
| PI | Returns the value of PI |
| POW | Returns the value of a number raised to the power of another number |
| POWER | Returns the value of a number raised to the power of another number |
| RADIANS | Converts a degree value into radians |
| RAND | Returns a random number |
| ROUND | Rounds a number to a specified number of decimal places |
| SIGN | Returns the sign of a number |
| SIN | Returns the sine of a number |
| SQRT | Returns the square root of a number |
| SUM | Calculates the sum of a set of values |
| TAN | Returns the tangent of a number |
| TRUNCATE | Truncates a number to the specified number of decimal places |

## Median

`select round(s.lat_n,4) from station s where (select round(count(s.id)/2)-1 from station) = (select count(s1.id) from station s1 where s1.lat_n > s.lat_n);`

## MySQL Date Functions

| **Function** | **Description** |
|---|---|
| [ADDDATE](https://www.w3schools.com/sql/func_mysql_adddate.asp) | Adds a time/date interval to a date and then returns the date |
| [ADDTIME](https://www.w3schools.com/sql/func_mysql_addtime.asp) | Adds a time interval to a time/datetime and then returns the time/datetime |
| [CURDATE](https://www.w3schools.com/sql/func_mysql_curdate.asp) | Returns the current date |
| [CURRENT_DATE](https://www.w3schools.com/sql/func_mysql_current_date.asp) | Returns the current date |
| [CURRENT_TIME](https://www.w3schools.com/sql/func_mysql_current_time.asp) | Returns the current time |
| [CURRENT_TIMESTAMP](https://www.w3schools.com/sql/func_mysql_current_timestamp.asp) | Returns the current date and time |
| [CURTIME](https://www.w3schools.com/sql/func_mysql_curtime.asp) | Returns the current time |
| [DATE](https://www.w3schools.com/sql/func_mysql_date.asp) | Extracts the date part from a datetime expression |
| [DATEDIFF](https://www.w3schools.com/sql/func_mysql_datediff.asp) | Returns the number of days between two date values |
| [DATE_ADD](https://www.w3schools.com/sql/func_mysql_date_add.asp) | Adds a time/date interval to a date and then returns the date |
| [DATE_FORMAT](https://www.w3schools.com/sql/func_mysql_date_format.asp) | Formats a date |
| [DATE_SUB](https://www.w3schools.com/sql/func_mysql_date_sub.asp) | Subtracts a time/date interval from a date and then returns the date |
| [DAY](https://www.w3schools.com/sql/func_mysql_day.asp) | Returns the day of the month for a given date |
| [DAYNAME](https://www.w3schools.com/sql/func_mysql_dayname.asp) | Returns the weekday name for a given date |
| [DAYOFMONTH](https://www.w3schools.com/sql/func_mysql_dayofmonth.asp) | Returns the day of the month for a given date |
| [DAYOFWEEK](https://www.w3schools.com/sql/func_mysql_dayofweek.asp) | Returns the weekday index for a given date |
| [DAYOFYEAR](https://www.w3schools.com/sql/func_mysql_dayofyear.asp) | Returns the day of the year for a given date |
| [EXTRACT](https://www.w3schools.com/sql/func_mysql_extract.asp) | Extracts a part from a given date |
| [FROM_DAYS](https://www.w3schools.com/sql/func_mysql_from_days.asp) | Returns a date from a numeric datevalue |
| [HOUR](https://www.w3schools.com/sql/func_mysql_hour.asp) | Returns the hour part for a given date |
| [LAST_DAY](https://www.w3schools.com/sql/func_mysql_last_day.asp) | Extracts the last day of the month for a given date |
| [LOCALTIME](https://www.w3schools.com/sql/func_mysql_localtime.asp) | Returns the current date and time |
| [LOCALTIMESTAMP](https://www.w3schools.com/sql/func_mysql_localtimestamp.asp) | Returns the current date and time |
| [MAKEDATE](https://www.w3schools.com/sql/func_mysql_makedate.asp) | Creates and returns a date based on a year and a number of days value |
| [MAKETIME](https://www.w3schools.com/sql/func_mysql_maketime.asp) | Creates and returns a time based on an hour, minute, and second value |
| [MICROSECOND](https://www.w3schools.com/sql/func_mysql_microsecond.asp) | Returns the microsecond part of a time/datetime |
| [MINUTE](https://www.w3schools.com/sql/func_mysql_minute.asp) | Returns the minute part of a time/datetime |
| [MONTH](https://www.w3schools.com/sql/func_mysql_month.asp) | Returns the month part for a given date |
| [MONTHNAME](https://www.w3schools.com/sql/func_mysql_monthname.asp) | Returns the name of the month for a given date |
| [NOW](https://www.w3schools.com/sql/func_mysql_now.asp) | Returns the current date and time |
| [PERIOD_ADD](https://www.w3schools.com/sql/func_mysql_period_add.asp) | Adds a specified number of months to a period |
| [PERIOD_DIFF](https://www.w3schools.com/sql/func_mysql_period_diff.asp) | Returns the difference between two periods |
| [QUARTER](https://www.w3schools.com/sql/func_mysql_quarter.asp) | Returns the quarter of the year for a given date value |
| [SECOND](https://www.w3schools.com/sql/func_mysql_second.asp) | Returns the seconds part of a time/datetime |
| [SEC_TO_TIME](https://www.w3schools.com/sql/func_mysql_sec_to_time.asp) | Returns a time value based on the specified seconds |
| [STR_TO_DATE](https://www.w3schools.com/sql/func_mysql_str_to_date.asp) | Returns a date based on a string and a format |
| [SUBDATE](https://www.w3schools.com/sql/func_mysql_subdate.asp) | Subtracts a time/date interval from a date and then returns the date |
| [SUBTIME](https://www.w3schools.com/sql/func_mysql_subtime.asp) | Subtracts a time interval from a datetime and then returns the time/datetime |
| [SYSDATE](https://www.w3schools.com/sql/func_mysql_sysdate.asp) | Returns the current date and time |
| [TIME](https://www.w3schools.com/sql/func_mysql_time.asp) | Extracts the time part from a given time/datetime |
| [TIME_FORMAT](https://www.w3schools.com/sql/func_mysql_time_format.asp) | Formats a time by a specified format |
| [TIME_TO_SEC](https://www.w3schools.com/sql/func_mysql_time_to_sec.asp) | Converts a time value into seconds |
| [TIMEDIFF](https://www.w3schools.com/sql/func_mysql_timediff.asp) | Returns the difference between two time/datetime expressions |
| [TIMESTAMP](https://www.w3schools.com/sql/func_mysql_timestamp.asp) | Returns a datetime value based on a date or datetime value |
| [TO_DAYS](https://www.w3schools.com/sql/func_mysql_to_days.asp) | Returns the number of days between a date and date "0000-00-00" |
| [WEEK](https://www.w3schools.com/sql/func_mysql_week.asp) | Returns the week number for a given date |
| [WEEKDAY](https://www.w3schools.com/sql/func_mysql_weekday.asp) | Returns the weekday number for a given date |
| [WEEKOFYEAR](https://www.w3schools.com/sql/func_mysql_weekofyear.asp) | Returns the week number for a given date |
| [YEAR](https://www.w3schools.com/sql/func_mysql_year.asp) | Returns the year part for a given date |
| [YEARWEEK](https://www.w3schools.com/sql/func_mysql_yearweek.asp) | Returns the year and week number for a given date |

## MySQL Advanced Functions

| **Function** | **Description** |
|---|---|
| BIN | Returns a binary representation of a number |
| BINARY | Converts a value to a binary string |
| CASE | Goes through conditions and return a value when the first condition is met |
| CAST | Converts a value (of any type) into a specified datatype |
| COALESCE | Returns the first non-null value in a list |
| CONNECTION_ID | Returns the unique connection ID for the current connection |
| CONV | Converts a number from one numeric base system to another |
| CONVERT | Converts a value into the specified datatype or character set |
| CURRENT_USER | Returns the user name and host name for the MySQL account that the server used to authenticate the current client |
| DATABASE | Returns the name of the current database |
| IF | Returns a value if a condition is TRUE, or another value if a condition is FALSE |
| IFNULL | Return a specified value if the expression is NULL, otherwise return the expression |
| ISNULL | Returns 1 or 0 depending on whether an expression is NULL. To search for column values that areNULL, you cannot use an expr = NULL test. |
| LAST_INSERT_ID | Returns the AUTO_INCREMENT id of the last row that has been inserted or updated in a table |
| NULLIF | Compares two expressions and returns NULL if they are equal. Otherwise, the first expression is returned |
| SESSION_USER | Returns the current MySQL user name and host name |
| SYSTEM_USER | Returns the current MySQL user name and host name |
| USER | Returns the current MySQL user name and host name |
| VERSION | Returns the current version of the MySQL database |

https://database.guide/4-ways-to-replace-null-with-a-different-value-in-mysql

- The IFNULL() function
- The COALESCE() function
- The IF() function combined with theIS NULL (or IS NOT NULL) operator
- The CASE expression combined with theIS NULL (or IS NOT NULL) operator

## Aggregate Functions

| **Name** | **Description** |
|---|---|
| [AVG()](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_avg) | Return the average value of the argument |
| [BIT_AND()](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_bit-and) | Return bitwise AND |
| [BIT_OR()](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_bit-or) | Return bitwise OR |
| [BIT_XOR()](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_bit-xor) | Return bitwise XOR |
| [COUNT()](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_count) | Return a count of the number of rows returned |
| [COUNT(DISTINCT)](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_count-distinct) | Return the count of a number of different values |
| [GROUP_CONCAT()](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_group-concat) | Return a concatenated string |
| [JSON_ARRAYAGG()](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_json-arrayagg) | Return result set as a single JSON array |
| [JSON_OBJECTAGG()](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_json-objectagg) | Return result set as a single JSON object |
| [MAX()](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_max) | Return the maximum value |
| [MIN()](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_min) | Return the minimum value |
| [STD()](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_std) | Return the population standard deviation |
| [STDDEV()](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_stddev) | Return the population standard deviation |
| [STDDEV_POP()](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_stddev-pop) | Return the population standard deviation |
| [STDDEV_SAMP()](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_stddev-samp) | Return the sample standard deviation |
| [SUM()](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_sum) | Return the sum |
| [VAR_POP()](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_var-pop) | Return the population standard variance |
| [VAR_SAMP()](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_var-samp) | Return the sample variance |
| [VARIANCE()](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html#function_variance) | Return the population standard variance |

## Others

- `NVL(e1, e2)` - The `NVL()` function accepts two arguments. If `e1` evaluates to null, then `NVL()` function returns `e2`. If `e1` evaluates to non-null, the `NVL()` function returns `e1`.  [Oracle NVL() Function By Practical Examples](https://www.oracletutorial.com/oracle-comparison-functions/oracle-nvl/)
- The `COALESCE()` function evaluates its argument in order and stops evaluation when it can determine the result i.e., when it can find the first non-NULL argument. This feature is known as short-circuit evaluation. In contrast, the `NVL()` function evaluates all of its arguments to determine the result.
