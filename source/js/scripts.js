var navToggle = document.querySelector(".main-nav__toggle");
var nav = document.querySelector(".main-nav");

navToggle.classList.remove("main-nav__toggle--nojs");
nav.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function () {
  if (nav.classList.contains("main-nav--closed")) {
    nav.classList.remove("main-nav--closed");
    nav.classList.add("main-nav--opened");

    navToggle.classList.remove("main-nav__toggle--closed");
    navToggle.classList.add("main-nav__toggle--opened");
  } else {
    nav.classList.remove("main-nav--opened");
    nav.classList.add("main-nav--closed");

    navToggle.classList.remove("main-nav__toggle--opened");
    navToggle.classList.add("main-nav__toggle--closed");
  }
})