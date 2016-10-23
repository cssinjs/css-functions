import isObject from '../utils/isObject'

export default function matrix3d(a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4) {
  const values = isObject(a1) ? [ r.a1, r.b1, r.c1, r.d1, r.a2, r.b2, r.c2, r.d2, r.a3, r.b3, r.c3, r.d3, r.a4, r.b4, r.c4, r.d4 ] : [ a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4 ]
  return 'matrix3d(' + values.join(',') + ')'
}
