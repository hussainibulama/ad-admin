import React from 'react';
import styled from 'styled-components';
import Fixed from '../../../assets/icons/fixedtoggle.svg'
import Clock from '../../../assets/icons/clockerror.svg'
import ErrorsCard from './ErrorsCard';
import ErrorCode from './ErrorCode';

const ErrorView = () => {
  return (
    <StyledDiv>
      <div className="first-sect">
        <div className="error-head">
          <div className="severity">
            <div className="severity-text">Severity</div>
            <div className="progress">
              <div className="bar" style={{ width: '80%' }}></div>
            </div>
            <div className="clock-div">
              <div>
                <img src={Clock} alt="" />
              </div>
              <div>
                24/05/2021 <span className="ml-2">9:05am</span>
              </div>
            </div>
          </div>
          <div className="fixed-toggle">
            <span>Fixed</span>
            <span className="ml-2 tog-icon">
              <img src={Fixed} alt="" />
            </span>
          </div>
        </div>

        <ErrorsCard />
          </div>
          <ErrorCode />
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  .first-sect {
    background-color: #fff;
    border-radius: 20px;
    padding: 2rem 2rem 1rem 2rem;
    margin: 2rem 2rem 1rem 2rem;
  }

  .progress {
    padding: 0;
    justify-self: right;
    width: 90%;
    height: 6px;
    overflow: hidden;
    background: rgba(251, 188, 5, 0.31);
    border-radius: 6px;
  }

  .bar {
    position: relative;
    float: left;
    min-width: 1%;
    height: 100%;
    background: #ff7f00;
  }
  .clock-div {
    background: rgba(0, 103, 192, 0.1);
    color: #005398;
    border-radius: 20px;
    padding: 0.5rem 2rem;
    display: grid;
    grid-template-columns: 1fr 2fr;
    height: 80%;
    width: 90%;
    align-items: center;
  }
  .clock-div > div:nth-child(2) {
    justify-self: right;
    color: #005398;
    font-weight: 800;
  }

  .error-head {
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-gap: 2rem;
  }
  .severity {
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    grid-gap: 2rem;
    align-items: center;
  }
  .severity > div:nth-child(1) {
    justify-self: right;
  }
  .severity > div:nth-child(2) {
    display: flex;
    align-self: center;
  }
  .severity-text {
    color: #045860;
    font-size: 1.2rem;
    font-weight: 500;
  }
  .fixed-toggle {
    background: rgba(0, 168, 90, 0.1);
    border-radius: 40px;
    color: #00a85a;
    padding: 0.5rem 1.5rem;
    font-size: 1.3rem;
    font-weight: 700;
  }
  .tog-icon {
    float: right;
  }
`;

export default ErrorView;
