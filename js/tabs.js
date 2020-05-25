'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const parentTabs = document.querySelector('.tabheader__items'),
          tabs = parentTabs.querySelectorAll('.tabheader__item'),
          contentTabs = document.querySelectorAll('.tabcontent');

    const hideTabs = () => {
        contentTabs.forEach(item => {
            item.style.display = 'none';
            item.classList.remove('fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    };

    const showTabs = (i = 0) => {
        contentTabs[i].style.display = 'block';
        contentTabs[i].classList.add('fade');
        tabs[i].classList.add('tabheader__item_active');
    };

    hideTabs();
    showTabs();

    parentTabs.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach ((item, i) => {
                if (item == target) {
                    hideTabs();
                    showTabs(i);
                }
            });
        }
    });

});