import applyUnitToNumber from '../utils/applyUnitToNumber'

export default function translateX(x) {
  return 'translateX(' + applyUnitToNumber(x) + ')'
}
