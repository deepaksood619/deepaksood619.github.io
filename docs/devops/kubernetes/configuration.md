# Configuration

## Pod Priority and Preemtion

[Pods](https://kubernetes.io/docs/user-guide/pods) can havepriority. Priority indicates the importance of a Pod relative to other Pods. If a Pod cannot be scheduled, the scheduler tries to preempt (evict) lower priority Pods to make scheduling of the pending Pod possible.

- Pod Disruption Budget
- Priority Classes
- NonPreemptingPriority

https://kubernetes.io/docs/concepts/configuration/pod-priority-preemption

## Secrets

### Sealed Secrets

A Kubernetes controller and tool for one-way encrypted Secrets

Problem: "I can manage all my K8s config in git, except Secrets."

Solution: Encrypt your Secret into a SealedSecret, whichissafe to store - even to a public repository. The SealedSecret can be decrypted only by the controller running in the target cluster and nobody else (not even the original author) is able to obtain the original Secret from the SealedSecret

`$ kubectl get secret -n kube-system -l sealedsecrets.bitnami.com/sealed-secrets-key -o yaml > master.key`

https://github.com/bitnami-labs/sealed-secrets

https://medium.com/better-programming/encrypting-kubernetes-secrets-with-sealed-secrets-fe363149a211

- Helm Secrets
- Kamus

https://learnk8s.io/kubernetes-secrets-in-git
