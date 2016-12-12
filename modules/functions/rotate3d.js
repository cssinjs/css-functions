import isObject from '../utils/isObject'
import applyUnitToNumbers from '../utils/applyUnitToNumbers'

export default function rotate3d(x, y, z) {
  const values = isObject(x) ? [ r.x, r.y, r.z ] : [ x, y, z ]
  return 'rotate3d(' + applyUnitToNumbers(values, 'deg').join(',') + ')'
}
