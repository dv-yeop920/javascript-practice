const menuButton = document.querySelector(".navbar-toggler");
const menuList = document.querySelector(".list-group");


const handleClickMenu = (event) => {
    if(event){
        menuList.classList.toggle("list");
    }
}

menuButton.addEventListener("click" , handleClickMenu);