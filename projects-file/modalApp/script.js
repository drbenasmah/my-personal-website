'use strict';
const overlay = document.querySelector('.overlay');
const closeModalbtn = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const showModalbtns = document.querySelectorAll('.show-modal');

const openModalFunction = function () {
  console.log('button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalFunction = function () {
  console.log('close button clicked');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < showModalbtns.length; i++) {
  showModalbtns[i].addEventListener('click', openModalFunction);
}

closeModalbtn.addEventListener('click', closeModalFunction);

overlay.addEventListener('click', closeModalFunction);
