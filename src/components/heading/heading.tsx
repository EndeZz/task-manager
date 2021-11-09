import React from 'react';
import ButtonBig from '../buttons/ButtonBig/ButtonBig';
import './heading.scss';

function Heading(props: { text: string }) {
  return (
    <div className="heading">
      {(() => {
        if (props.text !== '') {
          return (
            <div>
              <ButtonBig type='back' color='blue' text=''></ButtonBig>
              <h1 className="heading__text">{props.text}</h1>
            </div>
          );
        }
        return (
          <ButtonBig type='back' color='blue' text=''></ButtonBig>
        );
      })()}
    </div>
  );
}

export default Heading;
