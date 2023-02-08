// shop.json에 변환된 JSON 형식의 문자열을 작성한다.
// shop.json을 읽어 온 뒤 Array 객체로 변환한다.
// 총 가격과 총 재고 수를 Object에 담은 뒤 sum.json으로 출력한다

let file = require('fs');

function Product(name, price, stock) {
  this.name = name;
  this.price = price;
  this.stock = stock;
}

let products = [
  new Product('문재현', 100, 10),
  new Product('정지욱', 200, 20),
  new Product('이영준', 300, 30),
];

let productsJSON = JSON.stringify(products);
let product = new Array().fill(0);
productJSON = JSON.stringify(product);
file.readFile('shop.json', 'utf-8', (error, content) => {
  if (error) {
    return;
  } else {
    let totalPrice = JSON.parse(content)
      .map((v) => v.price)
      .reduce((v, s) => v + s);
    let totalStock = JSON.parse(content)
      .map((v) => v.stock)
      .reduce((v, s) => v + s);
    let total = { totalPrice: `${totalPrice}`, totalStock: `${totalStock}` };

    file.writeFile('sum.json', JSON.stringify(total), 'utf-8', (error) => {});
  }
});
// console.log(productJSON);

// shop.json에 productsJSON을 파일 입력.
/* file.writeFile('shop.json', productsJSON, 'utf-8', (error) => {
  if(error) {
    console.log(error);
  }console.log("성공");
}) */

// file.writeFile('love.txt', '사랑해', 'utf-8', function(error){
//     if(error){
//         console.log(error)
//     }else{
//         console.log("성공!")
//     }
// });



