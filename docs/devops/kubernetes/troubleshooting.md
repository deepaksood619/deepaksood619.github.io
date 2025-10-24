# Troubleshooting

[Linux BPF CPU Profiling with kubectl on Microsoft Azure Kubernetes (AKS)](https://www.youtube.com/watch?v=TMwHWofbMtY)

./flameget.sh --node "ip-10-40-33-102.ap-south-1.compute.internal" --pod "bad-deploy-6d5cc4d5f6-gvs6f" --container "bad-app" -t "60" -i "aimvector/ebpf-tools:azure.4.15.0.1061"

https://medium.com/@aimvec/linux-bpf-cpu-profiling-with-kubectl-on-kubernetes-8ca329297e5a

https://github.com/marcel-dempers/cpu-performance-analysis

[Docker container CPU analysis with Linux BPF tools](https://www.youtube.com/watch?v=mGcu7C-YVM0)

![image](../../media/DevOps-Kubernetes-Troubleshooting-image2.jpg)

https://learnk8s.io/troubleshooting-deployments

## Questions

### Deep Dive Debugging

1. Pod stuck in CrashLoopBackOff, no logs, no errors.
    - How do you debug beyond kubectl logs and describe?
2. A StatefulSet pod won’t reattach its PVC after a node crash.
    - How do you recover without recreating storage?
3. Pods are Pending, Cluster Autoscaler won’t scale up.
    - Walk me through your top 3 debugging steps.
4. NetworkPolicy blocks cross-namespace traffic.
    - How do you design least-privilege rules and test them safely?
5. Service must connect to an external DB via VPN inside the cluster.
    - How do you architect it for HA + security?

### Security + Architecture

6. Running a multi-tenant EKS cluster.
    - How do you isolate workloads with RBAC, quotas, and network segmentation?
7. Kubelet keeps restarting on one node.
    - Where do you look first – systemd, container runtime, or cgroups?
8. Critical pod got evicted due to node pressure.
    - Explain QoS classes and eviction policies.
9. A rolling update caused downtime.
    - What went wrong in your readiness/startup probe or deployment config?
10. Ingress Controller fails under load.
    - How do you debug and scale routing efficiently?

### Performance + Reliability

11. Istio sidecar consumes more CPU than your app.
    - How do you profile and optimise mesh performance?
12. etcd is slowing down control plane ops.
    - Root causes + how do you tune it safely?
13. You must enforce images from a trusted internal registry only.
    - Gatekeeper, Kyverno, or custom Admission Webhook – what’s your move?
14. Pods stuck in ContainerCreating forever.
    - CNI attach delay? OverlayFS corruption? Walk me through your root-cause process.
15. Random DNS failures in Pods.
    - How do you debug CoreDNS, kube-proxy, and conntrack interactions?
