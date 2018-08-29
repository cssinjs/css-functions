import applyUnitToNumber from '../utils/applyUnitToNumber'

export default function blur(v) {
  return 'blur(' + applyUnitToNumber(v) + ')'
}
