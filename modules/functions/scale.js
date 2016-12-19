import isObject from '../utils/isObject'

export default function scale(x, y) {
  const values = isObject(x) ? [ x.x, x.y ] : [ x, y ]
  return 'scale(' + values.join(',') + ')'
}
