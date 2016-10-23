import isObject from '../utils/isObject'

export default function matrix(a, b, c, d, x, y) {
  const values = isObject(a) ? [ r.a, r.b, r.c, r.d, r.x, r.y ] : [ a, b, c, d, x, y ]
  return 'matrix(' + values.join(',') + ')'
}
