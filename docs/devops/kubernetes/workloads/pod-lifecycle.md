# Pod Lifecycle

- [Pod phase](https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-phase)
- [Pod conditions](https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-conditions)
- [Container probes](https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#container-probes)
- [Pod and Container status](https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-and-container-status)
- [Container States](https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#container-states)
- [Pod readiness gate](https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-readiness-gate)
- [Restart policy](https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#restart-policy)
- [Pod lifetime](https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-lifetime)

## Pod Phase

| **Pending**   | The Pod has been accepted by the Kubernetes system, but one or more of the Container images has not been created. This includes time before being scheduled as well as time spent downloading images over the network, which could take a while. |
|-----------|-------------------------------------------------------------|
| **Running**   | The Pod has been bound to a node, and all of the Containers have been created. At least one Container is still running, or is in the process of starting or restarting.                                                                          |
| **Succeeded** | All Containers in the Pod have terminated in success, and will not be restarted.                                                                                                                                                                 |
| **Failed**    | All Containers in the Pod have terminated, and at least one Container has terminated in failure. That is, the Container either exited with non-zero status or was terminated by the system.                                                      |
| **Unknown**   | For some reason the state of the Pod could not be obtained, typically due to an error in communicating with the host of the Pod.                                                                                                                 |

## Pod Conditions

- ThelastProbeTimefield provides a timestamp for when the Pod condition was last probed.
- ThelastTransitionTimefield provides a timestamp for when the Pod last transitioned from one status to another.
- Themessagefield is a human-readable message indicating details about the transition.
- Thereasonfield is a unique, one-word, CamelCase reason for the condition's last transition.
- Thestatusfield is a string, with possible values "True", "False", and "Unknown".
- Thetypefield is a string with the following possible values:
- PodScheduled: the Pod has been scheduled to a node;
- Ready: the Pod is able to serve requests and should be added to the load balancing pools of all matching Services;
- Initialized: all [init containers](https://kubernetes.io/docs/concepts/workloads/pods/init-containers) have started successfully;
- Unschedulable: the scheduler cannot schedule the Pod right now, for example due to lack of resources or other constraints;
- ContainersReady: all containers in the Pod are ready.

## Container Probes

A [Probe](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.16/#probe-v1-core) is a diagnostic performed periodically by the [kubelet](https://kubernetes.io/docs/admin/kubelet/) on a Container. To perform a diagnostic, the kubelet calls a [Handler](https://godoc.org/k8s.io/kubernetes/pkg/api/v1#Handler) implemented by the Container.

There are three types of handlers:

- [**ExecAction**](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.16/#execaction-v1-core)

Executes a specified command inside the Container. The diagnostic is considered successful if the command exits with a status code of 0.

- [**TCPSocketAction**](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.16/#tcpsocketaction-v1-core)

Performs a TCP check against the Container's IP address on a specified port. The diagnostic is considered successful if the port is open. The TCPSocket probe (**tcpSocket**) will attempt to open a socket on a predetermined port, and keep trying based on periodSeconds. Once the port can be opened, the container is considered healthy.

- [**HTTPGetAction**](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.16/#httpgetaction-v1-core)

Performs an HTTP Get request against the Container's IP address on a specified port and path. The diagnostic is considered successful if the response has a status code greater than or equal to 200 and less than 400. (200-399)

## Each probe has one of three results

- **Success:** The Container passed the diagnostic.
- **Failure:** The Container failed the diagnostic.
- **Unknown:** The diagnostic failed, so no action should be taken.

The kubelet can optionally perform and react to three kinds of probes on running Containers:

- **livenessProbe**

Indicates whether the Container is running. If the liveness probe fails, the kubelet kills the Container, and the Container is subjected to its [restart policy](https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#restart-policy). If a Container does not provide a liveness probe, the default state isSuccess.

- **readinessProbe**

Indicates whether the Container is ready to service requests. If the readiness probe fails, the endpoints controller removes the Pod's IP address from the endpoints of all Services that match the Pod. The default state of readiness before the initial delay isFailure. If a Container does not provide a readiness probe, the default state isSuccess.

- **startupProbe**

Indicates whether the application within the Container is started. All other probes are disabled if a startup probe is provided, until it succeeds. If the startup probe fails, the kubelet kills the Container, and the Container is subjected to its [restart policy](https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#restart-policy). If a Container does not provide a startup probe, the default state isSuccess

Bothreadinessprobe andlivenessprobe seem to have same behavior. They do same type of checks. But the action they take in case of failures is different.

Readiness Probe shuts the traffic from service down. so that service can always send the request to healthy pod whereas the liveness probe restarts the pod in case of failure. It does not do anything for the service. Service continues to send the request to the pods as usual if it is in 'available' status.

It is recommended to use both probes!!

## Configure Probes

- **initialDelaySeconds:** Number of seconds after the container has started before liveness or readiness probes are initiated. Defaults to 0 seconds. Minimum value is 0.
- **periodSeconds:** How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
- **timeoutSeconds:** Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1.
- **successThreshold:** Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness. Minimum value is 1.
- **failureThreshold:** When a Pod starts and the probe fails, Kubernetes will tryfailureThresholdtimes before giving up. Giving up in case of liveness probe means restarting the container. In case of readiness probe the Pod will be marked Unready. Defaults to 3. Minimum value is 1.

<https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle>

<https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-probes>
