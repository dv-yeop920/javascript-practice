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
    modalBackGround.classList.remove("show-modal");
}

const handleClickBody = (event) => {
    if(event.target === modalBackGround) {
        modal.classList.remove("show-modal");
        button.classList.remove("row-button");
        modalBackGround.classList.remove("show-modal");
    }
}







modalButtonNo.addEventListener("click" , handleClickModalButton);
modalButtonYes.addEventListener("click" , handleClickModalButton);
button.addEventListener("click" , handleClick);
modalBackGround.addEventListener("click" , handleClickBody);

