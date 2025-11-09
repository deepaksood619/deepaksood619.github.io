# Others

## ACI (Azure Container Instances)

Easily run containers on Azure without managing servers

Develop apps fast without managing virtual machines or having to learn new tools - it's just your application, in a container, running in the cloud.

Azure Container Instances (ACI) provide a hosted environment for running containers in Azure. When using ACI, there is no need to manage the underlying compute infrastructure, Azure handles this management for you. When running containers in ACI, you are charged by the second for each running container.

## AKS Virtual Kubelet

### Create

`az aks install-connector --resource-group Technology --name dev-kubernetes-cluster --connector-name virtual-kubelet --os-type Linux`

### Delete

`az aks remove-connector --resource-group Technology --name dev-kubernetes-cluster --connector-name virtual-kubelet --os-type Linux`

https://docs.microsoft.com/en-us/azure/aks/virtual-kubelet#installation

## Node Pools

https://docs.microsoft.com/en-us/azure/aks/use-multiple-node-pools

## Azure Storage

Locally Redundant Storage (LRS) in Azure stores data three times within a single datacenter in the primary region. This replication protects against hardware failures like drive or server rack issues, offering a basic level of data durability. LRS is the least expensive option for data redundancy in Azure.

### Others

- [Introduction to **Azure Queue Storage** - Azure Storage \| Microsoft Learn](https://learn.microsoft.com/en-us/azure/storage/queues/storage-queues-introduction)
- [Introduction to **Table storage** - Object storage in Azure \| Microsoft Learn](https://learn.microsoft.com/en-us/azure/storage/tables/table-storage-overview)
	- Azure Table storage is a service that stores non-relational structured data (also known as structured NoSQL data) in the cloud, providing a key/attribute store with a schemaless design. Because Table storage is schemaless, it's easy to adapt your data as the needs of your application evolve. Access to Table storage data is fast and cost-effective for many types of applications, and is typically lower in cost than traditional SQL for similar volumes of data.

## Others

- [Lock your Azure resources to protect your infrastructure - Azure Resource Manager \| Microsoft Learn](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/lock-resources?tabs=json)
