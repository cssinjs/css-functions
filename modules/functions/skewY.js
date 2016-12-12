import applyUnitToNumber from '../utils/applyUnitToNumber'

export default function skewY(x) {
  return 'skewY(' + applyUnitToNumber(x, 'deg') + ')'
}
