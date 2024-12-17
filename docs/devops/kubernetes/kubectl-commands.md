# kubectl Commands

```bash
kgpo -A --watch | ts '[%Y-%m-%d %H:%M:%S]'
k rollout restart deployment/ticket-api -n prod

kubectl run test --rm -it --image get -- bash
kubectl run test --rm -it --image python:3.8 -- bash
kubectl run test --rm -it --image curlimages/curl -- sh
kubectl run nginx --image=nginx --restart=Never -n test
kubectl run nginx --image=nginx:1.17.4 --restart=Never --port=80
kubectl run busybox --image=busybox --restart=Never -- ls
kubectl run busybox --image=busybox --restart=Never -- /bin/sh -c "sleep 3600"
kubectl run busybox --image=nginx --restart=Never -it --rm -- echo "How are you"
kubectl run busybox --image=nginx --restart=Never -it --rm -- sh
kubectl run nginx --image=nginx --restart=Never --port=80 --expose
kubectl run nginx --image=nginx --restart=Never --requests='cpu=100m,memory=256Mi' --limits='cpu=200m,memory=512Mi'
kubectl run nginx --image=nginx --restart=Never --serviceaccount=myuser
kubectl run nginx1 --image=nginx --restart=Never --labels=app=v1

kubectl exec -it troubleshoot- -- /bin/sh
kubectl exec -it busybox -- wget -o- <IP Address>

kubectl create deploy nginx --image=nginx --dry-run -o yaml
kubectl create quota myrq --hard=cpu=1,memory=1G,pods=2 --dry-run -o yaml
kubectl create configmap config --from-literal=foo=lala --from-literal=foo2=lolo
kubectl create cm config2 --from-file=config.txt
kubectl create cm config4 --from-file=special=config4.txt
kubectl create cm config3 --from-env-file=config.env
kubectl create secret generic mysecret --from-literal=password=mypass
kubectl create secret generic mysecret2 --from-file=username
kubectl create sa myuser
kubectl create job pi --image=perl -- perl -Mbignum=bpi -wle 'print bpi(2000)'
kubectl create cronjob busybox --image=busybox --schedule="*/1 * * * *" -- /bin/sh -c 'date; echo Hello from the Kubernetes cluster'

kubectl expose deploy foo --port=6262 --target-port=8080

kubectl delete po nginx --grace-period=0 --force
kubectl delete deploy/nginx hpa/nginx

kubectl get po nginx --v=7 (6 to 10)
kubectl get po nginx --show-labels
kubectl get po -l app
kubectl get po --label-columns=app

kubectl get po -l app=v2
kubectl get po -l 'app in (v2,v1)'
kubectl get po --selector=app=v2
kubectl get pods --sort-by=.metadata.name (sorted by name)
kubectl get pods --sort-by=.metadata.creationTimestamp (sorted by creationTimestamp)
kubectl get po -o=custom-columns="POD_NAME:.metadata.name, POD_STATUS:.status.containerStatuses[].state" (custom columns)

# Annotations
kubectl annotate po nginx1 nginx2 nginx3 description='my description'
kubectl get pods -o custom-columns=Name:metadata.name,ANNOTATIONS:metadata.annotations.description
kubectl describe po nginx1 | grep -i 'annotations'
kubectl annotate po nginx{1..3} description-

kubectl label po nginx app=nginx
kubectl label po nginx1 nginx2 nginx3 app-
kubectl label po nginx{1..3} app-
kubectl label po -l app app-

kubectl label po nginx2 app=v2 --overwrite

# Rollouts / rollbacks
kubectl set image pod/nginx nginx=nginx:1.15-alpine
kubectl rollout status deploy nginx
kubectl rollout history deploy nginx
kubectl rollout history deploy nginx --revision=4

kubectl rollout undo deploy nginx
kubectl rollout undo deploy nginx --to-revision=2

kubectl rollout pause deploy nginx
kubectl rollout resume deploy nginx
kubectl rollout restart deployment/frontend #Rolling restart of frontend deploy

kubectl scale deploy nginx --replicas=5
kubectl scale sts airflow-worker --replicas=5

kubectl autoscale deploy nginx --min=5 --max=10 --cpu-percent=80

kubectl explain po.spec

kubectl top pod busybox --containers > file.log

wget -O- http://10.1.0.89:8080

```

## Debugging

