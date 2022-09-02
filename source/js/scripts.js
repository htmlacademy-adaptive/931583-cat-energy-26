var navToggle = document.querySelector(".page-header__toggle");
var nav = document.querySelector(".main-nav");

navToggle.classList.remove("page-header__toggle--nojs");
nav.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function () {
  if (nav.classList.contains("main-nav--closed")) {
    nav.classList.remove("main-nav--closed");
    nav.classList.add("main-nav--opened");

    navToggle.classList.remove("page-header__toggle--closed");
    navToggle.classList.add("page-header__toggle--opened");
  } else {
    nav.classList.remove("main-nav--opened");
    nav.classList.add("main-nav--closed");

    navToggle.classList.remove("page-header__toggle--opened");
    navToggle.classList.add("page-header__toggle--closed");
  }
})
