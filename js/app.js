const wordsBtn = document.querySelectorAll('.word-btn');

const vocalesSample = [
    ['Avión', 'Aire', 'Agua'],
    ['Empanada', 'Estrella', 'Elefante'],
    ['Iglesia', 'Internet', 'Imagen'],
    ['Opera', 'Oceano', 'Oreja'],
    ['Uno', 'Uva', 'Uña']
];
const colors = ['#FFD600', '#2bdd52', '#2EADF4', '#CD2EF4', '#F42E2E'];

/*
wordsBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const examplesBox = document.createElement('div');
        const newWords = `
        <div class="exp-item" style="background-color: ${colors[index]}">
            <button class="exp-btn" id="exp-btn">
                ${vocalesSample[index][0]}
            </button>
            <audio class="sound-2" src="../sounds/owl.mp3"></audio>
        </div>
        <div class="exp-item" style="background-color: ${colors[index]}">
            <button class="exp-btn">
                ${vocalesSample[index][1]}
            </button>
            <audio class="sound-2" src="../sounds/pig.mp3"></audio>
        </div>
        <div class="exp-item" style="background-color: ${colors[index]}">
            <button class="exp-btn">
                ${vocalesSample[index][2]}
            </button>
            <audio class="sound-2" src="../sounds/elephant.mp3"></audio>
        </div>
        `;

        examplesBox.classList.add('examples');
        examplesBox.innerHTML = newWords;

        const wordWrap = document.querySelector('.content');
        const sounds = document.querySelectorAll('.sound');

        //sounds[index].currentTime = 0;
        //sounds[index].play();

        if(wordWrap.hasChildNodes){
            wordWrap.removeChild(wordWrap.lastChild);
            wordWrap.appendChild(examplesBox);
        } else {
            wordWrap.appendChild(examplesBox);
        }
    })
});
*/

const createExamples = (btn, index) => {
    btn.addEventListener('click', () => {
        const examplesBox = document.createElement('div');
        const newWords = `
        <div class="exp-item" style="background-color: ${colors[index]}">
            <button class="exp-btn" id="exp-btn">
                ${vocalesSample[index][0]}
            </button>
            <audio class="sound-2" src="../sounds/owl.mp3"></audio>
        </div>
        <div class="exp-item" style="background-color: ${colors[index]}">
            <button class="exp-btn">
                ${vocalesSample[index][1]}
            </button>
            <audio class="sound-2" src="../sounds/pig.mp3"></audio>
        </div>
        <div class="exp-item" style="background-color: ${colors[index]}">
            <button class="exp-btn">
                ${vocalesSample[index][2]}
            </button>
            <audio class="sound-2" src="../sounds/elephant.mp3"></audio>
        </div>
        `;

        examplesBox.classList.add('examples');
        examplesBox.innerHTML = newWords;

        const wordWrap = document.querySelector('.content');
        const sounds = document.querySelectorAll('.sound');

        sounds[index].currentTime = 0;
        sounds[index].play();

        if(wordWrap.hasChildNodes){
            wordWrap.removeChild(wordWrap.lastChild);
            wordWrap.appendChild(examplesBox);
        } else {
            wordWrap.appendChild(examplesBox);
        }
    })
}


wordsBtn.forEach(createExamples);


// ---------- Sonidos de palabras ---------- //

document.addEventListener('click',(e) => {

    if(e.target.classList == 'exp-btn'){
        const sound = e.target.nextElementSibling;

        sound.currentTime = 0;
        sound.play();
    }
});



/*
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
*/

export {createExamples};