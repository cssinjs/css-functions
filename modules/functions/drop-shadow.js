import isObject from '../utils/isObject'
import applyUnitToNumbers from '../utils/applyUnitToNumber'

export default function dropShadow(x, y, blur, spread) {
  const values = isObject(x) ? [ x.x, x.y, x.blur, x.spread ] : [ x, y, blur, spread  ]
  const filtred = values.filter(v => v != null)

  return 'drop-shadow(' + applyUnitToNumbers(filtred) + ')'
}
