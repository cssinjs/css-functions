import applyUnitToNumber from '../utils/applyUnitToNumber'

export default function skewX(x) {
  return 'skewX(' + applyUnitToNumber(x, 'deg') + ')'
}
