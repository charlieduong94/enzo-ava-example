const MIN = 1
const MAX = 10

/**
 * Simple helper function that generates a random number
 */
function generateRandomNumber () {
  return Math.floor(Math.random() * (MAX - MIN + 1) + MIN)
}

module.exports = generateRandomNumber
