

function handleScrollWindow() {
    const imgCard = document.querySelectorAll(".img-card");
    //const scroll = window.scrollY;
    let scroll = window.scrollY;
    console.log(scroll);

    if(window.scrollY > 3780) {
        imgCard[0].classList.add("hide");
        imgCard[0].classList.add("small");
        imgCard[0].classList.remove("show");
    }else {
        imgCard[0].classList.remove("hide");
        imgCard[0].classList.remove("small");
        imgCard[0].classList.add("show");
    }
    
    if(window.scrollY >  4480) {
        imgCard[1].classList.add("hide");
        imgCard[1].classList.add("small");
        imgCard[1].classList.remove("show");
    }else {
        imgCard[1].classList.remove("hide");
        imgCard[1].classList.remove("small");
        imgCard[1].classList.add("show");
    }

}





window.addEventListener("scroll" , handleScrollWindow)