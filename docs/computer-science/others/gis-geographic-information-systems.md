---
slug: /geographic-information-systems-gis
title: Geographic Information Systems (GIS)
description: Comprehensive guide to GIS concepts, spatial data types, analysis techniques, and professional skills
created: 2026-07-16
updated: 2026-07-16
---

A Geographic Information System (GIS) is a system that captures, stores, analyzes, and manages spatial data. It provides value in finding patterns, tracking trends, and aiding decision-making in urban planning, resource management, and logistics.

## Core Concepts

### What is GIS?

GIS is a framework for gathering, managing, and analyzing data rooted in the science of geography. It integrates many types of data and helps users visualize, question, analyze, and interpret data to understand relationships, patterns, and trends.

**Key capabilities:**
- Capture and store spatial/geographic data
- Manipulate and analyze spatial information
- Create interactive queries and searches
- Edit and update map data
- Present results through visualizations and maps

## Fundamental Data Types

### Raster vs. Vector Data

**Raster Data:**
- Pixel or grid-based representation
- Best for continuous information
- Use cases: satellite imagery, elevation models (DEM), temperature maps, aerial photography
- Each cell contains a value representing information
- File formats: GeoTIFF, IMG, GRID

**Vector Data:**
- Coordinate-based representation of discrete features
- Three geometry types:
  - **Points:** Specific locations (wells, trees, buildings)
  - **Lines:** Linear features (roads, rivers, pipelines)
  - **Polygons:** Area features (boundaries, lakes, land parcels)
- Best for discrete objects with defined boundaries
- File formats: Shapefile, GeoJSON, KML

## Core GIS Processes

### Geocoding vs. Georeferencing

**Geocoding:**
- Converts text-based addresses or place names into X,Y coordinates
- Example: "123 Main St, Boston, MA" → (42.3601, -71.0589)
- Enables spatial analysis of address-based data
- Used for customer mapping, delivery routing, demographic analysis

**Georeferencing:**
- Assigns spatial coordinates to non-spatial images or scanned maps
- Aligns historical maps, drone photos, or satellite images with real-world coordinates
- Requires control points (known locations)
- Essential for integrating legacy maps into modern GIS

## Coordinate Systems and Projections

### Geographic Coordinate System (GCS)

- Uses angular units (degrees)
- Locates data on a 3D globe/spheroid
- Based on latitude and longitude
- Examples: WGS84, NAD83
- Best for global-scale data

### Projected Coordinate System (PCS)

- Uses linear units (meters, feet)
- Represents 3D earth on 2D surface
- Introduces distortion (area, distance, shape, or direction)
- Examples: UTM, State Plane, Web Mercator
- Best for local/regional analysis and accurate measurements

**Key point:** No projection preserves all properties perfectly. Choose based on your analysis needs and study area.

## Spatial Analysis Techniques

### Buffering

- Creates zones around features at specified distances
- Use cases: impact zones, proximity analysis, service areas
- Example: Find all properties within 500m of a proposed highway

### Overlay/Intersection

- Combines multiple layers to find spatial relationships
- Identifies where features overlap or intersect
- Use cases: site suitability, land use conflicts, environmental impact
- Example: Find wetlands that intersect with proposed development zones

### Spatial Joins

- Transfers attributes from one layer to another based on location
- Unlike traditional joins (based on shared ID), uses spatial relationships
- Types: within, contains, intersects, nearest
- Example: Assign census tract data to customer points based on location

### Other Key Techniques

- **Proximity analysis:** Find nearest features
- **Density mapping:** Calculate concentration of features
- **Network analysis:** Routing, service areas, closest facility
- **Terrain analysis:** Slope, aspect, viewshed from elevation data

## Software Platforms

### ArcGIS (Esri)

**Pros:**
- Industry-standard commercial platform
- Comprehensive toolset and extensions
- Strong support and training resources
- Enterprise-ready with ArcGIS Online/Portal
- Advanced spatial analysis capabilities

**Cons:**
- Expensive licensing
- Proprietary formats
- Steeper learning curve for advanced features

### QGIS

**Pros:**
- Free and open-source
- Reads almost any data format
- Active community development
- Cross-platform (Windows, Mac, Linux)
- Extensible through Python plugins

