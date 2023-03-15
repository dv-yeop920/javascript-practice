const button = document.querySelector("#modal-button");
const modal = document.querySelector("#modal");
const modalButtonYes = document.querySelector("#yes");
const modalButtonNo = document.querySelector("#no");

const handleClick = () => {
    modal.style.display = "block";
}

const handleClickModalButton = () => {
    modal.style.display = "none";
}





modalButtonNo.addEventListener("click" , handleClickModalButton);
modalButtonYes.addEventListener("click" , handleClickModalButton);
button.addEventListener("click" , handleClick);