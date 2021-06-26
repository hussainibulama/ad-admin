import React from 'react';
import styled from 'styled-components';
import { UpIconCards, DownIconCards } from '../../../../components/Cards/Cards';
import BagBlue from '../../../../assets/icons/bluebag.svg';
import BagRed from '../../../../assets/icons/redbag.svg';
import BadgeGreen from '../../../../assets/icons/badge.svg';
import AdsGreen from '../../../../assets/icons/blueticket.svg';
import AdsRed from '../../../../assets/icons/redticket.svg';
import Scan from '../../../../assets/icons/Scan.svg';
import SmallBag from '../../../../assets/icons/Bag1.svg';

export const CardBox1 = () => {
  return (
    <CardsWrapper>
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
        title="Inactive Businesses"
        amount={245}
        borderColor="3px solid rgba(203, 0, 11, 0.24)"
        numberColor="#E31A1C"
      />
      <DownIconCards
        bgColor="#fff"
        textColor="rgba(4, 88, 96, 1)"
        icon={BadgeGreen}
        title="Discount Partners"
        amount={15768}
        borderColor="none"
        numberColor="rgba(4, 88, 96, 1)"
      />
      <DownIconCards
        bgColor="#fff"
        textColor="rgba(4, 88, 96, 1)"
        icon={BadgeGreen}
        title="Discount Products"
        amount={15768}
        borderColor="none"
        numberColor="rgba(4, 88, 96, 1)"
      />
    </CardsWrapper>
  );
};

export const CardBox2 = () => {
  return (
    <CardsWrapper>
      <DownIconCards
        bgColor="#fff"
        textColor="rgba(4, 88, 96, 1)"
        icon={AdsGreen}
        title="Active Ads"
        amount={234789}
        borderColor="none"
        numberColor="rgba(4, 88, 96, 1)"
      />
      <DownIconCards
        bgColor="#fff"
        textColor="#E31A1C"
        icon={AdsRed}
        title="Completed Ads"
        amount={12356}
        borderColor="3px solid rgba(203, 0, 11, 0.24)"
        numberColor="#E31A1C"
      />
      <DownIconCards
        bgColor="#fff"
        textColor="rgba(4, 88, 96, 1)"
        icon={Scan}
        title="QR Code"
        amount={245}
        borderColor="none"
        numberColor="rgba(4, 88, 96, 1)"
      />
      <UpIconCards
        bgColor="#fff"
        textColor="rgba(4, 88, 96, 1)"
        icon={SmallBag}
        title="Sales"
        amount="NGN 34,000,000"
        borderColor="none"
        numberColor="rgba(4, 88, 96, 1)"
      />
    </CardsWrapper>
  );
};

export const CardBox3 = () => {
  return (
    <CardsWrapper>
      <div className="mini-box1">
        <p className="mini-title">
          Total Sales
          <br /> Points
        </p>
        <p className="number">4578</p>
      </div>
      <div className="mini-box2">
        <p className="mini-title">
          Active Sales <br /> Points
        </p>
        <p className="number">4578</p>
      </div>
      <div className="mini-box3">
        <p className="mini-title">
          Inactive <br />
          Sales Points
        </p>
        <p className="number">34</p>
      </div>
    </CardsWrapper>
  );
};

const CardsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
