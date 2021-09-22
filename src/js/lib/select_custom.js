'use strict';

import { $, $$$ } from './lib.js';

class Select {
    constructor(obj) {
        this.obj = obj;
        this.text = '';
        this.element;
        this.textSelect = '';
    }

    createSelect() {
        this.create = function (tag) {
            return document.createElement(tag);
        };
        this.select = this.create('div');
        this.selectHeader = this.create('div');
        this.selectIcon = this.create('div');
        this.selectCurrent = this.create('input');
        this.selectBody = this.create('ul');
        this.select.className = `select  js_validation ${this.obj.modificated_theme_class}`;
        this.selectHeader.className = 'select__header select__header_hovered select__header_focused';
        this.selectCurrent.className = 'select__current js_validation';
        this.selectCurrent.disabled = true;
        this.selectCurrent.placeholder = this.obj.title;
        this.selectIcon.className = 'select__icon';
        this.selectBody.className = 'select__body';
        this.select.append(this.selectHeader);
        this.selectHeader.append(this.selectCurrent);
        this.selectHeader.append(this.selectIcon);
        this.select.append(this.selectBody);
        $(`.${this.obj.parentElement}`).append(this.select);

        this.addSelectItem();
    }

    selectListener() {
        this.selectHeader = $$$('.select__header');
        this.selectItem = $$$('.select__item');
        this.selectHeader.forEach((item) => {
            item.addEventListener('click', this.toggleClassBodySelect);
        });
        this.selectItem.forEach((item) => {
            item.addEventListener('click', this.saveDataInInput);
        });
    }

    addSelectItem() {
        for (const key in this.obj.objSource) {
            if (Object.hasOwnProperty.call(this.obj.objSource, key)) {
                this.element = this.obj.objSource[key];
            }
            this.text = document.createTextNode(this.element.text);
            let selectItem = this.create('li');
            selectItem.className = 'select__item';
            selectItem.style.color = this.element.color;
            selectItem.append(this.text);
            this.selectBody.append(selectItem);
        }
        this.selectHeader;
    }

    toggleClassBodySelect() {
        this.parentElement.classList.toggle('select_active');
    }

    saveDataInInput() {
        this.textSelect = this.innerText;
        this.select = this.closest('.select');
        this.select.querySelector('.select__current').value = this.textSelect;
        this.select.classList.remove('select_active');
    }
}

function initializationSelect(obj) {
    let select = new Select(obj);
    select.createSelect(obj);
    select.selectListener();
}

export { initializationSelect };
