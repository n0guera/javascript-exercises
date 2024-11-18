const reverseString = function (string) {
  let res = '';

  for (let i = string.length - 1; i >= 0; i -= 1) {
    res += string[i];
  }

  return res;
};

// Do not edit below this line
module.exports = reverseString;
