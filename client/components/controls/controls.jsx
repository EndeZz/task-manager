import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { CustomSelect } from '../customSelect/customSelect';

const options = [
  { value: 'Любой', label: 'Любой' },
  { value: 'В работе', label: 'В работе' },
  { value: 'Ожидает согласования', label: 'Ожидает согласования' },
  { value: 'Выполнено', label: 'Выполнено' }
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Controls = ( { onSearch } ) => {
  const [search, setSearch] = useState('');
  const [nameTask, setNameTask] = useState('');

//   console.log('onSearch', nameTask);

  useEffect(() => {
    const TaskValue = nameTask?.value || '';
    onSearch(TaskValue);
    console.log('onSearch', TaskValue);
    // eslint-disable-next-line
  }, [nameTask]);

  return (
    <Wrapper>
        <CustomSelect
            options={options}
            placeholder="Выберите статус"
            isClearable
            isSearchable={false}
            value={nameTask}
            onChange={setNameTask}
        />
    </Wrapper>
  );
};