"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((e) => e.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//btn Scrolling;

btnScrollTo.addEventListener("click", (e) => {
  const s1coords = section1.getBoundingClientRect();
  section1.scrollIntoView({ behavior: "smooth" });
});

/////////////////////////////////////////
//page naviga

//event delegat
//1 Add event listener to common parent
//2 determine what element originate the event

document.querySelector(".nav__links").addEventListener("click", (event) => {
  event.preventDefault();
  // selecting only the clicked element

  // Matching strategy  check whether class has nav__link
  if (event.target.classList.contains("nav__link")) {
    const id = event.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

////////////////////////////////////
//tabbed component
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", (event) => {
  const clicked = event.target.closest(".operations__tab");

  //Guard Clause
  if (!clicked) return;

  //active tab
  tabs.forEach((tb) => tb.classList.remove("operations__tab--active"));
  clicked.classList.toggle("operations__tab--active");

  //active tabsContent
  tabsContent.forEach((tc) =>
    tc.classList.remove("operations__content--active")
  );

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

//Menu Fade Animation
const nav = document.querySelector(".nav");

const handleMouseOverOut = function (event) {
  // this refers to 0, 1  i.e the value that bind passes
  if (event.target.classList.contains("nav__link")) {
    const link = event.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((sb) => {
      if (sb !== link) {
        // sb.style.transition = "0.4s";
        sb.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
};
// passing an argument into handler function
nav.addEventListener("mouseover", handleMouseOverOut.bind(0.5));
nav.addEventListener("mouseout", handleMouseOverOut.bind(1));

////////////////////////////////////////////
// StickY Navigation

const initialCoord = section1.getBoundingClientRect();
//console.log(initialCoord);

window.addEventListener("scroll", (event) => {
  console.log(section1.getBoundingClientRect());
  if (window.scrollY > initialCoord.top) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
});
