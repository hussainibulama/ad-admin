import React from 'react';
import styled from 'styled-components';

export interface CardProps {
  number?: number;
  desc?: string;
  image?: string;
  charts?: any;
}

export const Cards = ({ number, desc, image, charts }: CardProps) => {
  const InnerChart = charts;
  return (
    <SmallerCards>
      <div className="minor-title">
        <div>
          <img src={image} alt="" />
        </div>{' '}
        <div className="tags1">
          <p>{number}</p>
          <p>{desc}</p>
        </div>
      </div>
      <div className="mini-graphs">
        <InnerChart />
      </div>
    </SmallerCards>
  );
};

const SmallerCards = styled.div`
  background-color: #fff;
  flex-basis: 25%;
  margin-left: 1rem;
  padding: 1rem;

  .minor-title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .tags1 {
    margin-left: 0.5rem;
  }

  .tags1 :first-child {
    font-weight: bold;
    font-size: 0.9rem;
    color: #045860;
  }

  .tags1 :last-child {
    color: #7b7b7b;
  }

  .mini-graphs {
    margin-top: 2rem;
    width: 90%;
  }
`;
