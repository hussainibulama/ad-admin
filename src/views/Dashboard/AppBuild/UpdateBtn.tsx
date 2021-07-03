import React from 'react';
import styled from 'styled-components';
import arrow1 from '../../../assets/icons/arrow1.svg';
import { NavLink } from 'react-router-dom';

const UpdateBtn = () => {
  return (
    <UpdateWrapper>
      <NavLink className="update-notice" to="">
        Updated Notice
        <img src={arrow1} className="ml-1" alt="arrow" />
      </NavLink>
    </UpdateWrapper>
  );
};

const UpdateWrapper = styled.div`
  .update-notice {
    padding: 0.5rem 1rem;
    color: #00a85a;
    font-weight: 600;
    background: rgba(0, 168, 90, 0.1);
    border: 1px solid #029244;
    box-sizing: border-box;
    border-radius: 15px;
  }
`;

export default UpdateBtn;
