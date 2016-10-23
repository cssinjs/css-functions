import isObject from '../utils/isObject'

export default function scale(x, y) {
  const values = isObject(x) ? [ r.x, r.y ] : [ x, y ]
  return 'scale(' + values.join(',') + ')'
}
