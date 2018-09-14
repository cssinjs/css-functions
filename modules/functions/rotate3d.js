import isObject from '../utils/isObject'
import applyUnitToNumber from '../utils/applyUnitToNumber'

export default function rotate3d(x, y, z, a) {
  const values = isObject(x) ? [ x.x, x.y, x.z ] : [ x, y, z ]
  const angle = a || x.a

  return `rotate3d(${values.join(',')},${applyUnitToNumber(angle, 'deg')})`
}
