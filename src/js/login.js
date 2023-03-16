const loginForm = document.querySelector(".member");
const button = document.querySelector(".button");
const userInputId = document.querySelector("#use-id");
const userInputPassword = document.querySelector(".userpw");
const message = document.querySelector(".warning-message");
const message2 = document.querySelector(".warning-message2");
const message3 = document.querySelector(".warning-message3");
const loginButton = document.querySelector("#login-button");
const darkWindow = document.querySelector(".badge");

const handleClickButton = () => {
    button.classList.add("row-button");
    loginForm.classList.add("show-member");
}

const handlekeyUpInputId = (event) => {
    if(event.target.value) {
        message2.style.display = "none";
    }
}

const handlekeyUpInput = (event) => {
    if(event.target.value){
        message3.style.display = "none";
    }
    if(event.target.value.length < 8) {
        message.style.display = "block";
    }else if(event.target.value.length >= 8) {
        message.style.display = "none";
    }
    if(event.target.value.length === 0) {
        message.style.display = "none";
    }
}

const hadleClickSubmit = (event) => {
    if(userInputId.value === ""){
        event.preventDefault();
        message2.style.display = "block";
    }else if(userInputPassword.value === "") {
        event.preventDefault();
        message3.style.display = "block";
    }
    if(userInputPassword.value.length < 8) {
        event.preventDefault();
    }
}

let count = 0;

const handleClickDarkWindow = () => {

        if(count % 2 === 0){
            darkWindow.innerHTML = "light 🔄";
            count = count + 1;
            document.body.style.backgroundColor = "#34495e";
        }else if(count % 2 === 1) {
            darkWindow.innerHTML = "Dark 🔄";
            count = count + 1;
            document.body.style.backgroundColor = "#f5f6f7";
        }
        
        console.log(count);
}

loginButton.addEventListener("click" , hadleClickSubmit);
userInputId.addEventListener("keyup" ,handlekeyUpInputId );
userInputPassword.addEventListener("keyup" , handlekeyUpInput);
button.addEventListener("click" , handleClickButton);
darkWindow.addEventListener("click" , handleClickDarkWindow);