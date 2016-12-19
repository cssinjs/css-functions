import isObject from '../utils/isObject'

export default function scale3d(x, y, z) {
  const values = isObject(x) ? [ x.x, x.y, x.z ] : [ x, y, z ]
  return 'scale3d(' + values.join(',') + ')'
}
