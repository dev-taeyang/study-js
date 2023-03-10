// 상품명, 가격, 재고를 프로퍼티로 담고 있는 objecgt를 3개 선언한다.
//  3개의 object를 1개의 Array 객체에 모두 담는다.
// JSON으로 변경시킨다.

// shop.json에 변환된 JSON 형식의 문자열을 작성한다.
// shop.json을 읽어 온 뒤 Array 객체로 변환한다.
// 총 가격과 총 재고 수를 OBject에 담은 뒤 Sum.json으로 출력한다.
function Pruduct(name, price, count) {
  this.name = name;
  this.price = price;
  this.count = count;
}

let pen = new Pruduct('jebra', 2000, 5);
let book = new Pruduct('herrypotter', 8000, 10);
let phone = new Pruduct('iPHone', 10000, 3);
let product = new Array(pen, book, phone);
let productJSON = JSON.stringify(product);

// console.log(productJSON);

// 각 상품별 총 가격을 구한 뒤 출력한다.
// callback 함수를 사용한다.
// 외부에서는 JSON 데이터가 전달된다.

function changeArr(productJSON, callback) {
  let totalPrice = new Array().fill(0);
  totalPrice = JSON.parse(productJSON).map((v) => v.price * v.count);
  if (callback) {
    callback(totalPrice.forEach((v) => console.log(v)));
    return;
  }
  return console.log(totalPrice);
}

changeArr(productJSON, (v) => v);
changeArr(productJSON);

// ---------------------------------------------------------------------------
//
// 상품명, 가격, 재고를 프로퍼티로 담고 있는 Object를 3개 선언한다.
// 3개의 Object를 1개의 Array 객체에 모두 담는다.
// JSON으로 변경시킨다.

// shop.json에 변환된 JSON 형식의 문자열을 작성한다.
// shop.json을 읽어 온 뒤 Array 객체로 변환한다.
// 총 가격과 총 재고 수를 Object에 담은 뒤 sum.json으로 출력한다.
/*S
let file = require("fs");
function Product(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
}

let products = [
    new Product('참후레쉬', 1500, 90),
    new Product('참후레쉬', 1500, 60),
    new Product('참후레쉬', 1500, 30)
];

let productsJSON = JSON.stringify(products);
// file.writeFile('shop.json', productsJSON, 'utf-8', error => {});
file.readFile('shop.json', 'utf-8', (error, contents) => {
    let products = JSON.parse(contents);
    let totalPrice = products.map(product => product.price).reduce((totalPrice, price) => totalPrice + price);
    let totalStock = products.map(product => product.stock).reduce((totalStock, stock) => totalStock + stock);
    let sum = {totalPrice: totalPrice, totalStock: totalStock};
    let sumJSON = JSON.stringify(sum);
    file.writeFile('sum.json', sumJSON, 'utf-8', error => {});
});
*/
// 각 상품별 총 가격을 구한 뒤 출력한다.
// callback 함수를 사용한다.
// 외부에서는 JSON 데이터가 전달된다.
// function getTotals(productsJSON, callback) {
//     let products = JSON.parse(productsJSON);
//     let totals = products.map(product => product.price * product.stock);
//     if(callback){
//         callback(totals);
//     }
// }

// getTotals(productsJSON, totals => {totals.forEach(total => console.log(total))});
