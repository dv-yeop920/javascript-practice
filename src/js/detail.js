/*
각각 card 에 상품명과 가격을 products 객체에서 데이터를 가져와 각각 다르게 표시해 준다
*/
//상품 , 가격 데이터 객체
const products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' },
    { id : 3, price : 35000, title : 'Cup' },
    { id : 4, price : 20000, title : 'Glass' },
    { id : 5, price : 100000, title : 'Note' }
]

const title = document.querySelectorAll(".title");
const price = document.querySelectorAll(".price");
const productsButton = document.querySelector("#btn-box");
//const priceButtonDown = document.querySelector("#price-button");
//const priceButtonUp = document.querySelector("#price-button2");

//기본 정렬 상태 
for(let i = 0; i < title.length; i++) {

    title[i].innerHTML = products[i].title;
    price[i].innerHTML = products[i].price;
    
}

//버튼 클릭시 가격순으로 한번 더 정렬
const handleClickPruductButton = (event) => {
    if(event.target.id === "price-button") {
            for(let i = 0; i < title.length; i++) {
                products.sort((a,b)=> {
                    return a.price - b.price;
                });
                title[i].innerHTML = products[i].title;
                price[i].innerHTML = products[i].price;
            }
    }
    if(event.target.id === "price-button2") {
        for(let i = 0; i < title.length; i++) {
            products.sort((a,b)=> {
                return b.price - a.price;
            });
            title[i].innerHTML = products[i].title;
            price[i].innerHTML = products[i].price;
        }
    }
    if(event.target.id === "price-button3") {
        for(let i = 0; i < title.length; i++) {
            products.sort((a,b)=> {
                //localeCompare 메소드는 문자열의 크기를 정렬해줌
                return  a.title.localeCompare(b.title);
            });
            title[i].innerHTML = products[i].title;
            price[i].innerHTML = products[i].price;
        }
    }
    if(event.target.id === "price-button4") {
        for(let i = 0; i < title.length; i++) {
            products.filter(item => {
                if(item.price < 60000) {
                    return 
                }
            })
            title[i].innerHTML = products[i].title;
            price[i].innerHTML = products[i].price;
        }
    }
}


productsButton.addEventListener("click" , handleClickPruductButton);
//priceButtonDown.addEventListener("click" , handleClickPriceButtonUpAndDown);
//priceButtonUp.addEventListener("click" , handleClickPriceButtonUpAndDown);




//---------------------------------------------------------

const select = document.querySelectorAll(".form-select");
const sizeTitle = document.querySelector(".size-title");

const hadleClickOption = (event) => {
    if(event.target.value === "모자") {
        const option = ["S" , "M" , "L" , "XL" , "XXL"];
        select[1].innerHTML = option.map(item =>  `<option>${item}</option>`).join("");
    }

    if(event.target.value === "셔츠") {
        const option = ["S" , "M" , "L" , "XL" , "XXL"];
        select[1].innerHTML = option.map(item =>  `<option>${item}</option>`).join("");
        /* forEach 문으로 표시
        option.forEach(item => {
            const newOption = document.createElement("option");
            newOption.innerHTML = item;
            select[1].appendChild(newOption);
        })*/

        /*for of 문으로 표시 
        for(const item of option) {
            const newOption = document.createElement("option");
            newOption.textContent = item;
            select[1].appendChild(newOption);
        }*/
    }

    if(event.target.value === "바지") {
        const option = [28,30,32,34,36];
        select[1].innerHTML = option.map(item =>`<option>${item}</option>`).join("");
    }
}
//select 태그는 input 과 유사한 속성을 가진 태그 이기 때문에 input , change 이벤트가 다 적용 된다.
select[0].addEventListener("input" , hadleClickOption);

//-----------------------------------------







