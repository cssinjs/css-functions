import isObject from '../utils/isObject'
import applyUnitToNumber from '../utils/applyUnitToNumber'

export default function linearGradient(angle, ...colors) {
  const values = isObject(angle) ? angle : { angle, colors }

  return `linear-gradient(${applyUnitToNumber(values.angle, 'deg')}, ${values.colors.join(',')})`
}
