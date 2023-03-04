# Frameworks

## Qt (pronounced cute)

Everything you need for your entire software development life cycle. Qt is the fastest and smartest way to produce industry-leading software that users love.

Qt is a cross-platform application development framework for desktop, embedded and mobile.[Supported Platforms](https://wiki.qt.io/Supported_Platforms) include Linux, OS X, Windows, VxWorks, QNX, Android, iOS, BlackBerry, Sailfish OS and others.

Qt isnota programming language on its own. It is a framework written in C++. A preprocessor, the [MOC (Meta-Object Compiler)](http://doc.qt.io/qt-5/moc.html), is used to extend the C++ language with features like [signals and slots](http://doc.qt.io/qt-5/signalsandslots.html). Before the compilation step, the MOC parses the source files written in Qt-extended C++ and generates standard compliant C++ sources from them. Thus the framework itself and applications/libraries using it can be compiled by any standard compliant C++ compiler like Clang, GCC, ICC, MinGW and MSVC.

<https://wiki.qt.io/About_Qt>

## Qt concepts

Qt is built on these key concepts:

## Complete abstraction of the GUI

When first released, Qt used its own paint engine and controls, emulating the look of the different platforms it runs on when it drew its widgets. This made the porting work easier because very few classes in Qt depended really on the target platform; however, this occasionally led to slight discrepancies where that emulation was imperfect. Recent versions of Qt use the native style APIs of the different platforms, on platforms that have a native widget set, to query metrics and draw most controls, and do not suffer from such issues as often. On some platforms (such as MeeGo and KDE) Qtisthe native API. Some other portable graphical toolkits have made different design decisions; for example, [wxWidgets](https://en.wikipedia.org/wiki/WxWidgets) uses the toolkits of the target platform for its implementations.

## Signals and slots

A language construct introduced in [Qt](https://en.wikipedia.org/wiki/Qt_(toolkit)) for communication between objects which makes it easy to implement the [observer pattern](https://en.wikipedia.org/wiki/Observer_pattern) while avoiding [boilerplate code](https://en.wikipedia.org/wiki/Boilerplate_code). The concept is that GUI [widgets](https://en.wikipedia.org/wiki/GUI_widget) can send signals containing event information which can be received by other controls using special functions known as slots.

## [Metaobject](https://en.wikipedia.org/wiki/Meta-object_System) compiler

The [metaobject](https://en.wikipedia.org/wiki/Metaobject) compiler, termedmoc, is a tool that is run on the sources of a Qt program. It interprets certain macros from the C++ code as annotations, and uses them to [generate added C++ code](https://en.wikipedia.org/wiki/Code_generator) with meta information about the classes used in the program. This meta information is used by Qt to [provide programming features not available natively in C++](https://en.wikipedia.org/wiki/Greenspun%27s_tenth_rule): signals and slots, [introspection](https://en.wikipedia.org/wiki/Type_introspection) and asynchronous function calls.

## Language bindings

Qt can be used in several other [programming languages](https://en.wikipedia.org/wiki/Programming_language) like Python, Javascript, C# or Rustvia [language bindings](https://en.wikipedia.org/wiki/Language_binding),

<https://doc.qt.io/qt-5/signalsandslots.html>
