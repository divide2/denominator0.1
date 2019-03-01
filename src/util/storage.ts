export default {
  save (key, value) {
    if (typeof(value) === "object") {
      localStorage.setItem(key, JSON.stringify(value))
    } else {
      localStorage.setItem(key, value)
    }
  }
}