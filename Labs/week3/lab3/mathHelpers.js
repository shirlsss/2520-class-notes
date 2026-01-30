const squareRoot = (n) => {
  return Math.sqrt(n);
};

const square = (n) => {
  return Math.pow(n, 2);
};

const distance = (x1, y1, x2, y2) => {
  const d1 = square(x2 - x1);
  const d2 = square(y2 - y1);
  d = squareRoot(d1 + d2);
  return d;
};

module.exports = { distance };
