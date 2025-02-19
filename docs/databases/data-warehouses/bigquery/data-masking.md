# Data Masking

Upon inspecting the data available across different tables in BigQuery and the number of users with access to it, the need to mask sensitive information—such as payment details, user information, and vendor contact details—becomes evident. The most direct approach is to set up custom roles in BigQuery and configure specific permissions to control access to different datasets.

However, this approach presents a significant issue: instead of restricting access to specific columns, it restricts access to entire tables for certain users. Additionally, there is a more subtle challenge—a trade-off between flexibility and security when managing database access. While time-bound access can be granted to different user groups, the fundamental issue of table-level restrictions still remains.

### Setting Up Policy Tags

So providing dynamic column level access is the best approach for masking sensitive information. With this approach we don’t have to restrict the access to the entire table, only the columns containing the sensitive information will be masked.

This can be done by making use of Policy Tags in BigQuery. In order to manage Policy Tags and setup different masking rules there are certain APIs that needs to be enabled in the BigQuery interface:

1. _Big Query Data Policy API_
2. _Dataplex Catalog_ (Google Data Catalog API was used earlier but has been deprecated since February 3,2025)

Also for a user to setup the taxonomy required to manage the policy tags, the user should have the following permissions:

1. _Policy Tag Admin_
2. _BigQuery Admin or Owner_

### Creating Taxonomy

Taxonomy allow us to create and manage policy tags with different masking rules. Some basic guidelines to follow while creating a taxonomy is listed on the following [page](https://cloud.google.com/bigquery/docs/best-practices-policy-tags "https://cloud.google.com/bigquery/docs/best-practices-policy-tags").

Using the following guidelines we can setup a taxonomy called _Dealshare Data_, with the main generic policy tag node being _Sensitive._ Under this main policy tag we can create sub policy tag nodes, such as _user_id, bank_account_number_ etc for different columns. It is a good practice to create sub nodes to add another layer of specification. Along with that creating sub policy tags also allow us to apply different masking rules to different tags, i.e. say for payment information you might want to apply SHA256 masking, however for email a simple email masking would work.

Once the taxonomy has been made one can make use of these policy tags by enabling _Enforce Access Control_. This will complete the process of setting up the taxonomy and now we can add policy tags to different columns by:

1. Going to the table in the BigQuery console.
2. Clicking on _Edit Schema_.
3. Selecting the column we want to add the tag to.
4. Clicking on _Add Policy Tag_

Note that BigQuery allow one to add masking rules once a taxonomy has been made.

### Masked User and Masking Rules

Once a column has been masked, only users with the _Full Grain Reader_ permission can view the unmasked data. Users without this permission will receive an _Access Denied_ error when attempting to query the data.

This is where the _Masked User_ permission and _Masking Rules_ come into play. Instead of displaying an error each time an unauthorized user queries the masked data, a cleaner approach is available. Depending on the masking rules applied through the policy tag, unauthorized users will see either _hashed values or nulls_ in place of the original data, rather than encountering an error.

Users granted the _Masked User_ permission can view the hashed data, whereas users without this permission will continue to receive an error message. The _Masked User_ role provides a middle ground between granting full access to masked data and completely restricting access with an error.

Following steps need to be followed to add masking rules to different policy tags:

1. Go to the taxonomy page.
2. Select the main tag or sub tag to which you want to apply the masking rules.
3. Click on _Manage Data Policies._
4. Select the masking rule from the drop down menu.

Following steps need to be followed to give _Masked User_ permissions:

5. Grant the _Masked User_ permission from the project permission page.
6. Then follow step until step 3 of creating masking rules.
7. Add the user email id to whom you want to give the _Masked User_ permission in the _Principals_ tab.

This will give the user to view the masked data at project level for the policy tag to which the user was added as principal.

Note: To provide _Full Grain Reader_ permission, simply give the user the permission from the project permission page, no further steps are required.

## Links

- [Introduction to data masking  \|  BigQuery  \|  Google Cloud](https://cloud.google.com/bigquery/docs/column-data-masking-intro)
- [Project Level Roles and Permissions](https://youtu.be/Ymazg3XI-lk?si=Bgc-E7ioJvKeJakG "https://youtu.be/Ymazg3XI-lk?si=Bgc-E7ioJvKeJakG")
- [Limiting Access with Dataset Tags](https://youtu.be/eZ2eMMwOd84?si=P9oE9SibybTMbepO "https://youtu.be/eZ2eMMwOd84?si=P9oE9SibybTMbepO")
- [Column Level Access Control](https://youtu.be/-SuzbZpLlro?si=pPvCAXHg4FXNeLRS "https://youtu.be/-SuzbZpLlro?si=pPvCAXHg4FXNeLRS")
- [Dynamic Data Masking](https://youtu.be/14m05YLj3jE?si=5vg7zs_pe-ej40am "https://youtu.be/14m05YLj3jE?si=5vg7zs_pe-ej40am")
- [Documentation for column level access](https://cloud.google.com/bigquery/docs/column-level-security-intro "https://cloud.google.com/bigquery/docs/column-level-security-intro")
