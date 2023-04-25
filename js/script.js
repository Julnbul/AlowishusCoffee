'use strict'

const iconMenu = document.querySelector('.header__burger-button');
const menuBody = document.querySelector('.header__menu');
const menuPlug = document.querySelector('.menu__plug');


//бургер
if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
    menuPlug.classList.toggle('_active');
    menuBody.classList.toggle('hidden-mobile');
  });
}