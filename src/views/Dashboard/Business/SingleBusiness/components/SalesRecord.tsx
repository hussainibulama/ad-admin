import React from 'react';
import FilterIcon from '../../../../../assets/icons/Filter.png';
import SearchInput from '../../../../../components/SearchInput/search-input.';
import BusinessTable from './ProductTable';
import styled from 'styled-components';
import SalesPointTable from './SalesPointTable';
import SalesRecordTable from './SalesRecordTable';

const SalesRecord = () => {
  return (
    <section className="table-section">
      <div className="top-section w-100 row justify-content-center align-items-center px-2">
        <div className="col-4 top-section-text">
          <p>Sales Record</p>
        </div>
        <div className="row  col-8 justify-content-end">
          <div className=" mr-4">
            <span className="green mr-2">Sort</span>
            <img src={FilterIcon} alt="filter" />
          </div>
          <div className="  ">
            <SearchInput />
          </div>
        </div>
      </div>

      <section>
        <SalesRecordTable />
      </section>
    </section>
  );
};

export default SalesRecord;
