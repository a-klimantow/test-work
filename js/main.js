"use strict";
window.onload = function() {

    const items = document.querySelectorAll(".features__item");

    document.onscroll = function() {
        let block = document.getElementById('features').getBoundingClientRect();
        if (block.top  <= 20) {
            for(let i = 0; i < items.length; i++) {
                items[i].classList.add('features__item--animation');
            }
        }
    }
}