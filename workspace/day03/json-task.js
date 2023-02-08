// 동물원에 동물이 3마리가 있다.
//  각 동물별 정보는 이름, 종, 나이이다.

// 동물원의 동물 전체 평균 나이를 구한다.

function Animal(name, kind, age) {
  this.name = name;
  this.kind = kind;
  this.age = age;
}

let animals = [
  new Animal('문재현', '인간', 27),
  new Animal('정지욱', '원숭이', 27),
  new Animal('이영준', '강아지', 26),
];
let animalsJSON = JSON.stringify(animals);

changeArr(animalsJSON, (animals) => console.log(animals.reduce((v, i) => v + i) / 3));
changeArr(animalsJSON);

function changeArr(animalsJSON, callback) {
  let animals = new Array().fill(0);
  animals = JSON.parse(animalsJSON).map((v) => v.age);
  if (callback) {
    callback(animals);
    return;
  }
  return console.log(animals);
}

// ---------------------------------------------------------------------------------------------------
// 강사님 버전

/*
// 동물원에 동물이 3마리 있다.
// 각 동물별 정보는 이름, 종, 나이이다.
function Animal(name, kind, age) {
    this.name = name;
    this.kind = kind;
    this.age = age;
}

let animals = [
    new Animal('구름이', '양', 4),
    new Animal('뽀삐', '소', 8),
    new Animal('바둑이', '기린', 9)
];

let animalsJSON = JSON.stringify(animals);

// 동물원의 동물 전체 평균 나이를 구한다.
function average(animalsJSON, callback) {
    let animals = JSON.parse(animalsJSON);
    // reduce(total, data)일 경우 항상 total값의 타입은 data의 타입과 동일하게 설정된다.
    let total = animals.map(animal => animal.age).reduce((total, age) => total + age);
    let average = total / animals.length;
    if(callback) {
        callback(average);
    }
    return average;
}

average(animalsJSON, average => console.log(average));
*/
