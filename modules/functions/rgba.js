import isObject from '../utils/isObject'
import { hexToRgb } from '../utils/color'

export default function rgba(r, g, b, a) {
  let values

  if (isObject(r)) { // rgba({ red: 23, green: 63, blue: 99, alpha: 0.2 })
    values = [ r.red, r.green, r.blue, r.alpha ]
  } else if (typeof r === 'string') { // rgba('#173f63', 0.2)
    values = [ ...hexToRgb(r), g ]
  } else { // rgba(23, 63, 99, 0.2)
    values = [ r, g, b, a ]
  }
  return 'rgba(' + values.join(',') + ')'
}
