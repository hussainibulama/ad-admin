import React from "react";
import styled from "styled-components";
import { Center } from "../../../common/mixin";

interface props {
  className?: string;
  icon: string;
}

const Button1: React.FC<props> = ({ className, icon }) => {
  const ButtonCont = styled.div`
    border-radius: 50%;
    width: 70px;
    height: 70px;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 20px #00000017;
    opacity: 1;
    text-align: center;
    position: relative;
    span {
       ${Center};
       font-size:2rem;
    }
  `;
  return (
    <ButtonCont className={className}>
      <span className=''>
        {" "}
        <i className={icon ? icon : "fas fa-angle-right"}></i>
      </span>
    </ButtonCont>
  );
};

export default Button1;
