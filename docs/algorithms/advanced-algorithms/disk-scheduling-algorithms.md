# Disk Scheduling Algorithms

## Elevator algorithm / SCAN

The **elevator algorithm** (also **SCAN**) is a [disk](https://en.wikipedia.org/wiki/Hard_disk)-[scheduling](https://en.wikipedia.org/wiki/I/O_scheduling) algorithm to determine the motion of the disk's arm and head in servicing read and write requests.

This algorithm is named after the behavior of a building [elevator](https://en.wikipedia.org/wiki/Elevator), where the elevator continues to travel in its current direction (up or down) until empty, stopping only to let individuals off or to pick up new individuals heading in the same direction.

From an implementation perspective, the [drive](https://en.wikipedia.org/wiki/Disk_drive) maintains a [buffer](https://en.wikipedia.org/wiki/Data_buffer) of pending read/write requests, along with the associated [cylinder](https://en.wikipedia.org/wiki/Cylinder_(disk_drive)) number of the request. (Lower cylinder numbers generally indicate that the cylinder is closer to the spindle, and higher numbers indicate the cylinder is farther away.)

When a new request arrives while the drive is idle, the initial arm/head movement will be in the direction of the cylinder where the data is stored, eitherinorout. As additional requests arrive, requests are serviced only in the current direction of arm movement until the arm reaches the edge of the disk. When this happens, the direction of the arm reverses, and the requests that were remaining in the opposite direction are serviced, and so on.

#### Variations

One variation of this method ensures all requests are serviced in only one direction, that is, once the head has arrived at the outer edge of the disk, it returns to the beginning and services the new requests in this one direction only (or vice versa). This is known as the "Circular Elevator Algorithm" or C-SCAN. Although the time of the return seek is wasted, this results in more equal performance for all head positions, as the expected distance from the head is always half the maximum distance, unlike in the standard elevator algorithm where cylinders in the middle will be serviced as much as twice as often as the innermost or outermost cylinders.

Other variations include:

- [FSCAN](https://en.wikipedia.org/wiki/FSCAN)
- [LOOK](https://en.wikipedia.org/wiki/LOOK_algorithm)(andC-LOOK)
- [N-Step-SCAN](https://en.wikipedia.org/wiki/N-Step-SCAN)

<https://en.wikipedia.org/wiki/Elevator_algorithm>

### FSCAN

FScan is a disk [scheduling](https://en.wikipedia.org/wiki/I/O_scheduling) algorithm to determine the motion of the disk's arm and head in servicing read and write requests. It uses two sub-queues. During the scan, all of the requests are in the first queue and all new requests are put into the second [queue](https://en.wikipedia.org/wiki/Queue_(data_structure)). Thus, service of new requests is deferred until all of the old requests have been processed. When the scan ends, the arm is taken to the first queue entries and is started all over again

#### Analysis

FSCAN along with [N-Step-SCAN](https://en.wikipedia.org/wiki/N-Step-SCAN) prevents "arm stickiness" unlike [SSTF](https://en.wikipedia.org/wiki/Shortest_seek_first), [SCAN](https://en.wikipedia.org/wiki/Elevator_algorithm), and [C-SCAN](https://en.wikipedia.org/wiki/C-SCAN). Arm stickiness in those other algorithms occurs when a stream of requests for the same track causes the disk arm to stop progressing at that track, preferring to satisfy the no-seek requests for the track it is on. Because FSCAN separates requests into two queues, with new requests going into a waiting queue, the arm continues its sweep to the outer track and is therefore not "sticky." There is an obvious trade-off in that the requests in the waiting queue must wait longer to be fulfilled, but in exchange FSCAN is more fair to all requests.

<https://en.wikipedia.org/wiki/FSCAN>

### LOOK

LOOK is a disk [scheduling](https://en.wikipedia.org/wiki/I/O_scheduling) algorithm used to determine the order in which new disk read and write requests are processed.

TheLOOKalgorithm is the same as theSCANalgorithm in that it also honors requests on both sweep direction of the disk head, however, this algorithm "Looks" ahead to see if there are any requests pending in the direction of head movement. If no requests are pending in the direction of head movement, then the disk head traversal will be reversed to the opposite direction and requests on the other direction can be served. In LOOK scheduling, the arm goes only as far as final requests in each direction and then reverses direction without going all the way to the end. Consider an example, Given a disk with 200 cylinders (0-199), suppose we have 8 pending requests: 98, 183, 37, 122, 14, 124, 65, 67 and that the read/write head is currently at cylinder 53. In order to complete these requests, the arm will move in the increasing order first and then will move in decreasing order after reaching the end. So, the order in which it will execute is 65, 67, 98, 122, 124, 183, 37, 14.

LOOK behaves almost identically to [Shortest seek time first](https://en.wikipedia.org/wiki/Shortest_seek_time_first)(SSTF), but avoids the starvation problem of SSTF. This is because LOOK is biased against the area recently traversed, and heavily favors tracks clustered at the outermost and innermost edges of the platter. LOOK is also biased towards more recently arriving jobs (on average).

## Variants

### C-LOOK(Circular LOOK)

One variant of LOOK is C-LOOK. It is an effort to remove the bias in LOOK for track clusters at the edges of the platter. C-LOOK basically only scans in one direction. Either you sweep from the inside out, or the outside in. When you reach the end, you just swing the head all the way back to the beginning. This actually takes advantage of the fact that many drives can move the read/write head at high speeds if it's moving across a large number of tracks (e.g. the seek time from the last track to track 0 is smaller than one would expect and usually considerably less than the time it would take to seek there one track at a time).The huge jump from one end request to the other is not considered as a head movement as the cylinders are treated as a circular list.

### N-LOOK and F-LOOK

N and F LOOK were designed to offset LOOK's bias towards recent jobs. Both algorithms partition the request queue into smaller sub queues and process the sub queues in order (oldest first). N-LOOK is so-called because the request queue is divided intoNsub queues. F-LOOK is a simplification where there are only 2 queues, but they are used in a double-buffered fashion. While F-LOOK is processing one queue, all new requests go into the other one. To explain these algorithms we're going to use the example of a disk with 200 tracks, and the read/write head starts at track 100. The request queue, in order, contains requests for tracks: 55, 58, 18, 90, 160, 38, we assume that the request queue is split into two, with the oldest one containing the requests for tracks: 55, 58, 18, 90. In this instance, N-LOOK and F-LOOK behave the same. Also notice, that in this configuration, it doesn't matter which direction the head was moving in, all requested tracks are less than 100 so it will only move in the direction of decreasing tracks.

Even through the average number of tracks traversed is the same as LOOK in the worst case, N and F LOOK are in some sense, more fair than plain old LOOK. The sub queue system caps the maximum latency a process can expect between a request and it being serviced (unlike SSTF that can starve processes for arbitrary lengths of time).

### S-LOOK

The Shortest LOOK (S-LOOK) algorithm is an extension of the LOOK algorithm to handle the cases where the disk head is located between the far-end requests. The algorithm is designed to make a decision of which direction should be served first instead of only continuing to seek in the same direction before the new requests have arrived. Since the seek time is directly proportional to the seek distance, our goal is to minimize the seek distance, and hence, reduce the seek time.

## Performance

LOOK has slightly better average seek times than SCAN. C-LOOK has a slightly lower variance in seek time than LOOK since the worst case seek time is nearly cut in half.

<https://en.wikipedia.org/wiki/LOOK_algorithm>

### Shortest seek first

Disk scheduling algorithm to reduce seek time
