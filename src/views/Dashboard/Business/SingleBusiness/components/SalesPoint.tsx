import React from 'react';
import FilterIcon from '../../../../../assets/icons/Filter.png';
import SearchInput from '../../../../../components/SearchInput/search-input.';
import BusinessTable from './ProductTable';
import styled from 'styled-components';
import SalesPointTable from './SalesPointTable';

const BusinessProduct = () => {
  return (
    <section className="table-section">
      <div className="top-section w-100 row justify-content-center align-items-center px-2">
        <div className="col-4 top-section-text">
          <p>Sales Points</p>
        </div>
        <div className="row  col-8 justify-content-end">
          <div className=" mr-4  ">
            <span className="green mr-2">Sort</span>
            <img src={FilterIcon} alt="filter" />
          </div>
          <div className="  ">
            <SearchInput />
          </div>
        </div>
      </div>

      <section>
        <SalesPointTable />
      </section>
    </section>
  );
};

const BusinnessWrapper = styled.div`
  background-color: #fff;

  border-radius: 50px;
  p {
    margin: 0;
  }
  .top-section {
    display: flex;
    justify-content: space-between;
    padding: 3rem 0rem 0 2rem;
  }
  .top-section-text {
    display: flex;
  }
  .sort-search {
    display: flex;
    justify-content: center;
    margin-right: 3rem;
  }
`;

export default BusinessProduct;
