import isObject from '../utils/isObject'

export default function translate(x, y, z) {
  const values = isObject(x) ? [ r.x, r.y, r.z ] : [ x, y, z ]
  return 'translate(' + values.join(',') + ')'
}
