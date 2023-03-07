# Exponential Smoothing

Exponential smoothingis a [rule of thumb](https://en.wikipedia.org/wiki/Rule_of_thumb) technique for smoothing [time series](https://en.wikipedia.org/wiki/Time_series) data using the exponential [window function](https://en.wikipedia.org/wiki/Window_function). Whereas in the [simple moving average](https://en.wikipedia.org/wiki/Simple_moving_average) the past observations are weighted equally, exponential functions are used to assign exponentially decreasing weights over time. It is an easily learned and easily applied procedure for making some determination based on prior assumptions by the user, such as seasonality. Exponential smoothing is often used for analysis of time-series data.

Exponential smoothing is one of many [window functions](https://en.wikipedia.org/wiki/Window_functions) commonly applied to smooth data in [signal processing](https://en.wikipedia.org/wiki/Signal_processing), acting as [low-pass filters](https://en.wikipedia.org/wiki/Low-pass_filter) to remove high frequency [noise](https://en.wikipedia.org/wiki/Noise). This method is preceded by [Poisson](https://en.wikipedia.org/wiki/Sim%C3%A9on_Denis_Poisson)'s use of recursive exponential window functions in convolutions from the 19th century, as well as [Kolmogorov and Zurbenko's use of recursive moving averages](https://en.wikipedia.org/wiki/Kolmogorov%E2%80%93Zurbenko_filter) from their studies of turbulence in the 1940s.

Exponential smoothing refers to the use of an **exponentially weighted moving average (EWMA)** to "smooth" a time series. If you have some time seriesx~t~, you can define a new time series s~t~that is a smoothed version ofx~t~.

s~t~=αx~t~+(1−α)s~t-1~

1. Basic exponential smoothing

2. Double exponential smoothing

3. Triple exponential smoothing

<https://en.wikipedia.org/wiki/Exponential_smoothing>

<https://www.vividcortex.com/blog/exponential-smoothing-for-time-series-forecasting>

## Holt Winters (basic forecasting) / Triple exponential smoothing

Holt-Winters forecasting is a way to model and predict the behavior of a sequence of values over time - a time series. Holt-Winters is one of the most popular forecasting techniques for time series. It's decades old, but it's still ubiquitous in many applications, including monitoring, where it's used for purposes such as anomaly detection and capacity planning.

Holt-Winters is a model of time series behavior. Forecasting always requires a model, and Holt-Winters is a way to model three aspects of the time series: **a typical value (average), a slope (trend) over time, and a cyclical repeating pattern (seasonality)**. Holt-Winters uses exponential smoothing to encode lots of values from the past and use them to predict "typical" values for the present and future.

<https://www.vividcortex.com/blog/holt-winters-forecasting-simplified>

<https://grisha.org/blog/2016/01/29/triple-exponential-smoothing-forecasting>
