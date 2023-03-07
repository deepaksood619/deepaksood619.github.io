# Optimizations

## Reserving Resources For The System and Kubelet

```bash
# Capture resource reservation for kubernetes system daemons like the kubelet, container runtime, node problem detector, etc.
--kube-reserved cpu=250m,memory=1Gi,ephemeral-storage=1Gi
# Capture resources for vital system functions, such as sshd, udev.
--system-reserved cpu=250m,memory=0.2Gi,ephemeral-storage=1Gi
# Start evicting pods from this node once these thresholds are crossed.
--eviction-hard memory.available<0.2Gi,nodefs.available<10%
```

## Network Stack Optimisation

```bash
cat <<EOF > /etc/sysctl.d/99-kubelet-network.conf
# Have a larger connection range available
net.ipv4.ip_local_port_range=1024 65000

# Reuse closed sockets faster
net.ipv4.tcp_tw_reuse=1
net.ipv4.tcp_fin_timeout=15

# The maximum number of "backlogged sockets".  Default is 128.
net.core.somaxconn=4096
net.core.netdev_max_backlog=4096

# 16MB per socket - which sounds like a lot,
# but will virtually never consume that much.
net.core.rmem_max=16777216
net.core.wmem_max=16777216

# Various network tunables
net.ipv4.tcp_max_syn_backlog=20480
net.ipv4.tcp_max_tw_buckets=400000
net.ipv4.tcp_no_metrics_save=1
net.ipv4.tcp_rmem=4096 87380 16777216
net.ipv4.tcp_syn_retries=2
net.ipv4.tcp_synack_retries=2
net.ipv4.tcp_wmem=4096 65536 16777216
#vm.min_free_kbytes=65536

# Connection tracking to prevent dropped connections (usually issue on LBs)
net.netfilter.nf_conntrack_max=262144
net.ipv4.netfilter.ip_conntrack_generic_timeout=120
net.netfilter.nf_conntrack_tcp_timeout_established=86400

# ARP cache settings for a highly loaded docker swarm
net.ipv4.neigh.default.gc_thresh1=8096
net.ipv4.neigh.default.gc_thresh2=12288
net.ipv4.neigh.default.gc_thresh3=16384
EOF

# Don't forget to...
systemctl restart systemd-sysctl.service
```

## DNS lookup scaling

`kubectl -n kube-system scale --replicas=5 deployment/kube-dns`

<https://kubedex.com/90-days-of-aws-eks-in-production>
