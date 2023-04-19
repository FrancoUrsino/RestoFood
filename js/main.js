const preloader = document.querySelector("[data-preload]");
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");
const header = document.querySelector("[data-header]");

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