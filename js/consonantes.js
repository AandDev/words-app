import {createExamples} from './app.js'; 

const wordsBtn = document.querySelectorAll('.word-btn');

const vocalesSample = [
    ['Mamá', 'Mesa', 'Martes'],
    ['Papá', 'Pala', 'Pato'],
    ['Lata', 'Letra', 'Lila'],
    ['Taza', 'Torre', 'Tela'],
    ['Sábado', 'Suelo', 'Sanar']
];
const colors = ['#FFD600', '#2bdd52', '#2EADF4', '#CD2EF4', '#F42E2E'];

wordsBtn.forEach(createExamples);