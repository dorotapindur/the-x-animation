const button = document.querySelector('.button--js');
const options = document.querySelector('.options--js');

button.addEventListener('click', () => {
    button.classList.toggle('opened');
    options.classList.toggle('options--open');
})