import React from 'react';
import styled from 'styled-components';
import AdvertCardView from './AdvertCardView';

const GraphView= () => {
  return (
    <StyledAd>
      <div className="head-sect">
        <div>
          <span className="active">Active</span>
        </div>
        <div>
          <span className="call-ads">On-call Ads</span>
          <img className="icons" src="/assets/Edit.svg" alt="" />
          <img className="icons" src="/assets/Delete.svg" alt="" />
        </div>
      </div>

      <AdvertCardView />
    </StyledAd>
  );
};

const StyledAd = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 2rem 3rem;
  margin: 2rem;
  .head-sect {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .active {
    background: #e7ffed;
    border-radius: 10px;
    color: #045860;
    padding: 0.7rem 2.2rem;
    font-weight: 700;
  }
  .call-ads {
    background: rgba(251, 188, 5, 0.1);
    border-radius: 10px;
    color: #045860;
    padding: 0.7rem 2.2rem;
    font-weight: 600;
  }
  .head-sect > div:nth-child(2) {
    justify-self: right;
  }
  .icons {
    margin-left: 5rem;
  }
`;

export default GraphView;
