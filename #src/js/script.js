"use strict";

// $(document).ready(function () {
//   $('body').hide();
// });
// @@include('alert.js');

const iconMenu = document.querySelector(".menu__icon");

if (iconMenu) {
  const menuBody = document.querySelector(".menu__body");

  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}

// Slider
const slides = document.querySelectorAll(".hero__slide");
const slider = document.querySelector(".hero__slider");
let count = 0;
let width;
function init() {
  console.log('resize');
  width = document.querySelector('.hero__slider-wrap').offsetWidth;
  slider.style.width = width * slides.length + 'px';
  // slides.forEach(item => {
    // item.style.width = width + 'px';
    // item.style.height = 'auto';
  // });
  rollSlider();
}
window.addEventListener('resize', init);
init();

let slideNumber = document.getElementById("slide-number"),
  slidesLength = document.getElementById("slides-length");
slidesLength.innerHTML = slides.length;
slideNumber.innerHTML = count + 1;

document.querySelector('.prev-btn').addEventListener('click', function () {
  count--;
  
  if (count < 0) {
    count = slides.length - 1;
    slideNumber.innerHTML = slides.length;
  }
  slideNumber.innerHTML = count+1;
  rollSlider();
});

document.querySelector('.next-btn').addEventListener('click', function () {
  count++;
  slideNumber.innerHTML = count+1;
  if (count >= slides.length) {
    count = 0;
    slideNumber.innerHTML = 1;
  }
  rollSlider();
});

function rollSlider() {
  slider.style.transform = 'translate(-' + count * width + 'px)';
  
}

// form check
let email = document.getElementById("mail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I expect an e-mail, darling!");
  } else {
    email.setCustomValidity("");
  }
});