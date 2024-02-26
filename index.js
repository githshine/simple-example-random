function random(min, max) {
  return Math.floor(Math.random(0, 1) * (max - min + 1)) + min;
}

module.exports = random;
