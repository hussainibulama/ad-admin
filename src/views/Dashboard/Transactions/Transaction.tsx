import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Table from './table';
import Dots from '../Overview/Dots';
import { MiniChart1, MiniChart2, MainChart } from './Charts';
import FilterIcon from '../../../assets/icons/Filter.png';
import SearchInput from '../../../components/SearchInput/search-input.';
import greenStar from '../../../assets/icons/greenStar.svg';
import redStar from '../../../assets/icons/redStar.svg';
import arrow from '../../../assets/icons/arrowright.svg';
import styled from 'styled-components';

const Transaction = () => {
  return (
    <TransactionWrapper>
      <div className="first-section">
        <div className="cards">
          {/* <div className="sub1"> */}
          <div className="times">
            <p>
              <NavLink to="/" activeClassName="active">
                See Later
              </NavLink>
            </p>
            <p>
              <NavLink to="/" activeClassName="active">
                Yesterday
              </NavLink>
            </p>
            <p>
              <NavLink to="/" activeClassName="active">
                Today
              </NavLink>
            </p>
          </div>
          {/* </div> */}
          <div className="small-card green-upper">
            <p id="title-small">Successful Transaction</p>
            <p className="ads">Total amount of successful Transaction</p>
            <div className="small-graphs">
              <MiniChart1 />
            </div>
            <div className="sub-views float-right">
              <div>
                <img src={greenStar} alt="" />
              </div>{' '}
              <div className="green-lower tags ">
                <p>16455</p>
                <p>Redeem</p>
              </div>
            </div>
          </div>
          <div className="small-card red-upper">
            <p id="title-small">Failed Transaction</p>
            <p className="ads">Total amount of Failed Transaction</p>
            <div className="small-graphs">
              <MiniChart2 />
            </div>
            <div className="sub-views float-right">
              <div>
                <img src={redStar} alt="" />
              </div>{' '}
              <div className="red-lower tags">
                <p>243</p>
                <p>Redeem</p>
              </div>
            </div>
          </div>
        </div>
        <div className="main-graph">
          <div className="main-chart">
            <MainChart />
            <div className="transact-dots">
              <Dots
                legendName={'Successful Transaction'}
                legendColor={'#029244'}
                height={'15px'}
                width={'15px'}
                textSize={'.7rem'}
                textColor={'#A3A3A3'}
              />
              <Dots
                legendName={'Failed Transaction'}
                legendColor={'#E31A1C'}
                height={'15px'}
                width={'15px'}
                textSize={'.7rem'}
                textColor={'#A3A3A3'}
                margin={'0 0 0 3rem'}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="transact-table">
        <div className="top-section">
          <div className="top-section-text">
            <p>Transaction</p>
          </div>
          <div className="sort-search">
            <div className="col-lg-2 col-md-3 top-section-sort">
              <span className="green mr-2">Sort</span>
              <img src={FilterIcon} alt="filter" />
            </div>
            <div className="col-md-4 ml-4 top-section-search">
              <SearchInput placeholder={'Search'} />
            </div>
          </div>
        </div>
        <div className="transact-tabs">
          <p className="tab1">
            All Transactions<span>50</span>
          </p>
          <p className="tab2">
            Successful<span>10</span>
          </p>
          <p className="tab3">
            Failed<span>104</span>
          </p>
          <p className="tab4">
            Invalid<span>104</span>
          </p>
          <Link className="export" to="/">
            Export <img className="arrow-right" src={arrow} alt="" />
          </Link>
        </div>

        <section>
          <Table />
        </section>
      </div>
    </TransactionWrapper>
  );
};

