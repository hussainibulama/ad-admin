import React from 'react';
import Table from './components/BusinessPage';
import { CardBox1, CardBox2 } from './components/Card';
const index = () => {
  return (
    <>
      <CardBox1 justify={'flex-start'} />
      <CardBox2 justify={'flex-start'} />
      <Table />
    </>
  );
};

export default index;
