import React from "react";
import styled from "styled-components";

interface props {
  color: any;
  name: string;
  size: number | string;
  family?: string;
  weight: string;
  className?: string;
  lineHeight?: number;
  opacity?: number;
  letterSpacing?: string;
}

const P: React.FC<props> = ({
  color,
  name,
  size,
  weight,
  className,
  lineHeight,
  opacity,
  family,
  letterSpacing,
  children,
}) => {
  const ParagraphCont = styled.p`
    /* text-transform: capitalize; */
    font-size: ${size};
    color: var(--${color});
    line-height: ${lineHeight ? lineHeight : 1.1};
    font-weight: ${weight};
    letter-spacing: ${letterSpacing ? letterSpacing : "2px"};
    opacity: ${opacity ? opacity : 1};

    font-family: ${family ? family : 'font-family: "Roboto", sans-serif'};
    @media (max-width: 992px) {
          
    }
  `;
  return (
    <ParagraphCont className={className}>
      {" "}
      {children}
      {name}{" "}
    </ParagraphCont>
  );
};  

export default P;
