import applyUnitToNumber from '../utils/applyUnitToNumber'

export default function rotateX(x) {
  return 'rotateX(' + applyUnitToNumber(x, 'deg') + ')'
}
