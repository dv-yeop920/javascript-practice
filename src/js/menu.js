const menuButton = document.querySelector(".navbar-toggler");
const menuList = document.querySelector(".list-group");
const ListName = document.querySelectorAll(".list-group-item");


const handleClickMenu = () => {
    menuList.classList.toggle("show-list");

}

menuButton.addEventListener("click" , handleClickMenu);