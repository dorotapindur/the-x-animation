    let codeSource;
    
    const horizontalCodeButton = document.querySelector('.horizontal__code-button--js');
    const horizontal = document.querySelector('.horizontal--js');
    const htmlCodeSnippet = document.querySelector('.html-code--js');
    const scssCodeSnippet = document.querySelector('.scss-code--js');
    const jsCodeSnippet = document.querySelector('.js-code--js');
    const codeContainer = document.querySelector('.code-container--js');
    
    horizontalCodeButton.addEventListener('click', () => {
    codeSource = horizontal.innerHTML;
    htmlCodeSnippet.innerHTML='';
    htmlCodeSnippet.textContent = 
`<div class="horizontal horizontal--js">
${codeSource}
</div>`;
    scssCodeSnippet.innerHTML = '';
    scssCodeSnippet.innerHTML = 
`.horizontal {
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
    perspective: 200px;
}
.horizontal__x, .horizontal__ham {
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
    overflow: hidden;
    transition: transform 1s ease;
}
.horizontal__x {
    transform: rotateX(0deg);
}
.horizontal__ham {
    transform: rotateX(-180deg);
}
.rotate-x .horizontal__x {
    transform: rotateX(180deg);
}
.rotate-x .horizontal__ham {
    transform: rotateX(0deg)
}
`;
    jsCodeSnippet.innerHTML = '';
    jsCodeSnippet.innerHTML = 
`const horizontal = document.querySelector('.horizontal--js');

horizontal.addEventListener('click', () => {
    horizontal.classList.toggle('rotate-x');
})`;
    codeContainer.classList.add('code-container--opened');
})