**Cons:**
- Less polished interface than ArcGIS
- Fewer out-of-box advanced tools
- Variable plugin quality

## Database Management

### Spatial Databases

**PostGIS (PostgreSQL extension):**
- Industry-standard open-source spatial database
- Full SQL support with spatial functions
- Handles vector and raster data
- Excellent performance for large datasets

**Geodatabase (Esri):**
- File geodatabase or enterprise geodatabase
- Tight ArcGIS integration
- Supports topology rules and relationship classes

**SpatiaLite (SQLite extension):**
- Lightweight, file-based spatial database
- Good for mobile/embedded applications

### SQL in GIS

**Select by Attribute (traditional SQL):**
```sql
SELECT * FROM parcels WHERE land_use = 'Residential' AND area > 5000;
```

**Select by Location (spatial SQL with PostGIS):**
```sql
SELECT p.* FROM parcels p, flood_zones f 
WHERE ST_Intersects(p.geom, f.geom) AND f.zone = '100-year';
```

## Scripting and Automation

### Python Libraries

**arcpy (ArcGIS):**
- Official Esri Python library
- Access to all ArcGIS geoprocessing tools
- Batch processing and workflow automation

**geopandas:**
- Extends pandas with spatial operations
- Works with vector data (Shapefile, GeoJSON, etc.)
- Easy integration with matplotlib for visualization

**ArcGIS API for Python:**
- Work with ArcGIS Online/Portal
- Web mapping and analysis
- Machine learning integration

### Automation Benefits

- Batch process hundreds of files
- Standardize workflows and reduce errors
- Schedule repetitive tasks
- Document processes through code

**Example use case:** Automatically download daily satellite imagery, clip to study area, calculate vegetation index, and export results.

## Data Quality and Troubleshooting

### Validation Methods

- **Metadata review:** Check source, date, accuracy, coordinate system
- **Visual inspection:** Look for obvious errors, gaps, misalignments
- **Attribute validation:** Check for nulls, outliers, invalid values
- **Topology checks:** Ensure polygons don't overlap, lines connect properly

### Common Issues

**Topology errors:**
- Overlapping polygons where boundaries should be shared
- Gaps between adjacent parcels
- Dangles (unconnected line endpoints)
- Self-intersecting polygons

**Projection mismatches:**
- Layers in different coordinate systems don't align
- Solution: Reproject to common coordinate system

**Data quality issues:**
- Missing attributes
- Positional inaccuracy
- Temporal mismatch (data from different time periods)

### Troubleshooting Approach

1. Check metadata and documentation
2. Verify coordinate system matches other layers
3. Inspect attribute table for completeness
4. Run topology validation
5. Compare against authoritative sources

## Communication and Visualization

### Effective Map Design

- Clear title and legend
- Appropriate symbolization for data type
- Consistent color schemes
- Scale bar and north arrow
- Data source attribution

### Storytelling with Data

**Key principles:**
- Know your audience (technical vs. non-technical)
- Focus on insights, not just data
- Use visual hierarchy to guide attention
- Provide context and comparison
- Explain limitations and uncertainty

### Deliverables

- Static maps (PDF, PNG)
- Interactive web maps (ArcGIS Online, Leaflet)
- Dashboards (charts + maps)
- Reports with embedded maps
- Story maps for narrative presentations

## U.S. Federal Geospatial Infrastructure

### USGEO (United States Group on Earth Observations)

**What it is:**
- Federal interagency subcommittee chartered under the White House's National Science and Technology Council (NSTC)
- Coordinates Earth observation activities across major U.S. government agencies

**Member agencies:**
- NASA (satellite missions, remote sensing)
- NOAA (weather, ocean, climate monitoring)
- USGS (land imaging, elevation, geology)
- EPA, USDA, DOD, and other federal partners

**Role in GIS:**
- Drives policies for federal spatial data collection, standardization, and sharing
- Ensures Earth observation data remains accessible as open-source public good
- Coordinates satellite imagery, weather tracking, land-use mapping, ocean monitoring
- Represents U.S. in international Group on Earth Observations (GEO)

