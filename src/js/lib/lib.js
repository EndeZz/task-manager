'use strict';

import { URLS } from './data_base';

function $(selector) {
    return document.querySelector(selector);
}

function $$$(selector) {
    return document.querySelectorAll(selector);
}

function showNickName() {
    const out = $('.header__user-nickname');
    out.innerHTML = 'Семён Щеглов';
}

showNickName();

function showCountNotification() {
    const out = $('.bell-notifications__count');
    out.innerHTML = '3';
}
showCountNotification();

function toggleTabs() {
    let currentTab = '';

    if (!sessionStorage.getItem('currentTab')) {
        currentTab = sessionStorage.setItem('currentTab', 'Главная');
        window.location = URLS.main;
    } else {
        currentTab = sessionStorage.getItem('currentTab');
    }
    $$$('.menu').forEach((item) => {
        if (item.closest('.menu').textContent.trim() === currentTab) {
            item.classList.add('menu_active');
        } else {
            item.classList.remove('menu_active');
        }
    });
    for (let className of $$$('.menu')) {
        className.addEventListener('click', (event) => {
            funcToggle.call(className);
            sessionStorage.setItem('currentTab', event.target.textContent.trim());
        });
    }
    function funcToggle() {
        for (let className of $$$('.menu')) {
            className.classList.remove('menu_active');
        }
        this.classList.toggle('menu_active');
    }
}
toggleTabs();

export { $, $$$, showNickName, showCountNotification };
