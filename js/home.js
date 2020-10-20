import {createSquare, colors} from './app.js';

const homeBg = document.querySelector('.home');

setInterval(() => {createSquare(homeBg, colors)}, 800);