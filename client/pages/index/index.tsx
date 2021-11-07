import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { useTitle } from '../../hooks/useTitle';
import Card from '../../components/card/card';
import Loader from '../../components/loader/loader';
import Control from '../../components/control/control';
import LightBox from '../../components/lightbox/lightbox';

const Index = ({ title }) => {
  const { data, isPending } = useFetch('http://localhost:8081/content');
  const [visible, setVisible] = useState<boolean>(false);
  const [searchFilter, setSearchFilter] = useState<string>('');
  const controlPanel = ['search', 'calendar', 'type-content'];

  useTitle(title);

  const handleChange = (event) => {
    setSearchFilter(event.target.value);
  };

  const clearHandler = () => {
    setSearchFilter('');
  };

  return (
    <div className="container feed">
      <Control value={searchFilter} onChange={handleChange} clearButton={clearHandler} data={controlPanel} />

      {isPending ? (
        <Loader />
      ) : (
        data && (
          <>
            <Card data={data} search={searchFilter} onClick={setVisible} />
            <LightBox visible={visible} onClick={setVisible} />
          </>
        )
      )}
    </div>
  );
};

export default Index;
