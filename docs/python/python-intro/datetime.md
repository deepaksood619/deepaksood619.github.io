# DateTime

## Concepts

1. Tick
2. TimeTuple

## Modules

1. Time
2. Datetime
3. Pytz
4. Dateutil
5. Calendar

### Time

```python
import time

time.time()
# Gives current time (in number of ticks since 12:00am, January 1, 1970)
```

#### Time a running process

```python
 import time

 start_time = time.time()
 end_time = time.time()
 print("time taken = %4.4f seconds" % (end_time-start_time))

 start = time.perf_counter()
 elapsed = time.perf_counter()- start
    print(f"finished in {elapsed:.02f}s")
```

#### Python Timers (To monitor performance)

- [monotonic()](https://docs.python.org/3/library/time.html#time.monotonic)
- [perf_counter()](https://docs.python.org/3/library/time.html#time.perf_counter)
- [process_time()](https://docs.python.org/3/library/time.html#time.process_time)
- [time()](https://docs.python.org/3/library/time.html#time.time)
- thread_time()

https://realpython.com/python-timer

### DateTime

There are two kinds of date and time objects: "naive" and "aware".

- An aware object has sufficient knowledge of applicable algorithmic and political time adjustments, such as time zone and daylight saving time information, to locate itself relative to other aware objects. An aware object is used to represent a specific moment in time that is not open to interpretation

- A naive object does not contain enough information to unambiguously locate itself relative to other date/time objects. Whether a naive object represents Coordinated Universal Time (UTC), local time, or time in some other timezone is purely up to the program, just like it is up to the program whether a particular number represents metres, miles, or mass. Naive objects are easy to understand and to work with, at the cost of ignoring some aspects of reality.

- Class datetime.date
- Class datetime.time
- Class datetime.datetime
- Class datetime.timedelta
- Class datetime.tzinfo
- Class datetime.timezone

Objects of these types are immutable.

Objects of the date type are always naïve

## 2.1. Date Objects

```python
today = date.today()
yesterday = date.today() - timedelta(-1)

# Object calling
datetime.datetime.now().date() # gives today's date
datetime.datetime.now().replace(hour=0, minute=0, second=0, microsecond=0)
datetime.strptime('2020-02-01', '%Y-%m-%d')

cur_date = datetime.today().strftime("%Y-%m-%d %H:%M:%S")
```

## 2.2. Date in ISOFormat

```python
from datetime import datetime

print(datetime.now().isoformat())

'2018-03-07T10:09:40.227229'
```

## strftime format codes

| **Directive** | **Meaning** | **Example** |
|---|---|---|
| %a | Weekday as locale’s abbreviated name. | Sun, Mon, …, Sat (en_US); So, Mo, …, Sa (de_DE) |
| %A | Weekday as locale’s full name. | Sunday, Monday, …, Saturday (en_US); Sonntag, Montag, …, Samstag (de_DE) |
| %w | Weekday as a decimal number, where 0 is Sunday and 6 is Saturday. | 0, 1, …, 6 |
| %d | Day of the month as a zero-padded decimal number. | 01, 02, …, 31 |
| %b | Month as locale’s abbreviated name. | Jan, Feb, …, Dec (en_US); Jan, Feb, …, Dez (de_DE) |
| %B | Month as locale’s full name. | January, February, …, December (en_US); Januar, Februar, …, Dezember (de_DE) |
| %m | Month as a zero-padded decimal number. | 01, 02, …, 12 |
| %y | Year without century as a zero-padded decimal number. | 00, 01, …, 99 |
| %Y | Year with century as a decimal number. | 0001, 0002, …, 2013, 2014, …, 9998, 9999 |
| %H | Hour (24-hour clock) as a zero-padded decimal number. | 00, 01, …, 23 |
| %I | Hour (12-hour clock) as a zero-padded decimal number. | 01, 02, …, 12 |
| %p | Locale’s equivalent of either AM or PM. | AM, PM (en_US); am, pm (de_DE) |
| %M | Minute as a zero-padded decimal number. | 00, 01, …, 59 |
| %S | Second as a zero-padded decimal number. | 00, 01, …, 59 |
| %f | Microsecond as a decimal number, zero-padded on the left. | 000000, 000001, …, 999999 |
| %z | UTC offset in the form±HHMM [SS [.ffffff]](empty string if the object is naive). | (empty), +0000, -0400, +1030, +063415, -030712.345216 |
| %Z | Time zone name (empty string if the object is naive). | (empty), UTC, EST, CST |
| %j | Day of the year as a zero-padded decimal number. | 001, 002, …, 366 |
| %U | Week number of the year (Sunday as the first day of the week) as a zero padded decimal number. All days in a new year preceding the first Sunday are considered to be in week 0. | 00, 01, …, 53 |
| %W | Week number of the year (Monday as the first day of the week) as a decimal number. All days in a new year preceding the first Monday are considered to be in week 0. | 00, 01, …, 53 |
| %c | Locale’s appropriate date and time representation. | Tue Aug 16 21:30:00 1988 (en_US); Di 16 Aug 21:30:00 1988 (de_DE) |
| %x | Locale’s appropriate date representation. | 08/16/88 (None); 08/16/1988 (en_US); 16.08.1988 (de_DE) |
| %X | Locale’s appropriate time representation. | 21:30:00 (en_US); 21:30:00 (de_DE) |
| %% | A literal'%'character. | % |

Several additional directives not required by the C89 standard are included for convenience. These parameters all correspond to ISO 8601 date values.

| **Directive** | **Meaning**                                                                                                       | **Example**                                  |
|----------|-------------------------------------------|-------------------|
| %G            | ISO 8601 year with century representing the year that contains the greater part of the ISO week (%V).             | 0001, 0002, ..., 2013, 2014, ..., 9998, 9999 |
| %u            | ISO 8601 weekday as a decimal number where 1 is Monday.                                                           | 1, 2, ..., 7                                 |
| %V            | ISO 8601 week as a decimal number with Monday as the first day of the week. Week 01 is the week containing Jan 4. | 01, 02, ..., 53                              |

https://docs.python.org/3/library/datetime.html
