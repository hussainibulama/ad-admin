import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import Table from '../../components/Table';
import eyeIcon from '../../assets/icons/Show.png';
import pageleft from '../../assets/icons/pageleft.svg';
import pageright from '../../assets/icons/page-right.svg';
import Tick from '../../assets/icons/TickSquare.svg';
import Calender from '../../assets/icons/CalendarError.svg'

const ErrorTable = () => {
  const history = useHistory();


  const tableHead: { name: keyof TableData; displayName: any }[] = [
    {
      name: 'userId',
      displayName: 'User ID',
    },

    { name: 'errorCode', displayName: 'Error Code' },
    { name: 'environment', displayName: 'Environment' },
    { name: 'appVersion', displayName: 'App Version' },
    { name: 'platform', displayName: 'Platform' },
    { name: 'dateTime', displayName: 'Date/Time' },
    {
      name: 'action',
      displayName: (
        <div className="d-flex align-items-center">
          <span className=" p-1">
            <span className="mr-1"> ACTION</span>
          </span>
        </div>
      ),
    },
  ];

  type TableData = {
    id: string;
    errorCode: string;
    userId: string;
    environment: string;
    appVersion: string;
    platform: string;

    dateTime: string;

    action?: React.ReactNode;
  };

  const names: TableData[] = [
    {
      id: '1',
      userId: 'jane101',
      errorCode: '404',
      platform: 'Android',
      appVersion: 'v4.0.3',
      environment: 'Test',
      dateTime: '24/05/2021 9:05am',
    },
    {
      id: '2',
      userId: 'jane101',
      errorCode: '404',
      platform: 'Android',
      appVersion: 'v4.0.3',
      environment: 'Test',
      dateTime: '24/05/2021 9:05am',
    },
    {
      id: '3',
      userId: 'jane101',
      errorCode: '404',
      platform: 'Android',
      appVersion: 'v4.0.3',
      environment: 'Test',
      dateTime: '24/05/2021 9:05am',
    },
    {
      id: '4',
      userId: 'jane101',
      errorCode: '404',
      platform: 'Android',
      appVersion: 'v4.0.3',
      environment: 'Test',
      dateTime: '24/05/2021 9:05am',
    },
    {
      id: '5',
      userId: 'jane101',
      errorCode: '404',
      platform: 'Android',
      appVersion: 'v4.0.3',
      environment: 'Test',
      dateTime: '24/05/2021 9:05am',
    },
    
  ];
  return (
    <StyledList>
      <div className="grid-cont">
        <div>
          <h3 className="mb-0 title">Errors</h3>
        </div>
        <div>
          <span className="year">Year</span>
          <span className="month">Month</span>
          <span className="week">Week</span>
          <span className="yesterday">Yesterday</span>
          <span className="today">Today</span>
          <span className="calender">
            <img src={Calender} alt="calender" />
          </span>
        </div>
      </div>

      <div className="disputes">
        <Table<TableData>
          fields={tableHead}
          tableData={names}
          checked={true}
          onClick={() => history.push('/app/business/advertisers-view')}
          builder={(field, data) => {
            switch (field.name) {
              case 'action':
                return (
                  <div className="cursor-pointer d-flex ">
                    <div className="col-1">
                      <img src={Tick} alt="view" />
                    </div>
                    <div className="col-1">
                      <img src={eyeIcon} alt="view" />
                    </div>
                  </div>
                );
              default:
                return data[field.name];
            }
          }}
        />

        <div className="view-div">
          <span className="page">
            Showing <span>5</span> of <span>20</span>
          </span>
          <span>
            <img src={pageleft} alt="" />
            <img className="ml-2" src={pageright} alt="" />
          </span>
        </div>
      </div>
    </StyledList>
  );
};

const StyledList = styled.div`
  background-color: #fff;
  border-radius: 20px;
  padding: 0rem 2rem 2rem 2rem;
  margin-top: 2rem;

  .title {
    color: rgba(4, 88, 96, 1);
    font-weight: 600;
  }
  .grid-cont {
    display: grid;
    grid-template-columns: 1fr 2fr;
    padding: 3rem 1rem 1rem 1rem;
    height: 100%;
    align-items: center;
  }
  .grid-cont > div:nth-child(2){
  justify-self: right;
  }
  a {
    text-decoration: none;
    color: #029244;
  }
  .disputes {
    h5 {
      font-family: 'HelveticaMedium';
      color: #737a91;
    }
  }
  .page {
    color: #a3a3a3;
  }
  .page > span {
    font-weight: 900;
  }

  .disputes > .table-responsive {
    min-height: 300px;
    overflow-x: clip !important;
  }
  .disputes > .tableContainer .table-container-after {
    padding-bottom: 0;
  }
  .table {
    margin-bottom: 0;
  }

  .status-span {
    width: 80%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
  }
  .view-div > span:nth-child(2) {
    float: right;
  }
  .view-div {
    padding-top: 1rem;
    padding-bottom: 2rem;
  }
  td {
    padding: 0px 10px !important;
  }
  tr {
    border-radius: 0px 20px 20px 0px !important;
    padding: 0px !important;
  }
  .tableContainer tbody tr td:first-child {
    border-radius: 0px !important;
  }
  .bold-text {
    font-weight: 600;
  }
  tr:hover {
    background: rgba(0, 168, 90, 0.1) !important;
  }
  .view-div > span:nth-child(2) {
    float: right;
  }
  .year,
  .month,
  .week,
  .yesterday {
    border: 2px solid #c4c4c4;
    border-radius: 15px;
    color: #c4c4c4;
    margin-left: 1rem;
  }
  .year {
    padding: 0.4rem 3rem;
  }
  .month,
  .week,
  .yesterday,
  .today {
    padding: 0.4rem 0.5rem;
  }
  .today {
    border: 2px solid #00a85a;
    border-radius: 15px;
    color: #00a85a;
    margin-left: 1rem;
  }

  .calender {
    margin-left: 4rem;
  }
`;

export default ErrorTable;
