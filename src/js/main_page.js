import { startCalendar } from './lib/calendar.js';

function startMainPage() {
    if (window.location.href === 'http://localhost:8080/index.html' || window.location.href === 'http://localhost:8080/index.html?#!') {
        startCalendar();
    }
}
startMainPage();
