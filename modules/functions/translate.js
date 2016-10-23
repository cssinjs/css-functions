import isObject from '../utils/isObject'

export default function translate(x, y) {
  const values = isObject(x) ? [ r.x, r.y ] : [ x, y ]
  return 'translate(' + values.join(',') + ')'
}
