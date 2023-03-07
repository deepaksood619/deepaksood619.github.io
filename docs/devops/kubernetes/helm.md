# Helm

## The package manager for Kubernetes

Helm is a tool for managing Kubernetes charts. Charts are packages of pre-configured Kubernetes resources.

Helm helps you manage Kubernetes applications - Helm Charts helps you define, install, and upgrade even the most complex Kubernetes application.

Charts are easy to create, version, share, and publish - so start using Helm and stop the copy-and-paste.

Use Helm to:

- Find and use [popular software packaged as Kubernetes charts](https://github.com/kubernetes/charts)
- Share your own applications as Kubernetes charts
- Create reproducible builds of your Kubernetes applications
- Intelligently manage your Kubernetes manifest files
- Manage releases of Helm packages

Helm is a tool that streamlines installing and managing Kubernetes applications. Think of it like apt/yum/homebrew for Kubernetes.

- Helm has two parts: a client (helm) and a server (tiller)
- Tiller runs inside of your Kubernetes cluster, and manages releases (installations) of your charts.
- Helm runs on your laptop, CI/CD, or wherever you want it to run.
- Charts are Helm packages that contain at least two things:
  - A description of the package (Chart.yaml)
  - One or more templates, which contain Kubernetes manifest files
- Charts can be stored on disk, or fetched from remote chart repositories (like Debian or RedHat packages)

## Charts

Helm uses a packaging format calledcharts. A chart is a collection of files that describe a related set of Kubernetes resources. A single chart might be used to deploy something simple, like a memcached pod, or something complex, like a full web app stack with HTTP servers, databases, caches, and so on.

Charts are created as files laid out in a particular directory tree, then they can be packaged into versioned archives to be deployed.

- Library Chart

## Commands

```bash
Common actions from this point include:
  - helm search:    search for charts
  - helm fetch:     download a chart to your local directory to view
  - helm install:   upload the chart to Kubernetes
  - helm list:      list releases of charts

Environment:
  $HELM_HOME           set an alternative location for Helm files. By default, these are stored in ~/.helm
  $HELM_HOST           set an alternative Tiller host. The format is host:port
  $HELM_NO_PLUGINS     disable plugins. Set HELM_NO_PLUGINS=1 to disable plugins.
  $TILLER_NAMESPACE    set an alternative Tiller namespace (default "kube-system")
  $KUBECONFIG          set an alternative Kubernetes configuration file (default "~/.kube/config")
  $HELM_TLS_CA_CERT    path to TLS CA certificate used to verify the Helm client and Tiller server certificates (default "$HELM_HOME/ca.pem")
  $HELM_TLS_CERT       path to TLS client certificate file for authenticating to Tiller (default "$HELM_HOME/cert.pem")
  $HELM_TLS_KEY        path to TLS client key file for authenticating to Tiller (default "$HELM_HOME/key.pem")
  $HELM_TLS_VERIFY     enable TLS connection between Helm and Tiller and verify Tiller server certificate (default "false")
  $HELM_TLS_ENABLE     enable TLS connection between Helm and Tiller (default "false")
  $HELM_KEY_PASSPHRASE set HELM_KEY_PASSPHRASE to the passphrase of your PGP private key. If set, you will not be prompted for
                        the passphrase while signing helm charts

Usage:
  helm [command]

Available Commands:
  completion  Generate autocompletions script for the specified shell (bash or zsh)
  source <(helm completion zsh) # ~/.zshrc
  create      create a new chart with the given name
  helm create dockercoins
  delete      given a release name, delete the release from Kubernetes
  helm delete <name_from_helm_list>
  dependency  manage a charts dependencies
  helm dependency update
  fetch       download a chart from a repository and (optionally) unpack it in local directory
  helm fetch stable/elastic-stack
  get         download a named release
  helm get <release_name>
  helm get values gitlab > gitlab.yaml
pull        download a chart from a repository and (optionally) unpack it in local directory
  helm pull redash/redash
  help        Help about any command
  history     fetch release history
  helm history air
  helm history <deployment_name>
  home        displays the location of HELM_HOME
  inspect     inspect a chart
  helm inspect stable/prometheus
  install     install a chart archive
  helm install stable/elastic-stack
  helm install --name ke -f values.yaml --namespace kafka .
  lint        examines a chart for possible issues
  helm lint .
  list        list releases
  package     package a chart directory into a chart archive
  plugin      add, list, or remove Helm plugins
  repo        add, list, remove, update, and index chart repositories
  helm repo list
  helm repo update
  helm repo add incubator-new https://kubernetes-charts-incubator.storage.googleapis.com/
  helm repo add stable https://kubernetes-charts.storage.googleapis.com/
  helm repo add bitnami https://charts.bitnami.com/bitnami
  reset       uninstalls Tiller from a cluster
  rollback    roll back a release to a previous revision
  helm rollback dr 2
  helm rollback <release_name> <version_number_to_rollback_to>
  search      search for a keyword in charts
  helm search   #show all helm charts available
  helm search repo/hub elastic
  serve       start a local http web server
  status      displays the status of the named release
  helm status <release_name>
  helm status kg
  helm status ke
  template    locally render templates
  helm template .
  test        test a release
  upgrade     upgrade a release
  helm upgrade -f values.yaml ke .
  verify      verify that a chart at the given path has been signed and is valid
  version     print the client/server version information

Flags:
      --debug                           enable verbose output
  -h, --help                            help for helm
      --home string                     location of your Helm config. Overrides $HELM_HOME (default "/Users/deepaksood/.helm")
      --host string                     address of Tiller. Overrides $HELM_HOST
      --kube-context string             name of the kubeconfig context to use
      --kubeconfig string               absolute path to the kubeconfig file to use
      --tiller-connection-timeout int   the duration (in seconds) Helm will wait to establish a connection to tiller (default 300)
      --tiller-namespace string         namespace of Tiller (default "kube-system")

Completion Script
source <(helm completion bash)
```

```bash
helm install --name=kafka --set cp-schema-registry.enabled=false,cp-kafka-rest.enabled=false,cp-kafka-connect.enabled=false,cp-zookeeper.servers=1,cp-kafka.brokers=1 confluent/cp-helm-charts
helm inspect confluent/cp-helm-charts

helm list: cannot list configmaps in the namespace "kube-system"
kubectl create serviceaccount --namespace kube-system tiller
kubectl create clusterrolebinding tiller-cluster-rule --clusterrole=cluster-admin --serviceaccount=kube-system:tiller
kubectl patch deploy --namespace kube-system tiller-deploy -p '{"spec":{"template":{"spec":{"serviceAccount":"tiller"}}}}'
helm init --service-account tiller --upgrade

# Helm dry run and debug
helm install --set elasticsearch.spec.data-volume-size=500Gi --dry-run --debug akomljen-charts/efk

# Helm install and upgrade
helm install --name efk -f efk/values.yaml --namespace logging akomljen-charts/efk

helm upgrade efk -f efk/values.yaml --namespace logging akomljen-charts/efk
```

## Charts

<https://github.com/confluentinc/cp-helm-charts>

## Helm3

```bash
helm3 install stable/mysql --generate-name
helm3 ls
helm3 uninstall smiling-penguin
helm3 status smiling-penguin
helm3 install kg -f kong/values-prod.yaml stable/kong
helm3 list --namespace kong

helm upgrade --install redis --values k8s/redis-values-production.yaml --namespace apps bitnami/redis
```

## Plugins

```bash
helm plugin list
helm plugin update whatup
helm plugin remove whatup
```

### Helm Whatup

This is a Helm plugin to help users determine if there's an update available for their installed charts. It works by reading your locally cached index files from the chart repositories (viahelm repo update) and checking the version against the latest deployed version of your charts in the Kubernetes cluster.

```bash
helm plugin install <https://github.com/bacongobbler/helm-whatup>
helm whatup
```

DevOps Guy - <https://www.youtube.com/watch?v=5_J7RWLLVeQ>
