# Parameter Servers

## Parameter Servers and Stale Synchronous Parallel Model

![image](../../../media/Big-Data_Parameter-Servers-image1.jpg)

![image](../../../media/Big-Data_Parameter-Servers-image2.jpg)

![image](../../../media/Big-Data_Parameter-Servers-image3.jpg)

## Parameter Server

- A machine learning framework
- Distributes a model over multiple machines
- Offers two operations:
  - Pull: query parts of the model
  - Push: update parts of the model
- Machine learning update equation
- (Stochastic) gradient descent
- Collapsed Gibbs sampling for topic modeling
- Aggregate push updates via addition (+)

![image](../../../media/Big-Data_Parameter-Servers-image4.jpg)

![image](../../../media/Big-Data_Parameter-Servers-image5.jpg)

![image](../../../media/Big-Data_Parameter-Servers-image6.jpg)

![image](../../../media/Big-Data_Parameter-Servers-image7.jpg)

![image](../../../media/Big-Data_Parameter-Servers-image8.jpg)

![image](../../../media/Big-Data_Parameter-Servers-image9.jpg)

![image](../../../media/Big-Data_Parameter-Servers-image10.jpg)

![image](../../../media/Big-Data_Parameter-Servers-image11.jpg)

![image](../../../media/Big-Data_Parameter-Servers-image12.jpg)

![image](../../../media/Big-Data_Parameter-Servers-image13.jpg)

![image](../../../media/Big-Data_Parameter-Servers-image14.jpg)

## Parameter Servers

### Stale Synchronous Parallel Model

![image](../../../media/Big-Data_Parameter-Servers-image15.jpg)

![image](../../../media/Big-Data_Parameter-Servers-image16.jpg)

![image](../../../media/Big-Data_Parameter-Servers-image17.jpg)

![image](../../../media/Big-Data_Parameter-Servers-image18.jpg)

![image](../../../media/Big-Data_Parameter-Servers-image19.jpg)

![image](../../../media/Big-Data_Parameter-Servers-image20.jpg)

![image](../../../media/Big-Data_Parameter-Servers-image21.jpg)

![image](../../../media/Big-Data_Parameter-Servers-image22.jpg)

![image](../../../media/Big-Data_Parameter-Servers-image23.jpg)

## Asynchronous Execution

- Async lacks theoretical guarantee as distributed environment can have arbitrary delays from networks & stragglers

![image](../../../media/Big-Data_Parameter-Servers-image24.jpg)

![image](../../../media/Big-Data_Parameter-Servers-image25.jpg)

![image](../../../media/Big-Data_Parameter-Servers-image26.jpg)

![image](../../../media/Big-Data_Parameter-Servers-image27.jpg)

![image](../../../media/Big-Data_Parameter-Servers-image28.jpg)

![image](../../../media/Big-Data_Parameter-Servers-image29.jpg)

https://medium.com/coinmonks/parameter-server-for-distributed-machine-learning-fd79d99f84c3
