import {createExamples, colors, sounds} from './app.js'; 
import {consonantesSample, consonantesSample2, consonantesSample3, consonantesSample4, consonantesSample5, colors1, colors2, colors3, colors4, colors5, consonantesSounds1} from './sampleWords.js'; 


// ===== Grupo 1 [M,P,L,T,S] ===== //

const wordsBtn = document.querySelectorAll('.word-btn');

wordsBtn.forEach((btn, index) => btn.addEventListener('click', () => createExamples(consonantesSample[index], colors1[index], sounds[index], consonantesSample[index])));



// ===== Grupo 2 [N,D,C,Q,B] ===== //

const wordsBtn2 = document.querySelectorAll('.word-btn2');
const sounds2 = document.querySelectorAll('.sound2');

wordsBtn2.forEach((btn, index) => btn.addEventListener('click', () => createExamples(consonantesSample2[index], colors2[index], sounds2[index], consonantesSounds1[index])));



// ===== Grupo 3 [V,R,RR,F,J] ===== //


const wordsBtn3 = document.querySelectorAll('.word-btn3');
const sounds3 = document.querySelectorAll('.sound3');

wordsBtn3.forEach((btn, index) => btn.addEventListener('click', () => createExamples(consonantesSample3[index], colors3[index], sounds3[index], consonantesSounds1[index])));


// ===== Grupo 4 [Ñ,CH,LL,Y,Z] ===== //


const wordsBtn4 = document.querySelectorAll('.word-btn4');
const sounds4 = document.querySelectorAll('.sound4');

wordsBtn4.forEach((btn, index) => btn.addEventListener('click', () => createExamples(consonantesSample4[index], colors4[index], sounds4[index], consonantesSounds1[index])));


// ===== Grupo 5 [H,K,X] ===== //


const wordsBtn5 = document.querySelectorAll('.word-btn5');
const sounds5 = document.querySelectorAll('.sound5');

wordsBtn5.forEach((btn, index) => btn.addEventListener('click', () => createExamples(consonantesSample5[index], colors5[index], sounds5[index], consonantesSounds1[index])));


// ==========  Slider  ==========  //

const item = document.querySelectorAll('.word-item');
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