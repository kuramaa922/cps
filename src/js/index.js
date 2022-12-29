"use strict";

import "./../scss/style.scss";
import './menu';
import './modals';
import 'swiper/modules/pagination/pagination.scss'
import 'swiper/swiper.scss'
import Swiper, { Pagination } from 'swiper';

// ARTICLE READ-MORE
const articleContainer = document.querySelector('.article__text')
const readMoreArticle = document.querySelector('.read-more')
const readMoreText = document.querySelector('.read-more--text');

readMoreArticle.addEventListener('click', function() {
  let text

  articleContainer.classList.toggle('content--state--height')
  text = articleContainer.classList.contains('content--state--height')
    ? 'Скрыть'
    : 'Читать далее';
  readMoreText.textContent = text
  readMoreArticle.classList.toggle('read-more--state-transform')
})

// BRANDS READ-MORE
const brandsContainer = document.querySelector('.swiper-brands')
const readMoreBrands = document.querySelector('#read-more-brands')
const readMoreTextBrands = document.querySelector('.read-more--brands')

readMoreBrands.addEventListener('click', function() {
  let text

  brandsContainer.classList.toggle('content--state--height')
  text = brandsContainer.classList.contains('content--state--height')
    ? 'Скрыть'
    : 'Показать всё';
  readMoreTextBrands.textContent = text
  readMoreBrands.classList.toggle('read-more--state-transform')
})

// REPAIRS READ-MORE
const repairsContainer = document.querySelector('.swiper-repairs')
const readMoreRepairs = document.querySelector('#read-more-repairs')
const readMoreTextRepairs = document.querySelector('.read-more--repairs')

readMoreRepairs.addEventListener('click', function() {
  let text

  repairsContainer.classList.toggle('content--state--height')
  text = repairsContainer.classList.contains('content--state--height')
    ? 'Скрыть'
    : 'Показать всё'
  readMoreTextRepairs.textContent = text
  readMoreRepairs.classList.toggle('read-more--state-transform')
})



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
