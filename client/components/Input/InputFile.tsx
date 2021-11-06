import React from 'react';
import { CustomIcon, IconType } from '../Icon/Icon';
import './inputFile.scss';

export type InputFileType = {
  icon: IconType;
  context?: string;
  onClick: VoidFunction;
};

export const InputFile: React.ComponentType<InputFileType> = ({
  onClick,
  context,
  icon,
}) => {
  return (
    <label className='upload__btn' onClick={onClick} htmlFor={icon.id}>
      <input className='upload__input' name={icon.id} type='file' id={icon.id} />
      <div className='upload__input-wrapper'>
        <CustomIcon {...icon} />
        {
          context && <span className='upload__text'>{context}</span>
        }
      </div>
    </label>
  );
};
