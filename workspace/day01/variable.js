/*
    author : han
    contents : variable
*/
// 동적 바인딩 : 컴파일 시 값에 따라 자료형이 동적으로 결정 된다.
/* var data = 10; // 함수안에사용한게 아니라서 전역변수
console.log(data);
console.log(typeof(data));

data = "안녕";
console.log(typeof(data)); */

//  hoisting(호이스팅) : 선언의 위치에 상관없이 존재하면 메모리에 할당된다.
//                      초기화 작업은 호이스팅 되지 않고 선언만 호이스팅 된다.
//  ※ var 키워드를 사용하지 않으면, 호이스팅이 되지 않는다.

/* 호이스팅(O) */
/* console.log(age);
var age = 10;
console.log(age); */

// 호이스팅(X)
/* console.log(age); //var를 안쓰면 호이스팅이 되지않음.
age = 10;
console.log(age); */

// var 키워드를 사용하더라도 여러번 선언이 가능하기 때무네 계속 수정할 수 있다. 목적에 맞게 쓰지 않은 코드이다.
var data = 10;
var data = 20;
console.log(data);
