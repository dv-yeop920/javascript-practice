const menuButton = document.querySelector(".navbar-toggler");
const menuList = document.querySelector(".list-group");
const ListName = document.querySelectorAll(".list-group-item");
const darkWindow = document.querySelector(".badge");
const navbarTitle = document.querySelector(".navbar-brand");
const navbarToggler = document.querySelector(".navbar-toggler");
const text = document.querySelector(".text");

const handleClickMenu = () => {
    menuList.classList.toggle("show-list");

}

const handleScrollWindow = () => {
    if(window.scrollY) {
        //스크롤바를 얼마나 내렸는지 측정
        navbarTitle.classList.remove("navbar-scroll-up");
        navbarToggler.classList.remove("navbar-scroll-up");
        navbarToggler.classList.add("navbar-scroll");
        navbarTitle.classList.add("navbar-scroll");
        navbarTitle.style.fontSize = "20px";
        navbarTitle.style.fontWeight = "400";
    } if(window.scrollY < 50) {
        navbarTitle.classList.add("navbar-scroll-up");
        navbarToggler.classList.add("navbar-scroll-up");
        navbarToggler.classList.remove("navbar-scroll");
        navbarTitle.classList.remove("navbar-scroll");
        navbarTitle.style.fontSize = "30px";
        navbarTitle.style.fontWeight = "500";
    }
}

const handleScrollText = () => {
    if(text.scrollTop + text.clientHeight >= text.scrollHeight-0){
        alert("제대로 읽으셨어요?");            
    }
    if(text.scrollTop + text.clientHeight <= text.scrollHeight-10){
        return;
    }
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
window.addEventListener("scroll" , handleScrollWindow);
text.addEventListener("scroll" , handleScrollText);