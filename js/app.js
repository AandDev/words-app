const wordsBtn = document.querySelectorAll('.word-btn');
const vocalesWrap = document.querySelector('.vocales');
const sounds = document.querySelectorAll('.sound');

const vocalesSample = [
    ['Avión', 'Aire', 'Agua'],
    ['Empanada', 'Estrella', 'Elefante'],
    ['Iglesia', 'Internet', 'Imagen'],
    ['Opera', 'Oceano', 'Oreja'],
    ['Uno', 'Uva', 'Uña']
];
const colors = ['#FFD600', '#2bdd52', '#2EADF4', '#CD2EF4', '#F42E2E'];


wordsBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const examplesBox = document.createElement('div');
        examplesBox.classList.add('examples');
        examplesBox.innerHTML = 
        `
        <div class="exp-item" style="background-color: ${colors[index]}">
            <button class="exp-btn">
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

        // sounds[index].currentTime = 0;
        // sounds[index].play();

        if(vocalesWrap.hasChildNodes){
            vocalesWrap.removeChild(vocalesWrap.lastChild);
            vocalesWrap.appendChild(examplesBox);
        } else {
            vocalesWrap.appendChild(examplesBox);
        }
    })
});


// ---------- Sonidos de palabras ---------- //

const expBtn = document.querySelectorAll('.exp-btn');
const sounds2 = document.querySelectorAll('.sound-2');

expBtn.forEach((btn, index) => {

    btn.addEventListener('click', (e) => {

        console.log(e.target);
        
        sounds2[index].currentTime = 0;
        sounds2[index].play();

    })
})