"use strict";

const mainHeader = document.querySelector(".main-header");
const mobileNavBtn = document.querySelector(".mobile-nav-btn");

// when click in the mobile nav tbn toggle the class nav-open in the main header

mobileNavBtn.addEventListener("click", () => {
    mainHeader.classList.toggle("nav-open");
});

const copyrightYear = document.querySelector(".year");

// get the current year and set it in the footer's copy right

const currentYear = new Date().getFullYear();
copyrightYear.textContent = currentYear;
