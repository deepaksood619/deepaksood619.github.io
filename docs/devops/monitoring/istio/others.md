# Others

## Istio Ingress vs Kubernetes Ingress

![image](../../../media/DevOps-Monitoring-Others-image1.jpg)

## Automatic Reconfiguration

![image](../../../media/DevOps-Monitoring-Others-image2.jpg)

https://software.danielwatrous.com/istio-ingress-vs-kubernetes-ingress

[**https://medium.com/@zhaohuabing/which-one-is-the-right-choice-for-the-ingress-gateway-of-your-service-mesh-21a280d4a29c**](https://medium.com/@zhaohuabing/which-one-is-the-right-choice-for-the-ingress-gateway-of-your-service-mesh-21a280d4a29c)

![image](../../../media/DevOps-Monitoring-Others-image3.jpg)

## Shared Control Plane

https://istio.io/docs/setup/install/multicluster/shared

## Access Log

Default turn off, only on in demo profile

- Can be enabled globally or per namespace too

kubectl describe cm istio -n istio-system

![image](../../../media/DevOps-Monitoring-Others-image4.jpg)

![image](../../../media/DevOps-Monitoring-Others-image5.jpg)

[Webinar: Debugging your debugging tools; What to do when your service mesh goes down in production?](https://www.youtube.com/watch?v=XAKY24b7XjQ)

![image](../../../media/DevOps-Monitoring-Others-image7.jpg)

![image](../../../media/DevOps-Monitoring-Others-image8.jpg)

![image](../../../media/DevOps-Monitoring-Others-image9.jpg)

## Production Istio Installation

- Metrics & logs from control & data plane
    - Setup alerts
- Enable access logs
- Outbound traffic control
- Strint mTLS instead of "auto"
- Scale out control plane
    - Configure HPA
    - Configure pod anti-affinity
- Non self signed CA certificates
- Locking down ingress GW ports
- Auto sidecar injection
- Production grade Prometheus & Jaeger
