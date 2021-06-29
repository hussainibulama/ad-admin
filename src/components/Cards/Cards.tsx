import React from 'react';
import styled from 'styled-components';

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

export interface MixedCardProps {
  bgColor?: string;
  textColor?: string;
  width?: string;
  icon1?: string;
  icon2?: string;
  icon3?: string;
  height?: String;
  title?: string;
  amount?: string | number;
  borderColor?: string;
  numberColor?: string;
  text?: string;
  secondTextColor?: string;
}

export interface MixedCardProps {
  bgColor?: string;
  textColor?: string;
  width?: string;
  icon1?: string;
  icon2?: string;
  icon3?: string;
  height?: String;
  title?: string;
  amount?: string | number;
  borderColor?: string;
  numberColor?: string;
  text?: string;
  secondTextColor?: string;
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

        <div className="mt-4">
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
          <p className="title mt-2">{title}</p>
        </div>

        <div className="flex-container num-icon">
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

export const MixedIcons = ({
  bgColor,
  textColor,
  width,
  icon1,
  icon2,
  icon3,
  height,
  title,
  amount,
  borderColor,
  numberColor,
  text,
  secondTextColor,
}: MixedCardProps) => {
  return (
    <MixedStyle
      bgColor={bgColor}
      borderColor={borderColor}
      textColor={textColor}
      numberColor={numberColor}
      secondTextColor={secondTextColor}
    >
      <div className="flex-container">
        <div className="title">{title}</div>
        <div>
          <img className="icon1" src={icon1} alt="" />
        </div>
        <div className="amount-txt">{amount}</div>
        <div className="secondTxt">{text}</div>
      </div>
      <div>
        <span className="last-images">
          <img src={icon2} alt="" />
          <img className="ml-2" src={icon3} alt="" />
        </span>
      </div>
    </MixedStyle>
  );
};

export const MixedIcons = ({
  bgColor,
  textColor,
  width,
  icon1,
  icon2,
  icon3,
  height,
  title,
  amount,
  borderColor,
  numberColor,
  text,
  secondTextColor
}: MixedCardProps) => {
  return (
    <MixedStyle
      bgColor={bgColor}
      borderColor={borderColor}
      textColor={textColor}
      numberColor={numberColor}
      secondTextColor={secondTextColor}
    >
      <div className="flex-container">
        <div className="title">{title}</div>
        <div>
          <img className="icon1" src={icon1} alt="" />
        </div>
        <div className="amount-txt">{amount}</div>
        <div className="secondTxt">{text}</div>
      </div>
      <div>
        <span className="last-images">
          <img src={icon2} alt="" />
          <img className="ml-2" src={icon3} alt="" />
        </span>
      </div>
    </MixedStyle>
  );
};

const UpIconCardStyle = styled.div`
  border-radius: 10px;
  padding: 1rem 1rem;
  background-color: ${(props: CardProps) => props.bgColor};
  border: ${(props: CardProps) => props.borderColor};
  height: 135px;
  min-width: 250px;
  width: 100%;
  margin-bottom: 30px;
  &:not(:last-child) {
    margin-right: 20px;
  }
  .flex-container {
    display: grid;
    grid-template-columns: 3fr 1fr;
    height: 100%;
    align-items: center;
  }
  .flex-item-one {
    justify-items: left;
  }
  .flex-item-two {
    justify-self: right;
  }
  .amount-txt {
    font-size: 1.5rem;
    font-weight: 900;
    font-family: 'Montserrat';
    font-size: 24px;
    color: ${(props: CardProps) => props.numberColor};
    margin-bottom: 0;
  }
  .title {
    font-weight: 300;
    font-size: 1.1rem;
    font-size: 14px;
    margin-bottom: 0;
    color: ${(props: CardProps) => props.textColor};
  }
  .num-icon {
    margin-top: 2rem;
  }
`;

const MixedStyle = styled.div`
  border-radius: 10px;

  padding: 1rem 1rem;

  background-color: ${(props: MixedCardProps) => props.bgColor};
  border: ${(props: MixedCardProps) => props.borderColor};
  height: 135px;
  min-width: 200px;
  margin-bottom: 30px;
  .icon1 {
    float: right;
  }
  .flex-container {
    display: flex;
    height: 85%;
    flex-direction: column;
    gap: 0.3rem;
  }
  .last-images {
    float: right;
  }
  .title {
    font-weight: 400;
    font-size: 1.1rem;
    margin-bottom: 0;
    color: ${(props: MixedCardProps) => props.textColor};
  }
  .amount-txt {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${(props: MixedCardProps) => props.numberColor};
    margin-bottom: 0;
  }
  .secondTxt {
    font-weight: 400;
    font-size: 1.1rem;
    margin-bottom: 0;
    color: ${(props: MixedCardProps) => props.secondTextColor};
  }
`;

const MixedStyle = styled.div`
  border-radius: 10px;

  padding: 1rem 1rem;

  background-color: ${(props: MixedCardProps) => props.bgColor};
  border: ${(props: MixedCardProps) => props.borderColor};
  height: 135px;
  min-width: 200px;
  margin-bottom: 30px;
  .icon1 {
    float: right;
  }
  .flex-container {
    display: flex;
    height: 85%;
    flex-direction: column;
    gap: 0.3rem;
  }
  .last-images {
    float: right;
  }
  .title {
    font-weight: 400;
    font-size: 1.1rem;
    margin-bottom: 0;
    color: ${(props: MixedCardProps) => props.textColor};
  }
  .amount-txt {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${(props: MixedCardProps) => props.numberColor};
    margin-bottom: 0;
  }
  .secondTxt{
    font-weight: 400;
    font-size: 1.1rem;
    margin-bottom: 0;
    color: ${(props: MixedCardProps) => props.secondTextColor};
  }
`;
