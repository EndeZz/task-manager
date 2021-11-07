import './task.scss';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useTitle } from '../../hooks/useTitle';
import ROUTES from '../../router/routes';
import Button from '../../components/button/button';
import Icon from '../../components/icon/icon';
import Upload from '../../components/upload/upload';
import Modal from '../../components/modal/modal';

const Task = ({ title }) => {
  useTitle(title);
  const history = useHistory();
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <div className="container task">
        <ul className="task__top-group">
          <li className="task__btn">
            <Button className="btn btn_trans btn_inline" onClick={() => history.push(ROUTES.TASKS.url)}>
              <Icon
                className="icon icon_back icon_primary icon_edge"
                path="./img/icons/icons.svg#back"
                width={25}
                height={11}
                aria-hidden="true"
              />
              К списку задач
            </Button>
          </li>
          <li className="task__btn task__btn-group">
            <Button className="btn btn_primary btn_edit-sm btn__task-sm" aria-label="Редактировать">
              <Icon
                className="icon icon_md"
                path="./img/icons/icons.svg#edit-icon"
                width={20}
                height={20}
                aria-hidden="true"
              />
            </Button>
            <Button
              className="btn btn_primary btn_edit-sm btn__task-sm"
              aria-label="Удалить"
              onClick={() => setVisible(true)}>
              <Icon
                className="icon icon_md icon_md-delete"
                path="./img/icons/icons.svg#delete-icon"
                width={14}
                height={16}
                aria-hidden="true"
              />
            </Button>
          </li>
        </ul>
        <div className="task__main-group">
          <div className="task__main-content">
            <section className="task__wrapper task__wrapper-inner">
              <div className="task__caption">
                <span className="type_edge type type-video">
                  <svg className="icon icon_video" width="12" height="10" aria-hidden="true">
                    +#video-icon"
                  </svg>
                  <span>Видео</span>
                </span>
                <span className="task__progress task__progress_in-work">В работе</span>
              </div>
              <div className="task__info">
                <h2 className="task__info-title">Название повседневная практика показывает</h2>
                <p className="task__info-desc">
                  Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности позволяет
                  оценить значение форм развития. Значимость этих проблем настолько очевидна, что новая модель
                  организационной деятельности требуют от нас анализа системы обучения кадров, соответствует насущным
                  потребностям. Товарищи! постоянный количественный рост и сфера нашей активности требуют определения и
                  уточнения позиций, занимаемых участниками в отношении поставленных задач. Повседневная практика
                  показывает, что постоянный количественный рост и сфера нашей активности в значительной степени
                  обуславливает создание системы обучения кадров, соответствует насущным потребностям.
                </p>
              </div>
              <div className="task__files">
                <h3 className="task__files-title">Файлы</h3>
                <ul className="task__files-list">
                  <li className="task__files-item">
                    <div className="task__files-content">
                      <Icon
                        className="task__files-type"
                        path="./img/icons/doctype.svg#zip"
                        width={22}
                        height={22}
                        aria-hidden="true"
                      />
                      <span className="task__files-name">Материалы.zip</span>
                      <span className="task__files-size">61 Мб</span>
                    </div>

                    <a download className="btn btn__submit btn_primary-trans task__files-download">
                      <Icon
                        className="icon icon_edge"
                        path="./img/icons/icons.svg#download-icon"
                        width={12}
                        height={12}
                        aria-hidden="true"
                      />
                      Скачать
                    </a>
                  </li>
                  <li className="task__files-item">
                    <div className="task__files-content">
                      <Icon
                        className="task__files-type"
                        path="./img/icons/doctype.svg#doc"
                        width={22}
                        height={22}
                        aria-hidden="true"
                      />
                      <span className="task__files-name">Техническое задание.doc</span>
                      <span className="task__files-size">215 Кб</span>
                    </div>

                    <a download className="btn btn__submit btn_primary-trans task__files-download">
                      <Icon
                        className="icon icon_edge"
                        path="./img/icons/icons.svg#download-icon"
                        width={12}
                        height={12}
                        aria-hidden="true"
                      />
                      Скачать
                    </a>
                  </li>
                  <li className="task__files-item">
                    <div className="task__files-content">
                      <Icon
                        className="task__files-type"
                        path="./img/icons/doctype.svg#avi"
                        width={22}
                        height={22}
                        aria-hidden="true"
                      />
                      <span className="task__files-name">Домашнее видео Трусова.avi</span>
                      <span className="task__files-size">666 Гб</span>
                    </div>
                    <a download className="btn btn__submit btn_primary-trans task__files-download">
                      <Icon
                        className="icon icon_edge"
                        path="./img/icons/icons.svg#download-icon"
                        width={12}
                        height={12}
                        aria-hidden="true"
                      />
                      Скачать
                    </a>
                  </li>
                </ul>
              </div>
            </section>
            <section className="task__wrapper">
              <div className="task__wrapper-inner">
                <Upload />
              </div>
              <div className="task__wrapper-inner">
                <form className="upload__form" action="">
                  <textarea
                    className="upload__message"
                    name="message"
                    cols={30}
                    rows={10}
                    placeholder="Введите сообщение..."></textarea>
                  <Button
                    className="btn btn_primary btn__submit upload__message-btn"
                    onClick={(e) => e.preventDefault()}>
                    Отправить
                  </Button>
                </form>
              </div>
            </section>
          </div>
          <aside className="task__wrapper task__wrapper-inner task__sidebar">
            <ul className="task__sidebar-list">
              <li className="task__sidebar-item">
                <p className="task__sidebar-title">Задача создана</p>
                <span className="task_underline"></span>
                <time className="task__sidebar-subtitle">05.02.2020</time>
              </li>
              <li className="task__sidebar-item">
                <p className="task__sidebar-title">Срок выполнения</p>
                <span className="task_underline"></span>
                <time className="task__sidebar-subtitle">11.02.2020</time>
              </li>
              <li className="task__sidebar-item">
                <p className="task__sidebar-title">Опубликовал</p>
                <span className="task_underline"></span>
                <p className="task__sidebar-subtitle">Семён Щеглов</p>
              </li>
              <li className="task__sidebar-item">
                <p className="task__sidebar-title">Ответственный</p>
                <span className="task_underline"></span>
                <p className="task__sidebar-subtitle">Станислав Щукин</p>
              </li>
            </ul>
          </aside>
        </div>
      </div>

      <Modal visible={visible} onClick={setVisible}>
        <h2 className="modal__title">Вы действительно хотите удалить задачу?</h2>
        <section className="modal__btn-group">
          <Button className="btn btn_primary-trans" onClick={() => setVisible(false)}>
            Да
          </Button>
          <Button className="btn btn_primary-trans" onClick={() => setVisible(false)}>
            Нет
          </Button>
        </section>
        <Button className="btn btn_reset modal_close" onClick={() => setVisible(false)}>
          <Icon
            className="icon icon_ghost"
            path="./img/icons/icons.svg#cross-icon"
            width={10}
            height={10}
            aria-hidden="true"
          />
        </Button>
      </Modal>
    </>
  );
};

export default Task;
