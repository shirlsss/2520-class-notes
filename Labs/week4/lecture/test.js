const divide = (n1, n2) => {
  return n1 / n2;
};

const multiply = (n1, n2) => {
  return n1 * n2;
};

try {
  divide(10, 0);
  multiply(10, true);
} catch (error) {
  console.log(error);
}
