/* function add(numbers, callback) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}
var arr = [1, 2, 3];
console.log(add(1, 2, 3, 4, 5, 6)); */

function getNums(callback, text) {
  if (callback) {
    return callback(text);
  }
}

let num = getNums(function (text) {
  let result = 0;
  text.split('').forEach((v) => (result += parseInt(v)));
  return result;
}, "123");

console.log(num);
