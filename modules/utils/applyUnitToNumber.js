export default function applyUnitToNumbers(value, unit = 'px') {
  // only transform number values other than 0
  // as 0 does not need a value anyway
  if (typeof value === 'number' && value !== 0) {
    return value + unit
  }

  return value
}
