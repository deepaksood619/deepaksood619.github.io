# Authorizing Using RBAC and ACLs

Your identities will need access to Confluent Cloud, whether it is to create applications or send and receive data. Allowing them to access your cluster as easily as possible is important to how well your business runs. At the same time, your access model needs to be structured in a way where you can easily add, remove, change, and verify permissions.

Authorization is where you will make sure that your authenticated users have the access they should have, and no more or no less. It is not unheard of to have to authorize hundreds, thousands, or even tens of thousands of identities. If you’ve ever used the open source implementation of Kafka, you may be familiar with the burdensome process of having to create an LDAP store to configure your group, role, and user hierarchies, then applying ACL based on the group and role hierarchies, and finally implementing a custom authorizer that pairs the groups and users in LDAP with those in Kafka.

None of that extra effort is necessary with Confluent Cloud. Instead, there are two methods for authorizing your identities: access control lists (ACLs), and role-based access control (RBAC).

## ACLs

ACLs are tables that store identities and what they can do or see (the resources they can access and permissions they have) within Confluent Cloud. The important thing to remember is that permissions are tied to each identity and linked to the access they have been given for each resource. If an identity changes teams or scope, you will have to make sure to address things at an individual level. If at any point even one of these changes is missed, or configured incorrectly, you now have identities that have access to more than what they should.

This problem is only made worse as the number of identities in your organization increases. Verifying permissions for compliance with laws and regulations can become quite a labor-intensive and time-consuming process, not to mention a potential security risk.

ACLs are specific to Kafka resources and don’t extend to other Confluent Cloud concepts, such as environments and organizations. Managing ACLs for a small number of identities likely isn’t a big deal. However, if you are working with a large organization with hundreds or thousands of identities, using ACLs doesn’t scale. You’re left with the second option for organizing identities, role-based access control.

## RBACs

RBACs allow you to configure predefined roles within your organization. Identities are assigned to a role and gain access to an organization, environment, cluster, or specific Kafka resources like topics, consumer groups, and transactional IDs based on that role.

For example, imagine a user, Milton, who is part of a group of users that require access to read data from your Purchases topic. Using ACLs, Milton’s identity is granted permission to access the read data. If tomorrow Milton also requires access to the read data from a topic called Returns, that permission must be added to Milton’s user identity (and the identity of everyone else who also now needs access).

Using RBACs, Milton is assigned to the DeveloperRead role. Each identity assigned to the DeveloperRead role has access to read data from the Purchase topic. Adding access to the Returns topic can be achieved by changing the DeveloperRead role scope to now include access to the Returns topic. Every identity within that role gains the correct access. As opposed to ACLs, RBAC integrates with a centralized identity management system and allows much simpler scaling for large organizations. From a compliance perspective, it’s safer and simpler to verify your RBAC roles to prove compliance than to attempt to confirm each individual ACL identity.

## RBAC roles

Confluent Cloud has the following roles preconfigured. You may want to keep a copy of this table to reference as you begin to plan your access architecture. You may want to [reference the documentation](https://docs.confluent.io/cloud/current/access-management/access-control/cloud-rbac.html#ccloud-rbac-roles) for more in-depth details on each of these roles.

![rbac-roles](https://images.ctfassets.net/gt6dp23g0g38/la7jRx1RlQaz6tSBlp9dm/c78c4ef3ef330761e47c7bdc0d4458bb/rbac-roles.jpg)

Also, there are a couple of things to keep in mind as you use RBAC in Confluent Cloud:

- RBAC for Kafka is available only on Standard and Dedicated clusters. To create service accounts, you must be granted the OrganizationAdmin role. All the other cluster administration roles (EnvironmentAdmin, CloudClusterAdmin, and ResourceOwner) can grant or revoke permissions for existing service accounts on the resources that they control.
- Role bindings are limited like every other resource on Confluent Cloud. You will want to check the official documentation to see the current guidance.
- You must use version 2.8.1 or later of the Confluent CLI to manage RBAC roles.

## RBAC Considerations

- If you use OAuth for authentication you will be creating identity pools for your principals. There are two parts to every identity pool: who can use the pool, and what the pool can access. The “who” is a set of conditions that the identity needs to satisfy in order to use the pool. The “what” is defined by ACLs and RBAC roles.
- You can use a mix of ACLs and RBACs. This may be helpful if you need to provide a small set of identities with access to a resource in your Confluent Cloud cluster. However, as an investment in the future, we recommend going with RBACs over ACLs.

## ACLs and RBAC Order of Precedence

As both ACLs and RBAC provide authorization, there is an order of precedence in granting access:

![granting-authorization](https://images.ctfassets.net/gt6dp23g0g38/rIAdqJXoWfIPbntYRSKkw/d6331054ece90e40cb38e92cb578f962/granting-authorization.jpg)
