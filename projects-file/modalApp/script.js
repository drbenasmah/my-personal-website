"use strict";
const overlay = document.querySelector(".overlay");
const closeModalbtn = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const showModalbtns = document.querySelectorAll(".show-modal");

const openModalFunction = function () {
  console.log("button clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModalFunction = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < showModalbtns.length; i++) {
  showModalbtns[i].addEventListener("click", openModalFunction);
}

closeModalbtn.addEventListener("click", closeModalFunction);

overlay.addEventListener("click", closeModalFunction);

// esc to close

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModalFunction();
  }
});
