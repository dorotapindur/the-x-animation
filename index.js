const button = document.querySelector('.button--js');
const options = document.querySelector('.options--js');
const card = document.querySelector('.card-container--js');

button.addEventListener('click', () => {
    button.classList.toggle('opened');
    options.classList.toggle('options--open');
})

card.addEventListener('click', () => {
    card.classList.toggle('vertical');
})