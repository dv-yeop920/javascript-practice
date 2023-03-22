
const button1 = document.querySelector(".btn-1");
const button2 = document.querySelector(".btn-2");
const button3 = document.querySelector(".btn-3");
const nextButton = document.querySelector(".next-button");
const backButton = document.querySelector(".back-button");

const card = document.querySelector(".slide-box");



function handleClickButton1() {
    card.classList.remove("card-slide2");
    card.classList.remove("card-slide3");
    card.classList.add("card-slide1");
}

function handleClickButton2() {
    card.classList.remove("card-slide1");
    card.classList.remove("card-slide3");
    card.classList.add("card-slide2");
}

function handleClickButton3() {
    card.classList.remove("card-slide1");
    card.classList.remove("card-slide2");
    card.classList.add("card-slide3");
}


let count = 0;
let backCount = 1;


function handleClickNextButton() {
    if(count === 0){
        card.classList.remove("card-slide4");
        card.classList.add("card-slide2");
        count++;
    }else if(count === 1){
        card.classList.remove("card-slide2");
        card.classList.add("card-slide3");
        count--;
    }
}

function handleClickBackButton() {
    if(backCount === 1){
        card.classList.remove("card-slide3");
        card.classList.add("card-slide2");
        backCount --;
    }else if(backCount === 0){
        card.classList.remove("card-slide2");
        card.classList.add("card-slide4");
        backCount++;
    }
}



button1.addEventListener("click" , handleClickButton1);
button2.addEventListener("click" , handleClickButton2);
button3.addEventListener("click" , handleClickButton3);
nextButton.addEventListener("click" , handleClickNextButton);
backButton.addEventListener("click" , handleClickBackButton);


















/*const passButton = document.querySelector(".pass-button");
const backButton = document.querySelector(".back-button");

const slideCard = document.querySelector(".slide-box__card");





function handleClickPassButton() {
    slideCard.classList.add("card-slide__left");
    slideCard.classList.remove("card-slide__right");
}
function handleClickBackButton() {
    slideCard.classList.remove("card-slide__left");
    slideCard.classList.add("card-slide__right");
}

passButton.addEventListener("click" , handleClickPassButton);
backButton.addEventListener("click" , handleClickBackButton);*/