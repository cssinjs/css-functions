import applyUnitToNumber from '../utils/applyUnitToNumber'

export default function translateY(y) {
  return 'translateY(' + applyUnitToNumber(y) + ')'
}
