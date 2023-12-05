# RBAC

![image](../../../media/DevOps-Kubernetes-RBAC-image1.jpg)

![image](../../../media/DevOps-Kubernetes-RBAC-image2.jpg)

![image](../../../media/DevOps-Kubernetes-RBAC-image3.jpg)

![image](../../../media/DevOps-Kubernetes-RBAC-image4.jpg)

![image](../../../media/DevOps-Kubernetes-RBAC-image5.jpg)

![image](../../../media/DevOps-Kubernetes-RBAC-image6.jpg)

![image](../../../media/DevOps-Kubernetes-RBAC-image7.jpg)

![image](../../../media/DevOps-Kubernetes-RBAC-image8.jpg)

## Authorization

https://kubernetes.io/docs/reference/access-authn-authz/authorization

https://kubernetes.io/docs/reference/access-authn-authz/rbac

https://www.cncf.io/blog/2018/08/01/demystifying-rbac-in-kubernetes

## Commands

## Create access role for kubernetes dashboard

kubectl create clusterrolebinding kubernetes-dashboard -n kube-system --clusterrole=cluster-admin --serviceaccount=kube-system:kubernetes-dashboard

https://www.youtube.com/watch?v=mvvCf3eQ1cc
