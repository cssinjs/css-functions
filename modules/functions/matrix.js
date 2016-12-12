import isObject from '../utils/isObject'

export default function matrix(a, b, c, d, x, y) {
  const values = isObject(a) ? [ a.a, a.b, a.c, a.d, a.x, a.y ] : [ a, b, c, d, x, y ]
  return 'matrix(' + values.join(',') + ')'
}
