const button = document.querySelector(".modal-button");
const modal = document.querySelector(".modal");
const modalButtonYes = document.querySelector("#yes");
const modalButtonNo = document.querySelector("#no");
const modalBackGround = document.querySelector(".black-bg");


const handleClick = () => {
    modal.classList.add("show-modal");
    modalBackGround.classList.add("show-modal");
    button.classList.add("row-button");
    return;
}

const handleClickModalButton = () => {
    modal.classList.remove("show-modal");
    button.classList.remove("row-button");
}

const handleClickBackGround = (event) => {
    modal.classList.remove("show-modal");
    button.classList.remove("row-button");
}







modalButtonNo.addEventListener("click" , handleClickModalButton);
modalButtonYes.addEventListener("click" , handleClickModalButton);
button.addEventListener("click" , handleClick);
modalBackGround.addEventListener("click" , handleClickBackGround);