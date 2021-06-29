import React from 'react';
import styled from 'styled-components';
import LineCharts from './Charts';
import { NavLink } from 'react-router-dom';
import Star from '../../../assets/icons/Star.svg';
import curvegreen from '../../../assets/icons/curvegreen.svg';
import curveyellow from '../../../assets/icons/curveyellow.svg';
import user from '../../../assets/icons/userprofile.svg';
import download from '../../../assets/icons/app-downlaod.svg';
import twousers from '../../../assets/icons/2users.svg';
import adsChart from '../../../assets/icons/adsChart.svg';
import discovery from '../../../assets/icons/Discovery.svg';
import discount from '../../../assets/icons/blueDiscount.svg';
import bagOrange from '../../../assets/icons/smallOrange.svg';
import { Table1, Table2 } from './table';
import { MiniChart1, MiniChart2, MiniChart3, MiniChart4 } from './MiniCharts';
import Dots from './Dots';
import { Cards } from './Card';

const DashboardOverview = () => {
  return (
    <OverviewWrapper>
      <div className="section1">
        <div className="first-card">
          <div className="details-section">
            <div className="details">
              <p className="title1">Users Overview</p>
              <p className="content1">Total Overview of users </p>
              <p className="title2">28756</p>
              <p className="content2">Users count</p>
              <p className="title3">12987</p>
              <p className="content3">Active User</p>
              <p className="title4">1456</p>
              <p className="content4">Inactive User</p>
              <p className="see-all">See all Users</p>
            </div>
            <div className="graph">
              <LineCharts />
              <div className="section1 dot-group">
                <Dots legendName={'User'} legendColor={'#FF7F00'} />
                <Dots legendName={'Advertiser'} legendColor={'#1F78B4'} />
                <Dots legendName={'Active Ads'} legendColor={'#318348'} />
                <Dots legendName={'Inactive Ads'} legendColor={'#FD242B'} />
                <Dots legendName={'Downloads'} legendColor={'#00A85A'} />
                <Dots legendName={'Token'} legendColor={'#E1B000'} />
                <Dots legendName={'Referrals'} legendColor={'#33A02C'} />
                <Dots legendName={'Reviews'} legendColor={'#FDBF6F'} />
              </div>
            </div>
          </div>
          <div className="other-details">
            <div className="sub-views">
              <div>
                <img src={Star} alt="" />
              </div>{' '}
              <div className="tags">
                <p>16455</p>
                <p>App Review</p>
              </div>
            </div>
            <div className="sub-views">
              <div>
                <img src={curvegreen} alt="" />
              </div>{' '}
              <div className="tags">
                <p>112</p>
                <p>Total Ads</p>
              </div>
            </div>
            <div className="sub-views">
              <div>
                <img src={curveyellow} alt="" />
              </div>{' '}
              <div className="tags">
                <p>112</p>
                <p>Total Token</p>
              </div>
            </div>
            <div className="sub-views">
              <div>
                <img src={user} alt="" />
              </div>{' '}
              <div className="tags">
                <p>112</p>
                <p>Total Referrals</p>
              </div>
            </div>
          </div>
        </div>
        <div className="second-card">
          <div className="mini-card ">
            <div className="mini-card-title">
              <div>
                <p className="card-title">Downloads</p>
                <p className="total fades">Total Downloads Overview</p>
              </div>
              <div>
                <img src={download} alt="" />
              </div>
            </div>
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
            <p className="card-title number">40587</p>
            <p className="card-title fades">Total Downloads</p>
          </div>
          <div className="mini-card first">
            <div className="mini-card-title">
              <div>
                <p className="card-title">Advertisers</p>
                <p className="total fades">Total Advertisers Overview</p>
              </div>
              <div>
                <img src={twousers} alt="" />
              </div>
            </div>

            <p className="card-title number mt-2">40587</p>
            <p className="downloads fades">Total Advertisers onboard</p>
            <p className="mt-4">
              <NavLink to="/" className="view font-weight-bold">
                {' '}
                View
              </NavLink>
            </p>
          </div>
        </div>
      </div>

      <div className="section2">
        <div className="small-card">
          <p className="ads">Ads Impressions</p>
          <div className="mini-graphs">
            <MiniChart1 />
          </div>
          <div className="sub-views float-right">
            <div>
              <img src={adsChart} alt="" />
            </div>{' '}
            <div className="tags">
              <p>16455</p>
              <p>Clicks</p>
            </div>
          </div>
        </div>
        <Cards
          number={16455}
          desc={'Clicks'}
          image={discovery}
          charts={MiniChart2}
        />
        <Cards
          number={16455}
          desc={'Discounted Products'}
          image={discount}
          charts={MiniChart3}
        />
        <Cards
          number={16455}
          desc={'Merchant'}
          image={bagOrange}
          charts={MiniChart4}
        />
      </div>

      <div className="section3 ">
        <Table1 />
        <Table2 />
      </div>
    </OverviewWrapper>
  );
};

