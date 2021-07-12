import React from "react"
import styled from "styled-components"
import { MiniChart1 } from '../../../Dashboard/Overview/MiniCharts';
import { MiniChart2 } from '../../../Dashboard/Overview/MiniCharts';
import Clicks from '../../../../assets/icons/clicks-icon.svg';
import Chart from '../../../../assets/icons/impression-chart.svg';
import AdvertLineChart from './AdvertLineChart';

const AdvertViewChart = () => {
    return (
      <StyledDiv>
        <div className="chart-cont">
          <div>
            <AdvertLineChart />
            <div className="d-flex ml-5">
              <div className="ml-3 d-flex cont">
                <div className="active-span"></div>
                <div className="ml-2 active-txt">Active Ads</div>
              </div>
              <div className="ml-3 d-flex cont">
                <div className="inactive-span"></div>
                <div className="ml-2 inactive-txt">Inctive Ads</div>
              </div>
            </div>
          </div>

          <div className="flex-cont-chart">
            <div>
              <h5 className="ads-title">Ads Impression</h5>
              <div className="min-graph">
                <MiniChart1 />
              </div>
              <div className="flex-cont imp-chart">
                <div>
                  <img className="chart" src={Chart} alt="" />
                </div>
                <div>
                  <p className="num">16455</p>
                  <p className="imp">impressions</p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="flex-cont">
                  <div>
                    <img className="chart" src={Clicks} alt="" />
                  </div>
                  <div>
                    <p className="num">16455</p>
                    <p className="imp">clicks</p>
                  </div>
                </div>
                <div className="min-graph">
                  <MiniChart2 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyledDiv>
    );
}

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
  }

  .flex-cont-chart > div:nth-child(2) {
    background: #fff;
    padding: 1rem;
    border-radius: 10px;
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
  .active-span {
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    background: #cb000b;
  }
  .inactive-span {
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    background: #318348;
  }
  .active-txt,
  .inactive-txt {
    color: #a3a3a3;
  }
  .cont {
    height: 100% !important;
    align-items: center !important;
  }
`;

export default AdvertViewChart;