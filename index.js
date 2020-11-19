const button = document.querySelector('.button--js');
const options = document.querySelector('.options--js');
const optionsHorizontal = document.querySelector('.options__horizontal--js');
const optionsVertical = document.querySelector('.options__vertical--js');
const horizontal = document.querySelector('.horizontal--js');
const vertical = document.querySelector('.vertical--js');

//const card = document.querySelector('.card-container--js');


button.addEventListener('click', () => {
    button.classList.toggle('opened');
    options.classList.toggle('options--open');
})
optionsHorizontal.addEventListener('click', () => {
    horizontal.classList.toggle('rotate-x');
})
optionsVertical.addEventListener('click', () => {
    vertical.classList.toggle('rotate-y');
})

/*
horizontal.addEventListener('click', () => {
    document.documentElement.style.setProperty('--front', 'rotateX(-180deg)');
    document.documentElement.style.setProperty('--back', 'rotateX(0deg)');
    document.documentElement.style.setProperty('--transform-front', 'rotateX(0deg)');
    document.documentElement.style.setProperty('--transform-back', 'rotateX(180deg)');
    card.classList.toggle('transform');
})

vertical.addEventListener('click', () => {
    document.documentElement.style.setProperty('--front', 'rotateY(0deg)');
    document.documentElement.style.setProperty('--back', 'rotateY(180deg)');
    document.documentElement.style.setProperty('--transform-front', 'rotateY(-180deg)');
    document.documentElement.style.setProperty('--transform-back', 'rotateY(0deg)');
    card.classList.toggle('transform');
})
*/
