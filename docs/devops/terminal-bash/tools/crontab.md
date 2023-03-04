# Crontab

The software utility **cron** is a time-based [job scheduler](https://en.wikipedia.org/wiki/Job_scheduler) in [Unix-like](https://en.wikipedia.org/wiki/Unix-like) computer [operating systems](https://en.wikipedia.org/wiki/Operating_system). People who set up and maintain software environments use cron to schedule jobs (commands or [shell scripts](https://en.wikipedia.org/wiki/Shell_script)) to run periodically at fixed times, dates, or intervals. It typically automates system maintenance or administration - though its general-purpose nature makes it useful for things like downloading files from the [Internet](https://en.wikipedia.org/wiki/Internet) and downloading [email](https://en.wikipedia.org/wiki/Email) at regular intervals. The origin of the name *cron* is from the Greek word for time, χρόνος ([chronos](https://en.wikipedia.org/wiki/Chronos)).

*cron* is most suitable for scheduling repetitive tasks. Scheduling one-time tasks is often more easily accomplished using the associated [*at*](https://en.wikipedia.org/wiki/At_(Unix)) utility.

`crontab [**-u *user***] [**-l** | **-r** | **-e**] [**-i**] [**-s]`

`export EDITOR=vi;` to specify a editor to open crontab file.

Edit crontab file, or create one if it doesn't already exist. (/Var/spool/cron) - `crontab -e`

Edit system wide crontab file - `sudo crontab -e`

crontab list of cronjobs , display crontab file contents - `crontab -l`

Remove your crontab file - `crontab -r`

Display the last time you edited your crontab file. (This option is only available on a few systems.) - `crontab -v`

```bash
* ** ** command to be executed
- - - - -
| | || |
| | || +----- day of week (0 - 6) (Sunday=0)
| | |+------- month (1 - 12)
| | +--------- day of month (1 - 31)
| +----------- hour (0 - 23)
+------------- min (0 - 59)

* means every(min/hour/day of month/month/day of week) (means all possible units)
```

| min    | hour | day/month | month  | day/week | Execution time                                           |
|--------|--------|-----------|--------|----------|-----------------------------|
| 30     | 0    | 1         | 1,6,12 | *       | --- 00:30 Hrs on 1st of Jan, June & Dec.                |
| 0      | 20   | *        | 10     | 1-5      | --8.00 PM every weekday (Mon-Fri) only in Oct.           |
| 0      | 0    | 1,10,15   | *     | *       | --- midnight on 1st ,10th & 15th of month                |
| 5,10   | 0    | 10        | *     | 1        | --- At 12.05,12.10 every Monday & on 10th of every month |
| *     | *   | *        | *     | *       | -- Every minute of every hour throughout the year       |
| */5   | *   | *        | *     | *       | -- Every 5 minutes                                      |
| 0-10/2 | *   | *        | *     | *       | -- Every 2 minutes in the first 10 minutes              |
| 0      | *   | *        | *     | *       | -- Every 1 hour                                         |
| 0      | */2 | *        | *     | *       | -- Every 2 hours                                        |
| 10     | 10   | *        | *     | *       | -- At 10:10 AM everyday                                 |

## Crontab Keywords

| **Keyword** | **Equivalent**  |
|-------------|-----------------|
| @yearly    | 0 0 1 1 *      |
| @daily     | 0 0 ** *    |
| @hourly    | 0 ****   |
| @reboot    | Run at startup. |

## Examples

```bash
@daily sudo ntpdate ntp.ubuntu.com

#cron for publishing schedules
15 0 * * * /usr/bin/python /home/ubuntu/sources/zenalytix/manage.py publish_yesterday_schedules

#cron to create client list for controller updates
0 1 * * * /usr/bin/python /home/ubuntu/sources/zenalytix/manage.py create_client_list

#cron for disabling alerts on public holidays
15 1 * * * /usr/bin/python /home/ubuntu/sources/zenalytix/manage.py disable_alerts

#cron for checking if some of the schedules have expired and will notifiy account managers.
15 1 * * * /usr/bin/python /home/ubuntu/sources/zenalytix/manage.py check_schedule_expiry

#cron for testing daily emails
05 00 * * * /usr/bin/python /home/ubuntu/sources/zenalytix/manage.py mail_report_new --logs_to="priyank.trivedi@zenatix.com"

#cron for daily emails
15 09 * * * /usr/bin/python /home/ubuntu/sources/zenalytix/manage.py mail_report_new --logs_to="priyank.trivedi@zenatix.com"

#cron for sending issues
10 06 * * * /usr/bin/python /home/ubuntu/sources/zenalytix/manage.py report_issues --create_logs=True --run_issues=True --exclude_$
10 10 * * * /usr/bin/python /home/ubuntu/sources/zenalytix/manage.py report_issues --create_logs=True --run_issues=True --run_spec

#cron for refresh_tokens every hour
0 * * * * /usr/bin/python /home/ubntu/sources/zenalytix/manage.py refresh_tokens

# Never run a cron set date to 31'st Feb
00 00 31 2 *

At minute 15 past every 2nd hour from 1 through 23
15 1-23/2 * * *

# Others
*/20 2-3/30 * * *
```

## Setting editor for crontab

```bash
export EDITOR=vim
crontab -e (edit mode)
```

## How to Disable/Redirect the Crontab Mail Output using MAIL keyword?

By default crontab sends the job output to the user who scheduled the job. If you want to redirect the output to a specific user, add or update the MAIL variable in the crontab as shown below.

```bash
ramesh@dev-db$ crontab -l
MAIL="ramesh"

@yearly /home/ramesh/annual-maintenance
*/10* ** * /home/ramesh/check-disk-space
```

[Note: Crontab of the current logged in user with MAIL variable]

If you wanted the mail not to be sent to anywhere, i.e to stop the crontab output to be emailed, add or update the MAIL variable in the crontab as shown below.

MAIL=""

## Redirect crontab output to log file

```bash
* ** ** myjob.sh >> /var/log/myjob.log 2>&1

*/2* ** * /bin/bash -c "source $HOME/.profile; docker exec example-analytics bash -c 'cd ../ && date'" >> /var/log/cron/test-/bin/date +%d-%m-%y-%H-%M-%S.log 2>&1
```

## Installing Crontab From a Cron File

Instead of directly editing the crontab file, you can also add all the entries to a cron-file first. Once you have all thoese entries in the file, you can upload or install them to the cron as shown below.

```bash
ramesh@dev-db$ crontab -l
no crontab for ramesh

$ cat cron-file.txt
@yearly /home/ramesh/annual-maintenance
*/10* ** * /home/ramesh/check-disk-space

ramesh@dev-db$ **crontab cron-file.txt**

ramesh@dev-db$ crontab -l
@yearly /home/ramesh/annual-maintenance
*/10* ** * /home/ramesh/check-disk-space
```

## Cronv

Visualize your cron schedules in crontab

<https://github.com/takumakanari/cronv>

<https://crontab.guru>
