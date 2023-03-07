# Geometry Foundations

[Intro to Euclidean geometry](https://www.khanacademy.org/math/geometry/hs-geo-foundations#hs-geo-intro-euclid)

[Angles](https://www.khanacademy.org/math/geometry/hs-geo-foundations#hs-geo-angles)

[Polygons](https://www.khanacademy.org/math/geometry/hs-geo-foundations#hs-geo-polygons)

[Area](https://www.khanacademy.org/math/geometry/hs-geo-foundations#hs-geo-area)

### Euclidean Geometry

### Euclid's Postulates

1. A straight line segment can be drawn joining any two points
2. Any straight line segment can be extended indefinitely in a straight line
3. Given any straight line segment, a circle can be drawn having the segment as radius and one endpoint as center
4. All right angles are congruent
5. If two lines are drawn which intersect a third in such a way that the sum of the inner angles on one side is less than two right angles, then the two lines inevitably must intersect each other on that side if extended far enough

**Simplied Version**

1. A straight line is the shortest possible line between two points
2. Parallel ines are a constant distance from each other
3. The angles in triangles always add up to 180

[How do non-euclidean games work? | Bitwise](https://www.youtube.com/watch?v=lFEIUcXCEvI)

### Euclidean Space

Euclidean space, In geometry, a two- or three-dimensional [space](https://www.britannica.com/science/space-physics-and-metaphysics) in which the axioms and postulates of [Euclidean geometry](https://www.britannica.com/science/Euclidean-geometry) apply; also, a space in any finite number of dimensions, in which points are designated by [coordinates](https://www.britannica.com/science/coordinate-system)(one for each dimension) and the distance between two points is given by a [distance formula](https://www.britannica.com/science/distance-formula). The only [conception](https://www.merriam-webster.com/dictionary/conception) of physical space for over 2,000 years, it remains the most compelling and useful way of modeling the world as it is experienced. Though non-Euclidean spaces, such as those that emerge from [elliptic geometry](https://www.britannica.com/science/Riemannian-geometry) and [hyperbolic geometry](https://www.britannica.com/science/hyperbolic-geometry), have led scientists to a better understanding of the universe and of [mathematics](https://www.britannica.com/science/mathematics) itself, Euclidean space remains the point of departure for their study.

### Euclidean Distance

It is the ordinary straight line distance between two points in Euclidean Space

```java
//Returns the Euclidean distance between this point and that point.

public double **distanceTo**(Point2D that) {
    double dx = this.x - that.x;
    double dy = this.y - that.y;
    return Math.**sqrt**(dx*dx + dy*dy);
}
```

### Hyperbolic functions

<https://betterexplained.com/articles/hyperbolic-functions>
