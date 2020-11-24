export function angleSnippet() {
    
    const angleCodeButton = document.querySelector('.angle__code-button--js');
    const angle = document.querySelector('.angle--js');
    const htmlCodeSnippet = document.querySelector('.html-code--js');
    const scssCodeSnippet = document.querySelector('.scss-code--js');
    const jsCodeSnippet = document.querySelector('.js-code--js');
    const codeContainer = document.querySelector('.code-container--js');
    
    angleCodeButton.addEventListener('click', () => {
    htmlCodeSnippet.innerHTML='';
    htmlCodeSnippet.textContent = 
`HTML:

<div class="angle slant angle--js">
    <svg class="angle__ham" width="200" height="200" version="1.1" viewBox="0 0 52.917 52.917" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" stroke-linecap="round">
            <path class="angle__path--middle" d="m12.226 25.844h29.172"/>
            <path class="angle__path--bottom" d="m12.226 35.898h29.172"/>
            <path class="angle__path--top" d="m12.226 15.79h29.172"/>
        </g>
    </svg>
</div>`;
    scssCodeSnippet.innerHTML = '';
    scssCodeSnippet.innerHTML = 
`SCSS:

.angle {
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
    &__ham {
        position: absolute;
        top: 0;
        left: 0;
    }
}

.angle__path--middle {
    stroke-dasharray: 29 29;
    stroke-dashoffset: 0;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}
.slant .angle__path--middle {
    stroke-dasharray: 0 29;
    stroke-dashoffset: -15;
}
.angle__path--top {
    transform: rotate(0deg);
    transform-origin: 14px 22px;
    transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
}
.slant .angle__path--top {
    transform: rotate(45deg);
}
.angle__path--bottom {
    transform: rotate(0deg);
    transform-origin: 16px 31px;
    transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
}
.slant .angle__path--bottom {
    transform: rotate(-45deg);
}

`;
    jsCodeSnippet.innerHTML = '';
    jsCodeSnippet.innerHTML = 
`JS:

const angle = document.querySelector('.angle--js');

angle.addEventListener('click', () => {
    angle.classList.toggle('slant');
})`;
    codeContainer.classList.add('code-container--opened');
})
}