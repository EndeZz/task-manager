import { initializationSelect } from './lib/select_custom.js';
import { ROLE } from './lib/data_base.js';
import { $, $$$ } from './lib/lib.js';

start();

function start() {
    if (window.location.href === 'http://localhost:8080/new_user.html?' || window.location.href === 'http://localhost:8080/new_user.html') {
        initializationSelect({
            parentElement: 'block-input__wrap-select-custom',
            objSource: ROLE,
            title: 'Выберите роль',
            modificated_theme_class: 'select_theme_role',
        });

        $('#button_password').addEventListener('click', showHidePassword);
        $('.button-save').addEventListener('click', (e) => {
            e.preventDefault();
            if (checkForm()) showButtonDelete();
        });

        listenInput();
        setAvatar();
    }
}

function listenInput() {
    $$$('.js_validation').forEach((element) => {
        element.addEventListener('mouseover', (e) => addClassInputHovered(e));
        element.addEventListener('mouseout', (e) => removeClassInputHovered(e));
        element.addEventListener('focus', (e) => {
            addClassInputFocused(e);
            removeClassInputInvalidAfterFocus(e);
        });
        element.addEventListener('blur', (e) => removeClassInputFocused(e));
    });
}

function addClassInputHovered(currentElement) {
    currentElement = currentElement.target.closest('.block-input__wrapper');
    currentElement.classList.add('block-input__wrapper_hovered');
}

function removeClassInputHovered(currentElement) {
    currentElement = currentElement.target.closest('.block-input__wrapper');
    currentElement.classList.remove('block-input__wrapper_hovered');
}

function addClassInputFocused(currentElement) {
    currentElement = currentElement.target.closest('.block-input__wrapper');
    currentElement.classList.add('block-input__wrapper_focused');
}

function removeClassInputFocused(currentElement) {
    currentElement = currentElement.target.closest('.block-input__wrapper');
    currentElement.classList.remove('block-input__wrapper_focused');
}

function addClassInputInvalid(currentElement) {
    currentElement = currentElement.closest('.block-input__wrapper');
    currentElement.classList.add('block-input__wrapper_invalid');
}

function removeClassInputInvalid(currentElement) {
    currentElement = currentElement.closest('.block-input__wrapper');
    currentElement.classList.remove('block-input__wrapper_invalid');
}

function removeClassInputInvalidAfterFocus(currentElement) {
    currentElement = currentElement.target.closest('.block-input__wrapper');
    currentElement.classList.remove('block-input__wrapper_invalid');
}

function showHidePassword() {
    $('#button_password').classList.toggle('block-input__input-password-visibility_hidden');
    const oldInput = $('#password_visibility'),
        newInput = document.createElement('input'),
        setAttributInput = (typeInput) => {
            newInput.setAttribute('type', typeInput);
            newInput.setAttribute('id', oldInput.id);
            newInput.setAttribute('class', oldInput.className);
            newInput.setAttribute('placeholder', oldInput.placeholder);
            newInput.setAttribute('autocomplete', 'off');
            newInput.value += oldInput.value;
            oldInput.replaceWith(newInput);
        };
    oldInput.getAttribute('type') === 'password' ? setAttributInput('text') : setAttributInput('password');
    listenInput();
}

function showMessageError() {
    $('.new-user__error-wrap').classList.add('new-user__error-wrap_visibility');
}

function hideMessageError() {
    $('.new-user__error-wrap').classList.remove('new-user__error-wrap_visibility');
}

function checkForm() {
    $$$('.js_validation').forEach((element, i) => {
        if (element.value === '') {
            addClassInputInvalid(element);
        } else {
            removeClassInputInvalid(element);
        }
        if (element === $('#password_visibility') && !validPassword($('#password_visibility'))) {
            addClassInputInvalid(element);
        }
        if (element.value && validPassword($('#password_visibility')) && i === $$$('.js_validation').length - 1) {
            hideMessageError();
            showButtonDelete();
            return true;
        }
        showMessageError();
    });
}

function showButtonDelete() {
    $('.new-user__button-delete-wrap').classList.add('new-user__button-delete-wrap_visibility');

    $('.button-delete').addEventListener('click', (e) => {
        //e.preventDefault();
        e.target.reset();
    });
}

//function hideButtonDelete() {
//    $('.new-user__button-delete-wrap').classList.remove('new-user__button-delete-wrap_visibility');
//}

function validPassword(element) {
    const regTemplate = /(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    return regTemplate.test(element.value);
}

function setAvatar() {
    $('#avatar').oninput = () => {
        const file = $('#avatar').files;
        $('.new-user__avatar').style.background = `url(../images/users/avatars/${file[0].name}) center/100% 100% no-repeat`;
    };
}