exit code=137 means that either (1) something killed the container that hosted the TE or (2) something killed the process with SIGKILL (kill -9) (We can figure that out by taking theexit codeand deduct 128 from it to get the actual signal number, i.e.137-128=9)

## Commands

### `kubectl [command] [TYPE] [NAME] [flags]`

- **command**: Specifies the operation that you want to perform on one or more resources, for example **create**, **get**, **describe**, **delete**.
- **TYPE**: Specifies the [resource type](https://kubernetes.io/docs/reference/kubectl/overview/#resource-types). Resource types are case-insensitive and you can specify the singular, plural, or abbreviated forms.

- **NAME**: Specifies the name of the resource. Names are case-sensitive. If the name is omitted, details for all resources are displayed, for example `$ kubectl get pods`

- **flags**: Specifies optional flags. For example, you can use the **-s** or **--server** flags to specify the address and port of the Kubernetes API server.

## Basic Commands (Beginner)

### create

Create a resource from a file or from stdin

Imperative management of kubernetes objects using configuration files

```bash
kubectl create deploy nginx --image nginx:latest
kubectl create deploy python-test --image python:3.8
kubectl create deployment troubleshoot --image=nginx
kubectl create job --from=cronjob/loanetl loanetl-manual-002 -n apps
kubectl create secret tls example-com-tls --cert=tls.crt --key=tls.key
kubectl create secret tls ca-key-pair --key=ca.key --cert=ca.crt

# Create a pod based on the JSON passed into stdin
cat pod.json | kubectl create -f -

# Edit the data in docker-registry.yaml in JSON then create the resource using the edited data

kubectl create -f docker-registry.yaml --edit -o json
```

- clusterrole Create a ClusterRole.
- clusterrolebinding Create a ClusterRoleBinding for a particular ClusterRole
- configmap Create a configmap from a local file, directory or literal value
- cronjob Create a cronjob with the specified name.
- deployment Create a deployment with the specified name.
- job Create a job with the specified name.
- namespace Create a namespace with the specified name
- poddisruptionbudget Create a pod disruption budget with the specified name.
- priorityclass Create a priorityclass with the specified name.
- quota Create a quota with the specified name.
- role Create a role with single rule.
- rolebinding Create a RoleBinding for a particular Role or ClusterRole
- secret Create a secret using specified subcommand
- service Create a service using specified subcommand.
- serviceaccount Create a service account with the specified name

### expose

Take a replication controller, service, deployment or pod and expose it as a new Kubernetes Service

```bash
kubectl expose deployment hello-nginx --type=NodePort
kubectl expose deployment hello-server --type="LoadBalancer"
```

### run

Run a particular image on the cluster

```bash
kubectl run hello-nginx --image=nginx --port=80
kubectl run -t -i kub-log --image=deepaksood619/kubernetes_logger:latest
```

### set

Set specific features on objects

run-container Run a particular image on the cluster. This command is deprecated, use "run" instead

## Basic Commands (Intermediate)

### get Display one or many resources

`kubectl get nodes`

```bash
# show public ip of nodes
kubectl get nodes -o wide | awk {'print $1" " $2 " " $7'} | column -t
kubectl get pods -o wide
kubectl get pods --show-labels
kubectl get deployments
kubectl get services
kubectl get replicasets
kubectl get svc

kubectl get events
kubectl get events --watch

kubectl get crd
kubectl get endpoints (ep)
kubectl get pods -A (kubectl get pods --all-namespaces)

-w for watch

## explain Documentation of resources
kubectl explain deployment
kubectl explain deployment --recursive
kubectl explain deployment.spec.strategy
kubectl explain deploy.spec.strategy (works with short names too)

edit Edit a resource on the server

## delete Delete resources by filenames, stdin, resources and names, or by resources and label selector

kubectl delete service -l run=kubernetes-bootcamp
kubectl delete deployment hello-python
kubectl delete daemonsets,replicasets,services,deployments,pods,rc,pvc,cm --all

## Deploy Commands

## rollout Manage the rollout of a resource

rolling-update Perform a rolling update of the given ReplicationController
k rollout history deployment.v1.apps/kg-kong -n kong
k rollout undo deployment.v1.apps/kg-kong -n kong

## *scale* Set a new size for a Deployment, ReplicaSet, Replication Controller, or Job

kubectl scale --replicas=3 deployment/hello-nginx
kubectl scale --replicas=10 deployment/kub-log

## autoscale Auto-scale a Deployment, ReplicaSet, or ReplicationController

kubectl autoscale deployment foo --min=2 --max=10 --cpu-percent=70

# Autoscale pod foo with a minimum of 2 and maximum of 10 replicas when CPU utilization is equal to or greater than 70%

## Cluster Management Commands

certificate Modify certificate resources.

## *cluster-info* Display cluster info

## top Display Resource (CPU/Memory/Storage) usage

kubectl top node
kubectl top pod
kubectl top pod --namespace=NAMESPACE
kubectl top pod c360-production-598cf9c859-5jlx5 --containers
kubectl top po -A --sort-by=cpu
kubectl top po -A --sort-by=memory

## cordon Mark node as unschedulable. Used for maintenance of cluster

## uncordon Mark node as schedulable. Used after maintenance

## drain Drain node. Removes pods from node via graceful termination for maintenance

kubectl drain aks-agentpool-10140213-9 --ignore-daemonsets

## taint Update the taints on one or more nodes. Taint a node so they can only run dedicated workloads or certain pods that need specialized hardware

kubectl taint nodes aks-agentpool-10140213-9 node=historical:NoSchedule

# to overwrite previous taint

kubectl taint nodes --overwrite aks-agentpool-10140213-0 node=example-0:NoSchedule

# to remove a taint
kubectl taint nodes aks-agentpool-10140213-9 node=NoSchedule-

tolerations:
- key: "key"
operator: "Equal"
value: "value"
effect: "NoSchedule"
```

## Troubleshooting and Debugging Commands

```bash
*describe* Show details of a specific resource or group of resources

kubectl describe node
kubectl describe pod
kubectl describe pod <pod_name> #get pod name using kubectl get pods
kubectl describe service hello-nginx
kubectl describe deployments <deployment_name>

## logs Print the logs for a container in a pod

kubectl logs counter
kubectl logs --previous counter # --previous command to retrieve logs from a previous instantiation of a container
kubectl logs -p alert-trent-7c55c54cb-6gjhc -n consumers
kubectl logs --since-time='2019-04-23T12:30:36.750121287Z' --timestamps ke-cp-kafka-connect658bfcd6fb-852fv -c cp-kafka-connect-server -n kafka
kubectl logs busybox
kubectl logs busybox -p #previous logs
klo -l app=admin-panel -c celery -n prod --prefix

## attach Attach to a running container
kubectl attach -it kafka-manager-5f54d74d89-mdxh4 -n kafka

## exec Execute a command in a container
kubectl exec monolith --stdin --tty -c monolith /bin/sh
kubectl exec -it druid-republisher-fd8bb77bd-zgjf7 -- /bin/bash
kubectl exec -n kafka -it my-kafka-connect-cp-kafka-connect-5ff6d9758d-gjk22 -c cp-kafka-connect-server -- /bin/bash
kubectl exec example-0 cfurl http://10.8.0.1:9101

## port-forward Forward one or more local ports to a pod

kubectl port-forward svc/emqx-service 18083:18083 --namespace kube-system
kubectl port-forward svc/kafka-manager 8000:80 -n kafka
kubectl port-forward <service_name> <host_port>:<service_running_port> -n kafka

proxy Run a proxy to the Kubernetes API server

cp Copy files and directories to and from containers
kubectl cp busybox:/etc/passwd ./passwd

# copy data from container to local
kubectl cp prod/admin-panel-0:/app/dumpdata.sql Downloads/Office/backup/dumpdata.sql

# Copy /tmp/foo_dir local directory to /tmp/bar_dir in a remote pod in the default namespace
kubectl cp /tmp/foo_dir<some-pod>:/tmp/bar_dir

# Copy /tmp/foo local file to /tmp/bar in a remote pod in a specific container
kubectl cp/tmp/foo<some-pod>:/tmp/bar-c<specific-container>

# Copy /tmp/foo local file to /tmp/bar in a remote pod in namespace <some-namespace>
kubectl cp /tmp/foo<some-namespace>/<some-pod>:/tmp/bar

# Copy /tmp/foo from a remote pod to /tmp/bar locally
kubectl cp <some-namespace>/<some-pod>:/tmp/foo/tmp/bar

auth Inspect authorization

## Advanced Commands

## apply Apply a configuration to a resource by filename or stdin

Declarative management of kubernetes objects using configuration files

kubectl apply -f k8s/vernemq-statefulset.yaml --dry-run
kubectl apply -f k8s/locust-service.yaml --force

# patch Update field(s) of a resource using strategic merge patch

# for performing rolling update on statefulset

## kubectl patch statefulset web -p '{"spec":{"updateStrategy":{"type":"RollingUpdate"}}}'

replace Replace a resource by filename or stdin

convert Convert config files between different API versions

## Settings Commands

## *label* Update the labels on a resource

kubectl label pod $POD_NAME app=v1
kubectl label nodes aks-agentpool-10140213-9 node=historical
kubectl label nodes aks-agentpool-10140213-0 node=example
kubectl label node aks-agentpool-10140213-0 node-

annotate Update the annotations on a resource

completion Output shell completion code for the specified shell (bash or zsh)
```

### Patch

```bash
# remove daemonset from all nodes by adding selector
kubectl patch daemonset metricbeat-cms-metricbeat -p '{"spec": {"template": {"spec": {"nodeSelector": {"non-existing": "true"}}}}}'

# remove selector to deploy daemonset to all nodes
kubectl -n <namespace> patch daemonset <name-of-daemon-set> --type json -p='[{"op": "remove", "path": "/spec/template/spec/nodeSelector/non-existing"}]'

# https://stackoverflow.com/questions/53929693/how-to-scale-kubernetes-daemonset-to-0

# patch hpa
kubectl patch hpa cnext-backend-production-hpa -n prod --type='json' -p='[{"op": "replace", "path": "/spec/minReplicas", "value": 30}]'
```

## Other Commands

### api-resources

Print all api-resources available in the cluster

api-versions Print the supported API versions on the server, in the form of "group/version"

- admissionregistration.k8s.io/v1beta1
- apiextensions.k8s.io/v1beta1
- apiregistration.k8s.io/v1
- apiregistration.k8s.io/v1beta1
- apps/v1

    apps/v1 is the most popular API group in Kubernetes, and it includes functionality related to running applications on Kubernetes, like Deployments, RollingUpdates, and ReplicaSets.

- apps/v1beta1
- apps/v1beta2
- authentication.k8s.io/v1
- authentication.k8s.io/v1beta1
- authorization.k8s.io/v1
- authorization.k8s.io/v1beta1
- autoscaling/v1

    autoscaling/v1 allows pods to be autoscaled based on different resource usage metrics

- autoscaling/v2beta1
- autoscaling/v2beta2
- azmon.container.insights/v1
- batch/v1
- batch/v1 is related to batch processing and and jobs
- batch/v1beta1
- batch/v1beta1 is the beta release of batch/v1

certificates.k8s.io/v1beta1

certificates.k8s.io/v1beta1 validates network certificates for secure communication in your cluster.

- coordination.k8s.io/v1
- coordination.k8s.io/v1beta1
- enterprises.upmc.com/v1
- events.k8s.io/v1beta1
- extensions/v1beta1

    extensions/v1beta1 includes many new, commonly used features. In Kubernetes 1.6, some of these features were relocated fromextensionsto specific API groups like apps

- metrics.k8s.io/v1beta1
- monitoring.coreos.com/v1
- networking.k8s.io/v1
- node.k8s.io/v1beta1
- policy/v1beta1
- policy/v1beta1 enables setting a pod disruption budget and new pod security rules
- rbac.authorization.k8s.io/v1

    rbac.authorization.k8s.io/v1 includes extra functionality for Kubernetes RBAC - (role-based access control)

- rbac.authorization.k8s.io/v1beta1
- scheduling.k8s.io/v1
- scheduling.k8s.io/v1beta1
- storage.k8s.io/v1
- storage.k8s.io/v1beta1
- v1

    v1 was the first stable release of the Kubernetes API. It contains many core objects.

### config

Modify kubeconfig files

```bash
export KUBECONFIG=/Users/deepaksood/kubeconfig-file.yaml

kubectl --kubeconfig kubeconfig-file.yaml get pods
```

- current-context Displays the current-context
- delete-cluster Delete the specified cluster from the kubeconfig
- delete-context Delete the specified context from the kubeconfig
- get-clusters Display clusters defined in the kubeconfig
- get-contexts Describe one or many contexts
- rename-context Renames a context from the kubeconfig file.
- set Sets an individual value in a kubeconfig file
- set-cluster Sets a cluster entry in kubeconfig
- set-context Sets a context entry in kubeconfig

    permanently save the namespace for all subsequent kubectl commands in that context.

- kubectl config set-context --current --namespace=monitoring**
- set-credentials Sets a user entry in kubeconfig
- unset Unsets an individual value in a kubeconfig file
- use-context Sets the current-context in a kubeconfig file
- view Display merged kubeconfig settings or a specified kubeconfig file
- kubectl config current-context
- kubectl config use-context docker-for-desktop
- kubectl config set-context $(kubectl config current-context) --namespace=blue
- kubectl config delete-cluster my-cluster
- kubectl config delete-context my-cluster-context
- help Help about any command
- plugin Runs a command-line plugin

### version

Print the client and server version information

### options

### Usage

```bash
kubectl [flags] [options]

- kubectl apply -f service.yaml
- kubectl edit deployment <container_name>
- kubectl history deployment <container_name>
```

## Commands

```bash
kubectl get secret eager-otter-grafana -o yaml
kubectl get secret --namespace default eager-otter-grafana -o jsonpath="{.data.admin-password}" | base64 --decode ; echo

# Adding Secrets for pulling images from private registry
    https://container-solutions.com/using-google-container-registry-with-kubernetes/

kubectl create secret docker-registry gcr-json-key --docker-server=gcr.io --docker-username=_json_key --docker-password="$(cat ~/json-key-file.json)" --docker-email=deepak.sood@abc.com

kubectl patch serviceaccount default -p '{"imagePullSecrets": [{"name": "gcr-json-key"}]}'

kubectl patch serviceaccount default -p '{"imagePullSecrets": [{"name": "gcr-json-key"}]}' -n zenalytix

# CPU Requests
kubectl get po --all-namespaces -o=jsonpath="{range .items[*]}{.metadata.namespace}:{.metadata.name}{'\n'}{range .spec.containers[*]}  {.name}:{.resources.requests.cpu}{'\n'}{end}{'\n'}{end}"

# Memory Requests
kubectl get po --all-namespaces -o=jsonpath="{range .items[*]}{.metadata.namespace}:{.metadata.name}{'\n'}{range .spec.containers[*]}  {.name}:{.resources.requests.memory}{'\n'}{end}{'\n'}{end}"

# CPU Limits
kubectl get po --all-namespaces -o=jsonpath="{range .items[*]}{.metadata.namespace}:{.metadata.name}{'\n'}{range .spec.containers[*]}  {.name}:{.resources.limits.cpu}{'\n'}{end}{'\n'}{end}"
```

## Experimental commands

`kubectl diff -f k8s/vernemq-statefulset.yaml`

## Kubectl dashboard

```bash
kubectl edit svc/kubernetes-dashboard -n kube-system

Add - loadBalancerIP: 52.172.40.253
Change - type: LoadBalancer

kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v1.10.1/src/deploy/recommended/kubernetes-dashboard.yaml

kubectl proxy

https://github.com/kubernetes/dashboard

# Get bearer token
kubectl -n kube-system describe secret $(kubectl -n kube-system get secret | grep admin-user | awk '{print $1}')

eyJhbGciOiJSUzI1NiIsImtpZCI6IiJ9.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlLXN5c3RlbSIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJ0dGwtY29udHJvbGxlci10b2tlbi1zcTYyaiIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50Lm5hbWUiOiJ0dGwtY29udHJvbGxlciIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50LnVpZCI6IjZhMzFmZDYwLTMzNGQtMTFlOS04OTk4LTAyNTAwMDAwMDAwMSIsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDprdWJlLXN5c3RlbTp0dGwtY29udHJvbGxlciJ9.bmsdSGQH2Pgn50DbyAOKSD25GZW6A51vxcPGmFpJn1ZBkD4GQxqt4g36dJGsuD4TAHnPUOecQxuGBNJYZrpxP9qbvByqd5AfllTTHRIp170oNO65f7bN9sNfXbQev0CbxU5zOoDUoLz7KuA1qKX1chiPTq2TioRd-g6tUc9Ly1qpg7nbt4LKMCw0Kyg7H9g2Pi7s484IHvtWtrDMOsoYaix1baeujMYq4pSE8X_MNA_IPYlkF9GdpjX2OMJmsXSXlCr7-hV9gkIporAVqozLL-Upxknpt-2jfIZ5UYmgoCC4dOXTTzAe9FaMAr50ipiQzj1b7ENVtn5hMYboyuvieQ
```

### Kubernetes dashboard

http://localhost:8001/api/v1/namespaces/kube-system/services/https:kubernetes-dashboard:/proxy

### Decoding a Secret

```bash
kubectl get secret mysecret -o yaml
echo 'MWYyZDFlMmU2N2Rm' | base64 --decode
```

https://kubernetes.io/docs/concepts/configuration/secret/#decoding-a-secret

## Example - Counter every 1 sec

```yaml
apiVersion: v1
kind: Pod
metadata:
    name: counter
spec:
    containers:
        - name: count
        image: busybox
args: [/bin/sh, -c, 'i=0; while true; do echo "$i: $(date)"; i=$((i+1)); sleep 1; done']
```

### Kubectl apply vs create

Those are two different approaches.kubectl createis what we call[Imperative Management](https://kubernetes.io/docs/tutorials/object-management-kubectl/imperative-object-management-configuration/). On this approach you tell the Kubernetes API what you want to create, replace or delete, not how you want your K8s cluster world to look like.

kubectl applyis part of the[Declarative Management](https://kubernetes.io/docs/tutorials/object-management-kubectl/declarative-object-management-configuration/) approach, where changes that you may have applied to a live object (i.e. throughscale) are maintained even if youapplyother changes to the object.

### Tab Completion in iterm zsh / Auto complete

Add ~/.zshrc file

`source <(kubectl completion zsh)`

### Storage Class

Setting default storage class

```bash
kubectl patch storageclass <your-class-name> -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"false"}}}'

kubectl patch storageclass <your-class-name> -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}'
```

## Cleanup / clean up commands

```bash
kubectl get pv | grep Released
kubectl delete pv $(kubectl get pv | grep Released | awk {'print $1'})
kubectl delete -n uat pvc $(kubectl get pvc -n uat | awk {'print $1'})

Delete unused PVCs
kubectl describe -A pvc | grep -E "^Name:.*$|^Namespace:.*$|^Used By:.*$" | grep -B 2 "<none>" | grep -E "^Name:.*$|^Namespace:.*$"

kubectl describe -A pvc | grep -E "^Name:.*$|^Namespace:.*$|^Used By:.*$" | grep -B 2 "<none>" | grep -E "^Name:.*$|^Namespace:.*$" | cut -f2 -d: | paste -d " " - - | xargs -n2 bash -c 'kubectl -n ${1} delete pvc ${0}'

#remove old replicasets
kubectl get --all-namespaces rs -o json|jq -r '.items[] | select(.spec.replicas | contains(0)) | "kubectl delete rs --namespace=\(.metadata.namespace) \(.metadata.name)"'

#remove jobs
kubectl delete job $(kubectl get jobs| awk '$3 ~ 1' | awk '{print $1}')
kubectl delete job $(kubectl get jobs -n maintenance | awk '{print $1}') -n maintenance
kubectl delete job $(kubectl get jobs -n zenalytix | awk '$3 ~ 0' | awk '{print $1}') -n zenalytix

kubectl delete pod $(kubectl get pods -l app=alertdriver -n zenalytix | awk '{print $1}') -n zenalytix

# Delete namespace stuck at terminating state
    (
NAMESPACE=your-rogue-namespace
kubectl proxy &
kubectl get namespace $NAMESPACE -o json |jq '.spec = {"finalizers":[]}' >temp.json
curl -k -H "Content-Type: application/json" -X PUT --data-binary @temp.json 127.0.0.1:8001/api/v1/namespaces/$NAMESPACE/finalize
)

# delete pods using regex
kubectl get pods -n crons --no-headers=true | awk '/app-rating-report/{print $1}' | xargs kubectl delete -n crons pod

# delete all pods with Error status
kubectl get pods -n crons --no-headers=true | awk '/Error/{print $1}' | xargs kubectl delete -n crons pod

# completed pods
    kubectl get pod --field-selector=status.phase==Succeeded
    kubectl delete pod --field-selector=status.phase==Succeeded

    kubectl get pods | grep Completed | awk '{print $1}' | xargs kubectl delete pod
    kubectl get pods -n crons | grep -iv Running | awk '{print $1}' | xargs kubectl delete -n crons pod

#remove evicted pods
kubectl get pods -n <namespace> | grep Evicted | awk '{print $1}' | xargs kubectl delete pod -n <namespace>
kubectl get pods -n apps | grep Evicted  | awk '{print $1}' | xargs kubectl delete pod -n apps
kubectl get pods -A | grep Evicted  | awk '{print $1}' | xargs kubectl delete pod -A

# Delete pods older than X seconds
kubectl get pods -n crons -o go-template --template '{{range .items}}{{.metadata.name}} {{.metadata.creationTimestamp}}{{"\n"}}{{end}}' | awk '$2 <= "'$(date -d 'yesterday' -Ins --utc | sed 's/+0000/Z/')'" { print $1 }' | xargs --no-run-if-empty kubectl delete pod -n crons

kubectl get pods -n crons -o go-template --template '{{range .items}}{{.metadata.name}} {{.metadata.creationTimestamp}}{{"\n"}}{{end}}' | awk '$2 <= "'$(date -v-120M "+%Y-%m-%dT%H:%M:%S")'" { print $1 }' | xargs --no-run-if-empty kubectl delete pod -n crons

# delete NotReady Pods
kubectl delete node $(kubectl get nodes | grep NotReady,SchedulingDisabled | awk '{print $1;}')

# if stuck in EKS
kubectl patch node/ip-172-30-17-201.ap-southeast-1.compute.internal -p '{"metadata":{"finalizers":[]}}' --type=merge
```

## Requests and Limits

[GitHub - robscott/kube-capacity: A simple CLI that provides an overview of the resource requests, limits, and utilization in a Kubernetes cluster](https://github.com/robscott/kube-capacity)

```bash
curl -fsSLO https://github.com/robscott/kube-capacity/releases/download/v0.8.0/kube-capacity_v0.8.0_linux_x86_64.tar.gz

tar -xzvf kube-capacity_v0.8.0_linux_x86_64.tar.gz
mv kube-capacity /usr/bin

brew tap robscott/tap
brew install robscott/tap/kube-capacity

brew install kube-capacity

# cluster wide
kube-capacity
kube-capacity --util
kube-capacity --util --sort cpu.util
kube-capacity --util --sort cpu.util.percentage
kube-capacity --util --sort memory.util.percentage

kube-capacity --pods --util --sort cpu.util
kube-capacity --pods --util --sort memory.util.percentage

kube-capacity --available

kube-capacity --node-taints special:NoSchedule

kube-capacity --no-taint

kube-capacity --pod-count

kube-capacity --pods --util --sort memory.util.percentage --namespace prod

kube-capacity --pods --util --sort memory.util.percentage --namespace tidb-cluster
```

[Easy to list Kubernetes resource requests and limits with kube-capacity](https://viblo.asia/p/easy-to-list-kubernetes-resource-requests-and-limits-with-kube-capacity-english-Rk74avM6JeO)

[Releases · robscott/kube-capacity](https://github.com/robscott/kube-capacity/releases)

```python
import re
import subprocess

def get_total_requests(node_name):
result = subprocess.check_output("kubectl get pods --all-namespaces "
f"-o wide --field-selector spec.nodeName={node_name} "
"| awk '{print $1,$2,$4}'", shell=True)

result = result.decode('utf-8')
result = result.split('n')
pods = []

for i in range(1, len(result) - 1):
namespace, pod_name, state = result[i].split()

if state == 'Running':
pods.append((pod_name, namespace))

total_ram = 0
total_cpu = 0

for pod in pods:
pod_name, namespace = pod
query = f"kubectl get pod {pod_name} -n {namespace} -o=jsonpath='"
r'{.spec.containers[*].resources.requests.cpu}{"n"}'
"{.spec.containers[*].resources.requests.memory}'"
result = subprocess.check_output(query, shell=True)

result = result.decode('utf-8')
cpu_requests, memory_requests = result.split('n')

cpu_requests = cpu_requests.split()
memory_requests = memory_requests.split()
total_cpu_pod = total_ram_pod = 0

for cpu_request in cpu_requests:
total_cpu_pod += int(re.search(r'd+', cpu_request).group())

for ram_request in memory_requests:
total_ram_pod += int(re.search(r'd+', ram_request).group())

print(f'{pod_name}: {total_cpu_pod} {total_ram_pod}')
total_cpu += total_cpu_pod
total_ram += total_ram_pod

print(f'requested_cpu: {total_cpu} nrequested_ram: {total_ram}')
```

## References

- https://rominirani.com/tutorial-getting-started-with-kubernetes-with-docker-on-mac-7f58467203fd
- https://kubernetes.io/docs/reference/kubectl/cheatsheet
- https://kubernetes.io/docs/reference/kubectl/overview
- https://github.com/dgkanatsios/CKAD-exercises
