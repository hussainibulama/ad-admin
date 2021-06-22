import React from 'react';
import styled from 'styled-components';
import {
  UpIconCards,
  DownIconCards,
} from '../../../../../components/Cards/Cards';
import BagBlue from '../../../../../assets/icons/bluebag.svg';
import BagRed from '../../../../../assets/icons/redbag.svg';
import BagYellow from '../../../../../assets/icons/bagOrange.svg';
import Bag1 from '../../../../../assets/icons/Bag1.svg';
import People from '../../../../../assets/icons/people.svg';
import Bag2 from '../../../../../assets/icons/Bag2.svg';

interface Position {
  justify: string;
}

export const CardBox1 = ({ justify }: Position) => {
  return (
    <CardsWrapper justify={justify}>
      <DownIconCards
        bgColor="#fff"
        textColor="rgba(4, 88, 96, 1)"
        icon={BagBlue}
        title="Active Businesses"
        amount={245}
        borderColor="none"
        numberColor="rgba(4, 88, 96, 1)"
      />
      <DownIconCards
        bgColor="#fff"
        textColor="#E31A1C"
        icon={BagRed}
        title="Disabled/Blocked"
        amount={245}
        borderColor="3px solid rgba(203, 0, 11, 0.24)"
        numberColor="#E31A1C"
      />
      <DownIconCards
        bgColor="#fff"
        textColor="rgba(4, 88, 96, 1)"
        icon={BagYellow}
        title="Pending Approvals"
        amount={245}
        borderColor="3px solid rgba(251, 188, 5, 0.3)"
        numberColor="rgba(4, 88, 96, 1)"
      />
      <UpIconCards
        bgColor="#fff"
        textColor="rgba(4, 88, 96, 1)"
        icon={Bag1}
        title="Sales"
        amount="NGN 34,000,000"
        borderColor="none"
        numberColor="rgba(4, 88, 96, 1)"
      />
    </CardsWrapper>
  );
};

export const CardBox2 = ({ justify }: Position) => {
  return (
    <CardsWrapper justify={justify}>
      <DownIconCards
        bgColor="#fff"
        textColor="rgba(4, 88, 96, 1)"
        icon={People}
        title="Sales Reps"
        amount={4578}
        borderColor="none"
        numberColor="rgba(4, 88, 96, 1)"
      />
      <UpIconCards
        bgColor="#fff"
        textColor="rgba(4, 88, 96, 1)"
        icon={Bag2}
        title="Discount Products"
        amount={2348}
        borderColor="none"
        numberColor="rgba(4, 88, 96, 1)"
      />
    </CardsWrapper>
  );
};

const CardsWrapper = styled.div<{ justify?: string }>`
  display: flex;
  align-items: center;
  justify-content: ${(props: any) =>
    props.justify ? props.justify : 'space-between'};
  /* justify-content: space-between; */
  p {
    margin: 0;
  }
  .mini-box1,
  .mini-box2,
  .mini-box3 {
    border-radius: 10px;
    padding: 0.5rem 1rem;
    margin: 0.2rem;
  }
  .mini-box1,
  .mini-box2 {
    color: #045860;
    background: rgba(231, 255, 237, 0.42);
    border: 1px solid #00a85a;
  }

  .mini-box3 {
    background: #feeded;
    border: 1px solid #e31a1c;
  }

  .number {
    font-weight: bold;
    font-size: 1.2rem;
    margin-top: 1.5rem;
  }
`;
