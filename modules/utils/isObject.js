export default function isObject(obj) {
  return obj instanceof Object && !Array.isArray(obj)
}
