import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import FilterIcon from '../../../assets/icons/Filter.png';
import SearchInput from '../../../components/SearchInput/search-input.';
import BusinessTable from './table2';
import styled from 'styled-components';

export const Table1 = () => {
  return (
    <Table1Wrapper className="mr-3">
      <h3 className="card-title mb-4">User Transactions</h3>
      <div className="times">
        <p>
          <NavLink to="/" activeClassName="active">
            Day
          </NavLink>
        </p>
        <p>
          <NavLink to="/" activeClassName="active">
            Week
          </NavLink>
        </p>
        <p>
          <NavLink to="/" activeClassName="active">
            Month
          </NavLink>
        </p>
        <p>
          <NavLink to="/app/overview" activeClassName="active">
            Year
          </NavLink>
        </p>
      </div>
      <table className="index-table box3">
        <thead>
          <tr>
            <th></th>
            <th>Account</th>
            <th>NGN</th>
            <th>Service</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="listtype mr-2"></td>
            <td className="">0808 479 4980</td>
            <td>100</td>
            <td className="bold">Airtime</td>
          </tr>
          <tr>
            <td className="listtype"></td>
            <td className="">0808 479 4980</td>
            <td>100</td>
            <td className="bold"> Airtime</td>
          </tr>
          <tr>
            <td className="listtype"></td>
            <td className="">0808 479 4980</td>
            <td>100</td>
            <td className="bold">Airtime</td>
          </tr>
          <tr>
            <td className="listtype"></td>
            <td className="">0808 479 4980</td>
            <td>100</td>
            <td className="bold">Airtime</td>
          </tr>
          <tr>
            <td className="listtype"></td>
            <td className="">0808 479 4980</td>
            <td>100</td>
            <td className="bold">Airtime</td>
          </tr>
        </tbody>
      </table>
      <p className="mt-4 float-right">
        <NavLink to="/" id="view">
          {' '}
          View all
        </NavLink>
      </p>
    </Table1Wrapper>
  );
};

const Table1Wrapper = styled.div`
  padding: 2rem 1rem;
  background-color: #fff;
  border-radius: 10px;
  flex-basis: 30%;

  table {
    width: 100%;
  }

  thead {
    color: #029244;
  }
  .times {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #view {
    padding: 0.3rem 1.5rem;
    font-weight: 600;
    border-radius: 10px;
    border: 1px solid #029244;
    background: #fff;
    color: #029244;
    text-decoration: none;
  }

  .bold {
    font-weight: bolder;
  }

  .listtype {
    height: 5px;
    width: 5px;
    background-color: #029244;
    border-radius: 50%;
    display: inline-block;
  }
`;

export const Table2 = () => {
  return (
    <Table2Wrapper className="p-3 ">
      <div className="top-section">
        <div className="top-section-text">
          <div className="flex mr-2">
            <span className="green mr-2"></span>
            <p className="actives">Active</p>
          </div>
          <div className="flex">
            <span className="red mr-2"></span>
            <p className="inactive">Inactive</p>
          </div>
        </div>
        <div className="sort-search">
          <p>All Adverts</p>
          <div className="col-lg-2 col-md-3 top-section-sort">
            <span className="mr-2 sort">Sort</span>
            <img src={FilterIcon} alt="filter" />
          </div>
          <div className="col-md-4 top-section-search">
            <SearchInput />
          </div>
        </div>
      </div>

      <section>
        <BusinessTable />
      </section>
    </Table2Wrapper>
  );
};

const Table2Wrapper = styled.div`
  flex-basis: 70%;
  background-color: #fff;
  border-radius: 10px;
  p {
    margin: 0;
  }
  .top-section,
  .sort-search,
  .top-section-sort,
  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .top-section {
    padding: 1rem 0rem 0 2rem;
  }
  .top-section-text {
    display: flex;
    align-items: flex-start;
  }

  .top-section-text p {
    font-family: Montserrat;
    font-weight: 600;
    font-size: 10px;
    color: #a3a3a3;
  }

  .green,
  .red {
    display: inline-block;
    width: 10px;
    height: 10px;
  }
  .green {
    background-color: green;
  }
  .red {
    background-color: red;
  }
  .sort-search {
    justify-content: space-evenly;
    margin-right: 3rem;
  }
  .sort-search p {
    font-family: Montserrat;
    font-weight: 900;
    font-size: 0.9rem;
    line-height: 16px;
    color: #045860;
  }
  .sort {
    font-weight: 500;
    font-size: 0.9rem;
    color: #029244;
  }
`;
