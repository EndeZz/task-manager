import './upload.scss';
import React, { FC } from 'react';
import Button from '../button/button';
import Icon from '../icon/icon';
import Tooltip from '../tooltip/tooltip';

const Upload: FC = () => (
  <>
    <div className="upload">
      <h3 className="upload__title">Результат</h3>
      <span className="upload__subtitle">Допустимые форматы:</span>

      <ul className="upload__list-format">
        <li className="upload__item-format">
          <span className="upload__format">avi</span>
        </li>
        <li className="upload__item-format">
          <span className="upload__format">flv</span>
        </li>
        <li className="upload__item-format">
          <span className="upload__format">mov</span>
        </li>
      </ul>
    </div>

    <ul className="upload__files">
      <li className="upload__file">
        <Button className="btn btn_reset upload_close">
          <Icon
            className="icon"
            path="./img/icons/icons.svg#delete-attachment"
            width={14}
            height={14}
            aria-hidden="true"
          />
        </Button>
        <div className="upload__img">
          <img className="upload__pic" src="./img/card/img1.jpg" alt="" />
        </div>
        <Tooltip />
      </li>

      <li className="upload__file">
        <Button className="btn btn_reset upload_close">
          <Icon
            className="icon"
            path="./img/icons/icons.svg#delete-attachment"
            width={14}
            height={14}
            aria-hidden="true"
          />
        </Button>
        <div className="upload__img">
          <img className="upload__pic" src="./img/card/img2.jpg" alt="" />
        </div>
        <Tooltip />
      </li>

      <li className="upload__file">
        <Button className="btn btn_reset upload_close">
          <Icon
            className="icon"
            path="./img/icons/icons.svg#delete-attachment"
            width={14}
            height={14}
            aria-hidden="true"
          />
        </Button>
        <div className="upload__img">
          <img className="upload__pic" src="./img/card/img3.jpg" alt="" />
        </div>
        <Tooltip />
      </li>

      <li className="upload__file">
        <Button className="btn btn_reset upload_close">
          <Icon
            className="icon"
            path="./img/icons/icons.svg#delete-attachment"
            width={14}
            height={14}
            aria-hidden="true"
          />
        </Button>
        <div className="upload__img upload__img_empty">
          <Icon
            className="upload__img_caption"
            path="./img/icons/icons.svg#plus-icon"
            width={14}
            height={14}
            aria-hidden="true"
          />
        </div>
      </li>
    </ul>
  </>
);

export default Upload;
