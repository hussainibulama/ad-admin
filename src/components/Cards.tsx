import React from "react"
import styled from "styled-components"

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
          <p className="title mt-3">{title}</p>
        </div>

        <div className="flex-container mt-5">
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
  padding: 2rem 1.5rem;
  background-color: ${(props: CardProps) => props.bgColor};
  border: ${(props: CardProps) => props.borderColor};

  .flex-container {
    display: grid;
    grid-template-columns: 2fr 1fr;
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
    font-size: 2.8rem;
    font-weight: 800;
    color: ${(props: CardProps) => props.numberColor};
    margin-bottom: 0;
  }
  .title {
    font-weight: 300;
    font-size: 1.7rem;
    margin-bottom: 0;
    color: ${(props: CardProps) => props.textColor};
  }
  
`;

