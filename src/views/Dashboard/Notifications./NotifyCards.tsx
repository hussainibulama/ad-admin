import React, { useState } from 'react';
import styled from 'styled-components';
import eyeIcon from '../../../assets/icons/greenshow.svg';

interface CardProps {
  modalToggle: any;
}
const NotifyCards = ({ modalToggle }: CardProps) => {
  return (
    <CardsWrapper>
      <div className="notify-cards">
        <h3>App update</h3>
        <div className="inner-notify">
          <p>
            Kindly update your App to enjoy
            <br /> great features{' '}
          </p>

          <img onClick={() => modalToggle()} src={eyeIcon} alt="show" />
        </div>
      </div>
    </CardsWrapper>
  );
};

const CardsWrapper = styled.div`
  .notify-cards {
    padding: 1rem;
    border: 1px solid #e5f6ef;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
  }

  .notify-cards h3 {
    font-weight: bold;
    font-size: 0.9rem;
    color: #045860;
  }
  .inner-notify {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .notify-cards p {
    margin: 0.3rem 0;
    font-size: 0.6rem;
    color: #7b7b7b;
  }
`;

export default NotifyCards;
