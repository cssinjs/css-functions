import applyUnitToNumber from '../utils/applyUnitToNumber'

export default function blur(x) {
  return 'blur(' + applyUnitToNumber(x) + ')'
}