const OverviewWrapper = styled.div`
  font-family: Montserrat;
  p {
    margin: 0;
  }
  .section1,
  .details-section,
  .other-details,
  .sub-views,
  .section3 {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .details-section {
    justify-content: space-between;
    align-items: center;
  }
  .first-card {
    padding: 1rem 2rem;
    border-radius: 5px;
    background-color: #fff;
    flex-basis: 60%;
  }
  .details {
    flex-basis: 20%;
  }

  .title1,
  .title2,
  .title3,
  .title4 {
    font-weight: 900;
    font-size: 1.2rem;
    color: #045860;
  }

  .title1 {
    color: #045860;
    font-size: 0.9rem;
  }

  .title2 {
    color: #045860;
  }
  .title3 {
    color: #029244;
  }
  .title4 {
    color: #cb000b;
  }

  .content1,
  .content2,
  .content3,
  .content4 {
    margin-bottom: 1rem;
    font-size: 10px;
  }

  .see-all {
    color: #fff;
    padding: 0.5rem;
    font-weight: 600;
    text-align: center;
    background: #e1b000;
    border-radius: 20px;
  }

  .other-details {
    justify-content: space-between;
    margin: 0.5rem 0;
  }
  //Large graph
  .graph {
    width: 78%;
  }
  .dot-group {
    width: 100%;
    margin-top: -1rem;
  }

  .dot-group p {
    font-size: 0.65rem;
  }
  //end of Large graph

  .sub-views {
    align-items: center;
  }
  .tags {
    margin-left: 0.5rem;
  }

  .tags :first-child,
  .ads {
    font-weight: bold;
    font-size: 0.9rem;
    color: #045860;
  }

  .tags :last-child {
    color: #7b7b7b;
  }
  //second-cards
  .second-card {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    flex-basis: 40%;
  }

  .mini-card {
    background-color: #fff;
    border-radius: 10px;
    padding: 1rem;
    flex-basis: 100%;
  }
  .first {
    margin-top: 0.9rem;
  }
  .card-title {
    color: #045860;
    font-size: 1rem;
    font-weight: 700;
  }
  .fades {
    color: #7b7b7b;
    font-size: 0.9rem;
    font-weight: 200;
  }
  .number {
    font-size: 1.2rem;
  }
  .mini-card-title,
  .times {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .times {
    margin: 0.5rem 0;
    justify-content: flex-start;
  }
  .times a {
    text-decoration: none;
    margin-right: 1rem;
    padding: 0.2rem 1rem;
    border: 1px solid #c4c4c4;
    border-radius: 15px;
    color: #c4c4c4;
  }
  a:hover,
  .active {
    color: #029244;
    border: 1px solid #029244;
  }

  .view {
    padding: 0.5rem 1rem;
    border-radius: 10px;
    background: #4285f4;
    color: #fff;
    border: none;
    text-decoration: none;
  }
  //section2
  .section2 {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
  }
  .small-card {
    padding: 1rem;
    background-color: #fff;
    flex-basis: 25%;
  }
  .mini-graphs {
    width: 90%;
  }

  //section3
  .section3 {
    margin-top: 1rem;
    justify-content: space-between;
  }
`;

export default DashboardOverview;
