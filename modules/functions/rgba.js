import isObject from '../utils/isObject'

export default function rgba(r, g, b, a) {
  const values = isObject(r) ? [ r.red, r.green, r.blue, r.alpha ] : [ r, g, b, a ]
  return 'rgba(' + values.join(',') + ')'
}
