# Commands

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

## Help

Use `az --version` to display the current version.

Here are the base commands:

account : Manage Azure subscription information.

acr : Manage private registries with Azure Container Registries.

ad : Manage Azure Active Directory Graph entities needed for Role Based Access

Control.

advisor : Manage Azure Advisor.

aks : Manage Azure Kubernetes Services.

ams : Manage Azure Media Services resources.

apim : Manage Azure API Management services.

appconfig : Manage App Configurations.

appservice : Manage App Service plans.

backup : Manage Azure Backups.

batch : Manage Azure Batch.

billing : Manage Azure Billing.

bot : Manage Microsoft Azure Bot Service.

cache : Commands to manage CLI objects cached using the `--defer` argument.

cdn : Manage Azure Content Delivery Networks (CDNs).

POP : Points of Presence

cloud : Manage registered Azure clouds.

cognitiveservices : Manage Azure Cognitive Services accounts.

configure : Manage Azure CLI configuration. This command is interactive.

consumption : Manage consumption of Azure resources.

container : Manage Azure Container Instances.

cosmosdb : Manage Azure Cosmos DB database accounts.

deployment : Manage Azure Resource Manager deployments at subscription scope.

deploymentmanager : Create and manage rollouts for your service.

disk : Manage Azure Managed Disks.

dla : Manage Data Lake Analytics accounts, jobs, and catalogs.

dls : Manage Data Lake Store accounts and filesystems.

dms : Manage Azure Data Migration Service (DMS) instances.

eventgrid : Manage Azure Event Grid topics, event subscriptions, domains and domain

topics.

eventhubs : Manage Azure Event Hubs namespaces, eventhubs, consumergroups and geo

recovery configurations - Alias.

extension : Manage and update CLI extensions.

feature : Manage resource provider features.

feedback : Send feedback to the Azure CLI Team!

find : I'm an AI robot, my advice is based on our Azure documentation as well as

the usage patterns of Azure CLI and Azure ARM users. Using me improves Azure

products and documentation.

functionapp : Manage function apps. To install the Azure Functions Core tools see

https://github.com/Azure/azure-functions-core-tools.

group : Manage resource groups and template deployments.

hdinsight : Manage HDInsight resources.

identity : Managed Service Identities.

image : Manage custom virtual machine images.

interactive : Start interactive mode. Installs the Interactive extension if not installed

already.

iot : Manage Internet of Things (IoT) assets.

iotcentral : Manage IoT Central assets.

keyvault : Manage KeyVault keys, secrets, and certificates.

kusto : Manage Azure Kusto resources.

lab : Manage Azure DevTest Labs.

lock : Manage Azure locks.

login : Log in to Azure.

logout : Log out to remove access to Azure subscriptions.

managedapp : Manage template solutions provided and maintained by Independent Software

Vendors (ISVs).

managedservices : Manage the registration assignments and definitions in Azure.

maps : Manage Azure Maps.

mariadb : Manage Azure Database for MariaDB servers.

monitor : Manage the Azure Monitor Service.

mysql : Manage Azure Database for MySQL servers.

netappfiles : Manage Azure NetApp Files (ANF) Resources.

network : Manage Azure Network resources.

openshift : Manage Azure Red Hat OpenShift Services.

policy : Manage resource policies.

postgres : Manage Azure Database for PostgreSQL servers.

ppg : Manage Proximity Placement Groups.

provider : Manage resource providers.

redis : Manage dedicated Redis caches for your Azure applications.

relay : Manage Azure Relay Service namespaces, WCF relays, hybrid connections, and

rules.

reservations : Manage Azure Reservations.

resource : Manage Azure resources.

rest : Invoke a custom request.

role : Manage user roles for access control with Azure Active Directory and service

principals.

search : Manage Azure Search services, admin keys and query keys.

security : Manage your security posture with Azure Security Center.

servicebus : Manage Azure Service Bus namespaces, queues, topics, subscriptions, rules

and geo-disaster recovery configuration alias.

sf : Manage and administer Azure Service Fabric clusters.

sig : Manage shared image gallery.

signalr : Manage Azure SignalR Service.

snapshot : Manage point-in-time copies of managed disks, native blobs, or other

snapshots.

sql : Manage Azure SQL Databases and Data Warehouses.

storage : Manage Azure Cloud Storage resources.

tag : Manage resource tags.

vm : Manage Linux or Windows virtual machines.

vmss : Manage groupings of virtual machines in an Azure Virtual Machine Scale Set

(VMSS).

webapp : Manage web apps.
