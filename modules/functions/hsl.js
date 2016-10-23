import isObject from '../utils/isObject'

export default function hsl(h, s, l) {
  const values = isObject(h) ? [ h.hue, h.saturation, h.lightness ] : [ h, s, l ]
  return 'hsl(' + values.join(',') + ')'
}
