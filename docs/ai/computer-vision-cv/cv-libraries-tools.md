# CV - Libraries / Tools

## SSD - Single Shot MultiBox Detector

- **Single Shot:** this means that the tasks of object localization and classificationare done in asingleforward passof the network
- **MultiBox:** this is the name of a technique for bounding box regression developed by Szegedy et al.
- **Detector:** The network is an object detector that also classifies those detected objects

## OpenCV (CV2)

- Most used computer vision library. Highly efficient. Facilitates real-time image processing.

https://www.youtube.com/watch?v=P4Z8_qe2Cu0

https://www.freecodecamp.org/news/opencv-full-course

https://www.freecodecamp.org/news/how-to-use-opencv-and-python-for-computer-vision-and-ai

https://learnopencv.com

https://opencv.org

`pip install opencv-python`

### Functions

```python
import cv2

cv2.cvtColor(image, cv2.COLOR_RGB2GRAY)

cv2.Canny(blur_gray, low_threshold, high_threshold)

cv2.GaussianBlur(gray,(kernel_size, kernel_size), 0)

cv2.HoughLinesP(masked_edges, rho, theta, threshold, np.array([]), min_line_length, max_line_gap)
```

First off, rho and theta are the distance and angular resolution of our grid in Hough space. Remember that, in Hough space, we have a grid laid out along the (Θ, ρ) axis. You need to specify rho in units of pixels and theta in units of radians.

The threshold parameter specifies the minimum number of votes (intersections in a given grid cell) a candidate line needs to have to make it into the output.

`min_line_length` is the minimum length of a line (in pixels) that you will accept in the output, and `max_line_gap` is the maximum distance (again, in pixels) between segments that you will allow to be connected into a single line.

## MLKit Vision APIs

- Barcode scanning
- Face detection

With ML Kit's face detection API, you can detect faces in an image, identify key facial features, and get the contours of detected faces. Note that the API detects faces, it does not recognize people.

With face detection, you can get the information you need to perform tasks like embellishing selfies and portraits, or generating avatars from a user's photo. Because ML Kit can perform face detection in real time, you can use it in applications like video chat or games that respond to the player's expressions.

### Key capabilities

- Recognize and locate facial features. Get the coordinates of the eyes, ears, cheeks, nose, and mouth of every face detected.
- Get the contours of facial features Get the contours of detected faces and their eyes, eyebrows, lips, and nose.
- Recognize facial expressions Determine whether a person is smiling or has their eyes closed.
- Track faces across video frames Get an identifier for each unique detected face. The identifier is consistent across invocations, so you can perform image manipulation on a particular person in a video stream.
- Process video frames in real time Face detection is performed on the device, and is fast enough to be used in real-time applications, such as video manipulation.

https://developers.google.com/ml-kit/vision/face-detection

https://github.com/ipazc/mtcnn

[**GitHub - ageitgey/face_recognition**: The world's simplest facial recognition api for Python and the command line](https://github.com/ageitgey/face_recognition)

https://www.pyimagesearch.com/2019/03/11/liveness-detection-with-opencv

- Image labeling
- Object detection and tracking
- Text recognition
- Digital ink recognition
- Pose detection

## Image Similarity API

https://deepai.org/machine-learning-model/image-similarity

## Darknet

Convolutional Neural Networks

YOLOv4 / Scaled-YOLOv4 / YOLO - Neural Networks for Object Detection (Windows and Linux version of Darknet)

https://github.com/pjreddie/darknet

Pillow - images/Python Imaging Library

https://python-pillow.org

## Albumentations

Albumentations is a Python library for image augmentation. Image augmentation is used in deep learning and computer vision tasks to increase the quality of trained models. The purpose of image augmentation is to create new training samples from the existing data.

- Albumentations **[supports all common computer vision tasks](https://github.com/albumentations-team/albumentations?tab=readme-ov-file#i-want-to-use-albumentations-for-the-specific-task-such-as-classification-or-segmentation)** such as classification, semantic segmentation, instance segmentation, object detection, and pose estimation.
- The library provides **[a simple unified API](https://github.com/albumentations-team/albumentations?tab=readme-ov-file#a-simple-example)** to work with all data types: images (RBG-images, grayscale images, multispectral images), segmentation masks, bounding boxes, and keypoints.
- The library contains **[more than 70 different augmentations](https://github.com/albumentations-team/albumentations?tab=readme-ov-file#list-of-augmentations)** to generate new training samples from the existing data.
- Albumentations is [**fast**](https://github.com/albumentations-team/albumentations?tab=readme-ov-file#benchmarking-results). We benchmark each new release to ensure that augmentations provide maximum speed.
- It **[works with popular deep learning frameworks](https://github.com/albumentations-team/albumentations?tab=readme-ov-file#i-want-to-know-how-to-use-albumentations-with-deep-learning-frameworks)** such as PyTorch and TensorFlow. By the way, Albumentations is a part of the [PyTorch ecosystem](https://pytorch.org/ecosystem/).

[GitHub - albumentations-team/albumentations: Fast and flexible image augmentation library. Paper about the library: https://www.mdpi.com/2078-2489/11/2/125](https://github.com/albumentations-team/albumentations)

[Albumentations: fast and flexible image augmentations](https://albumentations.ai/)
