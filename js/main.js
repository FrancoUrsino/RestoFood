const preloader = document.querySelector("[data-preload]");
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");
const header = document.querySelector("[data-header]");
const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const prevBtn = document.querySelector("[data-prev-btn]");
const nextBtn = document.querySelector("[data-next-btn]");

//PRELOAD FUNCTION
window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  this.document.body.classList.add("loaded");
});


// NAVBAR FUNCTIONS

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

const togglerNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active")
}

addEventOnElements(navTogglers, "click", togglerNav)


// HEADER FUNCTIONS

let lastScroll = 0;
const hideHeader = function (){
  const isScrollBtn = lastScroll < window.scrollY;
  if (isScrollBtn){
    header.classList.add("hide");
  } else{
    header.classList.remove("hide")
  }

  lastScroll = window.scrollY;
  hideHeader();
}

window.addEventListener("scroll", function (){
if (window.scrollY >= 50){
  header.classList.add("active");
} else{
  header.classList.remove("active");
}
})

// SLIDER FUNCTIONS

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function (){
  lastActiveSliderItem.classList.remove("active");
  heroSliderItems[currentSlidePos].classList.add("active");
  lastActiveSliderItem = heroSliderItems[currentSlidePos];
}

const slideNext = function (){
  if (currentSlidePos >= heroSliderItems.length -1){
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }
  updateSliderPos();
}
nextBtn.addEventListener("click", slideNext);

const slidePrev = function (){
  if (currentSlidePos <= 0){
    currentSlidePos = heroSliderItems.length -1;
  } else {
    currentSlidePos--;
  }
  updateSliderPos();
}
prevBtn.addEventListener("click", slidePrev);

let autoSlideItems;
const autoSlide = function(){
  autoSlideItems = setInterval(function(){
    slideNext();
  }, 7000);
}

addEventOnElements([nextBtn, prevBtn], "mouseover", function(){
  clearInterval(autoSlideItems);
});

addEventOnElements([nextBtn, prevBtn],"mouseout", autoSlide);

window.addEventListener("load", autoSlide);