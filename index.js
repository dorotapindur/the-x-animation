const button = document.querySelector('.button--js');
const options = document.querySelector('.options--js');
const horizontal = document.querySelector('.horizontal--js');
const vertical = document.querySelector('.vertical--js');
const angle = document.querySelector('.angle--js');
const snake = document.querySelector('.snake--js');
const slide = document.querySelector('.slide--js');
const codeSnippet = document.querySelector('.code--js');
const codeContainer = document.querySelector('.code-container--js');
const snakeCodeButton = document.querySelector('.snake__code-button--js');

button.addEventListener('click', () => {
    button.classList.toggle('opened');
    options.classList.toggle('options--open');
    codeContainer.classList.remove('code-container--opened');
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

snakeCodeButton.addEventListener('click', () => {
    let codeSource = snake.innerHTML;
    codeSnippet.innerHTML='';
    codeSnippet.textContent = `HTML: ${codeSource}`;
    codeContainer.classList.toggle('code-container--opened');
})
