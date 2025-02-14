# Common

CAPTCHA - Completely Automated Public Turing test to tell Computers and Humans Apart

API - Application Programming Interface - A set of subroutine definitions, protocols, and tools for building application software

AJAX - Asynchronous JavaScript and XML - Web applications can send and retrieve data from a server asynchronously without interfering with the display and behavior of the existing page.

- SCM - Source Control Management
- FTU - First Time Use
- SHA - Secure Hash
- JSX - Javascript XML

### Accessibility ARIA - Accessible Rich Internet Applications

Defines different front-end methodologies that make web content accessible for disabled people who access the web with Assistive Technologies (AT), such as screen readers.

### BOM - Browser Object Model

A browser specific convention referring to all the objects exposed by the web browser. Unlike DOM, there is no standard for implementation and no strict definition, so browser vendors are free to implement the BOM in any way they wish.

### CTA - Call-To-Action

A CTA is a message directed to users or prospective customers to take an immediate action.

### DOM - Document Object Model

An API for HTML and XML documents, used by browsers to render these documents. The DOM specifies the logical structure of a document, and represents it as a node tree in which nodes are objects that represent different parts of the document.

### MIME - Multipurpose Internet Mail Extensions

An Internet standard that extends the format of email to support:

- Text in character sets other than ASCII
- Non-text attachments: audio, video, images, application programs, etc.
- Message bodies with multiple parts
- Header information in non-ASCII character sets

## ORM - Object-Relational Mapping

A technique that lets us query and manipulate data from a database using an object-oriented paradigm.

## SOAP - Simple Object Access Protocol

A messaging protocol specification for exchanging structured information in the implementation of web services in computer networks. SOAP allows processes running on disparate operating systems (such as Windows and Linux) to communicate using XML. Since web protocols like HTTP are installed and running on all operating systems, SOAP allows clients to invoke web services and receive responses independent of language and platforms.

## mebiByte / kibibyte / gibibyte

A mebibyte is a unit of data storage that equals 2 to the 20th power, or 1,048,576 bytes.

