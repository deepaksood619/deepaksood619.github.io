---
slug: /computer-science/programming-paradigms/structural-proxy
title: Understanding Structural Proxy Pattern
description: Learn how to optimize website performance by using the structural proxy
  pattern to manage image loading and enhance user experience.
created: '2023-03-05'
last_update: '2023-03-07'
---

# Structural - Proxy

Example -

If a site is image heavy website then sending all the images can slow down the website loading time and thereby degrading the user experience. So proxy pattern suggests to have placeholder in the place of images and load images when user scrolls to that section of the page.

## Problem

- High resolution image on website
- Long loading time
- Style images

## Solution

- Replace with placeholders (proxies)
- Style placeholders instead
