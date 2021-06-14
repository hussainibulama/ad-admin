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
          <p className="title ">{title}</p>
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
  padding: 20px 18px;
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
    grid-template-columns: 2fr 1fr;
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
    font-family: "Montserrat";
    font-weight: 700;
    font-size: 24px;
    line-height: 16px;
    color: ${(props: CardProps) => props.numberColor};
    margin-bottom: 0;
  }
  .title {
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 0;
    color: ${(props: CardProps) => props.textColor};
  }
`;
