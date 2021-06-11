import React from "react";
import styled from "styled-components";

interface props {
  color: string;
  bgColor: string;
  name: string;
  className?: string;
  type?: any;
}

const Button2: React.FC<props> = ({
  name,
  className,
  color,
  bgColor,
  children,
  type,
}) => {
  const ButtonCont = styled.button`
    min-width: 180px;
    min-height: 60px;
    padding: 2rem 3rem;
    background: var(--${bgColor}) 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 20px var(--offWhite2);
    border-radius: 7px;
    opacity: 1;
    border: none;
    font-size: 1.5rem;
    color: var(--${color});
  `;
  return (
    <ButtonCont className={className} type={type}>
      {name} {children}
    </ButtonCont>
  );
};

export default Button2;
