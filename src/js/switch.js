const answer = document.querySelector(".answer");
const buttonBox = document.querySelector(".btn-box");


const handleClickButton = (event) => {
    switch(event.target.value) {
        case "첼시":
            answer.innerHTML = "못하지만 강등은 아냐";
            break;
        case "맨유":
            answer.innerHTML = "맹구지만 아니야";
            break;
        case "토트넘":
            answer.innerHTML = "쏜 땜에 안돼";
            break;
        case "리버풀":
            answer.innerHTML = "7위가 적당";
            break;
        case "맨시티":
            answer.innerHTML = "닥치고 1위";
            break;
        case "아스날":
            answer.innerHTML = "얘네도 잘해";
            break;
    }
}

buttonBox.addEventListener("click" , handleClickButton);
