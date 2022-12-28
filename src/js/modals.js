'use strict';
const body = document.querySelector("body");
const call = document.querySelectorAll(".social__call");
const callBack = document.querySelectorAll(".social__chat");
const modal = document.querySelector(".modal");
const modalFeedBack = document.querySelector(".modal--feedback");
const modalCallBack = document.querySelector(".modal--callback");
const closeSelector = document.querySelectorAll('.close');

function showModal(trigger, modal,className) {
    trigger.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.add(className);
            body.classList.add("body--overflow--hidden");
        });
    });   
      
}

function closeModal(close, modal, className) {
    close.forEach(item => {
        item.addEventListener('click', () => {
            modal.classList.remove(className);
            body.classList.remove("body--overflow--hidden");
        });
    }); 
    modal.addEventListener('mousedown', (e) => {
        if(e.target.classList.contains('modal__dialog')) {
            modal.classList.remove(className);
        }
    })
}


showModal(call, modalCallBack,'modal--show');
showModal(callBack, modalFeedBack,'modal--show');

closeModal(closeSelector, modalFeedBack ,'modal--show');
closeModal(closeSelector, modalCallBack ,'modal--show');


