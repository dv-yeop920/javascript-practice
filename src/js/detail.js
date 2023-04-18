/*
각각 card 에 상품명과 가격을 products 객체에서 데이터를 가져와 각각 다르게 표시해 준다
*/
//상품 , 가격 데이터 객체
function App() {

    const products = [
        { id : 0, price : 70000, title : 'Dress' },
        { id : 1, price : 50000, title : 'Shirt' },
        { id : 2, price : 60000, title : 'Monastery' },
        { id : 3, price : 35000, title : 'Cup' },
        { id : 4, price : 20000, title : 'Glass' },
        { id : 5, price : 100000, title : 'Note' }
    ]

    
    const productsButton = document.querySelector("#btn-box");
    const container = document.querySelector(".card-group");
    
    
    //기본 정렬 상태 
    const render = () => {
        const template = products.map((item) => {
        return `
        <div class="card">
        <img src="https://via.placeholder.com/600">
        <div class="card-body">
            <h5 class="title" data-id="0">${item.title}</h5>
            <p class="price" data-price="0">${item.price}</p>
            <button class="order btn-danger">주문하기</button>
        </div>
        </div>`;
        }).join("");
        container.innerHTML = template;
    }

    render();
    

    //가격정렬 버튼
    const handleClickPruductButton = (event) => {

        if(event.target.id === "price-button") {
            products.sort((a,b)=> {
                return a.price - b.price;
            });
            render();  
        }

        if(event.target.id === "price-button2") {
                products.sort((a,b)=> {
                    return b.price - a.price;
                });
                render();
        }

        if(event.target.id === "price-button3") {
                products.sort((a,b)=> {
                    //localeCompare 메소드는 문자열의 크기를 정렬해줌
                    return  a.title.localeCompare(b.title);
                });
                render();
        }

        if(event.target.id === "price-button4") {
            const filteredProducts = products.filter(item =>
                {
                    return item.price <= 60000
                });

            const template = filteredProducts.map((item) => {

                        return `<div class="card">
                        <img src="https://via.placeholder.com/600">
                        <div class="card-body">
                            <h5 class="title" data-id="0">${item.title}</h5>
                            <p class="price" data-price="0">${item.price}</p>
                            <button class="order btn-danger">주문하기</button>
                        </div>
                        </div>`;
                    
                        }).join("");
                        container.innerHTML = template;
        }
    }

    //--------------장바구니-----------------------------------------

//주문 하기 버튼 
    const orderButton = document.querySelectorAll(".order");
    const MenuList = document.querySelector(".shopping-list-box");
    
    const handleClickOrderButton = (event) => {
        let menu = [];
        const index = event.target.getAttribute('data-index'); // 클릭된 버튼의 인덱스 가져오기
        const title = products[index].title; // 인덱스에 해당하는 제품의 title 값 가져오기

        const existingItem = MenuList.querySelector(`[data-title="${title}"]`);

        // 이미 주문 목록에 동일한 제품이 있는지 확인해서 맞으면 if문 실행 아니면 else문 실행
        if (existingItem) {
            //아래 span 요소 가져오기 
            const quantityElement = existingItem.querySelector('.quantity');
            //span 요소의 text 를 변수에 담고 누를때 마다 기존 text + 1 이 count 되도록 함.
            const quantity = parseInt(quantityElement.textContent);
            quantityElement.textContent = quantity + 1; // 수량 증가
            
        } else{
            const joson = JSON.stringify([title]);
            localStorage.setItem('메뉴',joson);
            const getMenu = localStorage.getItem('메뉴');
            // 주문 목록에 추가
            const template = `
                <li class="list" data-title="${title}">
                    ${JSON.parse(getMenu)}
                    <span class="quantity">1</span> 개
                </li>
            `;
            MenuList.innerHTML += template;
            
        }

    };
    productsButton.addEventListener("click" , handleClickPruductButton);
    for(let i = 0 ; i < products.length; i++) {
        orderButton[i].setAttribute('data-index', i); // 각 버튼에 인덱스 값을 설정하기
        orderButton[i].addEventListener("click" , handleClickOrderButton);
    }



    //-----------------selecter----------------------------------------
    
    const select = document.querySelectorAll(".form-select");
    
    const hadleClickOption = (event) => {

        if(event.target.value === "모자") {
            const option = ["S" , "M" , "L" , "XL" , "XXL"];
            select[1].innerHTML = option.map(item =>  
                `<option>${item}</option>`).join("");
        }
    
        if(event.target.value === "셔츠") {
            const option = ["S" , "M" , "L" , "XL" , "XXL"];
            select[1].innerHTML = option.map(item =>  
                `<option>${item}</option>`).join("");
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
            select[1].innerHTML = option.map(item =>  
                `<option>${item}</option>`).join("");
        }
    }
    //select 태그는 input 과 유사한 속성을 가진 태그 이기 때문에 input , change 이벤트가 다 적용 된다.
    select[0].addEventListener("input" , hadleClickOption);
}

App();










