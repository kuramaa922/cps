'use strict';

const body = document.querySelector("body");
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu-wrapper");
const burgerClose = document.querySelector('.close');
const menuBtn = document.querySelectorAll(".menu-main__button");
const scrollbarBtn = document.querySelectorAll('.scrollbar__item');

menuBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        menuBtn.forEach(item => {
            item.classList.remove('menu-main__button--selected');
        });
        e.currentTarget.classList.add("menu-main__button--selected");
        
    });
});

scrollbarBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        scrollbarBtn.forEach(btn => {
            btn.classList.remove('scrollbar__item--active');
        });
        e.target.classList.add("scrollbar__item--active");
    });
});

window.addEventListener('click', (e) => {
    if(e.target.classList.contains("menu-wrapper")) {
        menu.classList.remove('menu-wrapper--selected');
        body.classList.remove("body--overflow--hidden");
    }
});
burger.addEventListener('click', (e) => {
    menu.classList.add('menu-wrapper--selected');
    body.classList.add("body--overflow--hidden");
});

burgerClose.addEventListener('click', () => {
    menu.classList.remove('menu-wrapper--selected');
    body.classList.remove("body--overflow--hidden");
});
