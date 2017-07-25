import applyUnitToNumber from '../utils/applyUnitToNumber'

export default function rotate(x) {
  return 'rotate(' + applyUnitToNumber(x, 'deg') + ')'
}
