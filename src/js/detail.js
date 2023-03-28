/*
각각 card 에 상품명과 가격을 products 객체에서 데이터를 가져와 각각 다르게 표시해 준다
*/
//상품 , 가격 데이터 객체
const products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
]

const title = document.querySelectorAll(".title");
const price = document.querySelectorAll(".price");

for(let i = 0; i <= title.length; i++) {
        title[i].innerHTML = products[i].title;
        price[i].innerHTML = products[i].price;
}





