'use strict';
let viewport = document.body.clientWidth;
let firststepBtn = [...document.querySelectorAll('.button_change')];

if (viewport >= 768) {
    firststepBtn.forEach(el => {
       el.innerHTML = 'зарегистрироваться на марафон'; 
    });
}
