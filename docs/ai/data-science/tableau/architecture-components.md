# Architecture and Components

- Tableau Server Architecture
- Data Server
- Data Connectors
- Components of Tableau Server
- Gateway
- Clients

## Tableau Server Architecture

![tableau-architecture-diagram](../../../media/Pasted%20image%2020230714180101.png)

### Tableau Server Deployment Reference Architecture

![tableau-server-deployment-reference-architecture](../../../media/Pasted%20image%2020230714180337.png)

## Components of Tableau Server

The different components present in a Tableau server are:

- Application Server
- VizQL Server
- Data Server

### A) Application Server

The application server is used to provide the authentications and authorizations. It handles the administration and permission for web and mobile interfaces. It assures security by recording each session id on Tableau Server. The administrator can configure the default timeout of the session in the server.

### B) VizQL Server

VizQL server is used to convert the queries from the data source into visualizations. Once the client request is forwarded to VizQL process, it sends the query directly to data source and retrieves information in the form of images. This image or visualization is presented to the user. Tableau server creates a cache of visualization to reduce the load time. The cache can be shared across many users who have the permission to view the visualization.

### C) Data Server

Data server is used to manage and store the data from external data sources. It is a central data management system. It provides metadata management, data security, data storage, data connection and driver requirements. It stores the relevant details of data set such as metadata, calculated fields, sets, groups, and parameters. The data source could extract data as well make live connections to external data sources.

## Gateway

The gateway channelizes the requests from users to Tableau components. When the client makes a request, it is forwarded to external load balancer for processing. The gateway works as a distributor of processes to various components. In case of absence of external load balancer, gateway also works as a load balancer. For single server configuration, one primary server or gateway manages all the processes. For multiple server configurations, one physical system works as primary server while others are used as worker servers. Only one machine can be used as a primary server in Tableau Server environment.

## Tableau Cloud

Tableau Cloud is a software-as-a-service (SaaS) deployment built to scale to serve thousands of sites with thousands of geographically distributed users within a multi-tenant (shared compute) environment. Tableau Cloud takes advantage of high availability features available in the product and cloud architecture best practices to deliver a reliable experience. Tableau Cloud supports a hybrid data architecture with a mix of networks, including on-premises, private cloud, and public cloud.

## Processes

- Cluster Controller
- Gateway
- Application Server
- VizQL Server
- Cache Server
- Search & Browse
- Backgrounder
- Data Server
- Data Engine
- File Store
- Repository
- Tableau Prep Conductor
- Metrics

## Links

[Tableau Architecture & Server Components](https://www.guru99.com/tableau-architecture.html)

[Tableau Platform Architecture - Tableau](https://help.tableau.com/current/blueprint/en-us/bp_server_architecture.htm)

[Part 2 - Understanding the Tableau Server Deployment Reference Architecture - Tableau](https://help.tableau.com/current/guides/enterprise-deployment/en-us/edg_part2.htm)
