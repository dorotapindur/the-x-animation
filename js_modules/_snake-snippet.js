export function snakeSnippet() {

let codeSource;
const snake = document.querySelector('.snake--js');
const snakeCodeButton = document.querySelector('.snake__code-button--js');
const htmlCodeSnippet = document.querySelector('.html-code--js');
const scssCodeSnippet = document.querySelector('.scss-code--js');
const jsCodeSnippet = document.querySelector('.js-code--js');
const codeContainer = document.querySelector('.code-container--js');

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

:root {
    --color: #292828;
    --x: #7e9401;
}
.snake {
    width: 200px;
    height: 200px;
    position: relative;
    margin: 0 auto 50px;
    display: block;
    stroke: var(--color);
    stroke-width: 3.175;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 14px;
    transition: stroke .3s ease-in;
    &:hover {
        stroke: var(--x);
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
}
export function hello() {
    const greeting = "hello, it's me!";
    console.log(greeting);

}