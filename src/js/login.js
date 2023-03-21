const loginForm = document.querySelector(".member");
const button = document.querySelector(".button");
const userInputId = document.querySelector("#use-id");
const userInputPassword = document.querySelector(".userpw");
const message = document.querySelector(".warning-message");
const message2 = document.querySelector(".warning-message2");
const message3 = document.querySelector(".warning-message3");
const message4 = document.querySelector(".warning-message4");
const message5 = document.querySelector(".warning-message5");
const loginButton = document.querySelector("#login-button");
const darkWindow = document.querySelector(".badge");


function Login() {
    const handleClickButton = () => {
        button.classList.add("row-button");
        loginForm.classList.add("show-member");
    }
    
    const handlekeyUpInputId = (event) => {
        const userIdKr = /[ㄱ-ㅎ가-힣ㅏ-ㅣ]/.test(event.target.value);
        const userIdTest = /[!\"#$%&'()*+,\-./:;<=>?@\[\\\]^_`{|}~]/.test(event.target.value);
    
        if(userIdTest || userIdKr || event.target.value.length > 8) {
            message4.style.display = "block";
        }else {
            message4.style.display = "none";
            message2.style.display = "none";
        }
    }
    
    const handlekeyUpInput = (event) => {
        const userInputValueLength = event.target.value.length;
        const userIdTest = /[!\"#$%&'()*+,\-./:;<=>?@\[\\\]^_`{|}~]/.test(event.target.value);
    
    
        if(userInputValueLength < 8 ) {
            message.style.display = "block";
        }else if(event.target.value.length >= 8 && event.target.value.length <= 12) {
            message.style.display = "none";
        }else if(userInputValueLength > 12) {
            message.style.display = "block";
        }
    
        if(userIdTest) {
            message5.style.display = "block";
            message.style.display = "none";
        }else {
            message5.style.display = "none";
        }
    
        if(event.target.value){
            message3.style.display = "none";
        }
    
        if(userInputValueLength === 0) {
            message.style.display = "none";
        }
    }
    
    const hadleClickSubmit = (event) => {
        const userIdKr = /[ㄱ-ㅎ가-힣ㅏ-ㅣ]/.test(userInputId.value);
        const userIdTest = /[!\"#$%&'()*+,\-./:;<=>?@\[\\\]^_`{|}~]/.test(userInputId.value);
        const userInputValueLength = userInputPassword.value.length;
        const userPassWordTest = /[!\"#$%&'()*+,\-./:;<=>?@\[\\\]^_`{|}~]/.test(userInputPassword.value);

        if(userInputId.value === ""){
            event.preventDefault();
            message2.style.display = "block";
            message4.style.display = "none";
        }else if(userInputPassword.value === "") {
            event.preventDefault();
            message3.style.display = "block";
        }
        if(userInputValueLength < 8 || userInputValueLength > 12) {
            event.preventDefault();
        }
        if(userPassWordTest) {
            event.preventDefault();
        }
        if(userIdTest || userIdKr || userInputId.value.length > 8) {
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
}



Login();