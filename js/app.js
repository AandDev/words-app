import {colors1, vocalesSample, vocalesSounds} from './sampleWords.js'

const wordsBtn = document.querySelectorAll('.word-btn');
const sounds = document.querySelectorAll('.sound');
const homeBg = document.querySelector('.home');
const vocalesBg = document.querySelector('.vocales');
const consonantesBg = document.querySelector('.consonantes');

const colors = ['#FFD600', '#2bdd52', '#2EADF4', '#CD2EF4', '#F42E2E'];


// ---------- Generar las palabras y silabas de ejemplo ---------- //

function createExamples(item, color, sound, word) {
    
    const examplesBox = document.createElement('div');
    const newWords = `
    <div class="exp-item" style="background-color: ${color}">
        <button class="exp-btn" id="exp-btn">
            ${item[0]}
        </button>
        <audio class="sound-2" src="../sounds/words-sounds/${word[0]}.mp3"></audio>
    </div>
    <div class="exp-item" style="background-color: ${color}">
        <button class="exp-btn">
            ${item[1]}
        </button>
        <audio class="sound-2" src="../sounds/words-sounds/${word[1]}.mp3"></audio>
    </div>
    <div class="exp-item" style="background-color: ${color}">
        <button class="exp-btn">
            ${item[2]}
        </button>
        <audio class="sound-2" src="../sounds/words-sounds/${word[2]}.mp3"></audio>
    </div>
    <div class="exp-item" style="background-color: ${color}">
        <button class="exp-btn">
            ${item[3]}
        </button>
        <audio class="sound-2" src="../sounds/words-sounds/${word[3]}.mp3"></audio>
    </div>
    <div class="exp-item" style="background-color: ${color}">
        <button class="exp-btn">
            ${item[4]}
        </button>
        <audio class="sound-2" src="../sounds/words-sounds/${word[4]}.mp3"></audio>
    </div>
    `;
    examplesBox.classList.add('examples');
    examplesBox.innerHTML = newWords;

    const wordWrap = document.querySelector('.content');

    sound.currentTime = 0;
    sound.play();

    if(wordWrap.hasChildNodes){
        wordWrap.removeChild(wordWrap.lastChild);
        wordWrap.appendChild(examplesBox);
    } else {
        wordWrap.appendChild(examplesBox);
    }
    
}

wordsBtn.forEach((btn, index) => btn.addEventListener('click', () => createExamples(vocalesSample[index], colors[index], sounds[index], vocalesSounds[index])));

// ---------- Sonidos de palabras ---------- //

document.addEventListener('click',(e) => {

    if(e.target.classList == 'exp-btn'){
        const sound = e.target.nextElementSibling;

        sound.currentTime = 0;
        sound.play();
    }
});



// ---------- Background animado ---------- //

const createSquare = (container, color) => {
    const square = document.createElement('span');
    let randomColor;

    if(typeof color === 'object') {
        randomColor = color[Math.floor(Math.random() * color.length)];
    } else {
        randomColor = color;
    }

    square.style.width = '80px';
    square.style.height = '80px';
    square.style.borderRadius = '7px';
    square.style.top = Math.random() * innerHeight + 'px';
    square.style.left = Math.random() * innerWidth + 'px';
    square.style.backgroundColor = randomColor;

    container.appendChild(square);

    setTimeout( () => {
        square.remove();
    }, 5000);
};

setInterval(() => {createSquare(homeBg, colors)}, 800);
setInterval(() => {createSquare(vocalesBg, colors[2])}, 800);
setInterval(() => {createSquare(consonantesBg, colors[1])}, 800);



export {createExamples, colors, sounds};