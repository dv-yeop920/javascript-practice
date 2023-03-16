const menuButton = document.querySelector(".navbar-toggler");
const menuList = document.querySelector(".list-group");
const ListName = document.querySelectorAll(".list-group-item");
const darkWindow = document.querySelector(".badge");


const handleClickMenu = () => {
    menuList.classList.toggle("show-list");

}

let count = 0;

const handleClickDarkWindow = () => {

        if(count % 2 === 0){
            darkWindow.innerHTML = "light 🔄";
            count = count + 1;
            document.body.style.backgroundColor = "#34495e";
            ListName.style.backgroundColor = "#34495e";
        }else if(count % 2 === 1) {
            darkWindow.innerHTML = "Dark 🔄";
            count = count + 1;
            document.body.style.backgroundColor = "#f5f6f7";
            ListName.style.backgroundColor = "#f5f6f7";
        }
        
        console.log(count);
}

menuButton.addEventListener("click" , handleClickMenu);
darkWindow.addEventListener("click" , handleClickDarkWindow);