import React from "react";
import styled from "styled-components";

export interface CardProps {
  bgColor?: string;
  textColor?: string;
  width?: string;
  icon?: string;
  height?: String;
  title?: string;
  amount?: string | number;
  borderColor?: string;
  numberColor?: string;
}

export const UpIconCards = ({
  bgColor,
  textColor,
  width,
  icon,
  height,
  title,
  amount,
  borderColor,
  numberColor,
}: CardProps) => {
  return (
    <UpIconCardStyle
      bgColor={bgColor}
      borderColor={borderColor}
      textColor={textColor}
      numberColor={numberColor}
    >
      <div>
        <div className="flex-container">
          <div className="flex-item-one">
            <p className="title">{title}</p>
          </div>
          <div className="flex-item-two">
            <img src={icon} alt="bussiness-icon" />
          </div>
        </div>

        <div className="mt-5">
          <p className="amount-txt">{amount}</p>
        </div>
      </div>
    </UpIconCardStyle>
  );
};

export const DownIconCards = ({
  bgColor,
  textColor,
  width,
  icon,
  height,
  title,
  amount,
  borderColor,
  numberColor,
}: CardProps) => {
  return (
    <UpIconCardStyle
      bgColor={bgColor}
      borderColor={borderColor}
      textColor={textColor}
      numberColor={numberColor}
    >
      <div>
        <div>
<<<<<<< ft/businesspage
          <p className="title mt-2">{title}</p>
=======
          <p className="title ">{title}</p>
>>>>>>> develop
        </div>

        <div className="flex-container ">
          <div className="flex-item-one">
            <p className="amount-txt">{amount}</p>
          </div>
          <div className="flex-item-two">
            <img src={icon} alt="bussiness-icon" />
          </div>
        </div>
      </div>
    </UpIconCardStyle>
  );
};

const UpIconCardStyle = styled.div`
  border-radius: 10px;

  padding: 1rem 1rem;

  background-color: ${(props: CardProps) => props.bgColor};
  border: ${(props: CardProps) => props.borderColor};
  height: 135px;
  min-width: 200px;
  margin-bottom: 30px;
  &:not(:last-child) {
    margin-right: 20px;
  }
  .flex-container {
    display: grid;
    grid-template-columns: 3fr 1fr;
    height: 100%;
    align-items: center;
    padding: 29px 0px;
  }
  .flex-item-one {
    justify-items: left;
  }
  .flex-item-two {
    justify-self: right;
  }
  .amount-txt {
<<<<<<< ft/businesspage
    font-size: 1.5rem;
    font-weight: 800;
=======
    font-family: "Montserrat";
    font-weight: 700;
    font-size: 24px;
    line-height: 16px;
>>>>>>> develop
    color: ${(props: CardProps) => props.numberColor};
    margin-bottom: 0;
  }
  .title {
<<<<<<< ft/businesspage
    font-weight: 400;
    font-size: 1.1rem;
=======
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
>>>>>>> develop
    margin-bottom: 0;
    color: ${(props: CardProps) => props.textColor};
  }
`;
