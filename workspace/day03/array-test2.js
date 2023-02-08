// 1. 제어문
// 2. callback 함수
// 3. arrow expession

/* 1~10까지 Array 객체에 담은 후 짝수만 출력 */
let numbers = new Array();

// numbers.forEach((v, i) => v.push(i+1))






/* let numbers = new Array(10);
numbers.length = 11;

numbers.forEach((v) => numbers.push(1 + v));
console.log(numbers);
for (let i = 1; i < numbers.length; i++) {
  numbers[i] = i;
}
numbers.filter((v) => v % 2 == 0).forEach((v) => console.log(v)); */
/* 한글을 정수로 변경 */
// oneToTen.forEach((v) => console.log(v));

let hangle = ['공', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구'];
let x = '일공이사';
console.log(changeNumber(x));

function changeNumber(strings) {
  var datas = new Array();
  var result = '';
  strings.split('').forEach((v) => datas.push(v));
  for (let i = 0; i < datas.length; i++) {
    result = result + hangle.indexOf(datas[i]);
  }
  return parseInt(result);
}
let y = '3054';
console.log(changehangle(y));
/* 정수를 한글로 변경 */
// 1024
function changehangle(strings) {
  let str = new Array();
  let result = '';
  strings.split('').forEach((v) => str.push(v));
  for (let i = 0; i < str.length; i++) {
    let index = str[i]; // 니가 선언한 배열의 방번호에 값을 불러오는거
    result += hangle[index]; //일 + 공 + 이 + 사
  }
  return result;
}

/* 1~100까지 합 출력 */
let oneToOne = new Array(100);
let results = 0;
for (let i = 0; i <= oneToOne.length; i++) {
  results += i;
}
console.log(results);

// ------------------------------------------------
oneTo100();

function oneTo100() {
  var number = 0;
  for (let i = 0; i <= 100; i++) {
    number += i;
  }
  console.log(number);
}
// -------------------------------------------------
