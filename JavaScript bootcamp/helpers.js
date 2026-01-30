function cToF(c) {
  f = c * (9 / 5) + 32;
  return f;
}
function fToC(f) {
  c = (f - 32) * (5 / 9);
  return c;
}

module.exports = { cToF, fToC };