**Why it matters for GIS professionals:**
- Determines data availability and formats
- Sets metadata and quality standards
- Influences open data policies and public access
- Coordinates cross-agency data sharing initiatives

### U.S. GeoData (USGS Data Products)

**What it is:**
- Historical term for primary collection of digital geographic/cartographic data from USGS and partner agencies
- Foundation layers for most U.S.-based GIS projects

**Core datasets:**

**Boundaries and Administrative:**
- State, county, municipal boundaries
- Congressional districts
- Census tracts and block groups
- Federal land ownership

**Transportation:**
- TIGER/Line shapefiles (U.S. Census Bureau)
- Road networks with addressing
- Railways, airports, waterways
- Public transit routes

**Hydrography:**
- National Hydrography Dataset (NHD)
- Rivers, streams, lakes, watersheds
- Flow direction and connectivity
- Water quality monitoring sites

**Elevation:**
- Digital Elevation Models (DEM)
- National Elevation Dataset (NED)
- 3D Elevation Program (3DEP)
- Resolution: 1m, 3m, 10m, 30m
- Lidar point clouds

**Land Cover:**
- National Land Cover Database (NLCD)
- 30m resolution, updated every 5 years
- Categories: developed, forest, agriculture, wetlands, water

**Imagery:**
- Landsat (30m resolution, multispectral, since 1972)
- NAIP (National Agriculture Imagery Program, 1m resolution aerial)
- Sentinel-2 (10m resolution, ESA/USGS partnership)

**Modern distribution portals:**
- **The National Map:** Primary USGS data portal
- **Data.gov:** Cross-agency federal open data
- **EarthExplorer:** Satellite imagery and aerial photos
- **USGS ScienceBase:** Research datasets and projects

**Technical specifications:**
- Most data in NAD83 or WGS84 coordinate systems
- Common formats: Shapefile, GeoTIFF, File Geodatabase, GeoJSON
- Metadata follows FGDC (Federal Geographic Data Committee) standards

### Interview Questions: U.S. Federal Geospatial Data

**Q1: What is USGEO and why is it important?**

**Answer:** USGEO is the United States Group on Earth Observations, a federal interagency committee that coordinates Earth observation activities across NASA, NOAA, USGS, and other agencies. It's important because it drives the policies that govern how federal spatial data is collected, standardized, and shared publicly, ensuring GIS professionals have access to consistent, high-quality, open-source geospatial data.

**Q2: What are TIGER/Line files and when would you use them?**

**Answer:** TIGER/Line files are U.S. Census Bureau products containing road networks, boundaries, and address ranges. They're the go-to source for U.S. road networks with addressing information, census geography (tracts, block groups), and are essential for geocoding, demographic analysis, and any project requiring official U.S. administrative boundaries. They're free, updated annually, and cover the entire U.S.

**Q3: What's the difference between NHD and NED?**

**Answer:** NHD (National Hydrography Dataset) contains vector data for water features—rivers, streams, lakes, and watersheds with flow direction and connectivity. NED (National Elevation Dataset) is raster elevation data (DEMs). You'd use NHD for watershed analysis or stream routing, and NED for terrain analysis, viewshed studies, or generating slope/aspect maps.

**Q4: What resolution options exist for federal elevation data and how do you choose?**

**Answer:** The 3DEP program provides 1m, 3m, 10m, and 30m DEMs. Choose based on project scale and detail needs:
- 1m Lidar: Urban planning, detailed terrain modeling, building footprints
- 3m: Regional watershed studies, infrastructure planning
- 10m: County-level analysis, moderate detail
- 30m: State/national-scale analysis, general terrain

Also consider file size and processing time—1m DEMs are massive.

**Q5: How has U.S. GeoData evolved from historical products to modern portals?**

**Answer:** Historically, U.S. GeoData referred to specific USGS products like Digital Line Graphs (DLG) and early DEMs distributed on physical media or FTP sites. Now it's evolved into modern web portals (The National Map, Data.gov, EarthExplorer) that provide on-demand access, REST APIs, and streaming services. Data formats have also modernized from proprietary formats to open standards like GeoJSON and Cloud Optimized GeoTIFFs (COG).

## Advanced Technical Concepts