While a [megabyte](https://techterms.com/definition/megabyte) can be estimated as 10^6 or 1,000,000 bytes, a mebibyte is exactly 1,048,576 bytes. This is to avoid the ambiguity associated with the size of megabytes. A mebibyte is 1,024 [kibibytes](https://techterms.com/definition/kibibyte) and precedes the [gibibyte](https://techterms.com/definition/gibibyte) unit of measurement.

GB vs GiB: So What is the Difference? At its most basic level, one GB is defined as 1000³ (1,000,000,000) bytes and one GiB as 1024³ (1,073,741,824) bytes. That means **one GB equals 0.93 GiB**.

## YK38 Problem

The Year 2038 problem(also called Y2038, Epochalypse, Y2k38, or Unix Y2K) relates to representing time in many digital systems as the number of seconds passed since 00:00:00 [UTC](https://en.wikipedia.org/wiki/Coordinated_Universal_Time) on [1 January 1970](https://en.wikipedia.org/wiki/Unix_time) and storing it as a [signed 32-bit integer](https://en.wikipedia.org/wiki/Signed_number_representations). Such implementations cannot encode times after 03:14:07 UTC on 19 January 2038. Similar to the [Y2K problem](https://en.wikipedia.org/wiki/Year_2000_problem), the Year 2038 problem is caused by insufficient capacity used to represent time.

## Epoch Time / Unix Time

Unix time(also known asEpoch time, POSIX time, seconds since the Epoch, orUNIX Epoch time) is a system for describing a [point in time](https://en.wikipedia.org/wiki/Timestamp). It is the number of [seconds](https://en.wikipedia.org/wiki/Second) that have elapsed since theUnix epoch, minus [leap seconds](https://en.wikipedia.org/wiki/Leap_second); the Unix epoch is 00:00:00 [UTC](https://en.wikipedia.org/wiki/Coordinated_Universal_Time) on 1 January 1970 (an arbitrary date); leap seconds are ignored, with a leap second having the same Unix time as the second before it, and every day is treated as if it contains exactly86400seconds.Due to this treatment Unix time is not a true representation of UTC.

It should also be pointed out that this point in time technically does not change no matter where you are located on the globe. This is very useful to computer systems for tracking and sorting dated information in dynamic and distributed applications both online and client side. The reason why Unix timestamps are used by many webmasters is because they can represent all time zones at once.

https://en.wikipedia.org/wiki/Unix_time

https://www.epochconverter.com

https://everytimezone.com

## Time - ISO 8601

ISO 8601 Data elements and interchange formats -- Information interchange -- Representation of dates and times is an [international standard](https://en.wikipedia.org/wiki/International_standard) covering the exchange of [date](https://en.wikipedia.org/wiki/Calendar_date)- and [time](https://en.wikipedia.org/wiki/Time)-related data. It was issued by the [International Organization for Standardization](https://en.wikipedia.org/wiki/International_Organization_for_Standardization) (ISO) and was first published in 1988. The purpose of this standard is to provide an unambiguous and well-defined method of representing dates and times, so as to avoid misinterpretation of numeric representations of dates and times, particularly when data is transferred between [countries with different conventions](https://en.wikipedia.org/wiki/Date_and_time_notation_by_country) for writing numeric dates and times.

## General Principles

- Date and time values are ordered from the largest to smallest unit of time: year, month (or week), day, hour, minute, second, and fraction of second. The [lexicographical order](https://en.wikipedia.org/wiki/Lexicographical_order) of the representation thus corresponds to chronological order, except for date representations involving negative years or time offset. This allows dates to be naturally [sorted](https://en.wikipedia.org/wiki/Sorting) by, for example, file systems.
- Each date and time value has a fixed number of digits that must be padded with [leading zeros](https://en.wikipedia.org/wiki/Leading_zero).
- Representations can be done in one of two formats-- a basic format with a minimal number of separators or an extended format with separators added to enhance human readability.The standard notes that "The basic format should be avoided in [plain text](https://en.wikipedia.org/wiki/Plain_text)."The separator used between date values (year, month, week, and day) is the [hyphen](https://en.wikipedia.org/wiki/Hyphen), while the [colon](https://en.wikipedia.org/wiki/Colon_(punctuation)) is used as the separator between time values (hours, minutes, and seconds). For example, the 6th day of the 1st month of the year 2009 may be written as"2009-01-06"in the extended format or simply as "20090106" in the basic format without ambiguity.
- For reduced precision, any number of values may be dropped from any of the date and time representations, but in the order from the least to the most significant. For example, "2004-05" is a valid ISO 8601 date, which indicates May (the fifth month) 2004. This format will never represent the 5th day of an unspecified month in 2004, nor will it represent a time-span extending from 2004 into 2005.
- If necessary for a particular application, the standard supports the addition of a [decimal fraction](https://en.wikipedia.org/wiki/Decimal_fractions) to the smallest time value in the representation.

https://en.wikipedia.org/wiki/ISO_8601

## IEC Prefixes

| **Factor** | **Name** | **Symbol** | **Origin**              | **Derivation**  |
|------------|------------|-------------|----------------------|---------------|
| 2^10^      | kibi      | Ki          | kilobinary: (2^10^)^1^  | kilo: (10^3^)^1^ |
| 2^20^      | mebi      | Mi          | megabinary: (2^10^)^2^ | mega: (10^3^)^2^ |
| 2^30^      | gibi      | Gi          | gigabinary: (2^10^)^3^  | giga: (10^3^)^3^ |
| 2^40^      | tebi      | Ti          | terabinary: (2^10^)^4^  | tera: (10^3^)^4^ |
| 2^50^      | pebi      | Pi          | petabinary: (2^10^)^5^  | peta: (10^3^)^5^ |
| 2^60^      | exbi      | Ei          | exabinary: (2^10^)^6^   | exa: (10^3^)^6^  |

https://physics.nist.gov/cuu/Units/binary.html

## shim in computing means application compatibility workaround

## IMP Coding Snippets

Sweep Line Algorithm (Find intersection of two lines) - Using 1d range search - [smarty](http://www.pythonchallenge.com/pc/def/oxygen.html)

Parameterization - https://www.toptal.com/python/python-parameterized-design-patterns

https://slate.com/technology/2019/10/consequential-computer-code-software-history.html

https://medium.com/the-atlantic/the-coming-software-apocalypse-4ffb43f3b288$1

https://github.com/RockstarLang/rockstar

[The Art of Code - Dylan Beattie](https://www.youtube.com/watch?v=6avJHaC3C2U)

[MongoDB Database Skills (Sia Cheap Thrills Parody) - YouTube](https://www.youtube.com/watch?v=0vPt7GI-2kc)

https://blog.codinghorror.com/new-programming-jargon

[To the Moon • Russ Olsen • GOTO 2024 - YouTube](https://www.youtube.com/watch?v=ntmkMLcveC0&ab_channel=GOTOConferences)

## Typosquatting

https://medium.com/@williambengtson/python-typosquatting-for-fun-not-profit-99869579c35d

## Three-way comparison Operator (SpaceShip Operator < = >)

In [computer science](https://en.wikipedia.org/wiki/Computer_science), a three-way comparison takes two values A and B belonging to a type with a [total order](https://en.wikipedia.org/wiki/Total_order) and determines whether A < B, A = B, or A > B in a single operation, in accordance with the mathematical [law of trichotomy](https://en.wikipedia.org/wiki/Trichotomy_(mathematics)).

https://en.wikipedia.org/wiki/Three-way_comparison

## FP64, FP32, FP16, BFloat16, TF32 (Floating Points)

https://medium.com/@moocaholic/fp64-fp32-fp16-bfloat16-tf32-and-other-members-of-the-zoo-a1ca7897d407

## Valid Emails

[Can You Validate These Emails? - YouTube](https://www.youtube.com/watch?v=60BPETbra9U)

## [Zawinski's Law](https://en.wikipedia.org/wiki/Jamie_Zawinski#Principles)

"Every program attempts to expand until it can read mail. Those programs which cannot so expand are replaced by ones which can." (related:[Greenspun's tenth rule](https://en.wikipedia.org/wiki/Greenspun%27s_tenth_rule) - "any sufficiently complicated C or Fortran program contains an ad hoc, informally-specified, bug-ridden, slow implementation of half of Common Lisp.")

## [Moore's Law](https://en.wikipedia.org/wiki/Moore%27s_law)

The observation that the number of transistors in a dense integrated circuit doubles approximately every two years.

### Eroom's Law

Eroom's law is the observation that drug discovery is becoming slower and more expensive over time, despite improvements in technology (such as [high-throughput screening](https://en.wikipedia.org/wiki/High-throughput_screening), [biotechnology](https://en.wikipedia.org/wiki/Biotechnology), [combinatorial chemistry](https://en.wikipedia.org/wiki/Combinatorial_chemistry), and computational [drug design](https://en.wikipedia.org/wiki/Drug_design)), a trend first observed in the 1980s. The cost of developing a new drug roughly doubles every nine years (inflation-adjusted).In order to highlight the contrast with the exponential advancements of other forms of technology (such as [transistors](https://en.wikipedia.org/wiki/Transistor)) over time, the law was deliberately spelled as [Moore's law](https://en.wikipedia.org/wiki/Moore%27s_law) spelled backwards.

Software also getting slower with improved processors because developers are writing inefficient code.

## Haitz's law

**Haitz's law** is an observation and forecast about the steady improvement, over many years, of [light-emitting diodes](https://en.wikipedia.org/wiki/Light-emitting_diode "Light-emitting diode") (LEDs).

It claims that every decade, the cost per [lumen](https://en.wikipedia.org/wiki/Lumen_(unit) "Lumen (unit)") (unit of useful light emitted) falls by a factor of 10, and the amount of light generated per LED package increases by a factor of 20, for a given wavelength (color) of light. It is considered the LED counterpart to [Moore's law](https://en.wikipedia.org/wiki/Moore%27s_law "Moore's law"), which states that the number of transistors in a given integrated circuit doubles every 18 to 24 months. Both laws rely on the [process optimization](https://en.wikipedia.org/wiki/Process_optimization "Process optimization") of the production of [semiconductor devices](https://en.wikipedia.org/wiki/Semiconductor_device "Semiconductor device").

[Haitz's law - Wikipedia](https://en.wikipedia.org/wiki/Haitz%27s_law)

## Dennard scaling

In [semiconductor electronics](https://en.wikipedia.org/wiki/Semiconductor_electronics "Semiconductor electronics"), **Dennard scaling**, also known as **MOSFET scaling**, is a [scaling law](https://en.wikipedia.org/wiki/Scaling_law "Scaling law") which states roughly that, as [transistors](https://en.wikipedia.org/wiki/Transistor "Transistor") get smaller, their [power density](https://en.wikipedia.org/wiki/Power_density "Power density") stays constant, so that the power use stays in proportion with area; both [voltage](https://en.wikipedia.org/wiki/Voltage "Voltage") and [current](https://en.wikipedia.org/wiki/Electric_current "Electric current") scale (downward) with length. The law, originally formulated for [MOSFETs](https://en.wikipedia.org/wiki/MOSFET "MOSFET"), is based on a 1974 paper co-authored by [Robert H. Dennard](https://en.wikipedia.org/wiki/Robert_H._Dennard "Robert H. Dennard"), after whom it is named.

[Dennard scaling - Wikipedia](https://en.wikipedia.org/wiki/Dennard_scaling)

## [Metcalfe's Law](https://en.wikipedia.org/wiki/Metcalfe%27s_law#Limitations)

The value of a telecommunications network is proportional to the square of the number of connected users of the system...Within the context of social networks, many, including Metcalfe himself, have proposed modified models using (n× logn) proportionality rather than n^2 proportionality.

## [Clarke's Third Law](https://en.wikipedia.org/wiki/Clarke%27s_three_laws)

Any sufficiently advanced technology is indistinguishable from magic.
