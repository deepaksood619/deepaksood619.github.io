# iperf3 Testing

## iperf (Network throughput)

iPerfis a widely used tool for network performance measurement and tuning. It is significant as a cross-platform tool that can produce standardized performance measurements for any network. Iperf has [client](https://en.wikipedia.org/wiki/Client_(computing)) and [server](https://en.wikipedia.org/wiki/Server_(computing)) functionality, and can create data streams to measure the throughput between the two ends in one or both directions. Typical Iperf output contains a time-stamped report of the amount of data transferred and the throughput measured.
The data streams can be either [Transmission Control Protocol](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)(TCP) or [User Datagram Protocol](https://en.wikipedia.org/wiki/User_Datagram_Protocol)(UDP):

- UDP: When used for testing UDP capacity, Iperf allows the user to specify the [datagram](https://en.wikipedia.org/wiki/Datagram#Packets_vs._datagrams) size and provides results for the datagram throughput and the [packet](https://en.wikipedia.org/wiki/Packet_(information_technology)) loss.
- TCP: When used for testing TCP capacity, Iperf measures the throughput of the payload. Iperf uses 1024 × 1024 for [mebibytes](https://en.wikipedia.org/wiki/Mebibyte) and 1000 × 1000 for [megabytes](https://en.wikipedia.org/wiki/Megabyte).
iperf is a tool for active measurements of the maximum achievable bandwidth on IP networks. It supports tuning of various parameters related to timing, protocols, and buffers. For each test it reports the measured throughput / bitrate, loss, and other parameters.
This version, sometimes referred to as iperf3, is a redesign of an original version developed at NLANR/DAST. iperf3 is a new implementation from scratch, with the goal of a smaller, simpler code base, and a library version of the functionality that can be used in other programs. iperf3 also has a number of features found in other tools such as nuttcp and netperf, but were missing from the original iperf. These include, for example, a zero-copy mode and optional JSON output. Note that iperf3 isnotbackwards compatible with the original iperf.

## Commands

```bash
brew install iperf3
sudo apt-get install iperf3

# server
iperf3 -s -p 5002

# client
iperf3 -c localhost -p 5002

# Verbose, debug
iperf3 -V -d -s -p 5002

#The number of simultaneous connections to make to the server. Default is 1.
iperf3 -V -d -s -p 5002 -P 10

#Run in reverse mode (server sends, client receives).
iperf3 -V -d -s -p 5002 -P 10 -R
```

<https://en.wikipedia.org/wiki/Iperf>

<https://github.com/esnet/iperf>

<https://iperf.fr/iperf-doc.php>

## Retr

It's the number of TCP segments retransmitted. This can happen if TCP segments are lost in the network due to congestion or corruption.

## Test

```bash
# Localhost in laptop
[  7]   0.00-10.00  sec  56.7 GBytes  48.7 Gbits/sec                  sender
[  7]   0.00-10.00  sec  56.7 GBytes  48.7 Gbits/sec                  receiver

# API-v1 -> API-v1 localhost
[  5]   0.00-10.00  sec  38.3 GBytes  32.9 Gbits/sec    0             sender
[  5]   0.00-10.04  sec  38.3 GBytes  32.8 Gbits/sec                  receiver

[  5]   0.00-10.00  sec  38.0 GBytes  32.7 Gbits/sec    0             sender
[  5]   0.00-10.04  sec  38.0 GBytes  32.5 Gbits/sec                  receiver

# API-v2 -> API-v1 using pod container ip (in same node)
[  5]   0.00-10.00  sec  27.7 GBytes  23.8 Gbits/sec   29             sender
[  5]   0.00-10.04  sec  27.7 GBytes  23.7 Gbits/sec                  receiver

[ ID] Interval           Transfer     Bitrate         Retr
[  5]   0.00-10.00  sec  27.2 GBytes  23.4 Gbits/sec   31             sender
[  5]   0.00-10.04  sec  27.2 GBytes  23.3 Gbits/sec                  receiver

[ ID] Interval           Transfer     Bitrate         Retr
[  5]   0.00-10.00  sec  27.2 GBytes  23.4 Gbits/sec  525             sender
[  5]   0.00-10.04  sec  27.2 GBytes  23.3 Gbits/sec                  receiver

[ ID] Interval           Transfer     Bitrate         Retr
[  5]   0.00-10.00  sec  27.1 GBytes  23.3 Gbits/sec  189             sender
[  5]   0.00-10.05  sec  27.1 GBytes  23.2 Gbits/sec                  receiver

# test -> API-v1 using pod container ip (in different nodes)
[ ID] Interval           Transfer     Bitrate         Retr
[  5]   0.00-10.00  sec  5.71 GBytes  4.90 Gbits/sec  223             sender
[  5]   0.00-10.04  sec  5.70 GBytes  4.88 Gbits/sec                  receiver

[ ID] Interval           Transfer     Bitrate         Retr
[  5]   0.00-10.00  sec  5.77 GBytes  4.96 Gbits/sec  233             sender
[  5]   0.00-10.04  sec  5.77 GBytes  4.94 Gbits/sec                  receiver

[ ID] Interval           Transfer     Bitrate         Retr
[  5]   0.00-10.00  sec  5.77 GBytes  4.95 Gbits/sec  121             sender
[  5]   0.00-10.04  sec  5.76 GBytes  4.93 Gbits/sec                  receiver

# API-v2, API-v1 (localhost) (in same node), test (in different node) -> API-v1 using pod container ip
# can't be done via iperf3

# API-v1 -> test (different nodes)
[  5]   0.00-10.00  sec  5.77 GBytes  4.95 Gbits/sec  189             sender
[  5]   0.00-10.04  sec  5.76 GBytes  4.93 Gbits/sec                  receiver

# API-v1 -> svc test (ip) -> test pod (different nodes)
[  5]   0.00-10.00  sec  5.77 GBytes  4.95 Gbits/sec  108             sender
[  5]   0.00-10.04  sec  5.76 GBytes  4.93 Gbits/sec                  receiver

[  5]   0.00-10.00  sec  5.72 GBytes  4.92 Gbits/sec  393             sender
[  5]   0.00-10.04  sec  5.72 GBytes  4.90 Gbits/sec                  receiver

# API-v1 -> svc test (dns) -> test pod (different nodes)
[  5]   0.00-10.00  sec  5.78 GBytes  4.97 Gbits/sec   83             sender
[  5]   0.00-10.04  sec  5.78 GBytes  4.95 Gbits/sec                  receiver

[  5]   0.00-10.00  sec  5.74 GBytes  4.93 Gbits/sec  284             sender
[  5]   0.00-10.04  sec  5.74 GBytes  4.91 Gbits/sec                  receiver

# 20 parallel connections
[SUM]   0.00-10.00  sec  11.7 GBytes  10.0 Gbits/sec  1886             sender
[SUM]   0.00-10.01  sec  11.7 GBytes  10.0 Gbits/sec                  receiver

# 30 parallel connections
[SUM]   0.00-10.00  sec  11.7 GBytes  10.1 Gbits/sec  10305             sender
[SUM]   0.00-10.01  sec  11.7 GBytes  10.0 Gbits/sec                  receiver
```
