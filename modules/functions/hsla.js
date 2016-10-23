import isObject from '../utils/isObject'

export default function hsla(h, s, l, a) {
  const values = isObject(h) ? [ h.hue, h.saturation, h.lightness, h.alpha ] : [ h, s, l, a ]
  return 'hsla(' + values.join(',') + ')'
}
