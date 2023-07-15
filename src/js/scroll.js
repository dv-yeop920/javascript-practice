import data from './scrollData';
const container = document.querySelector('#container');


const render =  () => {
    const template = data.map(item => {
        return `
        <div>
        ${item.title}
        </div>
    `;
    }).join("");

    container.innerHTML = template;
}


render()