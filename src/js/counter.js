const countMessage = document.querySelector(".text");


const App = () => {
    let count = 5;

    const counter = () => {
        countMessage.innerHTML = `${count} 초 뒤에 이 메세지는 사라집니다`;
        count -= 1;
        if(count < 0){
            //clearInterval(intervalId);
            //countMessage.remove();
            count = 5;
        }
    }

    const  intervalId = setInterval(counter , 1000);
}

App();




