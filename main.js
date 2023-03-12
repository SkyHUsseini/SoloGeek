"use strict";
const navBtn = document.querySelector(".nav-toggle-btn");
const navToggle = document.querySelector(".nav-wrapper");
const bar1 = document.querySelector(".bar-1");
const bar2 = document.querySelector(".bar-2");
const bar3 = document.querySelector(".bar-3");

//show nav
navBtn.addEventListener("click", function () {
  navToggle.toggleAttribute("visible");
});

//menu button X transition
navBtn.addEventListener("click", () => {
  bar1.toggleAttribute("active");
  bar2.toggleAttribute("active");
  bar3.toggleAttribute("active");
});

//close nav on click
navToggle.addEventListener("click", function () {
  navToggle.toggleAttribute("visible");
  bar1.toggleAttribute("active");
  bar2.toggleAttribute("active");
  bar3.toggleAttribute("active");
});
