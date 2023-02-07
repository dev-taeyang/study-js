// JS에서는 오버로딩을 지원하지 않는다.
// 매개변수를 개수에 맞게 사용할 필요가 없음 -> 나머지는 undefined로 사용됨.

let result = add(1, 3);
console.log(result);
result = add(1, 3, 4);
console.log(result);

// 가변인자 ...numbers
function add(...numbers: number[]) { //타입 확인 : 타입 any[] 모든 타입을 다받을 수 있는 문법.
  let result = 0;

  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}

// 같은 이름으로 선언하게 되면 가장 최근에 선언한 함수로 적용된다.
/* function add(number1, number2, number3) {
    return number1 + number2 + number3;
}

function add(number1, number2) {
    return number1 + number2;
} */

// typescript를 사용하고 싶을 때에는 다운로드 후 사용해야 한다.
// npm install typescript --save-dev
// npm install -g typescript
// npm install -g ts-node @types/node
// npx tsc
// Set-ExecutionPolicy Unrestricted (관리자 권한으로 실행)
// tsc --init

intro("한동석", 20, "남자", "강사");

function intro(name: string, ...args: any[]) {
  console.log(`이름 : ${name}`);
  for(let i = 0 ; i < args.length; i++) {
    console.log(args[i]);
  }
}