### Spatial Indexing

**Purpose:** Speed up spatial queries by organizing data spatially, not just by attribute values.

**Common index types:**

**R-Tree (Rectangle Tree):**
- Groups nearby objects into minimum bounding rectangles (MBR)
- Hierarchical structure
- Standard in PostGIS, Shapefile (.shx), most spatial databases
- Optimal for "find all features intersecting this polygon" queries

**Quadtree:**
- Recursively divides space into quadrants
- Each node has exactly 4 children
- Good for raster data and point datasets
- Used in some tile-based mapping systems

**Grid Index:**
- Divides space into fixed grid cells
- Assigns features to cells they intersect
- Simple but less efficient than R-Tree for complex queries

**When spatial indexes matter:**
- Datasets `>100,000` features
- Frequent spatial queries (intersects, within, nearest)
- Web mapping applications with real-time queries

**Example (PostGIS):**
```sql
-- Create spatial index
CREATE INDEX parcels_geom_idx ON parcels USING GIST (geom);

-- Query now uses index for fast lookup
SELECT * FROM parcels WHERE ST_Intersects(geom, ST_MakeEnvelope(-71, 42, -70, 43, 4326));
```

### Topology

**What it is:** The spatial relationship rules between features—how they connect, share boundaries, and relate geometrically.

**Common topology rules:**

**Polygon topology:**
- Must not overlap (land parcels)
- Must not have gaps (zoning districts)
- Must share edges (adjacent administrative boundaries)
- Must be covered by (buildings within parcels)

**Line topology:**
- Must not self-overlap (road centerlines)
- Must not dangle (network connectivity)
- Must connect at endpoints (stream networks)

**Point topology:**
- Must be inside polygons (wells within aquifer boundaries)
- Must coincide with lines (bus stops on routes)

**Why topology matters:**
- Data quality validation
- Network analysis (routing requires connected lines)
- Polygon adjacency (shared boundaries, not overlaps)
- Spatial integrity in multi-user editing

**Geodatabase topology vs. shapefile:**
- Shapefiles have NO enforced topology—just coordinates
- Geodatabases support topology rules and validation
- PostGIS has topology extension but not enforced by default

### Datum Transformations

**The problem:** Same coordinates, different datums = different locations (can be off by `>100` meters).

**Common datums:**
- **NAD27:** North American Datum 1927 (based on Clarke 1866 ellipsoid)
- **NAD83:** North American Datum 1983 (GRS80 ellipsoid, ~1 meter accuracy)
- **WGS84:** World Geodetic System 1984 (GPS standard, nearly identical to NAD83 in North America)

**When you need datum transformation:**
- Combining datasets from different eras (NAD27 historical maps + NAD83 current data)
- GPS data (WGS84) vs. U.S. state plane (NAD83)
- International projects mixing regional datums

**Transformation methods:**
- **3-parameter** (geocentric translation)
- **7-parameter** (Helmert/Bursa-Wolf, includes rotation + scale)
- **Grid-based** (NADCON, HARN for U.S., most accurate)

**Example issue:**
A project overlay GPS points (WGS84) on NAD27 topographic map without transformation → features appear 50-100m displaced.

**Best practice:** Always reproject all layers to a common datum + projection before analysis.

### Remote Sensing Concepts

**Spectral bands:**

Most satellite sensors capture multiple wavelengths beyond visible light:

| Band | Wavelength | Use |
|------|-----------|-----|
| Blue | 0.45-0.5 µm | Water penetration, bathymetry |
| Green | 0.5-0.6 µm | Vegetation health, water clarity |
| Red | 0.6-0.7 µm | Vegetation discrimination |
| NIR (Near-Infrared) | 0.7-1.0 µm | Vegetation vigor, water bodies |
| SWIR (Shortwave Infrared) | 1.5-2.5 µm | Moisture content, geology |
| Thermal | 10-12 µm | Surface temperature, heat islands |

**Vegetation indices:**

**NDVI (Normalized Difference Vegetation Index):**
```text
NDVI = (NIR - Red) / (NIR + Red)
```
- Range: -1 to +1
- Healthy vegetation: 0.6-0.9
- Bare soil: 0.1-0.2
- Water: negative values

