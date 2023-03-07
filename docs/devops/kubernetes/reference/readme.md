# Reference

## Admission Controllers

An admission controller is a piece of code that intercepts requests to the Kubernetes API server prior to persistence of the object, but after the request is authenticated and authorized. The controllers consist of the[list](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#what-does-each-admission-controller-do) below, are compiled into thekube-apiserverbinary, and may only be configured by the cluster administrator. In that list, there are two special controllers: MutatingAdmissionWebhook and ValidatingAdmissionWebhook. These execute the mutating and validating (respectively)[admission control webhooks](https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#admission-webhooks) which are configured in the API.

Admission controllers may be "validating", "mutating", or both. Mutating controllers may modify the objects they admit; validating controllers may not.

The admission control process proceeds in two phases. In the first phase, mutating admission controllers are run. In the second phase, validating admission controllers are run. Note again that some of the controllers are both.

If any of the controllers in either phase reject the request, the entire request is rejected immediately and an error is returned to the end-user.

Finally, in addition to sometimes mutating the object in question, admission controllers may sometimes have side effects, that is, mutate related resources as part of request processing. Incrementing quota usage is the canonical example of why this is necessary. Any such side-effect needs a corresponding reclamation or reconciliation process, as a given admission controller does not know for sure that a given request will pass all of the other admission controllers.

<https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers>

## Dynamic Admission Control

## Admission Webhooks

Admission webhooks are HTTP callbacks that receive admission requests and do something with them. You can define two types of admission webhooks, [validating admission Webhook](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#validatingadmissionwebhook) and [mutating admission webhook](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#mutatingadmissionwebhook). Mutating admission Webhooks are invoked first, and can modify objects sent to the API server to enforce custom defaults. After all object modifications are complete, and after the incoming object is validated by the API server, validating admission webhooks are invoked and can reject requests to enforce custom policies.

<https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers>

## Quality of Service

CPU requests are made in CPU units, each unit being a millicore / millicpu, using mille - the Latin word for thousand. Thus a request for .7 of a CPU would be 700 millicore.

One CPU, in Kubernetes, is equivalent to:

- 1 AWS vCPU
- 1 GCP Core
- 1 Azure vCore
- 1 Hyperthread on a bare-metal Intel processor with Hyperthreading.

When Kubernetes creates a Pod it assigns one of these QoS classes to the Pod:

- Guaranteed
  - Every Container in the Pod must have a memory limit and a memory request, and they must be the same.
  - Every Container in the Pod must have a CPU limit and a CPU request, and they must be the same.

**resources:
limits:
memory: "200Mi"
cpu: "700m"
requests:
memory: "200Mi"
cpu: "700m"**

- Burstable
  - The Pod does not meet the criteria for QoS class Guaranteed.
  - At least one Container in the Pod has a memory or CPU request

**resources:
limits:
memory: "200Mi"
requests:
memory: "100Mi"**

- BestEffort
  - For a Pod to be given a QoS class of BestEffort, the Containers in the Pod must not have any memory or CPU limits or requests.

You can useephemeral-storagefor managing local ephemeral storage. Each Container of a Pod can specify one or more of the following:

- spec.containers[].resources.limits.ephemeral-storage
- spec.containers[].resources.requests.ephemeral-storage

<https://kubernetes.io/docs/tasks/configure-pod-container/quality-service-pod>

<https://kubernetes.io/docs/concepts/configuration/manage-resources-containers>

<https://www.replex.io/blog/everything-you-need-to-know-about-kubernetes-quality-of-service-qos-classes>
