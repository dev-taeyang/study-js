// var x = 20;     // 지역변수와 이름이 겹치지 않는 전역 변수
// global.x = 20; // Node.js 에서의 최상위 객체(전역객체)
// window.x = 20; // 브라우저에서의 최상위 객체(전역객체)
globalThis.x = 20; // global과 window 객체를 상황에 맞게 사용해주는 전역 객체(전역변수를 선언할때는 무조건 globalThis로 선언해라)

function f() {
  // var x = 10;
  // console.log(x);
  // console.log(this.x);
  // console.log(global.x);
  // console.log(window.x);
  // console.log(globalThis.x); // 전역에 접근할때 이것만!

  //   for(var i=0; i<10; i++){
  for (var i = 0; i < 10; i++) {
  }
  console.log(i);
}

f();
