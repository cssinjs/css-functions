import applyUnitToNumber from '../utils/applyUnitToNumber'

export default function hueRotate(v) {
  return 'hue-rotate(' + applyUnitToNumber(v, 'deg') + ')'
}
