const button = document.querySelector('.button--js');
const options = document.querySelector('.options--js');
const horizontal = document.querySelector('.horizontal--js');
const vertical = document.querySelector('.vertical--js');
const angle = document.querySelector('.angle--js');
const snake = document.querySelector('.snake--js');
const slide = document.querySelector('.slide--js');
const codeSnippet = document.querySelector('.code--js');
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
    codeSnippet.innerHTML='';
    codeSnippet.textContent = `HTML: ${codeSource}
SCSS:
.snake {
    position: relative;    
    &::before {
        content: "snake";
        display: block;
        width: 200px;
        text-align: center;
        position: absolute;
        top: 15px;
    }
    &__shape {
        position: absolute;
        top: 0;
        left: 0;
    }
    &__path {
        transition: stroke-dasharray 1s cubic-bezier(0.68, 0.01, 0.08, 0.97), stroke-dashoffset 1s cubic-bezier(0.68, 0.01, 0.08, 0.97);
        &--one {
            stroke-dasharray: 29 29;
            stroke-dashoffset: 0;
        }
        &--two {
            stroke-dasharray: 29 169;
            stroke-dashoffset: -139.5;
        }
        &--three {
            stroke-dasharray: 29 172;
            stroke-dashoffset: -170.5;
        }
    }
}

.open-snake .snake__path--one {
    stroke-dasharray: 0 29;
    stroke-dashoffset: -15;
}
.open-snake .snake__path--two {
    stroke-dasharray: 29 199;
    stroke-dashoffset: 0;
}
.open-snake .snake__path--three {
    stroke-dasharray: 29 200;
    stroke-dashoffset: 0;
}

JS:
const snake = document.querySelector('.snake--js');
snake.addEventListener('click', () => {
    snake.classList.toggle('open-snake');
})
`;

    codeContainer.classList.add('code-container--opened');
})
slideCodeButton.addEventListener('click', () => {
    codeSource = slide.innerHTML;
    codeSnippet.innerHTML='';
    codeSnippet.textContent = `HTML: ${codeSource}`;
    codeContainer.classList.add('code-container--opened');
})
angleCodeButton.addEventListener('click', () => {
    codeSource = angle.innerHTML;
    codeSnippet.innerHTML='';
    codeSnippet.textContent = `HTML: ${codeSource}`;
    codeContainer.classList.add('code-container--opened');
})
verticalCodeButton.addEventListener('click', () => {
    codeSource = vertical.innerHTML;
    codeSnippet.innerHTML='';
    codeSnippet.textContent = `HTML: ${codeSource}`;
    codeContainer.classList.add('code-container--opened');
})
horizontalCodeButton.addEventListener('click', () => {
    codeSource = horizontal.innerHTML;
    codeSnippet.innerHTML='';
    codeSnippet.textContent = `HTML: ${codeSource}`;
    codeContainer.classList.add('code-container--opened');
})
close.addEventListener('click', () => {
    codeContainer.classList.remove('code-container--opened');
})