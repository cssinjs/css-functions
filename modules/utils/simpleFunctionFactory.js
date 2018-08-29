export default function simpleFunctionFactory(cssfunction) {
  return function (v) {
    return cssfunction + '(' + v + ')'
  }
}
