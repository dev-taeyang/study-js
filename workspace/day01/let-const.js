const on = 1; //상수에 의미를 부여할 때 

function testConst() {
  // on = 2; //변경이 안됨 사용만 가능함.
  console.log(on);
}

function testLet() {
  let data = 10;
  // let data = 20; //중복 선언이 안됨.
  data = 20;
  console.log(data);
}

testConst();
testLet();
