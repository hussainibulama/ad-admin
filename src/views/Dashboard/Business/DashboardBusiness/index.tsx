import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Charts from './Chart';
import { CardBox1, CardBox2, CardBox3 } from './Cards';
import Person from '../../../../assets/icons/person.svg';
import SmallBag from '../../../../assets/icons/Bag1.svg';
const index = () => {
  return (
    <DashboardWrapper>
      <h1 className="title-bus">Business Overview</h1>
      <div className="box1">
        <CardBox1 />
      </div>
      <div className="box2">
        <CardBox2 />
      </div>
      <div className="box3">
        <div className="sales">
          <p className="years">Year</p>
          <Charts />
          <div className="graph-sale">
            <p>SALES</p>
            <p>
              <img src={SmallBag} alt="bag" />
            </p>
          </div>
        </div>

        <div className="sales-points">
          <div className="sales-title">
            <div className="profile">
              <p>
                <img src={Person} alt="profile" />
              </p>
              <p className="title1">Sales Points</p>
            </div>
            <p>
              <Link to="/" className="view">
                View More
              </Link>
            </p>
          </div>
          <CardBox3 />
        </div>
      </div>
    </DashboardWrapper>
  );
};

const DashboardWrapper = styled.div`
  .title-bus {
    font-size: 1.5rem;
    font-weight: 700;
  }

  .box3,
  .sales-title,
  .profile,
  .graph-sale {
    display: flex;
    justify-content: space-between;
    align-items: start;
  }

  .sales,
  .sales-points {
    background-color: #fff;
    border-radius: 10px;
  }

  .sales {
    flex-basis: 60%;
    padding: 2rem;
    margin-right: 0.5rem;
  }
  .years {
    display: inline-block;
    float: right;
    text-align: right;
    padding: 0.5rem 1rem;
    border: 2px solid #045860;
    border-radius: 15px;
  }
  .graph-sale {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #c4c4c4;
    align-items: center;
  }

  .graph-sale :first-child {
    color: #045860;
    font-weight: 600;
  }

  .sales-points {
    padding: 1rem 2rem;
  }
  .sales-title {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .profile p {
    margin: 0 0.5rem;
  }

  .title1 {
    color: #045860;
    font-weight: 700;
  }
  .view {
    font-size: 0.8rem;
    padding: 0.5rem 0.8rem;
    text-decoration: none;
    color: rgb(2, 146, 68);
    border: 1.5px solid #029244;
    border-radius: 10px;
    font-weight: 600;
  }

  @media only screen and (max-width: 767px) {
    .box3 {
      flex-direction: column;
    }
  }
`;

export default index;
