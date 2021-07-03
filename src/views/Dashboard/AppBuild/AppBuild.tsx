import React from 'react';
import styled from 'styled-components';
import Duration from '../Referrals/Duration';
import Table from './Table';

const AppBuild = () => {
  return (
    <AppBuildWrapper>
      <div className="app-build">
        <h2>App Build</h2>
        <Duration all={true} />
      </div>
      <Table />
    </AppBuildWrapper>
  );
};

const AppBuildWrapper = styled.div`
  border-radius: 10px;
  background-color: #fff;
  padding: 2rem 4rem;
  .app-build {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .app-build h2 {
    color: #045860;
    font-size: 1.2rem;
    font-weight: bold;
  }

  @media screen and (max-width: 767px) {
    .app-build {
      flex-direction: column;
    }
  }
`;

export default AppBuild;
