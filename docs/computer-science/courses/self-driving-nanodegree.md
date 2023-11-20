# Self-Driving Nanodegree

## Part - 1

[Computer Vision, Deep Learning, and Sensor Fusion](https://classroom.udacity.com/nanodegrees/nd013/parts/edf28735-efc1-4b99-8fbb-ba9c432239c8)

In this term, you'll first become an expert in applying Computer Vision and Deep Learning on automotive problems. You will teach the car to detect lane lines, predict steering angle, and more all based on just camera data!

Next, you'll learn Sensor Fusion, or how to use an array of sensor data to perceive the environment around the vehicle.

- Project:[Finding Lane Lines](https://classroom.udacity.com/nanodegrees/nd013/parts/edf28735-efc1-4b99-8fbb-ba9c432239c8/modules/5d1efbaa-27d0-4ad5-a67a-48729ccebd9c/lessons/7c075239-1f65-4952-bde8-1810354d7988/project)
- Project:[Advanced Lane Finding](https://classroom.udacity.com/nanodegrees/nd013/parts/edf28735-efc1-4b99-8fbb-ba9c432239c8/modules/5d1efbaa-27d0-4ad5-a67a-48729ccebd9c/lessons/7cb63828-36aa-4cea-9239-700b5ea41f0b/project)
- Project:[Traffic Sign Classifier](https://classroom.udacity.com/nanodegrees/nd013/parts/edf28735-efc1-4b99-8fbb-ba9c432239c8/modules/6b6c37bc-13a5-47c7-88ed-eb1fce9789a0/lessons/7ee8d0d4-561e-4101-8615-66e0ab8ea8c8/project)
- Project:[Behavioral Cloning](https://classroom.udacity.com/nanodegrees/nd013/parts/edf28735-efc1-4b99-8fbb-ba9c432239c8/modules/6b6c37bc-13a5-47c7-88ed-eb1fce9789a0/lessons/3fc8dd70-23b3-4f49-86eb-a8707f71f8dd/project)
- Project:[Extended Kalman Filters](https://classroom.udacity.com/nanodegrees/nd013/parts/edf28735-efc1-4b99-8fbb-ba9c432239c8/modules/49d8fda9-69c7-4f10-aa18-dc3a2d790cbe/lessons/3feb3671-6252-4c25-adf0-e963af4d9d4a/project)

## Lectures

- **Computer Vision Fundamentals**
- **Camera Calibration**
- **Gradients and Color Spaces**
- **Advanced Computer Vision**
- **Neural Networks**
- **TensorFlow**
- **Deep Neural Networks**
- **Convolutional Neural Networks**
- **LeNet for Traffic Signs**
- **Keras**
- **Transfer Learning**
- **Sensors**
- **Kalman Filters**
- **C++ Checkpoint**
- **Geometry and Trigonometry Refresher**
- **Extended Kalman Filters**

## Part - 2

[Localization, Path Planning, Control, and System Integration](https://classroom.udacity.com/nanodegrees/nd013/parts/30260907-68c1-4f24-b793-89c0c2a0ad32)

In this term, you'll expand on your sensor knowledge to localize and control the vehicle. You'll evaluate sensor data from camera, radar, lidar, and GPS, and use these in closed-loop controllers that actuate the vehicle.

After that, you'll learn how to plan where the vehicle should go, and how the vehicle systems work together to get it there.

- Project:Kidnapped Vehicle
- Project:Highway Driving
- Project:PID Controller
- Project:Improve Your LinkedIn Profile
- Project:Optimize Your GitHub Profile
- Project:Programming a Real Self-Driving Car

## Computer Vision Fundamentals

- Color selection
- Region masking
- Gradient of an image
- Canny edge detection
- Hough Transform to find lines from Canny Edges

We will use equation of a line to model the line and then find lines using this model in our Gradient grayscale image

- Image Space (x vs y plot)
- Parameter space called as Hough Space (m vs b)
- Hough Transform is just a conversion from Image Space to Hough Space
  - Characterization of a line in image space will be a single point at the position (m, b) in Hough space.
  - A point in an image space will be a line in Hough Space

## For edge detection - HED - Holistically Nested Edge Detection

<https://www.pyimagesearch.com/2019/03/04/holistically-nested-edge-detection-with-opencv-and-deep-learning>

## Project

- Project:[Finding Lane Lines](https://classroom.udacity.com/nanodegrees/nd013/parts/edf28735-efc1-4b99-8fbb-ba9c432239c8/modules/5d1efbaa-27d0-4ad5-a67a-48729ccebd9c/lessons/7c075239-1f65-4952-bde8-1810354d7988/project)

Tools

- Color selection
- Region of interest selection
- Grayscaling
- Gaussian smoothing
- Canny edge detection
- Hough transform line detection- Project:[Advanced Lane Finding](https://classroom.udacity.com/nanodegrees/nd013/parts/edf28735-efc1-4b99-8fbb-ba9c432239c8/modules/5d1efbaa-27d0-4ad5-a67a-48729ccebd9c/lessons/7cb63828-36aa-4cea-9239-700b5ea41f0b/project)
- Project:[Traffic Sign Classifier](https://classroom.udacity.com/nanodegrees/nd013/parts/edf28735-efc1-4b99-8fbb-ba9c432239c8/modules/6b6c37bc-13a5-47c7-88ed-eb1fce9789a0/lessons/7ee8d0d4-561e-4101-8615-66e0ab8ea8c8/project)
- Project:[Behavioral Cloning](https://classroom.udacity.com/nanodegrees/nd013/parts/edf28735-efc1-4b99-8fbb-ba9c432239c8/modules/6b6c37bc-13a5-47c7-88ed-eb1fce9789a0/lessons/3fc8dd70-23b3-4f49-86eb-a8707f71f8dd/project)
- Project:[Extended Kalman Filters](https://classroom.udacity.com/nanodegrees/nd013/parts/edf28735-efc1-4b99-8fbb-ba9c432239c8/modules/49d8fda9-69c7-4f10-aa18-dc3a2d790cbe/lessons/3feb3671-6252-4c25-adf0-e963af4d9d4a/project)

<https://www.freecodecamp.org/news/perception-for-self-driving-cars-deep-learning-course>

[Comic book panel segmentation • Max Halford](https://maxhalford.github.io/blog/comic-book-panel-segmentation/)
