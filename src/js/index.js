"use strict";

import "./../scss/style.scss";
import './menu';
import './modals';
import 'swiper/modules/pagination/pagination.scss'
import 'swiper/swiper.scss'
import Swiper, { Pagination } from 'swiper';

const readMore = document.querySelectorAll('.read-more');
const repairs = document.querySelector('.swiper-repairs');
const brands = document.querySelector('.swiper-brands');
const text = document.querySelector('.article__text');

function showContent (readMoreState, readMoreBlock) {
    readMore.forEach(item => {
        item.addEventListener('click', (e) => {
            let target = e.target;
            if(target.classList.contains(readMoreState)) {
                readMoreBlock.classList.toggle('content--state--height');
                target.classList.toggle("read-more--state-transform");
            }
            if(target.classList.contains("read-more--state-transform")) {
                target.textContent = "Скрыть";
            } else {
                if(target.classList.contains('read-more--text')) {
                    target.textContent = "Читать далее";
                } else {
                    target.textContent = "Показать всё";
                }
            }
        });
    });
}

showContent('read-more--repairs', repairs);
showContent('read-more--brands', brands);
showContent('read-more--text', text);

if(window.matchMedia("(max-width: 767px)").matches) {
    const swiper = new Swiper(".swiper", {
    modules: [Pagination],
    centeredSlidesBounds: true,
    slidesPerView: 1.2,
    spaceBetween: 20,

    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        320: {
            // slidesPerView: 'auto',
            spaceBetween: 20
        },
        500: {
            // slidesPerView: 'auto',
            spaceBetween: 40
        }
    }
})
}
