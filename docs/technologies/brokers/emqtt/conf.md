# Conf

1. Cluster name
2. Cluster auto-discovery strategy
   - manual (default)
   - mcast (IP multicast)
   - dns
   - etcd
   - k8s (Kubernetes)
3. Cluster autoheal from network partition
4. Cluster autoclean (A down node will be removed from the cluster)
5. Node name
6. Heartbeat monitoring of an Erlang runtime system
7. Kernel poll
8. Number of threads in async thread pool
9. Maximum number of simultaneously existing processes (process_limit)
10. Max number of simultaneously existing ports
11. dist_buffer_size
12. max_ets_tables (mnesia and SSL will create temporary ETS tables)
13. GC fullsweep_after
14. crash_dump log file
15. erlang distributed protocol
16. RPC
17. Log
18. Authentication / Access Control
    - allow_anonymous
19. MQTT Protocol
    - mqtt.response_topic_prefix
    - max_clientid_len
    - max_topic_levels
    - max_qos_allowed
    - retain_available
    - wildcard_subscription
    - shared_subscription
    - ignore_loop_deliver
20. Zones
    - External Zone
    - Internal Zone
21. Listeners
    - MQTT/TCP - External TCP listener for MQTT protocol
      - listener.tcp.external = 0.0.0.0:1883
      - listener.tcp.external.acceptors = 8
      - listener.tcp.external.max_connections = 1024000
      - listener.tcp.external.max_conn_rate = 1000
      - listener.tcp.external.zone = external
    - Internal TCP Listener for MQTT Protocol
    - External SSL listener for MQTT protocol
    - External WebSocket listener for MQTT protocol
    - External WebSocket/SSL listener for MQTT protocol
22. Bridges
    - Bridges to aws
    - Bridges to azure
23. Modules
    - Presence module (deprecated)
    - Subscription module
    - Rewrite module
24. Plugins
25. Broker
26. System monitor
