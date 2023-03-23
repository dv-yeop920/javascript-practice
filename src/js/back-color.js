const back = document.querySelector("#body");
const button = document.querySelector("#button");

const colors = ["red" , "yellow" , "blue" , "green" , "coral" , "violet" , "pink" , "teal" , "pink" , "yellowgreen" , "rgb(181, 180, 180)"
, "aqua" , "gold" , "beige" , "white" , "cadetblue"];

function ColorClickChange() {
    const Color1 = colors[Math.floor(Math.random() * colors.length)];
    const Color2 = colors[Math.floor(Math.random() * colors.length)];

    back.style.background = `linear-gradient( 45deg , ${Color1} , ${Color2}) `;
}

button.addEventListener("click" , ColorClickChange);




const a = 7;
const b = 3;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(Math.floor(a/b));
console.log(a%b);