**Use cases:** Crop health monitoring, deforestation detection, urban green space analysis.

**Image classification:**

**Supervised classification:**
1. Select training samples for each land cover class
2. Algorithm learns spectral signature of each class
3. Classify entire image based on learned signatures
4. Methods: Maximum Likelihood, Random Forest, SVM

**Unsupervised classification:**
1. Algorithm automatically groups pixels by spectral similarity
2. Analyst interprets and labels resulting clusters
3. Methods: K-means, ISODATA

**Accuracy assessment:**
- Create error/confusion matrix
- Calculate overall accuracy, producer's accuracy, user's accuracy
- Kappa coefficient (measures agreement beyond chance)
- Target: `>85%` overall accuracy for most projects

### Interview Questions: Advanced Technical Concepts

**Q6: Explain spatial indexing and when you would use it.**

**Answer:** Spatial indexing organizes features by location to speed up queries. The most common is R-Tree, which groups nearby features into hierarchical bounding rectangles. You'd create a spatial index on any layer with over 100k features or when performing frequent spatial queries (intersects, within, nearest). For example, in PostGIS, `CREATE INDEX USING GIST (geom)` enables fast lookup for queries like "find all parcels intersecting this flood zone." Without it, the database would check every single feature—with it, it narrows to relevant bounding boxes first.

**Q7: What is topology in GIS and why does it matter?**

