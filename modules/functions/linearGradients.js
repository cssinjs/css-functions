import applyUnitToNumber from '../utils/applyUnitToNumber'

function baseLinearGradient(gradient) {
  return function (anngle, ...colors) {
    return `${gradient}(${applyUnitToNumber(anngle)}, ${colors.join(',')})`
  }
}

export const linearGradient = baseLinearGradient('linear-gradient')
export const repeatingLinearGradient = baseLinearGradient('repeating-linear-gradient')
