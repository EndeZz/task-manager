import React from 'react';
import './menuItem.scss';

type MenuItemStyle = 'menu-item-regular' ;

const menuItemStyleToMenuItemClass: Record<MenuItemStyle, string> = {
  'menu-item-regular': 'menu-item-regular',
};

interface Props {
  theme: MenuItemStyle;
  title: string;
  className?: string;
  onClick: () => void;
}

const themeToMenuItemClass = (theme: MenuItemStyle) => {
  return menuItemStyleToMenuItemClass[theme];
};

const MenuItem: React.FunctionComponent<Props> = ({
  title, theme, onClick,
}) => {
  const menuItemClassName = themeToMenuItemClass(theme);

  // react children
  return (
    <button type='button' className={`menu-item ${menuItemClassName}`} onClick={onClick}>
      {title}
    </button>
  );
};

export default MenuItem;
