/*
- 클래스명이 같은 탭들중 하나를 누르면 그 탭에 class를 추가 시켜 그 탭이 타겟이 되게 하기
-또 다른 탭을 선택 하면 기존의 탭의 class 를 지우기 
-그 탭의 내용을 보여주기 
*/

const tabList  = document.querySelector(".list");
const tabButton = document.querySelectorAll(".tab-button");
const content = document.querySelectorAll(".tab-content");


const handleClickTab = (event) => {
        if(event.target === tabButton[1]) {
            tabButton[0].classList.remove("blue");
            content[0].classList.remove("show");
            tabButton[2].classList.remove("blue");
            content[2].classList.remove("show");
            tabButton[1].classList.add("blue");
            content[1].classList.add("show");
        }
        if(event.target === tabButton[0]) {
            tabButton[1].classList.remove("blue");
            content[1].classList.remove("show");
            tabButton[2].classList.remove("blue");
            content[2].classList.remove("show");
            tabButton[0].classList.add("blue");
            content[0].classList.add("show");
        }
        if(event.target === tabButton[2]) {
            tabButton[1].classList.remove("blue");
            content[1].classList.remove("show");
            tabButton[0].classList.remove("blue");
            content[0].classList.remove("show");
            tabButton[2].classList.add("blue");
            content[2].classList.add("show");
        }
}

tabList.addEventListener("click" , handleClickTab);
