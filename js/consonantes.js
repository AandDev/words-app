import {createExamples, colors, sounds} from './app.js'; 
import {consonantesSample, consonantesSample2, consonantesSounds1} from './sampleWords.js'; 

const wordsBtn = document.querySelectorAll('.word-btn');


wordsBtn.forEach((btn, index) => btn.addEventListener('click', () => createExamples(consonantesSample[index], colors[index], sounds[index], consonantesSounds1[index])));



// ===== Grupo 2 ===== //

const wordsBtn2 = document.querySelectorAll('.word-btn2');
const sounds2 = document.querySelectorAll('.sound2');

wordsBtn2.forEach((btn, index) => btn.addEventListener('click', () => createExamples(consonantesSample2[index], colors[index], sounds2[index], consonantesSounds1[index])));




// ==========  Slider  ==========  //

const slide = document.querySelector('.consonantes-options');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let slides = document.querySelectorAll('.words-slide');
let index = 0;

const slideWidth = slides[index].clientWidth;

const getSlides = () => document.querySelectorAll('.words-slide');

const nextSlide = () => {
    slides = getSlides();
    if (index >= slides.length - 1) return;
    index++;
    slide.style.transition = '.5s ease-out';
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

const prevSlide = () => {
    if (index <= 0) return;
    index--;
    slide.style.transition = '.5s ease-out';
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);