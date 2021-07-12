import React from 'react';
import styled from 'styled-components';

export interface DotsProps {
  legendName?: string;
  legendColor?: string;
  width?: string;
  height?: string;
  textColor?: string;
  textSize?: string;
  margin?: string;
}
const Dots = ({
  legendName,
  legendColor,
  width,
  height,
  textColor,
  textSize,
  margin,
}: DotsProps) => {
  return (
    <DotsWrapper
      legendColor={legendColor}
      width={width}
      height={height}
      textColor={textColor}
      textSize={textSize}
      margin={margin}
    >
      <div className="af">
        <span className="dots"></span>
        <p>{legendName}</p>
      </div>
    </DotsWrapper>
  );
};

const DotsWrapper = styled.div`
  .dots {
    background-color: ${(props: DotsProps) => props.legendColor};
    height: ${(props: DotsProps) => (props.width ? props.width : '5px')};
    width: ${(props: DotsProps) => (props.height ? props.height : '5px')};
    margin: ${(props: DotsProps) => (props.margin ? props.margin : '')};
    border-radius: 50%;
    display: inline-block;
    margin-right: 0.2rem;
  }
  .af {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 0.3rem;
  }
  .af p {
    color: ${(props: DotsProps) => (props.textColor ? props.textColor : '')};
    font-size: ${(props: DotsProps) => (props.textSize ? props.textSize : '')};
  }
`;

export default Dots;

