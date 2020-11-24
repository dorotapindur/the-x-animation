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
    htmlCodeSnippet.innerHTML = '';
    htmlCodeSnippet.textContent = 
`HTML:

<div class="snake open-snake snake--js"> 
    ${codeSource}
</div>`;
    scssCodeSnippet.innerHTML = '';
    scssCodeSnippet.innerHTML = 
`SCSS:

.snake {
    width: 200px;
    height: 200px;
    position: relative;
    margin: 0 auto 50px;
    display: block;
    stroke: black;
    stroke-width: 3.175;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 14px;
    transition: stroke .3s ease-in;
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
`;
    jsCodeSnippet.innerHTML = '';
    jsCodeSnippet.innerHTML = 
`JS:

const snake = document.querySelector('.snake--js');

snake.addEventListener('click', () => {
    snake.classList.toggle('open-snake');
})`;
    codeContainer.classList.add('code-container--opened');
})

slideCodeButton.addEventListener('click', () => {
    codeSource = slide.innerHTML;
    htmlCodeSnippet.innerHTML='';
    htmlCodeSnippet.textContent = 
`HTML:

<div class="slide slide--js">
${codeSource}
</div>`;
    scssCodeSnippet.innerHTML = '';
    scssCodeSnippet.innerHTML = 
`SCSS:

.slide {
    width: 200px;
    height: 200px;
    position: relative;
    margin: 0 auto 50px;
    display: block;
    stroke: black;
    stroke-width: 3.175;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 14px;
    transition: stroke .3s ease-in;
    &__shape {
        position: absolute;
        top: 0;
        left: 0;
    }
    &__path {
        transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
        &--one {
            stroke-dasharray: 0 29;
            stroke-dashoffset: -15;
        }
        &--two {
            stroke-dasharray: 29 105;
            stroke-dashoffset: 0;
        }
        &--three {
            stroke-dasharray: 29 105;
            stroke-dashoffset: 0;
        }
    }
}

.closed .slide__path--one {
        stroke-dasharray: 29 29;
        stroke-dashoffset: 0;
}
.closed .slide__path--two {
        stroke-dasharray: 43 105;
        stroke-dashoffset: -72;
}
.closed .slide__path--three {
        stroke-dasharray: 43 105;
        stroke-dashoffset: -72;
}
`;
    jsCodeSnippet.innerHTML = '';
    jsCodeSnippet.innerHTML = 
`JS:

const slide = document.querySelector('.slide--js');

slide.addEventListener('click', () => {
    slide.classList.toggle('closed');
})`;
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