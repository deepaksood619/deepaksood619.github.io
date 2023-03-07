# Secrets

Kubernetes Secrets let you store and manage sensitive information, such as passwords, OAuth tokens, and ssh keys. Storing confidential information in a Secret is safer and more flexible than putting it verbatim in a [Pod](https://kubernetes.io/docs/concepts/workloads/pods/pod-overview/) definition or in a [container image](https://kubernetes.io/docs/reference/glossary/?all=true#term-image).

To use a secret, a Pod needs to reference the secret. A secret can be used with a Pod in three ways:

- As [files](https://kubernetes.io/docs/concepts/configuration/secret/#using-secrets-as-files-from-a-pod) in a [volume](https://kubernetes.io/docs/concepts/storage/volumes/) mounted on one or more of its containers.
- As [container environment variable](https://kubernetes.io/docs/concepts/configuration/secret/#using-secrets-as-environment-variables).
- By the [kubelet when pulling images](https://kubernetes.io/docs/concepts/configuration/secret/#using-imagepullsecrets) for the Pod.

## Built-in Secrets

Service accounts automatically create and attach Secrets with API credentials

Kubernetes automatically creates secrets which contain credentials for accessing the API and automatically modifies your Pods to use this type of secret.

The automatic creation and use of API credentials can be disabled or overridden if desired. However, if all you need to do is securely access the API server, this is the recommended workflow.

## Creating a Secret Usingkubectl

kubectl create secret generic db-user-pass --from-file=./username.txt --from-file=./password.txt

## Mounted Secrets are updated automatically

When a secret currently consumed in a volume is updated, projected keys are eventually updated as well. The kubelet checks whether the mounted secret is fresh on every periodic sync. However, the kubelet uses its local cache for getting the current value of the Secret. The type of the cache is configurable using theConfigMapAndSecretChangeDetectionStrategyfield in the [KubeletConfiguration struct](https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/kubelet/config/v1beta1/types.go). A Secret can be either propagated by watch (default), ttl-based, or simply redirecting all requests directly to the API server. As a result, the total delay from the moment when the Secret is updated to the moment when new keys are projected to the Pod can be as long as the kubelet sync period + cache propagation delay, where the cache propagation delay depends on the chosen cache type (it equals to watch propagation delay, ttl of cache, or zero correspondingly).

Note:A container using a Secret as a [subPath](https://kubernetes.io/docs/concepts/storage/volumes#using-subpath) volume mount will not receive Secret updates.

## Immutable Secrets and ConfigMaps

The Kubernetes alpha featureImmutable Secrets and ConfigMapsprovides an option to set individual Secrets and ConfigMaps as immutable. For clusters that extensively use Secrets (at least tens of thousands of unique Secret to Pod mounts), preventing changes to their data has the following advantages:

- protects you from accidental (or unwanted) updates that could cause applications outages
- improves performance of your cluster by significantly reducing load on kube-apiserver, by closing watches for secrets marked as immutable.

Note:Once a Secret or ConfigMap is marked as immutable, it isnotpossible to revert this change nor to mutate the contents of thedatafield. You can only delete and recreate the Secret. Existing Pods maintain a mount point to the deleted Secret - it is recommended to recreate these pods.

## Security properties

## Protections

Because secrets can be created independently of the Pods that use them, there is less risk of the secret being exposed during the workflow of creating, viewing, and editing Pods. The system can also take additional precautions with Secrets, such as avoiding writing them to disk where possible.

A secret is only sent to a node if a Pod on that node requires it. The kubelet stores the secret into atmpfsso that the secret is not written to disk storage. Once the Pod that depends on the secret is deleted, the kubelet will delete its local copy of the secret data as well.

There may be secrets for several Pods on the same node. However, only the secrets that a Pod requests are potentially visible within its containers. Therefore, one Pod does not have access to the secrets of another Pod.

There may be several containers in a Pod. However, each container in a Pod has to request the secret volume in itsvolumeMountsfor it to be visible within the container. This can be used to construct useful [security partitions at the Pod level](https://kubernetes.io/docs/concepts/configuration/secret/#use-case-secret-visible-to-one-container-in-a-pod).

On most Kubernetes distributions, communication between users and the API server, and from the API server to the kubelets, is protected by SSL/TLS. Secrets are protected when transmitted over these channels.

You can enable [encryption at rest](https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/) for secret data, so that the secrets are not stored in the clear into [etcd](https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/).

## Risks

- In the API server, secret data is stored in [etcd](https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/); therefore:
  - Administrators should enable encryption at rest for cluster data (requires v1.13 or later).
  - Administrators should limit access to etcd to admin users.
  - Administrators may want to wipe/shred disks used by etcd when no longer in use.
  - If running etcd in a cluster, administrators should make sure to use SSL/TLS for etcd peer-to-peer communication.
- If you configure the secret through a manifest (JSON or YAML) file which has the secret data encoded as base64, sharing this file or checking it in to a source repository means the secret is compromised. Base64 encoding isnotan encryption method and is considered the same as plain text.
- Applications still need to protect the value of secret after reading it from the volume, such as not accidentally logging it or transmitting it to an untrusted party.
- A user who can create a Pod that uses a secret can also see the value of that secret. Even if the API server policy does not allow that user to read the Secret, the user could run a Pod which exposes the secret.
- Currently, anyone with root permission on any node can readanysecret from the API server, by impersonating the kubelet. It is a planned feature to only send secrets to nodes that actually require them, to restrict the impact of a root exploit on a single node.

<https://kubernetes.io/docs/concepts/configuration/secret>

## Secrets env variables vs volume mounts

Kubernetes secrets exposed by environment variables may be able to be enumerated on the host via /proc/. If this is the case it's probably safer to load them via volume mounts.

In an multi container pod, each container inside a pod has to request the secret volume in itsvolumeMountsfor it to be visible within the container. This can be used to construct useful security partition at pod level.

In some systems when the process crashes it **logs all the environment variable**. So that's a bad thing

## Secret Sprawl

<https://www.youtube.com/watch?v=DQtbC88ArRI>

## EncryptionConfiguration

In order to encrypt secrets, you must create an **EncryptionConfiguration** object with a key and proper identity. Then, the kube-apiserver needs the**--encryption-provider-config**flag set to a previously configured provider, such as aescbc or ksm. Once this is enabled, you need to recreate every secret, as they are encrypted upon write. Multiple keys are possible.Each key for a provider is tried during decryption. The first key of the first provider is used for encryption. To rotate keys, first create a new key, restart (all) kube-apiserver processes, then recreate every secret.

<https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data>