**Answer:** Topology defines spatial relationship rules between features—like polygons sharing edges without gaps or overlaps, or lines connecting at endpoints for networks. It matters for data quality (validating parcels don't overlap) and analysis (routing requires topologically connected roads). Shapefiles don't enforce topology—they're just coordinates. Geodatabases and PostGIS topology extensions can enforce rules and auto-fix errors like shared polygon boundaries.

**Q8: You're combining a 1950s scanned map (NAD27) with current GPS data (WGS84). What issue will you encounter and how do you fix it?**

**Answer:** The issue is datum mismatch. Same coordinates in NAD27 vs. WGS84 can be displaced by 50-100 meters because they use different reference ellipsoids. If I overlay without transformation, features won't align. The fix: use a datum transformation (like NADCON for U.S. data) to convert NAD27 to NAD83/WGS84, then reproject both to a common projected coordinate system for analysis. GIS software handles this if you specify the correct input coordinate systems.

**Q9: Explain NDVI and how you would use it in a project.**

**Answer:** NDVI (Normalized Difference Vegetation Index) is `(NIR - Red) / (NIR + Red)`, derived from satellite imagery. Healthy vegetation reflects strongly in NIR and absorbs red, giving high NDVI (0.6-0.9). Stressed or sparse vegetation has lower values. I'd use it to monitor crop health over time—compare NDVI between growing seasons to detect drought stress—or to map urban green space by classifying areas above 0.5 as vegetated. It requires NIR + Red bands, available from Landsat or Sentinel-2.

**Q10: What's the difference between supervised and unsupervised classification?**

**Answer:** Supervised classification requires you to select training samples for each land cover class (urban, forest, water), then the algorithm learns those spectral signatures and classifies the whole image. You control the classes. Unsupervised classification automatically groups pixels by spectral similarity into clusters, which you then label afterward. Use supervised when you know your classes and have ground-truth data; use unsupervised for exploratory analysis or when classes aren't predefined. Accuracy is usually better with supervised if training data is good.

**Q11: How do you assess the accuracy of a classified land cover map?**

**Answer:** Create an error matrix by comparing classified pixels to ground-truth reference data (field visits, high-res imagery, or existing accurate maps). Calculate overall accuracy (correct pixels / total), producer's accuracy (how well real features were classified), and user's accuracy (reliability of the map). Also compute the Kappa coefficient to measure agreement beyond random chance. Target is typically `>85%` overall accuracy. If accuracy is low, refine training samples or try a different classification algorithm.

## Real-World Applications

### Urban Planning

- Zoning analysis
- Transportation network optimization
- Growth modeling
- Infrastructure planning

### Resource Management

- Forestry inventory
- Water resource monitoring
- Agricultural land assessment
- Wildlife habitat analysis

### Logistics and Business

- Site selection for retail locations
- Delivery route optimization
- Market analysis and demographics
- Supply chain visualization

### Emergency Management

- Flood risk mapping
- Evacuation route planning
- Disaster response coordination
- Damage assessment

## Interview Preparation Tips

### Core Competency Questions

**Be ready to discuss:**

1. **Your definition of GIS** - Clear, non-technical explanation
2. **Raster vs. Vector** - The fundamental data type question
3. **Geocoding vs. Georeferencing** - Data creation processes
4. **Coordinate systems** - GCS vs. PCS and when to use each
5. **Spatial analysis** - Specific techniques you've used
6. **Software experience** - Pros/cons of your toolset
7. **Database skills** - SQL and spatial databases
8. **Automation** - Python or ModelBuilder examples
9. **Data quality** - Your validation and troubleshooting process
10. **Real project example** - Objective, tools, challenges, results, communication

**Example project narrative structure:**
- **Objective:** What problem were you solving?
- **Data:** What datasets did you use? Any quality issues?
- **Tools:** Which software and techniques?
- **Challenges:** What went wrong? How did you fix it?
- **Results:** What did you produce?
- **Communication:** How did you present findings to stakeholders?

### Additional Technical Interview Questions

**Q12: What's the difference between buffering in GCS vs. PCS?**

**Answer:** Buffering in a Geographic Coordinate System (GCS, degrees) produces distorted results because a degree of longitude varies in distance from equator to poles. A "1-degree buffer" is ~111km at equator but `<40`km near poles. Always reproject to a Projected Coordinate System (PCS) with linear units (meters/feet) before buffering to ensure uniform, accurate buffer zones. For example, reproject to State Plane or UTM, buffer 500 meters, then you can transform back if needed.

**Q13: How would you find all customers within 5km of a store using PostGIS?**

**Answer:**
```sql
-- Assuming store location as point, customers table with geom
SELECT c.customer_id, c.name, ST_Distance(c.geom, s.geom) as distance_m
FROM customers c, stores s
WHERE s.store_id = 123
  AND ST_DWithin(c.geom, s.geom, 5000)
ORDER BY distance_m;
```
`ST_DWithin` uses spatial index for performance. Ensure data is in a projected CRS (like UTM or State Plane) so distance is in meters. If in WGS84, either reproject or use `ST_DWithin(geography(c.geom), geography(s.geom), 5000)` for spherical calculations.

**Q14: You have 1 million parcel polygons and need to find which census tract each belongs to. How do you optimize this spatial join?**

**Answer:** 
1. **Ensure spatial indexes exist** on both layers (`CREATE INDEX USING GIST`)
2. **Use appropriate spatial predicate:** `ST_Within` is faster than `ST_Intersects` if parcels are fully inside tracts
3. **Consider spatial partitioning:** If census tracts don't overlap, a simple bounding box pre-filter speeds up the join
4. **Batch process** if still slow—divide parcels into geographic tiles and process separately
5. **Check data quality:** Remove invalid geometries (`ST_IsValid`), repair with `ST_MakeValid`

SQL example:
```sql
UPDATE parcels p
SET census_tract_id = t.tract_id
FROM census_tracts t
WHERE ST_Within(p.geom, t.geom);
```

**Q15: What are control points in georeferencing and how many do you need?**

**Answer:** Control points are locations with known coordinates that you identify on both the unreferenced image and a reference map. You need minimum 3 points for a linear transformation (shift, rotate, scale), but 6-10 well-distributed points are better for polynomial transformations that handle non-linear distortions. Place them across the entire image extent, avoid clustering in one area. After georeferencing, check the RMS (root mean square) error—target `<1` pixel for acceptable accuracy.

**Q16: Explain the difference between ST_Intersects, ST_Touches, and ST_Overlaps.**

**Answer:**
- **ST_Intersects:** TRUE if geometries share any space (interiors touch, boundaries cross, or contained). Most inclusive.
- **ST_Touches:** TRUE only if boundaries touch but interiors don't overlap. Adjacent parcels sharing an edge touch but don't intersect interiors.
- **ST_Overlaps:** TRUE if interiors overlap but neither geometry completely contains the other.

Example: Two adjacent parcels `ST_Touches` but do NOT `ST_Overlaps`. A parcel and the county it's in `ST_Intersects` but the parcel doesn't `ST_Overlaps` the county (it's contained).

**Q17: How do you handle multi-temporal analysis (comparing maps from different years)?**

**Answer:**
1. **Standardize to common CRS and extent:** Reproject all datasets to same coordinate system, clip to common boundary
2. **Register/align:** If satellite imagery, co-register using ground control points to ensure pixel-to-pixel alignment
3. **Classify consistently:** Use same classification scheme for both time periods
4. **Change detection:** Subtract earlier from later (for continuous data like NDVI), or overlay classified maps and identify transitions (forest → urban)
5. **Quantify changes:** Calculate area statistics for each change class
6. **Validate:** Field-check sample locations to verify detected changes are real

Common pitfall: Different sensors or seasons introduce spectral differences that aren't real change—normalize first.

**Q18: What's the purpose of the .prj file in a Shapefile, and what happens if it's missing?**

**Answer:** The `.prj` file stores the coordinate system definition (datum, projection, units). If missing, GIS software doesn't know where the data belongs on Earth—coordinates are meaningless numbers. The software may assume a default (often WGS84), causing misalignment when layered with other data. Always include the `.prj` file. If missing, you must manually assign the CRS if you know it, or guess based on coordinate ranges (degrees vs. meters, lat/lon bounds).

**Q19: How would you automate a weekly report that shows new development permits on a map?**

**Answer:** 
1. **Python script** using `arcpy` or `geopandas`
2. **Query database** for permits issued in last 7 days
3. **Geocode addresses** to create point layer
4. **Symbolize** by permit type (residential, commercial, etc.)
5. **Generate map** with basemap, legend, title showing date range
6. **Export to PDF** or PNG
7. **Schedule** with cron (Linux) or Task Scheduler (Windows) to run every Monday
8. **Email report** using `smtplib` to stakeholders

Benefit: Eliminates manual weekly task, ensures consistency, documents process in code.

**Q20: Describe a time you had to troubleshoot misaligned spatial data.**

**Answer:** (Structure your real example following this pattern)
- **Situation:** Received road network and parcel data from county—roads appeared 200m offset from parcels
- **Investigation:** Checked `.prj` files—roads were NAD83 State Plane, parcels had no `.prj` (assumed WGS84 by software)
- **Root cause:** Parcels were actually NAD27, not WGS84, based on coordinate ranges and metadata date (1985)
- **Solution:** Assigned correct NAD27 to parcels, transformed to NAD83 using NADCON, reprojected both to State Plane
- **Result:** Perfect alignment, analysis could proceed
- **Lesson:** Always verify CRS from metadata/documentation, don't trust file extensions or assumptions

## Links

### General GIS Resources
- [GIS on Wikipedia](https://en.wikipedia.org/wiki/Geographic_information_system)
- [QGIS Documentation](https://qgis.org/documentation/)
- [Esri ArcGIS Resources](https://www.esri.com/training/)
- [PostGIS Documentation](https://postgis.net/documentation/)
- [GeoPandas Documentation](https://geopandas.org/)

### U.S. Federal Geospatial Data
- [The National Map (USGS)](https://www.usgs.gov/core-science-systems/national-geospatial-program/national-map)
- [Data.gov - Geospatial Data](https://catalog.data.gov/dataset?metadata_type=geospatial)
- [EarthExplorer (USGS)](https://earthexplorer.usgs.gov/)
- [TIGER/Line Shapefiles (Census)](https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.html)
- [USGEO - U.S. Group on Earth Observations](https://www.earthobservations.org/usgeo.php)
- [National Hydrography Dataset](https://www.usgs.gov/national-hydrography)
- [3D Elevation Program (3DEP)](https://www.usgs.gov/3d-elevation-program)

### Technical Documentation
- [PostGIS Spatial Functions Reference](https://postgis.net/docs/reference.html)
- [GDAL/OGR Documentation](https://gdal.org/)
- [Proj Coordinate Transformation](https://proj.org/)
- [GeoJSON Specification](https://geojson.org/)
