# iOS

- Swift, Objective-C
- Cocoa and Cocoa touch
- Foundation and UI kit

- IPA build creation
- Controllers flow with autolayout

## Questions

- Suppose you want to ask for permission of camera and audio
  - What is property list
- Asset Catalogues
- Launch Image
- What is the first method that is called when the application launched

Consider the followingUITableViewCellconstructor:

- (id)initWithStyle:(UITableViewCellStyle)style reuseIdentifier:(NSString *)reuseIdentifier

## What is the purpose of thereuseIdentifier? What is the advantage of setting it to a non-nilvalue?

ThereuseIdentifieris used to group together similar rows in anUITableView; i.e., rows that differ only in their content, but otherwise have similar layouts.

AUITableViewwill normally allocate just enoughUITableViewCellobjects to display the content visible in the table. IfreuseIdentifieris set to a non-nilvalue, then when the table view is scrolled, UITableViewwill first attempt to reuse an already allocatedUITableViewCellwith the samereuseIdentifier. IfreuseIdentifierhas not been set, theUITableViewwill be forced to allocate newUITableViewCellobjects for each new item that scrolls into view, potentially leading to laggy animations.

## What are different ways that you can specify the layout of elements in aUIView?

Here are a few common ways to specify the layout of elements in aUIView:

- Using InterfaceBuilder, you can add aXIBfile to your project, layout elements within it, and then load theXIBin your application code (either automatically, based on naming conventions, or manually). Also, using InterfaceBuilder you can create astoryboardfor your application.
- You can your own code to useNSLayoutConstraintsto have elements in a view arranged by Auto Layout.
- You can createCGRects describing the exact coordinates for each element and pass them toUIView's- (id)initWithFrame:(CGRect)framemethod.

## What is the difference betweenatomicandnonatomicproperties? Which is the default for synthesized properties (Ans - Atomic)? When would you use one vs. the other?

Properties specified asatomicare guaranteed to always return a fully initialized object. This also happens to be the default state for synthesized properties so, while it's a good practice to specifyatomicto remove the potential for confusion, if you leave it off, your properties will still beatomic. This guarantee of atomic properties comes at a cost to performance, however. If you have a property for which you know that retrieving an uninitialized value is not a risk (e.g. if all access to the property is already synchronized via other means), then setting it tononatomiccan gain you a bit of performance.

## What's the difference between an "app ID" and a "bundle ID" and what is each used for?

