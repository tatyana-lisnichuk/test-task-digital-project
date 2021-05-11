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
  slides.forEach(item => {
    item.style.width = width + 'px';
    item.style.height = 'auto';
  });
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

// Animation
const animItems = document.querySelectorAll('._anim-items');



if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  // animOnScroll();
  // offset();
function animOnScroll(params) {
  for (let index = 0; index < animItems.length; index++) {
    const animItem = animItems[index];
    const animItemHeight = animItem.offsetHeight;
    const animItemOffset = offset(animItem).top;
    const animStart = 4;

    let animItemPoint = window.innerHeight - animItemHeight / animStart;
    if (animItemHeight > window.innerHeight) {
      animItemPoint = window.innerHeight - window.innerHeight / animStart;
    }
    if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
      animItem.classList.add('_active');
    } else {
      animItem.classList.remove('_active');
    }
  }
}
function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop, left: rect.left + scrollLeft
  };
}




  animOnScroll();
}