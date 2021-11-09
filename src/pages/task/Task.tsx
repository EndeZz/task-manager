import React from 'react';
import ButtonBig from '../../components/buttons/ButtonBig/ButtonBig';
import ButtonMain from '../../components/buttons/buttonMain/buttonMain';
import ButtonMini from '../../components/buttons/ButtonMini/ButtonMini';
import File from '../../components/file/file';
import Header from '../../components/header/header';
import InputComponent from '../../components/input/InputComponent/InputComponent';
import ContentLabel from '../../components/labels/ContentLabel/ContentLabel';
import StatusLabel from '../../components/labels/StatusLabel/StatusLabel';
import FileLabel from '../../components/labels/FileLabel/FileLabel';

function Task() {
  return (
    <div>
      <Header></Header>
      <div className="task__buttons ">
        <ButtonBig type="back" color="blue" text="К списку задач"></ButtonBig>
        <div className="task__buttons__edit">
          <ButtonMini type="edit" color="blue"></ButtonMini>
          <ButtonMini type="edit" color="blue"></ButtonMini>
        </div>
      </div>
      <section className="task">
        <div className="task__body">
          <div className="task__body__content">
            <div className="task__body__content__labels">
              <ContentLabel type="video"></ContentLabel>
              <StatusLabel type="work"></StatusLabel>
            </div>
            <h1 className="h1">Заголовок задачи с другой стороны консультация с широким активом позволяет</h1>
            <div className="task__body__content__text">
              <p>
                Не следует, однако забывать, что постоянный количественный рост и
                сфера нашей активности позволяет оценить значение форм развития.
                Значимость этих проблем настолько очевидна, что новая модель организационной
                деятельности требуют от нас анализа системы обучения кадров,
                соответствует насущным потребностям. Товарищи! постоянный количественный
                рост и сфера нашей активности требуют определения и уточнения позиций,
                занимаемых участниками в отношении поставленных задач. Повседневная
                практика показывает, что постоянный количественный рост и сфера
                нашей активности в значительной степени обуславливает создание
                системы обучения кадров, соответствует насущным потребностям.
              </p>
            </div>
            <div className="task__body__content__files ">
              <span className="task__content__files__text">Файлы</span>
              <File type="zip" name="Материалы.zip" size="61 Мб"></File>
              <File type="doc" name="Техническое задание.doc" size="215 Кб"></File>
            </div>
          </div>
          <div className="task__body__result ">
            <div className="task__body__result__heading">
              <h2 className="h3">Результат</h2>
              <span className="task__body__result__heading__text">Допустимые форматы:</span>
              <FileLabel type="video"></FileLabel>
            </div>
            <div className="task__body__result__load">
              <img src="/public/icons/plus.svg" alt="add" />
            </div>
          </div>
          <div className="task__body__comment">
            <InputComponent type='text' label='' placeholder='Введите сообщениe...' id='comment'></InputComponent>
            <ButtonMain type="save" color="blue" text="Отправить"></ButtonMain>
          </div>
        </div>
        <div className="task__info">
          <ul className="task__info__list">
            <li>
              <span className="task__info__list__label">Задача создана</span>
              <span className="task__info__list__text">05.02.2020</span>
            </li>
            <li>
              <span className="task__info__list__label">Срок выполненения</span>
              <span className="task__info__list__text">11.02.2020</span>
            </li>
            <li>
              <span className="task__info__list__label">Опубликовал</span>
              <span className="task__info__list__text">Семён Щеглов</span>
            </li>
            <li>
              <span className="task__info__list__label">Ответственный</span>
              <span className="task__info__list__text">Станислав Щукин</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Task;
