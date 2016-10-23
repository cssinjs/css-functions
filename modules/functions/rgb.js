import isObject from '../utils/isObject'

export default function rgb(r, g, b) {
  const values = isObject(r) ? [ r.red, r.green, r.blue ] : [ r, g, b ]
  return 'rgb(' + values.join(',') + ')'
}
