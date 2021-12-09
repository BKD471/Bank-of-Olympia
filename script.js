"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

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

const message = document.createElement("div");
message.classList.add("cookie-message");

message.innerHTML =
  "We use cookied for improved functionality and analytics. <button class='btn btn--close-cookie'> Got it!</button>";

const header = document.querySelector(".header");
//header.prepend(message);
//header.append(message); // a unique dom element can occur only single time
//header.append(message.cloneNode(true)); // to add same dom multiple times clone it

// header.before(message);
//header.after(message);

//delete

// document.querySelector(".btn--close-cookie").addEventListener("click", () => {
//   message.remove();
// });

// header.insertAdjacentElement("beforeend", message);

// document.querySelector(".btn--close-cookie").addEventListener("click", () => {
//   message.remove();
// });
