import { initializationSelect } from './lib/select_custom.js';
import { STATUSES } from './lib/data_base.js';
import { startCalendar } from './lib/calendar.js';

function startTasks() {
    if (window.location.href === 'http://localhost:8080/tasks.html' || window.location.href === 'http://localhost:8080/tasks.html?#!') {
        initializationSelect({
            parentElement: 'main-page__wrap-select',
            objSource: STATUSES,
            title: 'Выберите статус',
            modificated_theme_class: 'select_theme_status',
        });

        startCalendar();
    }
}
startTasks();
