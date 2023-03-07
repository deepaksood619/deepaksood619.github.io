# Storage

1. Volumes
2. Persistant Volumes
3. Volume Snapshots
4. Storage Classes
5. Volume Snapshot Classes
6. Dynamic Volume Provisioning
7. Node-specific Volume Limits

## Volumes

On-disk files in a Container are ephemeral, which presents some problems for non-trivial applications when running in Containers. First, when a Container crashes, kubelet will restart it, but the files will be lost - the Container starts with a clean state. Second, when running Containers together in a **Pod** it is often necessary to share files between those Containers. The Kubernetes **Volume** abstraction solves both of these problems.

At its core, a volume is just a directory, possibly with some data in it, which is accessible to the Containers in a Pod. How that directory comes to be, the medium that backs it, and the contents of it are determined by the particular volume type used.

To use a volume, a Pod specifies what volumes to provide for the Pod (the.spec.volumesfield) and where to mount those into Containers (the.spec.containers.volumeMountsfield).

A process in a container sees a filesystem view composed from their Docker image and volumes. The [Docker image](https://docs.docker.com/userguide/dockerimages/) is at the root of the filesystem hierarchy, and any volumes are mounted at the specified paths within the image. Volumes can not mount onto other volumes or have hard links to other volumes. Each Container in the Pod must independently specify where to mount each volume.

## emptyDir

AnemptyDirvolume is first created when a Pod is assigned to a Node, and exists as long as that Pod is running on that node. As the name says, it is initially empty. Containers in the Pod can all read and write the same files in theemptyDirvolume, though that volume can be mounted at the same or different paths in each Container. When a Pod is removed from a node for any reason, the data in theemptyDiris deleted forever.

**Note:** A Container crashing does NOT remove a Pod from a node, so the data in an empty Dir volume is safe across Container crashes

Some uses for an emptyDir are:

- scratch space, such as for a disk-based merge sort
- check pointing a long computation for recovery from crashes
- holding files that a content-manager Container fetches while a webserver Container serves the data

By default, emptyDir volumes are stored on whatever medium is backing the node - that might be disk or SSD or network storage, depending on your environment. However, you can set theemptyDir.mediumfield to"Memory"to tell Kubernetes to mount a tmpfs (RAM-backed filesystem) for you instead. While tmpfs is very fast, be aware that unlike disks, tmpfs is cleared on node reboot and any files you write will count against your Container's memory limit.

## Example Pod

```yaml
apiVersion: v1
kind: Pod
metadata:
name: test-pd
spec:
containers:

- image: k8s.gcr.io/test-webserver
name: test-container
volumeMounts:
    - mountPath: /cache
    name: cache-volume
volumes:
- name: cache-volume
emptyDir: {}
```

## Persistant Volumes

ThePersistentVolumesubsystem provides an API for users and administrators that abstracts details of how storage is provided from how it is consumed. To do this we introduce two new API resources:PersistentVolumeandPersistentVolumeClaim.

A **PersistentVolume(PV)** is a piece of storage in the cluster that has been provisioned by an administrator. It is a resource in the cluster just like a node is a cluster resource. PVs are volume plugins like Volumes, but have a lifecycle independent of any individual pod that uses the PV. This API object captures the details of the implementation of the storage, be that NFS, iSCSI, or a cloud-provider-specific storage system.

A **PersistentVolumeClaim(PVC)** is a request for storage by a user. It is similar to a pod. Pods consume node resources and PVCs consume PV resources. Pods can request specific levels of resources (CPU and Memory). Claims can request specific size and access modes (e.g., can be mounted once read/write or many times read-only).

## Lifecycle of a volume and claim

PVs are resources in the cluster. PVCs are requests for those resources and also act as claim checks to the resource. The interaction between PVs and PVCs follows this lifecycle:

1. **Provisioning**
    - **Static**

A cluster administrator creates a number of PVs. They carry the details of the real storage which is available for use by cluster users. They exist in the Kubernetes API and are available for consumption.

- Dynamic

When none of the static PVs the administrator created matches a user's **PersistentVolumeClaim**, the cluster may try to dynamically provision a volume specially for the PVC. This provisioning is based on **StorageClasses**: the PVC must request a [storage class](https://kubernetes.io/docs/concepts/storage/storage-classes/) and the administrator must have created and configured that class in order for dynamic provisioning to occur.

2. **Binding**

A user creates, or has already created in the case of dynamic provisioning, a **PersistentVolumeClaim** with a specific amount of storage requested and with certain access modes. A control loop in the master watches for new PVCs, finds a matching PV (if possible), and binds them together. If a PV was dynamically provisioned for a new PVC, the loop will always bind that PV to the PVC. Otherwise, the user will always get at least what they asked for, but the volume may be in excess of what was requested. Once bound, **PersistentVolumeClaim** binds are exclusive, regardless of how they were bound. A PVC to PV binding is a one-to-one mapping.

3. **Using**

Pods use claims as volumes. The cluster inspects the claim to find the bound volume and mounts that volume for a pod. For volumes which support multiple access modes, the user specifies which mode is desired when using their claim as a volume in a pod.

Once a user has a claim and that claim is bound, the bound PV belongs to the user for as long as they need it. Users schedule Pods and access their claimed PVs by including a **persistentVolumeClaim** in their Pod's volumes block

4. **Storage Object in Use Protection**

The purpose of the Storage Object in Use Protection feature is to ensure that Persistent Volume Claims (PVCs) in active use by a pod and Persistent Volume (PVs) that are bound to PVCs are not removed from the system as this may result in data loss.

5. **Releasing**

Releasing happens when the Pod is done with the volume and an API request is sent, deleting the PVC. The volume remains in the state from when the claim is deleted until available to a new claim. The resident data remains depending on the **persistentVolumeReclaimPolicy**.

6. **Reclaiming**
    - **Retain**

The **Retain** reclaim policy allows for manual reclamation of the resource. When the **PersistentVolumeClaim** is deleted, the **PersistentVolume** still exists and the volume is considered "released". But it is not yet available for another claim because the previous claimant's data remains on the volume.

- Delete

Deletion removes both the **PersistentVolume** object from Kubernetes, as well as the associated storage asset in the external infrastructure

- Recycle (deprecated)

The Recycle option runs an**rm -rf /mountpoint**and then makes it available to a new claim. With the stability of dynamic provisioning, the Recycle option is planned to be deprecated.

7. **Expanding Persistant Volumes Claims**

You can only expand a PVC if its storage class's **allowVolumeExpansion** field is set to true.

- Resizing a volume containing a file system
- Resizing an in-use PersistentVolumeClaim

## Access Mode

- ReadWriteOnce (RWO) -- the volume can be mounted as read-write by a single node
- ReadOnlyMany (ROX) -- the volume can be mounted read-only by many nodes
- ReadWriteMany (RWX) -- the volume can be mounted as read-write by many nodes

## Phase

A volume will be in one of the following phases:

- Available -- a free resource that is not yet bound to a claim
- Bound -- the volume is bound to a claim
- Released -- the claim has been deleted, but the resource is not yet reclaimed by the cluster
- Failed -- the volume has failed its automatic reclamation

## Volume Snapshots

Similar to how API resourcesPersistentVolumeandPersistentVolumeClaimare used to provision volumes for users and administrators, VolumeSnapshotContentandVolumeSnapshotAPI resources are provided to create volume snapshots for users and administrators.

A **VolumeSnapshotContent** is a snapshot taken from a volume in the cluster that has been provisioned by an administrator. It is a resource in the cluster just like a PersistentVolume is a cluster resource.

A **VolumeSnapshot** is a request for snapshot of a volume by a user. It is similar to a PersistentVolumeClaim.

WhileVolumeSnapshotsallow a user to consume abstract storage resources, cluster administrators need to be able to offer a variety ofVolumeSnapshotContentswithout exposing users to the details of how those volume snapshots should be provisioned. For these needs there is theVolumeSnapshotClassresource.

<https://kubernetes.io/docs/concepts/storage/volume-snapshots>

## Storage Classes

A **StorageClass** provides a way for administrators to describe the "classes" of storage they offer. Different classes might map to quality-of-service levels, or to backup policies, or to arbitrary policies determined by the cluster administrators. Kubernetes itself is unopinionated about what classes represent. This concept is sometimes called "profiles" in other storage systems.

Each **StorageClass** contains the fields **provisioner**, **parameters**, and **reclaimPolicy**, which are used when a **PersistentVolume** belonging to the class needs to be dynamically provisioned.

The name of a **StorageClass** object is significant, and is how users can request a particular class. Administrators set the name and other parameters of a class when first creating **StorageClass** objects, and the objects cannot be updated once they are created.

<https://kubernetes.io/docs/concepts/storage/storage-classes>

## Dynamic Volume Provisioning

Dynamic volume provisioning allows storage volumes to be created on-demand. Without dynamic provisioning, cluster administrators have to manually make calls to their cloud or storage provider to create new storage volumes, and then create [**PersistentVolume** objects](https://kubernetes.io/docs/concepts/storage/persistent-volumes/) to represent them in Kubernetes. The dynamic provisioning feature eliminates the need for cluster administrators to pre-provision storage. Instead, it automatically provisions storage when it is requested by users.

## Share files/folders between containers in a pod

<https://kubernetes.io/docs/tasks/access-application-cluster/communicate-containers-same-pod-shared-volume>

## Local Persistent Volume

A local persistent volume represents a local disk directly-attached to a single Kubernetes Node.

Kubernetes provides a powerful volume plugin system that enables Kubernetes workloads to use a [wide variety](https://kubernetes.io/docs/concepts/storage/volumes/#types-of-volumes) of block and file storage to persist data. Most of these plugins enable remote storage -- these remote storage systems persist data independent of the Kubernetes node where the data originated. Remote storage usually can not offer the consistent high performance guarantees of local directly-attached storage. With the Local Persistent Volume plugin, Kubernetes workloads can now consume high performance local storage using the same volume APIs that app developers have become accustomed to.

<https://kubernetes.io/blog/2019/04/04/kubernetes-1.14-local-persistent-volumes-ga>

<https://kubernetes.io/docs/concepts/storage/volumes/#local>

## Volume Types

- **GCEpersistentDisk and awsElasticBlockStore**
- **emptyDir and hostPath**

ThehostPathvolume mounts a resource from the host node filesystem. The resource could be a directory, file socket, character, or block device. These resources must already exist on the host tobeused.There are two types, DirectoryOrCreateandFileOrCreate, which create the resources on the host, and use them if they don't already exist.

- **NFS and iSCSI**

NFS(Network File System) andiSCSI(Internet Small Computer System Interface) are straightforward choices for multiple readers scenarios.

- **rbd, CephFS and GlusterFS**

rbdfor block storage orCephFSandGlusterFS, if available in your Kubernetes cluster, can be a good choice for multiple writer needs.

- **Other Volume Types**

Besides the volume types we just mentioned, there are many other possible, with more being added:azureDisk, azureFile, csi, downwardAPI, fc(fibre channel), flocker, gitRepo, local, projected, portworxVolume, quobyte, scaleIO, secret, storageos, vsphereVolume, persistentVolumeClaim, etc.

## PVC Autoresizer

<https://blog.kintone.io/entry/pvc-autoresizer>

<https://www.openshift.com/blog/automating-volume-expansion-management-an-operator-based-approach>

## References

<https://kubernetes.io/docs/concepts/storage/volumes>
