const square = (n) => n * n;

const squareRoot = (n) => Math.sqrt(n);

const distance = (x1, y1, x2, y2) => {
  return squareRoot(square(x2 - x1) + square(y2 - y1));
};

module.exports = { distance };

// we only need to export distance - due to closures (every fn in js has a hidden backpack that keeps track of which functions need what to run successfully)
// anywhere distance() goes, will take its implicitly tied fns
//
