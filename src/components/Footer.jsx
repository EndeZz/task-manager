import React from 'react';
import htcImg from '../../public/images/htc.png';

const Footer = () => (
  <div className="footer-container">
    <div className="footer">
      <img src={htcImg} alt="" />
      <div className="footer-texts">
        <p>
          426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса,
          246 (ДК «Металлург»)
        </p>
        <p>+7 (3412) 93-88-61, 43-29-29</p>
        <a href="https://htc-cs.ru" id="htc-link">
          htc-cs.ru
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
