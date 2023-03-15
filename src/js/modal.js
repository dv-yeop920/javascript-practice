const button = document.querySelector("#modal-button");
const modal = document.querySelector("#modal");
const modalButtonYes = document.querySelector("#yes");
const modalButtonNo = document.querySelector("#no");

const handleClick = () => {
    modal.style.display = "block";
    button.style.display = "none";
}

const handleClickModalButton = () => {
    modal.style.display = "none";
    button.style.display = "block";
}





modalButtonNo.addEventListener("click" , handleClickModalButton);
modalButtonYes.addEventListener("click" , handleClickModalButton);
button.addEventListener("click" , handleClick);