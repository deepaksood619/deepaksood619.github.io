# Administration

## Tableau Cloud Site Capacity

|                       | Capacity Type                                            | Capacity Allowance                                                                                                                                                                     |
| --------------------- | -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Storage**           | Site                                                     | 1 TB, 5 TB with an Advanced Management license. For more information, see [Advanced Management capacity](https://help.tableau.com/current/online/en-us/to_site_capacity.htm#advanced). |
|                       | Individual workbook, published data source, or flow size | 15 GB, 25 GB with an Advanced Management license. See [Advanced Management capacity](https://help.tableau.com/current/online/en-us/to_site_capacity.htm#advanced).                     |
| **Extract refreshes** | Daily refreshes                                          | Up to 8 backgrounder hours per Creator license                                                                                                                                         |
|                       | Concurrent refreshes                                     | Up to 10 jobs*, Up to 25 jobs* with an Advanced Management license. See [Advanced Management capacity](https://help.tableau.com/current/online/en-us/to_site_capacity.htm#advanced).   |
|                       | Individual refresh runtime                               | 2 hours                                                                                                                                                                                |
| **Metrics**           | Daily refreshes                                          | Up to 8 backgrounder hours per Creator license                                                                                                                                         |
|                       | Concurrent refreshes                                     | Up to 10 jobs                                                                                                                                                                          |
|                       | Individual runtime                                       | 2 hours                                                                                                                                                                                |
| **Subscriptions**     | Concurrent subscriptions                                 | Up to 10 jobs                                                                                                                                                                          |
|                       | Individual subscription runtime                          | 30 minutes                                                                                                                                                                             |
|                       | Individual email size                                    | 2 MB                                                                                                                                                                                   |
| **Flows**             | Concurrent flows                                         | 1 per Resource Block                                                                                                                                                                   |
|                       | Individual flow runtime                                  | See [Job runtime capacity](https://help.tableau.com/current/online/en-us/to_site_capacity.htm#jobruntimecapacity).                                                                     |
|                       | Flow memory usage size                                   | 19.5 GB                                                                                                                                                                                |
| **Visualizations**    | Load time                                                | Up to 5 minutes                                                                                                                                                                        |
|                       | Idle timeout                                             | 120 minutes                                                                                                                                                                            |
|                       | User request rate                                        | Up to 600 requests per hour per user                                                                                                                                                   |
|                       | Query usage size                                         | 20 GB                                                                                                                                                                                  |
| **View Acceleration** | Accelerated views                                        | Minimum 30 accelerated views per site with an additional 20 views per Creator license. Maximum 750 accelerated views.                                                                  |
|                       | Accelerated view refreshes                               | Up to 12 jobs per day per view                                                                                                                                                         |
|                       | Memory usage size                                        | 20 GB                                                                                                                                                                                  |
|                       | Individual acceleration runtime                          | Up to 30 minutes                                                                                                                                                                       |

## Daily jobs capacity

Daily jobs capacity is the number of shared hours each site can spend per Creator license a day to perform all jobs on the site. A server process, called backgrounder, initiates and performs these jobs. A site with more Creator licenses gets more daily jobs (backgrounder) capacity to meet the needs of a larger site population.

Each site comes with daily jobs (backgrounder) capacity to perform both extract refresh and metric refresh jobs.

For example:

|If your site has...|multiplied by the default time|Daily jobs capacity|
|---|---|---|
|10 Creator licenses|8 hours|Up to **80 hours/day**|
|50 Creator licenses|8 hours|Up to **400 hours/day**|

Daily jobs capacity resets each day at 24:00:00 UTC (coordinated universal time).

### About extract refreshes

Refresh jobs that count toward daily jobs capacity include full and incremental refreshes and extract creation, which can be initiated by scheduled refreshes, manual refreshes, and certain command line or API calls.

**Notes:**

- As long as your site has time remaining in its daily refresh capacity, a refresh job will start.
- Site admins receive email notifications when a site reaches 70%, 90%, and 100% of its daily refresh capacity.
- If a site exhausts its daily refresh capacity, any future extract refreshes are canceled and email notifications are sent to content owners alerting them of the refresh cancellation.

#### Tips for optimizing extract refreshes capacity

If you're managing an extract-heavy environment, Tableau recommends following some best practices to make the most efficient use of your site capacity.

- **Stop refreshing unused extracts**. One of the best ways to reclaim capacity for your site is to stop automatic refreshes, either through schedules on Tableau Cloud or through scripts of extracts that aren’t being used. For more information about deleting a refresh schedule, see [Manage Refresh Tasks](https://help.tableau.com/current/online/en-us/task.htm).
- **Reduce the frequency of refreshes**. Another method of reclaiming capacity for your site is to reduce the frequency of extract refreshes. For example, instead of refreshing an extract hourly, consider refreshing an extract daily or only during business hours when fresh data is most useful. For more information about changing a refresh schedule, see [Manage Refresh Tasks](https://help.tableau.com/current/online/en-us/task.htm).
- **Use incremental refreshes instead of full refreshes**. To decrease the amount of time an extract takes to refresh, consider performing an incremental refresh of the extract instead of a full refresh. For more information, see [Schedule Refreshes on Tableau Cloud](https://help.tableau.com/current/online/en-us/schedule_add.htm).
	- **Note:** Changing from a full to an incremental refresh can be done from Tableau Cloud only if the extract was configured for incremental refresh in Tableau Desktop before the extract was published. For more information about incremental refreshes, see [Configure an incremental extract refresh(Link opens in a new window)](https://help.tableau.com/current/pro/desktop/en-us/extracting_refresh.htm#incremental) in the Tableau User Help.
- **Use live connections instead of extract connections**. For views, dashboards, and workbooks whose data needs to be updated frequently, consider setting up the data source to use a live connection instead of an extract connection.
- **Optimize the data in the extract**. Improving the performance of an extract can also help reduce the amount of time an extract takes to refresh. There are a number of changes you can make to the extract's data to help its overall performance, such as removing unused fields, using filters to remove unused rows, changing date ranges, etc.

## Admin Views

[Use Admin Insights to Create Custom Views - Tableau](https://help.tableau.com/current/online/en-us/adminview_insights.htm)

### [Admin Insights Starter \| Tableau Exchange](https://exchange.tableau.com/en-GB/products/1036)

The Admin Insights Starter workbook provides site administrators with enhanced visibility into their Tableau Cloud deployment. This pre-built workbook connects to curated data sources in the Admin Insights project to answer common questions about site usage, performance and user engagement. With its intuitive dashboards, administrators can monitor key metrics and identify trends, enabling them to make data-driven decisions.

### Answer key business questions

- What’s the adoption rate of Tableau Cloud in my organisation?
- What are common trends around the site’s deployment?
- What content is popular?
- What are my users doing?
- How should licences be allocated?

### Explore pre-built dashboards

- **User Drilldown:** Explore site activity by user role, including sign-in frequency, content interaction and publishing.
- **Group Drilldown:** View group counts and user details, including membership and licence information.
- **Login Activity Drilldown:** Analyse sign-in trends weekly, daily and hourly, including data from all site users, not just recent activity.
- **Traffic and Adoption Drilldown:** Track view access and data source activity, including who accessed views, when and details on data source connections and workbook publishing.
- **Publish Event Drilldown:** Monitor workbook and data source publishing activities, identifying the publisher and the time of publication.
- **Stale Content:** Identify disk space usage by stale and active content to pinpoint which content is most stale or occupies the most space.
- **Stats for Space Usage:** Assess site capacity and space usage by projects, content items and users to identify groups or users exceeding their allotted space.

[Tableau Community Forums](https://community.tableau.com/s/question/0D54T00000C6S5nSAF/this-workbook-contains-a-data-source-that-is-dependent-on-a-different-tableau-server-multiple-tableau-server-connections-are-not-s)

## Links

- [Tableau Cloud Site Capacity - Tableau](https://help.tableau.com/current/online/en-us/to_site_capacity.htm)
- [Manage Site Role Limits - Tableau](https://help.tableau.com/current/online/en-us/cloud_manager_site_role_limit.htm)
