import React, { FC } from 'react';
import Button from '../button/button';
import Icon from '../icon/icon';
import Input, { InputProps } from '../input/input';

export interface SearchProps extends InputProps {
  placeholder?: string;
  onClick?: () => void;
}

const Search: FC<SearchProps> = ({ id, className, placeholder, value, onChange, onClick }) => (
  <>
    <Input type="search" id={id} className={className} placeholder={placeholder} value={value} onChange={onChange} />
    <Button className="btn btn_reset input_search-icon">
      <Icon
        className="icon icon_ghost"
        path="./img/icons/icons.svg#search-icon"
        width={13}
        height={14}
        aria-hidden="true"
      />
    </Button>
    <Button className="btn btn_reset input_close" onClick={onClick}>
      <Icon
        className="icon icon_ghost"
        path="./img/icons/icons.svg#cross-icon"
        width={10}
        height={10}
        aria-hidden="true"
      />
    </Button>
  </>
);

export default Search;
