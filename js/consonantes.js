import {createExamples, colors, sounds} from './app.js'; 

const wordsBtn = document.querySelectorAll('.word-btn');

const consonantesSample = [
    ['Mamá', 'Mesa', 'Martes'],
    ['Papá', 'Pala', 'Pato'],
    ['Lata', 'Letra', 'Lila'],
    ['Taza', 'Torre', 'Tela'],
    ['Sábado', 'Suelo', 'Sanar']
];


wordsBtn.forEach((btn, index) => btn.addEventListener('click', () => createExamples(consonantesSample[index], colors[index], sounds[index])));