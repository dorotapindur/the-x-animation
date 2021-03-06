export * from './js_modules/snake-snippet.js';
export * from './js_modules/slide-snippet.js';
export * from './js_modules/angle-snippet.js';
export * from './js_modules/vertical-snippet.js';
export * from './js_modules/horizontal-snippet.js';
export * from './js_modules/mode.js';

import * as snakeSnippet from './js_modules/snake-snippet.js';
import * as slideSnippet from './js_modules/slide-snippet.js';
import * as angleSnippet from './js_modules/angle-snippet.js';
import * as verticalSnippet from './js_modules/vertical-snippet.js';
import * as horizontalSnippet from './js_modules/horizontal-snippet.js';
import * as mode from './js_modules/mode.js';

mode;

const button = document.querySelector('.button--js');
const options = document.querySelector('.options--js');
const horizontal = document.querySelector('.horizontal--js');
const vertical = document.querySelector('.vertical--js');
const angle = document.querySelector('.angle--js');
const snake = document.querySelector('.snake--js');
const slide = document.querySelector('.slide--js');

const codeContainer = document.querySelector('.code-container--js');
const close = document.querySelector('.close--js');


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

snakeSnippet;
slideSnippet;
angleSnippet;
verticalSnippet;
horizontalSnippet;

close.addEventListener('click', () => {
    codeContainer.classList.remove('code-container--opened');
})