const TransactionWrapper = styled.div`
  p {
    margin: 0;
  }
  .first-section,
  .cards,
  .times,
  .transact-dots,
  .sub-views {
    display: flex;
    justify-content: space-between;
  }
  .main-graph,
  .times {
    background-color: #fff;
    border-radius: 5px;
  }

  .cards {
    flex-basis: 30%;
    flex-direction: column;
    margin-right: 1rem;
  }

  .small-card {
    flex-basis: 40%;
    padding: 1rem 2rem 1rem 0;
    margin-top: 1rem;
    background-color: #fff;
    border-radius: 5px;
  }
  .small-card p {
    padding-left: 1rem;
  }

  //times
  .times {
    align-items: center;
    padding: 1rem 0;
    justify-content: flex-end;
    flex-basis: 20%;
    margin-bottom: -0.6rem;

    p {
      margin: 0;
    }
  }
  .times a {
    font-size: 0.9rem;
    text-decoration: none;
    margin-right: 0.5rem;
    padding: 0.2rem 1rem;
    border: 2px solid #c4c4c4;
    border-radius: 15px;
    color: #c4c4c4;
  }

  a:hover,
  .active {
    color: #f9a825;
    border: 2px solid #f9a825;
  }
  /* end of times  */

  .sub-views {
    align-items: center;
    /* justify-center: flex-end; */
  }
  .tags {
    margin-left: 0.5rem;
  }
  .tags p {
    padding-left: 0;
  }

  .green-upper p:first-child,
  .green-lower p:first-child {
    font-weight: bold;
    font-size: 0.9rem;
    color: #029244;
  }

  .red-upper p:first-child,
  .red-lower p:first-child {
    font-weight: bold;
    font-size: 0.9rem;
    color: red;
  }

  .green-lower p:last-child,
  .red-lower p:last-child {
    color: #7b7b7b;
  }

  #title-small {
    font-size: 1rem;
  }

  .ads {
    color: #7b7b7b;
  }

  //small graphs

  .small-graphs {
    width: 50%;
  }

  //end of small cards
  .main-graph {
    flex-basis: 70%;
  }
  .main-chart {
    width: 90%;
    margin: 0 auto;
    margin-top: 2rem;
  }
  .transact-dots {
    margin-top: 1rem;
    justify-content: flex-start;
  }

  //transact-table

  .transact-table {
    margin: 1rem 0;
    background-color: #fff;
    border-radius: 10px;

    p {
      margin: 0;
    }
  }

  .top-section,
  .top-section-sort {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .top-section {
    padding: 3rem 0rem 0 2rem;
  }

  .top-section-text {
    font-weight: 600;
  }
  .sort-search {
    display: flex;
    justify-content: center;
    margin-right: 3rem;
  }

  .transact-tabs {
    margin: 4rem 2rem 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
  }

  .transact-tabs span {
    margin: 0 0.2rem 0 1rem;
    padding: 0.2rem;
    border-radius: 5px;
  }

  .tab1 {
    background: #e5f0f9;
    color: #045860;
    border-radius: 10px 10px 0px 0px;
    padding: 1rem;
  }

  .tab2 {
    color: #00a85a;
  }
  .tab3 {
    color: #e31a1c;
  }
  .tab4 {
    color: #f9a825;
  }

  .tab1 span {
    color: #0067c0;
    background: rgba(0, 103, 192, 0.26);
  }
  .tab2 span {
    background: #92e3a9;
    color: #029244;
  }
  .tab3 span {
    background: rgba(203, 0, 11, 0.24);
    color: #e31a1c;
  }
  .tab4 span {
    background: rgba(251, 188, 5, 0.17);
    color: #f9a825;
  }

  .export {
    padding: 1rem 3rem;
    font-size: 1.2rem;
    font-weight: 600;
    color: #fff;
    background: #00a85a;
    border-radius: 35px;
  }
  .arrow-right {
    margin-left: 1rem;
    font-weight: 900;
  }
  section {
    margin: 2rem;
  }

  @media screen and (max-width: 767px) {
    .first-section {
      flex-direction: column-reverse;
    }

    .times {
      flex-direction: column-reverse;
      margin: 1rem 0;
      flex-basis: 100%;
      width: 100%;
    }

    .times p {
      margin: 1rem 0;
    }
    .small-card {
      flex-basis: 100%;
      width: 100%;
    }
  }
`;

export default Transaction;
