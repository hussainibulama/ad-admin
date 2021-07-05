import React from 'react';
import styled from 'styled-components';
import ErrorChart from './ErrorChart';
import { DownIconCards } from '../../components/Cards/Cards';
import Broken1 from '../../assets/icons/broken1.svg';
import Broken2 from '../../assets/icons/ broken2.svg';

const ErrorViewChart = () => {
  return (
    <StyledDiv>
      <div className="chart-cont">
        <div>
          <ErrorChart />
          <div className="fixed-div ml-5">
            <div className="ml-3 d-flex cont">
              <div className="active-span"></div>
              <div className="ml-2 active-txt">Fixed</div>
            </div>
            <div className="ml-3 d-flex cont">
              <div className="inactive-span"></div>
              <div className="ml-2 inactive-txt">Pending Fix</div>
            </div>
          </div>
        </div>

        <div className="flex-cont-chart">
          <DownIconCards
            bgColor="#fff"
            textColor="#045860"
            icon={Broken1}
            title="Total fix"
            amount={9789}
            borderColor="none"
            numberColor="#00A85A"
          />

          <div>
            <DownIconCards
              bgColor="#fff"
              textColor="#045860"
              icon={Broken2}
              title="Total pending"
              amount={10}
              borderColor="none"
              numberColor=" #F9A825"
            />
          </div>
        </div>
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  .chart-cont {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 2rem;
  }

  .chart-cont > div:nth-child(1) {
    background: #fff;
    padding: 1.5rem;
    border-radius: 10px;
  }
  .ads-title {
    font-weight: 700;
    font-size: 1.2rem;
    color: #045860;
  }
  .flex-cont-chart {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .imp-chart {
    justify-content: flex-end;
  }
  .flex-cont-chart > div:nth-child(1) {
    background: #fff;
    padding: 1rem;
    border-radius: 10px;
    height: 100%;
  }

  .flex-cont-chart > div:nth-child(2) {
    background: #fff;
    padding: 1rem;
    border-radius: 10px;
    height: 100%;
  }
  .flex-cont {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
  .num {
    font-weight: 800;
    margin: 0;
    font-size: 1.2rem;
    color: #045860;
  }
  .chart {
    width: 2rem;
  }
  .imp {
    margin: 0;
    color: #7b7b7b;
    font-weight: 300;
  }
  .min-graph {
    width: 50%;
  }
  .fixed-div {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
  .active-span {
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    background: #00a85a;
  }
  .inactive-span {
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    background: #f9a825;
  }
  .active-txt,
  .inactive-txt {
    color: #045860;
  }
  .cont {
    height: 100% !important;
    align-items: center !important;
  }
`;

export default ErrorViewChart;
