import InputComponent from '../../input/InputIconComponent/InputIconComponent';
import ContentLabel from '../../labels/ContentLabel/ContentLabel';
import './photo.scss';

function SelectContent() {
  return (
    <div className="select">
      <InputComponent label="Тип контента" placeholder="Выберите тип контента" type="text" id="arrow"></InputComponent>
      <div className="select__dropdown" hidden>
        <ul className="select__dropdown__list">
          <li>
            <div className="select__dropdown__list__item">
              <ContentLabel type='video'></ContentLabel>
            </div>
          </li>
          <li>
            <div className="select__dropdown__list__item">
              <ContentLabel type='audio'></ContentLabel>
            </div>
          </li>
          <li>
            <div className="select__dropdown__list__item">
              <ContentLabel type='photo'></ContentLabel>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SelectContent;