An [App ID](https://developer.apple.com/library/mac/documentation/General/Conceptual/DevPedia-CocoaCore/AppID.html) is a two-part string used to identify one or more apps from a single development team. The string consists of a Team ID and a bundle ID search string, with a period (.) separating the two parts. The Team ID is supplied by Apple and is unique to a specific development team, while the bundle ID search string is supplied by the developer to match either the bundle ID of a single app or a set of bundle IDs for a group of apps.

Because most people think of the App ID as a string, they think it is interchangeable with Bundle ID. It appears this way because once the App ID is created in the Member Center, you only ever use the App ID Prefix which matches the Bundle ID of the Application Bundle.

The bundle ID uniquely defines each App. It is specified in Xcode. A single Xcode project can have multiple Targets and therefore output multiple apps. A common use case for this is an app that has both lite/free and pro/full versions or is branded multiple ways.

## What are "strong" and "weak" references? Why are they important and how can they be used to help control memory management and avoid memory leaks?

By default, any variable that points to another object does so with what is referred to as a "strong" reference. A retain cycle occurs when two or more objects havereciprocalstrong references (i.e., strong references to each other). Any such objects willneverbe destroyed by [ARC](https://developer.apple.com/library/ios/documentation/Swift/Conceptual/Swift_Programming_Language/AutomaticReferenceCounting.html)(iOS' Automatic Reference Counting). Even if every other object in the application releases ownership of these objects, these objects (and, in turn, any objects that reference them) will continue to exist by virtue of those mutual strong references. This therefore results in a memory leak.

Reciprocal strong references between objects should therefore be avoided to the extent possible. However, when they are necessary, a way to avoid this type of memory leak is to employweak references. Declaring one of the two references asweakwill break the retain cycle and thereby avoid the memory leak.

To decide which of the two references should be weak, think of the objects in the retain cycle as being in a parent-child relationship. In this relationship, the parent should maintain a strong reference (i.e., ownership of) its child, but the child should not maintain maintain a strong reference (i.e., ownership of) its parent.

For example, if you haveEmployerandEmployeeobjects, which reference one another, you would most likely want to maintain a strong reference from theEmployerto theEmployeeobject, but have a weak reference from theEmployeeto thrEmployer.

## Describemanaged object contextand the functionality that it provides

- **Related to core data (local storage database)**
- **Type of classes**

Amanaged object context(represented by an instance ofNSManagedObjectContext) is basically a temporary "scratch pad" in an application for a (presumably) related collection of objects. These objects collectively represent an internally consistent view of one or more persistent stores. A single managed object instance exists in one and only one context, but multiple copies of an object can exist in different contexts.

You can think of a managed object context as an intelligent scratch pad. When you fetch objects from a persistent store, you bring temporary copies onto the scratch pad where they form an object graph (or a collection of object graphs). You can then modify those objects however you like. Unless you actually save those changes, though, the persistent store remains unchanged.

Key functionality provided by amanaged object contextincludes:

- **Life-cycle management.**The context provides validation, inverse relationship handling, and undo/redo. Through a context you can retrieve or "fetch" objects from a persistent store, make changes to those objects, and then either discard the changes or commit them back to the persistent store. The context is responsible for watching for changes in its objects and maintains an undo manager so you can have finer-grained control over undo and redo. You can insert new objects and delete ones you have fetched, and commit these modifications to the persistent store.
- **Notifications.**A context posts notifications at various points which can optionally be monitored elsewhere in your application.
- **Concurrency.**Core Data uses thread (or serialized queue) confinement to protect managed objects and managed object contexts. In OS X v10.7 and later and iOS v5.0 and later, when you create a context you can specify the concurrency pattern with which you will use it usinginitWithConcurrencyType:.

Compare and contrast the different ways of achieving concurrency in OS X and iOS. (no)

There are basically three ways of achieving concurrency in iOS:

- threads
- dispatch queues
- operation queues

Thedisadvantage of threadsis that they relegate the burden of creating a scalable solution to the developer. You have to decide how many threads to create and adjust that number dynamically as conditions change. Also, the application assumes most of the costs associated with creating and maintaining the threads it uses.

OS X and iOS therefore prefer to take an asynchronous design approach to solving the concurrency problem rather than relying on threads.

One of the technologies for starting tasks asynchronously is [Grand Central Dispatch (GCD)](https://developer.apple.com/library/prerelease/mac/documentation/Performance/Reference/GCD_libdispatch_Ref/index.html) that relegates thread management down to the system level. All the developer has to do is define the tasks to be executed and add them to the appropriatedispatch queue. GCD takes care of creating the needed threads and scheduling tasks to run on those threads.

All [dispatch queues](https://developer.apple.com/library/ios/documentation/General/Conceptual/ConcurrencyProgrammingGuide/OperationQueues/OperationQueues.html) are first-in, first-out (FIFO) data structures, so tasks are always started in the same order that they are added.

An [operation queue](https://developer.apple.com/library/ios/documentation/General/Conceptual/ConcurrencyProgrammingGuide/ConcurrencyandApplicationDesign/ConcurrencyandApplicationDesign.html#//apple_ref/doc/uid/TP40008091-CH100-SW9) is the Cocoa equivalent of aconcurrent dispatch queueand is implemented by the [NSOperationQueue](https://developer.apple.com/library/ios/documentation/Cocoa/Reference/NSOperation_class/index.html) class. Unlike dispatch queues, operation queues are not limited to executing tasks in FIFO order and support the creation of complex execution-order graphs for your tasks.

## List and explain the different types of iOS Application States

The iOS application states are as follows:

- Not runningstate: The app has not been launched or was running but was terminated by the system.
- Inactivestate: The app is running in the foreground but is currently not receiving events. (It may be executing other code though.) An app usually stays in this state only briefly as it transitions to a different state. The only time it stays inactive for any period of time is when the user locks the screen or the system prompts the user to respond to some event (such as an incoming phone call or SMS message).
- Activestate: The app is running in the foreground and is receiving events. This is the normal mode for foreground apps.
- Backgroundstate: The app is in the background and executing code. Most apps enter this state briefly on their way to being suspended. However, an app that requests extra execution time may remain in this state for a period of time. In addition, an app being launched directly into the background enters this state instead of the inactive state.
- Suspendedstate: While suspended, an app remains in memory but does not execute any code. When a low-memory condition occurs, the system may purge suspended apps without notice to make more space for the foreground app.

What are rendering options forJSONSerialization? (not)

1. MutableContainers: Arrays and dictionaries are created as variable objects, not constants.

2. MutableLeaves: Leaf strings in the JSON object graph are created as instances of variable strings.

3. allowFragments: The parser should allow top-level objects that are not an instance of arrays or dictionaries.

<https://www.toptal.com/ios/interview-questions>

Swift - <https://www.toptal.com/swift/interview-questions>
