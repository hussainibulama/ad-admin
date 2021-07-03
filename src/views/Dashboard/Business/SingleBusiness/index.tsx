import React from 'react';
import Business from './components/details';
import Cards from '../../../../components/Cards/CardComponent';
import SalesPoint from './components/SalesPoint';
import BusinessProduct from './components/BusinessProduct';
import SalesRecord from './components/SalesRecord';

const BusinessDetailsPage = () => {
  return (
    <>
      <Business />
      <Cards />
      <BusinessProduct />
      <SalesPoint />
      <SalesRecord />
    </>
  );
};

export default BusinessDetailsPage;
