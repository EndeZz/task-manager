import React from 'react';
import './button.scss';

type ButtonStyle = 'new-task' | 'approve-publish' | 'edit-type1' | 'edit-type2' | 'back' | 'delete' | 'cross';

const buttonStyleToButtonClass: Record<ButtonStyle, string> = {
  'new-task': 'btn-new-task',
  'approve-publish': 'btn-approve-and-publish',
  'edit-type1': 'btn-edit-type1',
  'edit-type2': 'btn-edit-type2',
  back: 'btn-back',
  delete: 'btn-delete',
  cross: 'btn-cross',
};

interface Props {
  btnIcon: JSX.Element;
  theme: ButtonStyle;
  title?: string;
  className?: string;
  onClick: () => void;
}

const themeToButtonClass = (theme: ButtonStyle) => {
  return buttonStyleToButtonClass[theme];
};

const Button: React.FunctionComponent<Props> = ({
  btnIcon, title, theme, onClick,
}) => {
  const buttonClassName = themeToButtonClass(theme);

  // react children
  return (
    <button type='button' className={`btn ${buttonClassName}`} onClick={onClick}>
      {btnIcon}
      <span>{title}</span>
    </button>
  );
};

export default Button;
