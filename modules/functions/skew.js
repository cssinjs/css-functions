import isObject from '../utils/isObject'

export default function skew(x, y) {
  const values = isObject(x) ? [ r.x, r.y ] : [ x, y ]
  return 'skew(' + values.join(',') + ')'
}
