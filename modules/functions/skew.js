import isObject from '../utils/isObject'
import applyUnitToNumbers from '../utils/applyUnitToNumbers'

export default function skew(x, y) {
  const values = isObject(x) ? [ r.x, r.y ] : [ x, y ]
  return 'skew(' + applyUnitToNumbers(values, 'deg').join(',') + ')'
}
