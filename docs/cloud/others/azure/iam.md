# IAM

[What is identity and access management (IAM)? - Microsoft Entra | Microsoft Learn](https://learn.microsoft.com/en-us/entra/fundamentals/introduction-identity-access-management)

Azure Active Directory is now Microsoft Entra ID

## IAM vs AD

Azure AD is for Authentication - User must prove who they are using a Username and Password.

IAM (RBAC) is for Authorization - a User is assigned a role or permissions to use a specific resource.

---

Identity Access Management is what they call the Role-Based Access Control system in Azure subscriptions. Basically, it allows you to give users certain roles on subscriptions, resource groups, or individual resources.

Azure AD is a more general identity management solution. It allows you to manage users and applications, users' access to those applications and more. Calling it the "same as on-prem AD" is not really quite right, since their features differ quite a lot. The general purpose is similar to on-prem AD of course.

Logically Azure subscriptions exist within one Azure AD (they are linked to one). But having your user account in Azure AD does not give you access to Azure subscriptions! In addition to a user having to be a member (or invited guest user) of the AAD assigned to the subscription, you also have to use the RBAC (IAM) system to assign roles for users.

[Microsoft Entra ID (formerly Azure Active Directory) | Microsoft Security](https://www.microsoft.com/en-in/security/business/identity-access/microsoft-entra-id)

## Best Practices

[Azure identity & access security best practices | Microsoft Learn](https://learn.microsoft.com/en-us/azure/security/fundamentals/identity-management-best-practices)

- Treat identity as the primary security perimeter
- Centralize identity management
- Manage connected tenants
- Enable single sign-on
- Turn on Conditional Access
- Plan for routine security improvements
- Enable password management
- Enforce multifactor verification for users
- Use role-based access control
- Lower exposure of privileged accounts
- Control locations where resources are located
- Use Microsoft Entra ID for storage authentication

## Azure Subscription vs Resource Groups

Azure subscriptions and resource groups are both fundamental concepts within Microsoft Azure, but they serve different purposes and operate at different levels within the Azure hierarchy. Here's a breakdown of both:

### Azure Subscription

An Azure subscription is a logical container used to manage access, billing, and the provision of resources. When you sign up for Azure, you are given at least one subscription. Subscriptions help you organize access to cloud service resources, where the services and resources are billed together under a single subscription. Key aspects of subscriptions include:

- **Billing Boundary**: A subscription is the billing boundary for Azure services. Your usage of Azure services is tracked at the subscription level, and you receive one bill for all the services used within that subscription.
- **Access Control Boundary**: Access to resources can be controlled at the subscription level. Azure Role-Based Access Control (RBAC) can be used to define what actions a user or a service can perform on the resources in a subscription.
- **Support for Multiple Subscriptions**: Organizations often use multiple subscriptions to separate environments (such as development, testing, and production), organizational units, or billing categories.

### Resource Groups

A resource group is a container that holds related resources for an Azure solution. The resource group can include all the resources for the solution, or only those resources that you want to manage as a group. You decide how you want to allocate resources to resource groups based on what makes the most sense for your organization. Key aspects of resource groups include:

- **Lifecycle Management**: Resources within a resource group can be deployed, updated, or deleted together. Resource groups allow for managing the lifecycle of a set of resources collectively.
- **Access Control**: While access control can be managed at the subscription level, it can also be further refined within a resource group. This allows for more granular control over who has access to specific resources within the group.
- **Organization**: Resource groups serve as a way to organize and manage resources. This can simplify the management of resources, as you can locate and act upon resources within the same group easily.

### Key Differences

- **Scope**: A subscription is a global container for billing, account management, and access control, whereas a resource group is a way to group resources within a subscription for easier management.
- **Purpose**: Subscriptions are used to manage costs and global settings, including access permissions at a broad level. Resource groups are used to organize and manage resources within a subscription, often for a specific application or project.
- **Lifecycle**: The lifecycle of a resource group is tied to its resources. If a resource group is deleted, all resources contained within it are also deleted. Subscriptions, on the other hand, exist independently of the resources they contain.

In summary, Azure subscriptions and resource groups operate at different levels within Azure's hierarchy, with subscriptions providing a way to manage billing and overall access, and resource groups offering a method to organize and manage resources within those subscriptions.

## Azure Roles

![Azure IAM Roles](../../../media/Pasted%20image%2020240321190256.jpg)

[Azure RBAC](https://learn.microsoft.com/en-us/azure/role-based-access-control/overview) is an authorization system built on [Azure Resource Manager](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/overview) that provides fine-grained access management to Azure resources, such as compute and storage. Azure RBAC includes over 100 built-in roles. There are five fundamental Azure roles. The first three apply to all resource types:

|Azure role|Permissions|Notes|
|---|---|---|
|[Owner](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#owner)|- Grants full access to manage all resources - Assign roles in Azure RBAC|The Service Administrator and Co-Administrators are assigned the Owner role at the subscription scope   Applies to all resource types.|
|[Contributor](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#contributor)|- Grants full access to manage all resources - Can't assign roles in Azure RBAC - Can't manage assignments in Azure Blueprints or share image galleries|Applies to all resource types.|
|[Reader](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#reader)|- View Azure resources|Applies to all resource types.|
|[Role Based Access Control Administrator](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#role-based-access-control-administrator)|- Manage user access to Azure resources - Assign roles in Azure RBAC - Assign themselves or others the Owner role - Can't manage access using other ways, such as Azure Policy||
|[User Access Administrator](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#user-access-administrator)|- Manage user access to Azure resources - Assign roles in Azure RBAC - Assign themselves or others the Owner role|

[Azure roles, Microsoft Entra roles, and classic subscription administrator roles | Microsoft Learn](https://learn.microsoft.com/en-us/azure/role-based-access-control/rbac-and-directory-admin-roles)

## Key Concepts of Azure IAM

1. **Single Sign-On (SSO):** Enables users to access all necessary applications and resources by logging in just once. This convenience is bolstered by extending on-premises Active Directory environments to the cloud, allowing seamless access across both domains and SaaS applications without managing multiple sets of credentials​[](https://learn.microsoft.com/en-us/azure/security/fundamentals/identity-management-overview)​.

2. **Multifactor Authentication (MFA):** Adds a critical layer of security by requiring more than one verification method for user sign-ins, significantly safeguarding access to data and applications​[](https://learn.microsoft.com/en-us/azure/security/fundamentals/identity-management-overview)​.

3. **Azure Role-Based Access Control (RBAC):** Facilitates fine-grained access management to Azure resources, allowing you to define what users can and cannot do within Azure. This system includes built-in roles like Owner, Contributor, Reader, and User Access Administrator, each with different levels of access​[](https://learn.microsoft.com/en-us/azure/security/fundamentals/identity-management-overview)​.

4. **Privileged Identity Management (PIM):** Manages, controls, and monitors access within Azure, emphasizing the security of privileged identities to mitigate risks associated with excessive permissions​[](https://learn.microsoft.com/en-us/azure/security/fundamentals/identity-management-overview)​.

5. **Conditional Access:** Ensures that access to resources is secured and compliant by evaluating conditions of access. It allows automated control decisions based on the context of access attempts, like user location or device compliance​[](https://learn.microsoft.com/en-us/azure/security/fundamentals/identity-management-best-practices)​.

### Best Practices for Implementing Azure IAM

1. **Enable Conditional Access Policies:** Set up policies based on group, location, and application sensitivity to manage and control access to corporate resources effectively​[](https://learn.microsoft.com/en-us/azure/security/fundamentals/identity-management-best-practices)​.

2. **Plan for Regular Security Improvements:** Utilize tools like the Identity Secure Score to measure and improve your security posture over time, adapting to evolving threats​[](https://learn.microsoft.com/en-us/azure/security/fundamentals/identity-management-best-practices)​.

3. **Implement Self-Service Password Reset (SSPR):** Empower users to reset their passwords, reducing administrative overhead and enhancing security by ensuring users can quickly regain access to their accounts if needed​[](https://learn.microsoft.com/en-us/azure/security/fundamentals/identity-management-best-practices)​.

4. **Enforce Multifactor Verification:** Require two-step verification for all users to protect against unauthorized access. Options for enforcing MFA include using Conditional Access policies or enabling it for all users with Security Defaults​[](https://learn.microsoft.com/en-us/azure/security/fundamentals/identity-management-best-practices)​.

5. **Use Role-Based Access Control (RBAC) Wisely:** Assign access based on the principle of least privilege, ensuring users have only the access they need to perform their jobs. Avoid overprivileged states by using Azure RBAC to manage access to Azure resources effectively​[](https://learn.microsoft.com/en-us/azure/security/fundamentals/identity-management-best-practices)​​[](https://learn.microsoft.com/en-us/azure/role-based-access-control/role-assignments-portal)​.
