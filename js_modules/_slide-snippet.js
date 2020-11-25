    let codeSource;
    
    const slideCodeButton = document.querySelector('.slide__code-button--js');
    const slide = document.querySelector('.slide--js');
    const htmlCodeSnippet = document.querySelector('.html-code--js');
    const scssCodeSnippet = document.querySelector('.scss-code--js');
    const jsCodeSnippet = document.querySelector('.js-code--js');
    const codeContainer = document.querySelector('.code-container--js');
    
    slideCodeButton.addEventListener('click', () => {
    codeSource = slide.innerHTML;
    htmlCodeSnippet.innerHTML='';
    htmlCodeSnippet.textContent = 
`<div class="slide slide--js">
${codeSource}
</div>`;
    scssCodeSnippet.innerHTML = '';
    scssCodeSnippet.innerHTML = 
`.slide {
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
`const slide = document.querySelector('.slide--js');

slide.addEventListener('click', () => {
    slide.classList.toggle('closed');
})`;
    codeContainer.classList.add('code-container--opened');
})
