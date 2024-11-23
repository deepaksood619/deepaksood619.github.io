# Azure

[Azure Portal "How To" Series](https://www.youtube.com/playlist?list=PLLasX02E8BPBKgXP4oflOL29TtqTzwhxR)

[social-media-analytics-solution](ai/social-media-analytics-solution.md)

## Commands

```bash
brew update && brew install azure-cli

az login

az aks install-cli

az aks get-credentials --resource-group Technology --name kubernetes-cluster

az --version

brew update && brew upgrade azure-cli

## for tunneling to kubernetes-dashboard

az aks browse --resource-group Technology --name prod-cluster

## Upgrade

az aks get-upgrades --resource-group Technology --name dev-kubernetes-cluster --output table

## ACR

az acr list --resource-group Technology --query "[].{acrLoginServer:loginServer}" --output table

## IP Allocations

az aks show --resource-group Technology --name dev-kubernetes-cluster --query nodeResourceGroup -o tsv

az network public-ip create --resource-group MC_Technology_dev-kubernetes-cluster_southindia --name kafka1PublicIP --allocation-method static

az network public-ip create --resource-group staticpublicip --name kongPublicIP --allocation-method static

az network public-ip create --resource-group staticpublicip --name kongproxyPublicIP --allocation-method static --sku Standard

az network public-ip show --resource-group MC_Technology_dev-kubernetes-cluster_southindia --name kafkaPublicIP

az network public-ip delete --resource-group MC_Technology_dev-kubernetes-cluster_southindia --name testPublicIP

az network public-ip list

az network public-ip list --resource-group MC_Technology_dev-kubernetes-cluster_southindia

az group create --location centralindia --name staticpublicip

az role assignment create --assignee 727ba8c8-fa02-440c-ab02-58cb14eb1420 --role "Network Contributor" --scope /subscriptions/3809021a-75e6-4568-8445-2a37bfd143dd/resourceGroups/staticpublicip

az aks update-credentials --resource-group Technology --name dev-kubernetes-cluster --reset-service-principal --service-principal $SP_ID --client-secret $SP_SECRET

SP_ID=$(az aks show --resource-group Technology --name prod-cluster --query servicePrincipalProfile.clientId -o tsv)

az ad sp create-for-rbac --skip-assignment

## ELK

az keyvault create --name example-kubernetes-vault --resource-group Technology

az network public-ip create -n kibana-public --resource-group=Technology --allocation-method=static --dns-name=kibana-public

az network public-ip create -n kibana-ip --resource-group=Technology --allocation-method=static --dns-name=kibana.example.com

az network public-ip create -n elk-ip --resource-group=Technology --allocation-method=static

# 52.172.150.153

az keyvault certificate import --name kibana-certificate --vault-name example-kubernetes-vault -f ${DOMAIN}.pfx --tags domain=${DOMAIN}

az keyvault secret set --name kibana-certificate-key-password --vault-name example-kubernetes-vault

az redis create --name dev-logscache --location southindia --resource-group Technology --sku Standard --vm-size C1

helm delete --purge elasticsearch

./deploy.sh -n elk -v example-kubernetes-vault
```

https://github.com/Azure/helm-elasticstack

https://github.com/Azure/acs-engine/blob/master/docs/kubernetes/monitoring#monitoring-kubernetes-clusters

https://docs.microsoft.com/en-us/cli/azure/network/public-ip?view=azure-cli-latest

https://docs.microsoft.com/en-us/azure/aks/cluster-autoscaler

## Create secret to pull from private registry

```bash
# gcr reg addition

kubectl create secret docker-registry gcrreg --docker-server=gcr.io --docker-username=_json_key --docker-password="$(cat ~/json-key-file.json)" --docker-email=username@example.com -n smap

kubectl patch serviceaccount default -p '{"imagePullSecrets": [{"name": "gcrreg"}]}' -n smap
```

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

## Links

- [Azure AI Fundamentals Certification (AI-900) 2024 UPDATE - Pass the Exam With This Free 4 Hour Course](https://www.freecodecamp.org/news/azure-data-fundamentals-certification-ai-900-pass-the-exam-with-this-free-4-hour-course/)
- [Azure Networking For Beginners | Learn Azure Networking Basics | K21Academy - YouTube](https://www.youtube.com/watch?v=feQvnIUJ3Iw&ab_channel=K21Academy)
