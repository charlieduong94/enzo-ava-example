module.exports = {
  onCreate (input) {
    this.state = { count: input.count || 0 }
  },

  increment () {
    this.state.count++
  },

  decrement () {
    this.state.count--
  }
}
