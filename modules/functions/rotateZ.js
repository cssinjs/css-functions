import applyUnitToNumber from '../utils/applyUnitToNumber'

export default function rotateZ(z) {
  return 'rotateZ(' + applyUnitToNumber(z, 'deg') + ')'
}
