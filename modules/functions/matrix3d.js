import isObject from '../utils/isObject'

export default function matrix3d(a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4) {
  const values = isObject(a1) ? [ a1.a1, a1.b1, a1.c1, a1.d1, a1.a2, a1.b2, a1.c2, a1.d2, a1.a3, a1.b3, a1.c3, a1.d3, a1.a4, a1.b4, a1.c4, a1.d4 ] : [ a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4 ]
  return 'matrix3d(' + values.join(',') + ')'
}
