import isObject from '../utils/isObject'

export default function rotate(x, y) {
  const values = isObject(x) ? [ r.x, r.y ] : [ x, y ]
  return 'rotate(' + values.join(',') + ')'
}
