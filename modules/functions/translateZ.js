import applyUnitToNumber from '../utils/applyUnitToNumber'

export default function translateZ(z) {
  return 'translateZ(' + applyUnitToNumber(z) + ')'
}
