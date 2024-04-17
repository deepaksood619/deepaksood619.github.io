# Connection Handling

The MySQL Server (mysqld) executes as a single OS process, with multiple threads executing concurrent activities. MySQL does not have its own thread implementation, but relies on the thread implementation of the underlying OS. When a user connects to the database a user thread is created inside mysqld and this user thread executes user queries, sending results back to the user, until the user disconnects.

When more and more users connect to the database, more and more user threads execute in parallel. As long as all user threads execute as if they are alone we can say that the system (MySQL) scales well. But at some point we reach a limit and adding more user threads will not be useful or efficient.

## Connect and Disconnect

Connectionscorrespond toSessionsin SQL standard terminology. A client connects to the MySQL Server and stays connected until it does a disconnect. Figure 1 illustrates what happens when a MySQL Client connects to a MySQL Server.

![image](../../../media/MySQL_Connection-Handling-image1.jpg)

## Clients

A MySQL Client is a command line tool or an application that talks to the MySQL Server over the MySQL Client-Server protocol using the [libmysqlclient](https://dev.mysql.com/doc/refman/8.0/en/c-api-implementations.html) library or some of the many MySQL connectors. A single multi-threaded client can open many connections to the server, but for simplicity we here sayone client opens one connectionto the server.

## Connection Requests

The MySQL Clients sendconnection requeststo the MySQL Server. A connection request is simply a TCP-IP connect message sent to port 3306 on the server host machine.

## Receiver Thread

Incoming connection requests are queued and then processed by thereceiver threadone by one. The only job of the receiver thread is to create auser thread, further processing is done by the user thread.

## Thread Cache

The receiver thread will either create a new OS thread or reuse an existing "free" OS thread if found in the thread cache. The thread cache used to be important for connect speed when OS threads were costly to create. Nowadays creating an OS thread is relatively cheap and the thread cache can perhaps be said to be legacy. The [thread_cache_size](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_thread_cache_size) default value is calculated as 8 + (max_connections / 100) and is rarely changed. It might make sense to try increasing the thread cache in cases where number of connections fluctuates between having very few connections and having many connections.

## User Thread

It is the user thread that handles the [client-server protocol](https://dev.mysql.com/doc/dev/mysql-server/latest/PAGE_PROTOCOL.html), e.g. sends back the initial handshake packet. Thisuser threadwill allocate and initialize the corresponding THD, and then continue with capability negotiation and authentication. In this process the user credentials are stored in the THD'ssecurity context. If everything goes well in the [connection phase](https://dev.mysql.com/doc/dev/mysql-server/latest/page_protocol_connection_phase.html), the user thread will enter the [command phase](https://dev.mysql.com/doc/dev/mysql-server/latest/page_protocol_command_phase.html).

## THD

The connection is represented by a data structure called the THD which is created when the connection is established and deleted when the connection is dropped. There is always a one-to-one correspondence between a user connection and a THD, i.e. THDs are not reused across connections. The size of the THD is ~10K and its definition is found in [sql_class.h](https://dev.mysql.com/doc/dev/mysql-server/latest/classTHD.html). The THD is a large data structure which is used to keep track of various aspects of execution state. Memory rooted in the THD will grow significantly during query execution, but exactly how much it grows will depend upon the query. For memory planning purposes we recommend to plan for ~10MB per connection on average.

![image](../../../media/MySQL_Connection-Handling-image2.jpg)

Figure 2 illustrates the command phase. Here, the client sends queries to the server and get results back in several rounds. In general, a sequence of statements can be enclosed by a start transaction and a commit/rollback. In this case there is a need to keep track of thetransaction context. In auto-commit mode, each statement will be executed as a transaction (each statement constitutes the full transaction context). In addition there is thesession context, i.e. the session can hold session variables, user variables, and temporary tables. Thus, as long as the context is relevant for executing queries, all queries on a connection must use the same THD.

![image](../../../media/MySQL_Connection-Handling-image3.jpg)

Figure 3 illustrates what happens when a MySQL Client disconnects from a MySQL Server. The Client sends a [COM_QUIT](https://dev.mysql.com/doc/dev/mysql-server/latest/page_protocol_com_quit.html) command which causes the server to close the socket. A disconnect can also happen when either side closes its end of the socket. Upon a disconnect the user thread will clean up, deallocate the THD, and finally put itself in the Thread Cache as "suspended" if there are free slots. If there are no free slots, the user thread will be "terminated".

## Short Lived Connections

A short lived connection is a connection that is only open for a short period of time. This is typically the case for PHP applications, the client opens a connection, executes a simple query, and then closes the connection. Due to its architecture, MySQL is really good at accepting new connections at a high speed, up to 80,000 connects/disconnects per second

## Long Lived Connections

A long lived connection is a connection that is open "indefinitely". For example one might have a Web server or an Application server opening many connections to the MySQL server and keeping them open until the client (Web/Application server) is stopped, perhaps for months.

## What limits threads concurrency

A thread will happily execute instructions until it needs to wait for something or until it has used its timeshare as decided by the OS scheduler. There are three things a thread might need to wait for: A mutex, a database lock, or IO.

## Conclusion

- MySQL is very good at handling many clients connecting and disconnecting to the database at a high frequency, up to 80 thousand connect and disconnects per second
- MySQL scales well on multi-core CPUs and can deliver up to 2 million primary key look-ups per second on 48 CPU cores.
- Rule of thumb: Max number of connections = 4 times available CPU cores
- Efficient use of connections will depend upon user load, useful number of user connections can even be lower than number of CPU cores when the bottleneck is somewhere else than on the threading
- Check out your own load by doubling the number of connections until TPS no longer increases and latency starts to increase

https://mysqlserverteam.com/mysql-connection-handling-and-scaling
