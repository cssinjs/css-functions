import applyUnitToNumber from '../utils/applyUnitToNumber'

export default function rotateY(y) {
  return 'rotateY(' + applyUnitToNumber(y, 'deg') + ')'
}
