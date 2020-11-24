export function verticalSnippet() {

    let codeSource;
    
    const verticalCodeButton = document.querySelector('.vertical__code-button--js');
    const vertical = document.querySelector('.vertical--js');
    const htmlCodeSnippet = document.querySelector('.html-code--js');
    const scssCodeSnippet = document.querySelector('.scss-code--js');
    const jsCodeSnippet = document.querySelector('.js-code--js');
    const codeContainer = document.querySelector('.code-container--js');
    
    verticalCodeButton.addEventListener('click', () => {
    codeSource = vertical.innerHTML;
    htmlCodeSnippet.innerHTML='';
    htmlCodeSnippet.textContent = 
`<div class="vertical vertical--js">
${codeSource}
</div>`;
    scssCodeSnippet.innerHTML = '';
    scssCodeSnippet.innerHTML = 
`.vertical {
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
    perspective: 400px;
}
.vertical__x, .vertical__ham {
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
    overflow: hidden;
    transition: transform 1s ease;
}
.vertical__x {
    transform: rotateY(0deg);
}
.vertical__ham {
    transform: rotateY(-180deg);
}
.rotate-y .vertical__x {
    transform: rotateY(180deg);
}
.rotate-y .vertical__ham {
    transform: rotateY(0deg)
}
`;
    jsCodeSnippet.innerHTML = '';
    jsCodeSnippet.innerHTML = 
`const vertical = document.querySelector('.vertical--js');

vertical.addEventListener('click', () => {
    vertical.classList.toggle('rotate-y');
})`;
    codeContainer.classList.add('code-container--opened');
})
}