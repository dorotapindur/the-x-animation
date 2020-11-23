const button = document.querySelector('.button--js');
const options = document.querySelector('.options--js');
const horizontal = document.querySelector('.horizontal--js');
const vertical = document.querySelector('.vertical--js');
const angle = document.querySelector('.angle--js');
const snake = document.querySelector('.snake--js');
const slide = document.querySelector('.slide--js');
const htmlCodeSnippet = document.querySelector('.html-code--js');
const scssCodeSnippet = document.querySelector('.scss-code--js');
const jsCodeSnippet = document.querySelector('.js-code--js');

const codeContainer = document.querySelector('.code-container--js');
const close = document.querySelector('.close--js');
const snakeCodeButton = document.querySelector('.snake__code-button--js');
const slideCodeButton = document.querySelector('.slide__code-button--js');
const angleCodeButton = document.querySelector('.angle__code-button--js');
const verticalCodeButton = document.querySelector('.vertical__code-button--js');
const horizontalCodeButton = document.querySelector('.horizontal__code-button--js');

let codeSource;

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
    codeSource = snake.innerHTML;
    htmlCodeSnippet.innerHTML='';
    htmlCodeSnippet.textContent = `HTML: ${codeSource}`;

    codeContainer.classList.add('code-container--opened');
})
slideCodeButton.addEventListener('click', () => {
    codeSource = slide.innerHTML;
    htmlCodeSnippet.innerHTML='';
    htmlCodeSnippet.textContent = `HTML: ${codeSource}`;
    codeContainer.classList.add('code-container--opened');
})
angleCodeButton.addEventListener('click', () => {
    codeSource = angle.innerHTML;
    htmlCodeSnippet.innerHTML='';
    htmlCodeSnippet.textContent = `HTML: ${codeSource}`;
    codeContainer.classList.add('code-container--opened');
})
verticalCodeButton.addEventListener('click', () => {
    codeSource = vertical.innerHTML;
    htmlCodeSnippet.innerHTML='';
    htmlCodeSnippet.textContent = `HTML: ${codeSource}`;
    codeContainer.classList.add('code-container--opened');
})
horizontalCodeButton.addEventListener('click', () => {
    codeSource = horizontal.innerHTML;
    htmlCodeSnippet.innerHTML='';
    htmlCodeSnippet.textContent = `HTML: ${codeSource}`;
    codeContainer.classList.add('code-container--opened');
})
close.addEventListener('click', () => {
    codeContainer.classList.remove('code-container--opened');
})