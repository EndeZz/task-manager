import Header from '../../components/header/header';
import CardComponent from '../../components/card/card';
import ContentFilter from '../../components/filter/ContentFilter/ContentFilter';
import './index.scss';

function Index() {
  return (
    <div className="">
      <Header></Header>
      <div className="filters">
        <ContentFilter></ContentFilter>
      </div>
      <div className="cards">
        <ul className="cards__list">
          <li className="cards__item">
            <CardComponent type='video' duration='02:31' name='Название повседневная практика показывает' author='Аркадий Юрченко' date='09:21 14.02.2020'></CardComponent>
          </li>
          <li className="cards__item">
            <CardComponent type='photo' duration='' name='Название равным образом начало повседневной работы' author='Оскар Калинин' date='15:41 14.02.2020'></CardComponent>
          </li>
          <li className="cards__item">
            <CardComponent type='audio' duration='02:31' name='Название с другой стороны начало повседневной работы по формированию позиции' author='Валерий Яковлев' date='20:18 13.02.2020'></CardComponent>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Index;