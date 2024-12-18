# System Design of YouTube

![System Design of YouTube](../../media/Pasted%20image%2020240921221234.jpg)

1. The user creates a video upload request and provides the video files along with the details about the video.
2. The raw video files are uploaded to an Object Storage (such as S3).
3. Also, the metadata is saved in a database as well as a cache for faster retrieval when needed.
4. The raw video files are sent for transcoding to a special transcoding server. Transcoding is the process of encoding the videos into compatible bitrates and formats for streaming.
5. The transcoded video is uploaded to another object storage.
6. The notification for transcoding completion is sent to a special service via a message queue.
7. The Transcoding Status Handler updates the metadata DB and cache with the latest details of the video.
8. The user raises a video streaming request that goes to a Content Delivery Network (CDN).
9. The CDN fetches the video from the object storage for streaming. It also caches the video locally for subsequent streaming requests.
