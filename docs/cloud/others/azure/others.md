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

## Others

- [Lock your Azure resources to protect your infrastructure - Azure Resource Manager \| Microsoft Learn](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/lock-resources?tabs=json)
