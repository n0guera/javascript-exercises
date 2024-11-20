const sumFunc = function (x, y) {
  let res = 0;
  for (let i = x; i <= y; i += 1) {
    res += i;
  }
  return res;
}
const sumAll = function (x, y) {
  if (x < 0 || y < 0 || typeof (x) !== "number" || typeof (y) !== "number") return 'ERROR';

  let res;

  x > y ? res = sumFunc(y, x) : res = sumFunc(x, y);

  return res;
};

// Do not edit below this line
module.exports = sumAll;
