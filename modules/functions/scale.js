import isObject from '../utils/isObject'

export default function scale(x, y) {
  const values = isObject(x) ? [ x.x, x.y ] : [ x, y ]
  if (typeof values[1] === 'undefined') values[1] = values[0]
  return 'scale(' + values.join(',') + ')'
}
