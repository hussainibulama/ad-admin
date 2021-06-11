import React from "react";
import styled from "styled-components";

interface props {
  className?: string;
  bgColor: string;
}

const Cards: React.FC<props> = (props) => {
  const { className, bgColor, ...otherProps } = props;
  const CardCont = styled.div`
    /* text-transform: capitalize; */
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 40px #00000014;
    opacity: 1;
    width: 100%;
    height: 40rem;
    text-align: left;
    padding: 10rem 5rem;
    position: relative;
    transition: all 2s ease;
    .small-box {
      /* width: 28px;
      height: 28px; */
      padding: 18px;
      background: var(--${bgColor}) 0% 0% no-repeat padding-box;
      border-radius: 5px;
      opacity: 1;
      position: absolute;
      top: 20;
      left: 8;
      transition: all 2s ease;
      perspective: 150rem;
      -moz-perspective: 150rem;
    }
    .small-box:hover {
      perspective: 150rem;
      -moz-perspective: 150rem;
      backface-visibility: hidden;
      transition: all 0.05s ease;
      top: 0;
      left: 0;
      opacity:0.85;
      width: 100%;
      height: 100%;
      z-index:300;
    }
  `;

  return (
    <CardCont className={className}>
      <div className="small-box"></div>
      {otherProps.children}
    </CardCont>
  );
};

export default Cards;
