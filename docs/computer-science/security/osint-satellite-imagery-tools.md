---
slug: /osint-satellite-imagery-tools
title: OSINT Satellite Imagery Tools
description: Six free satellite and aerial imagery tools for open-source investigations, with a which-tool-when framework for verification and change detection.
created: 2026-10-19
updated: 2026-10-19
---

Free satellite and aerial imagery tools used in open-source investigations to verify events, date construction or destruction, and detect change over time. No single tool is enough: combine two or three and always read the capture date of the imagery you are looking at.

## Tools

- **Google Earth Pro (desktop or browser):** a historical imagery slider across providers (Airbus, Maxar and others); some cities such as London go back to 1945 aerial imagery. Always scrub back in time instead of trusting one image
- **Copernicus Browser (ESA, free Sentinel data):** switch band presets: true colour; SWIR (shortwave infrared) sees through haze and shows fires, burn scars, moisture, drought and floods; NDVI for vegetation health; false colour for conflict damage and burned or cleared areas. Sentinel-1 is radar and penetrates cloud. Replaces Sentinel Hub for free use
- **Esri Wayback:** swipe and compare two dated versions side by side; archive from 2014, frequently updated, very high resolution, so it is the best tool for change detection. Check the actual capture date of each tile, which can differ from the basemap release date
- **ArcGIS Map Viewer (Esri, free):** add the World Imagery layer (Add layer, Living Atlas, ArcGIS Online) for the most recent highest-resolution basemap (about 30 cm in places), plus a large catalogue of extra layers such as 2017 New Zealand aerial imagery at about 8 cm
- **Apple Maps:** the satellite layer often differs from Google's; detailed 3D textured buildings and shadows in the Mac app help geolocation and working out which floor a photo was taken from, but coverage is sparse
- **Bing Maps:** an independent satellite view plus high-detail oblique "aerial" imagery in selected areas, e.g. ship and deck detail at naval bases

## Which Tool When

| Need | Tool |
| --- | --- |
| Historical context | Google Earth Pro |
| Multispectral or see-through-cloud, macro view | Copernicus Browser |
| Change detection by swiping | Esri Wayback |
| Latest highest-resolution imagery | ArcGIS World Imagery |
| Alternative perspective, building shadows | Apple Maps |
| Oblique aerial view | Bing Maps |

## Links

- [6 Free Satellite Imagery Tools Every Investigator Should Know - Bendobrown (YouTube)](https://youtu.be/-0RQPOdXrqw)
