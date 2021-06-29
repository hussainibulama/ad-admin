import React from 'react';
import styled from 'styled-components';

export interface DotsProps {
  legendName?: string;
  legendColor?: string;
  color?: string;
}
const Dots = ({ legendName, legendColor }: DotsProps) => {
  return (
    <DotsWrapper legendColor={legendColor}>
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
    height: 5px;
    width: 5px;
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
`;

export default Dots;
