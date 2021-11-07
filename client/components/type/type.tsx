import './type.scss';
import React, { FC } from 'react';
import Icon, { IconProps } from '../icon/icon';

export interface TypeContentProps extends IconProps {
  type: string;
  children?: string;
  path?: string;
  variantSpan?: string;
  variantIcon?: string;
  width?: number;
  height?: number;
  ariaHidden?: boolean;
  tabIndex?: number;
}

const TypeContent: FC<TypeContentProps> = ({
  type,
  children = '',
  path,
  variantSpan = '',
  variantIcon = '',
  width,
  height,
  ariaHidden = true,
  tabIndex,
  ...attrs
}) => {
  function renderSwitch(option: string, body: string) {
    switch (option) {
      case 'video':
        return <span>Видео</span>;
      case 'photo':
        return <span>Фото</span>;
      case 'audio':
        return <span>Аудио</span>;
      default:
        return <span>{body}</span>;
    }
  }

  return (
    <span className={variantSpan.includes('btn') ? `${variantSpan}` : `${variantSpan}`} {...attrs} tabIndex={tabIndex}>
      <Icon
        className={`icon icon_${type} ${variantIcon}`}
        path={path}
        width={width}
        height={height}
        aria-hidden={ariaHidden}
      />

      {renderSwitch(type, children)}

      {type !== 'photo' && variantSpan.includes('type') && !variantSpan.includes('type-def') ? (
        <span className="type_time">02:31</span>
      ) : (
        ''
      )}
    </span>
  );
};

export default TypeContent;
