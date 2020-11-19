const button = document.querySelector('.button--js');
const options = document.querySelector('.options--js');
const card = document.querySelector('.card-container--js');
const vertical = document.querySelector('.vertical--js');
const horizontal = document.querySelector('.horizontal--js');

button.addEventListener('click', () => {
    button.classList.toggle('opened');
    options.classList.toggle('options--open');
})

horizontal.addEventListener('click', () => {
    card.classList.toggle('transform');
    document.documentElement.style.setProperty('--front', 'rotateX(-180deg)');
    document.documentElement.style.setProperty('--back', 'rotateX(0deg)');
    document.documentElement.style.setProperty('--transform-front', 'rotateX(0deg)');
    document.documentElement.style.setProperty('--transform-back', 'rotateX(180deg)');
})

vertical.addEventListener('click', () => {
    card.classList.toggle('transform');
    document.documentElement.style.setProperty('--front', 'rotateY(0deg)');
    document.documentElement.style.setProperty('--back', 'rotateY(180deg)');
    document.documentElement.style.setProperty('--transform-front', 'rotateY(-180deg)');
    document.documentElement.style.setProperty('--transform-back', 'rotateY(0deg)');
})
