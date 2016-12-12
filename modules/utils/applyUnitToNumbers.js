export default function applyUnitToNumbers(values, unit = 'px') {
  for (let i = 0, len = values.length; i < len; ++i) {
    const value = values[i]

    // only transform number values other than 0
    // as 0 does not need a value anyway
    if (typeof value === 'number' && value !== 0) {
      values[i] = value + unit
    }
  }

  return values
}
