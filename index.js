const button = document.querySelector('.button--js');
const options = document.querySelector('.options--js');
const horizontal = document.querySelector('.horizontal--js');
const vertical = document.querySelector('.vertical--js');
const angle = document.querySelector('.angle--js');
const snake = document.querySelector('.snake--js');
const slide = document.querySelector('.slide--js');
const snakeCodeButton = document.querySelector('.snake__code-button--js');
const snakeCode = document.querySelector('.code--js');


button.addEventListener('click', () => {
    button.classList.toggle('opened');
    options.classList.toggle('options--open');
})
horizontal.addEventListener('click', () => {
    horizontal.classList.toggle('rotate-x');
})
vertical.addEventListener('click', () => {
    vertical.classList.toggle('rotate-y');
})
angle.addEventListener('click', () => {
    angle.classList.toggle('slant');
})
snake.addEventListener('click', () => {
    snake.classList.toggle('open-snake');
})
slide.addEventListener('click', () => {
    slide.classList.toggle('closed');
})
let codeSnippet = document.getElementById("snake").innerHTML;
let element = codeSnippet.split('>');

snakeCodeButton.addEventListener('click', () => {
    for (let i = 0; i < element.length; i++) {
    let replaceBracket = i == element.length - 1 ? "" : ">";
    snakeCode.textContent += element[i] + replaceBracket + " \r\n";
    }
})
