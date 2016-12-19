import isObject from '../utils/isObject'
import applyUnitToNumbers from '../utils/applyUnitToNumbers'

export default function translate(x, y, z) {
  const values = isObject(x) ? [ x.x, x.y, x.z ] : [ x, y, z ]
  return 'translate(' + applyUnitToNumbers(values).join(',') + ')'
}
