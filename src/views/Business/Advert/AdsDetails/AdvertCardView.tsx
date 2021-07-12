import React from "react"
import styled from "styled-components"
import Chart from "../../../../assets/icons/impression-chart.svg"
import Cam from "../../../../assets/icons/cam-icon.svg"
import Clicks from "../../../../assets/icons/clicks-icon.svg"
import { MiniChart1 } from '../../../Dashboard/Overview/MiniCharts';
import { MiniChart2 } from '../../../Dashboard/Overview/MiniCharts';
import MTN from '../../../../assets/icons/mtn-icon.svg';

const AdvertCardView = () => {
    return (
      <StyledCard>
        <div className="grid-cont-one">
          <div>
            <div className="flex-cont">
              <div>
                <img className="chart" src={Chart} alt="" />
              </div>
              <div>
                <p className="num">16455</p>
                <p className="imp">impressions</p>
              </div>
            </div>
            <div className="min-graph">
              <MiniChart1 />
            </div>
          </div>
          <div>
            <img src={Cam} alt="" />
          </div>
        </div>
        <div className="grid-cont-two">
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
          <div>
            <h5 className="push-not">Push Notification</h5>

            <div className="inner-grid-cont">
              <div>
                <h5 className="mtn-title">MTN NIGERIA</h5>
                <p className="mt-3 mtn-txt">
                  Beta Awoof 200% Bonus onyour <br/> recharge with *888*RechargePin#
                </p>
              </div>
              <div>
                <img src={MTN} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </StyledCard>
    );
}

const StyledCard = styled.div`
  margin-top: 3rem;
  .grid-cont-one {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 2rem;
  }

  .grid-cont-one > div:nth-child(1) {
    background: #fff;
    border: 1px solid #f0f0f0;
    padding: 1rem;
    border-radius: 10px;
  }

  .grid-cont-one > div:nth-child(2) {
    padding: 3rem 0rem;
    background: rgba(251, 188, 5, 0.1);
    display: flex;
    height: 100%;
    align-items: center;
    border: 1px solid #f5f5f5;
    justify-content: center;
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
    font-size: 1.5rem;
    color: #045860;
  }
  .chart {
    width: 3rem;
  }
  .imp {
    margin: 0;
    color: #7b7b7b;
    font-weight: 300;
  }
  .min-graph {
    width: 60%;
    margin-top: 3rem;
  }
  .grid-cont-two {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 2rem;
    margin: 3rem 0rem;
    color: #045860;
  }
  .grid-cont-two > div:nth-child(1) {
    background: #fff;
    border: 1px solid #f0f0f0;
    padding: 1rem;
    border-radius: 10px;
  }

  .inner-grid-cont {
    display: grid;
    margin-top: 2rem;
    grid-template-columns: 3fr 1fr;
    gap: 2rem;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.07);
    border-radius: 10px;
    padding: 1.4rem 2rem;
  }
  .push-not {
    font-weight: 800;
  }
  .mtn-title {
    font-weight: 600;
  }
  .mtn-txt{
    font-size: 1.3rem;
    font-weight: 400;
  }
  .inner-grid-cont > div:nth-child(2){
    justify-self: right;
  }
`;

export default AdvertCardView;