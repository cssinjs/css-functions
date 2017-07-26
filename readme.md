## JavaScript functions to build CSS functions

This package ships functions that return the equivalent CSS function syntax.
There will be automatic value validation in non-production mode soon.

## Functions
Right now we ship 26 functions.<br>

* `hsl(h, s, l)`
* `hsla(h, s, l, a)`
* `matrix(a, b, c, d, x, y)`
* `matrix3d(a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4)`
* `perspective(p)`
* `rgb(r, g, b)`
* `rgba(r, g, b, a)`
* `rotate(x, y)`
* `rotate3d(x, y, z)`
* `rotateX(x)`
* `rotateY(y)`
* `rotateZ(z)`
* `scale(x, y)`
* `scale3d(x, y, z)`
* `scaleX(x)`
* `scaleY(y)`
* `scaleZ(z)`
* `skew(x, y)`
* `skewX(x)`
* `skewY(y)`
* `translate(x, y)`
* `translate3d(x, y, z)`
* `translateX(x)`
* `translateY(y)`
* `translateZ(z)`
* `linearGradient(x, y /*, z,...*/)`

### Parameter object notation
All parameters can always be passed as a single objects as well.<br>
The keys always match the parameter name e.g. `rotate3d({ x, y, z })` except for the following color functions:

* `hsl({ hue, saturation, lightness })`
* `hsla({ hue, saturation, lightness, alpha })`
* `rgb({ red, green, blue })`
* `rgba({ red, green, blue, alpha })`

## Example
```javascript
import { rgba, translate3d } from 'css-functions'

// => 'rgba(255, 0, 255, 0.5)'
const color = rgba(255, 0, 255, 0.5)
const color = rgba({
  red: 255,
  green: 0,
  blue: 255,
  alpha: 0.5
})

// => 'translate3d(10px, 10%, 0)'
const transform = translate3d('10px', '10%', 0)
const transform = translate3d({
  x: '10px',
  y: '10%',
  z: 0
})
```

## Multiple functions
To combine multiple functions safely, it ships the `multiple` API.
It safely combines both returned strings separated by a whitespace.

```javascript
import { translateX, scale, rotateX, multiple } from 'css-functions'

// => 'translateX(10px) translateY(5%) scale(0.5, 0.5) rotateX(180deg)'
const combined = multiple(
  translateX(10),
  translateY('5%'),
  scale(0.5, 0.5),
  rotateX(180)
)
```

## Units
As the above example shows, we add default units to some numbers.
#### px
* `translate`
* `translate3d`
* `translateX`
* `translateY`
* `translateZ`

#### deg
* `rotate`
* `rotate3d`
* `rotateX`
* `rotateY`
* `rotateZ`
* `skew`
* `skewX`
* `skewY`
