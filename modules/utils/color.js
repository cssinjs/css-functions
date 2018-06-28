/*
    hexToRgb("#0033ff") => [0, 51, 255]
    hexToRgb("#03f") => [0, 51, 255]
*/

export function hexToRgb(hex = '#000000') {
  return hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (m, r, g, b) => '#' + r + r + g + g + b + b
    )
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))
}
