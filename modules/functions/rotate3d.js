import isObject from '../utils/isObject'

export default function rotate3d(x, y, z) {
  const values = isObject(x) ? [ r.x, r.y, r.z ] : [ x, y, z ]
  return 'rotate3d(' + values.join(',') + ')'
}
