# CV - Libraries / Tools

## YOLO - You Only Look Once

## SSD - Single Shot MultiBox Detector

- **Single Shot:**this means that the tasks of object localization and classificationare done in asingleforward passof the network
- **MultiBox:**this is the name of a technique for bounding box regression developed by Szegedy et al.
- **Detector:**The network is an object detector that also classifies those detected objects

## OpenCV (CV2)

- Most used computer vision library. Highly efficient. Facilitates real-time image processing.

<https://www.youtube.com/watch?v=P4Z8_qe2Cu0>

<https://www.freecodecamp.org/news/opencv-full-course>

<https://www.freecodecamp.org/news/how-to-use-opencv-and-python-for-computer-vision-and-ai>

<https://learnopencv.com>

<https://opencv.org>

pip install opencv-python

## Functions

```python
import cv2

cv2.cvtColor(image, cv2.COLOR_RGB2GRAY)

cv2.Canny(blur_gray, low_threshold, high_threshold)

cv2.GaussianBlur(gray,(kernel_size, kernel_size), 0)

cv2.HoughLinesP(masked_edges, rho, theta, threshold, np.array([]), min_line_length, max_line_gap)
```

First off, rho and theta are the distance and angular resolution of our grid in Hough space. Remember that, in Hough space, we have a grid laid out along the (Θ, ρ) axis. You need to specifyrhoin units of pixels andthetain units of radians.

Thethresholdparameter specifies the minimum number of votes (intersections in a given grid cell) a candidate line needs to have to make it into the output.

min_line_lengthis the minimum length of a line (in pixels) that you will accept in the output, andmax_line_gapis the maximum distance (again, in pixels) between segments that you will allow to be connected into a single line.

## MLKit Vision APIs

- Barcode scanning
- Face detection

With ML Kit's face detection API, you can detect faces in an image, identify key facial features, and get the contours of detected faces. Note that the APIdetects faces, it does notrecognize people.

With face detection, you can get the information you need to perform tasks like embellishing selfies and portraits, or generating avatars from a user's photo. Because ML Kit can perform face detection in real time, you can use it in applications like video chat or games that respond to the player's expressions.

### Key capabilities

- Recognize and locate facial features. Get the coordinates of the eyes, ears, cheeks, nose, and mouth of every face detected.
- Get the contours of facial features Get the contours of detected faces and their eyes, eyebrows, lips, and nose.
- Recognize facial expressions Determine whether a person is smiling or has their eyes closed.
- Track faces across video frames Get an identifier for each unique detected face. The identifier is consistent across invocations, so you can perform image manipulation on a particular person in a video stream.
- Process video frames in real time Face detection is performed on the device, and is fast enough to be used in real-time applications, such as video manipulation.

<https://developers.google.com/ml-kit/vision/face-detection>

<https://github.com/ipazc/mtcnn>

<https://github.com/ageitgey/face_recognition>

<https://www.pyimagesearch.com/2019/03/11/liveness-detection-with-opencv>

- Image labeling
- Object detection and tracking
- Text recognition
- Digital ink recognition
- Pose detection

## Image Similarity API

<https://deepai.org/machine-learning-model/image-similarity>

## Darknet

Convolutional Neural Networks

YOLOv4 / Scaled-YOLOv4 / YOLO - Neural Networks for Object Detection (Windows and Linux version of Darknet)

<https://github.com/pjreddie/darknet>

<https://github.com/AlexeyAB/darknet>

Pillow - images/Python Imaging Library

<https://python-pillow.org>
