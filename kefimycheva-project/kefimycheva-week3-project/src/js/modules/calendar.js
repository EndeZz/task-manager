export default class Calendar {
  constructor() {
    // const date = new Date();
    // this.dayNow = date.getDate();
    // this.monthNow = date.getMonth();
    // this.yearNow = date.getFullYear();
    this.daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    this.namesOfMonth = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  }

  render() {
    const date = new Date();
    this.dayNow = date.getDate();
    this.monthNow = date.getMonth();
    this.yearNow = date.getFullYear();
    const calendarWrapper = document.createElement('div');
    calendarWrapper.classList.add('calendar__wrapper');
    calendarWrapper.innerHTML = ` 
        <div class="calendar__header">
          <div class="calendar__title">
            <h2 class="calendar__title-text">${this.namesOfMonth[this.monthNow]}, ${this.yearNow}</h2>
          </div>
          <div class="calendar__buttons-container">
            <button class="calendar__buttons calendar__buttons--btnPrev" type="button"></button>
            <button class="calendar__buttons calendar__buttons--btnNext" type="button"></button>
        </div>
      `;
    const calendarContent = document.createElement('div');
    calendarContent.classList.add('calendar__content');
    const ulForWeek = document.createElement('ul');
    ulForWeek.classList.add('calendar__nameOfWeek');
    ulForWeek.innerHTML = this.genereteNameOfDays();
    const ulForDays = document.createElement('ul');
    ulForDays.classList.add('calendar__days');
    ulForDays.innerHTML = this.genereteDays();
    calendarContent.append(ulForWeek, ulForDays);
    calendarWrapper.append(calendarContent);
    return calendarWrapper;
  }

  genereteNameOfDays() {
    let str = '';
    for (let i = 0; i < this.daysOfWeek.length; i += 1) {
      str += `<li class="calendar__weekName">${this.daysOfWeek[i]}</li>`;
    }
    return str;
  }

  genereteDays() {
    this.monthDays = new Date(this.yearNow, this.monthNow + 1, 0).getDate();
    this.monthPrefix = new Date(this.yearNow, this.monthNow, 0).getDay();
    this.monthPrev = new Date(this.yearNow, this.monthNow - 1, 0).getDate() - this.monthPrefix;
    let monthDaysText = '';
    for (let i = 0; i < this.monthPrefix; i += 1) {
      monthDaysText += `<li class="calendar__days-item"><span class="calendar__days-item__num dayBeforeAfter" tabindex="1">${this.monthPrev + i}</span></li>`;
    }

    for (let i = 1; i <= this.monthDays; i += 1) {
      monthDaysText += `<li class="calendar__days-item"><span class="calendar__days-item__num" tabindex="1">${i}</span></li>`;
    }
    for (let i = 1; i <= (34 - (this.monthPrev + this.monthPrefix)); i += 1) {
      monthDaysText += `<li class="calendar__days-item"><span class="calendar__days-item__num dayBeforeAfter" tabindex="1">${i}</span></li>`;
    }
    return monthDaysText;
  }

  // nextMonth() {
  //   document.querySelectorAll('.calendar__buttons')[0].addEventListener('click', () => {
  //     this.monthNow = new Date(this.yearNow, this.monthNow - 1, 0).getDate();
  //   });
  //   this.render();
  // }

  // prevMonth() {
  //   document.querySelectorAll('.calendar__buttons')[1].addEventListener('click', () => {
  //     this.monthNow = new Date(this.yearNow, this.monthNow + 1, 0).getDate();
  //     this.render();
  //   });
  // }
}
