import styled from 'styled-components';

import Select from 'react-select';

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'hsl(0, 0%, 100%)',
      color: 'hsl(0, 0%, 100%)',
      borderRadius: '0.5rem',
      padding: '4px',
      border: '1px solid #D8E3EC',
    //   boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
      height: '43px',
    }),
    option: (provided, state) => ({
        ...provided,
        cursor: 'pointer',
        color: 'orange',
        padding: '12px 14px',
        border: '1px solid #D8E3EC',
        backgroundColor: state.isSelected
        ? '#96AECD'
        : 'hsl(0, 0%, 98%)',
        color: state.value
        ? 'red'
        : 'blue'
    }),
  },
})`
  width: 200px;
  border-radius: red;
  font-family: blue;
  border: none;
  & > * {
    box-shadow: green;
  }
  & input {
    padding-left: 0.25rem;
  }
  & * {
    color: black !important;
  }
  & > div[id] {
  }
  span {
      width: 0px
  }
`;