import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Table from '../../../../components/Table';
import caretDown from '../../../../assets/icons/caret-down.png';
import pageleft from '../../../../assets/icons/pageleft.svg';
import pageright from '../../../../assets/icons/page-right.svg';

const AllAdvertTable = () => {
  const [popoverOpen2, setPopoverOpen2] = useState(false);

    const tableHead: { name: keyof TableData; displayName: any }[] = [
      {
        name: 'advertiser',
        displayName: (
          <div className="d-flex align-items-center">
            <span className="mr-1">Advertiser</span>
            <img src={caretDown} alt={caretDown} />
          </div>
        ),
      },
      { name: 'adsId', displayName: 'Ads ID' },

      {
        name: 'category',
        displayName: (
          <div className="d-flex align-items-center">
            <span className="mr-1">Category</span>
            <img src={caretDown} alt={caretDown} />
          </div>
        ),
      },
      { name: 'date', displayName: 'Date' },
      { name: 'duration', displayName: 'Duration' },
      { name: 'cap', displayName: 'Cap' },
      { name: 'group', displayName: 'Group' },

      {
        name: 'status',
        displayName: (
          <div className="d-flex align-items-center">
            <span className="mr-1">Status</span>
            <img src={caretDown} alt={caretDown} />
          </div>
        ),
      },
    ];

    type TableData = {
        id: string;
        advertiser: React.ReactNode;
    adsId: string;
    category: React.ReactNode;
    duration: React.ReactNode;
    cap: string;
    date: React.ReactNode;
    group: string;
    status: React.ReactNode;
  };

  const names: TableData[] = [
    {
      id: '1',
      advertiser: 'Shoprite, Lekki',
      adsId: '32874894',
      category: 'In-App Banner',
      date: '20/03/2021',
      duration: '30 Days',
      cap: 'Lekki',
      group: '2394',
      status: 'Active',
    },
    {
      id: '2',
      advertiser: 'Shoprite, Lekki',
      adsId: '32874894',
      category: 'In-App Banner',
      date: '20/03/2021',
      duration: '30 Days',
      cap: 'Lekki',
      group: '2394',
      status: 'Inactive',
    },
    {
      id: '3',
      advertiser: 'Shoprite, Lekki',
      adsId: '32874894',
      category: 'In-App Banner',
      date: '20/03/2021',
      duration: '30 Days',
      cap: 'Lekki',
      group: '2394',
      status: 'Active',
    },
    {
      id: '4',
      advertiser: 'Shoprite, Lekki',
      adsId: '32874894',
      category: 'In-App Banner',
      date: '20/03/2021',
      duration: '30 Days',
      cap: 'Lekki',
      group: '2394',
      status: 'Active',
    },
    {
      id: '5',
      advertiser: 'Shoprite, Lekki',
      adsId: '32874894',
      category: 'In-App Banner',
      date: '20/03/2021',
      duration: '30 Days',
      cap: 'Lekki',
      group: '2394',
      status: 'Pending',
    },
    {
      id: '6',
      advertiser: 'Shoprite, Lekki',
      adsId: '32874894',
      category: 'In-App Banner',
      date: '20/03/2021',
      duration: '30 Days',
      cap: 'Lekki',
      group: '2394',
      status: 'Active',
    },
    {
      id: '7',
      advertiser: 'Shoprite, Lekki',
      adsId: '32874894',
      category: 'In-App Banner',
      date: '20/03/2021',
      duration: '30 Days',
      cap: 'Lekki',
      group: '2394',
      status: 'Active',
    },
    {
      id: '8',
      advertiser: 'Shoprite, Lekki',
      adsId: '32874894',
      category: 'In-App Banner',
      date: '20/03/2021',
      duration: '30 Days',
      cap: 'Lekki',
      group: '2394',
      status: 'Inactive',
    },
  ];
  return (
    <StyledList>
      <div className="disputes">
        <Table<TableData>
          fields={tableHead}
          tableData={names}
          checked={true}
          builder={(field, data) => {
            return data[field.name];
          }}
        />
      </div>
      <div className="view-div">
        <span className="page-num">
          Showing <span className="bold-text">5</span> of{' '}
          <span className="bold-text">20</span>
        </span>
        <span>
          <img src={pageleft} alt="" />
          <img className="ml-2" src={pageright} alt="" />
        </span>
      </div>
    </StyledList>
  );
};

const StyledList = styled.div`
  .disputes {
    h5 {
      font-family: 'HelveticaMedium';
      color: #737a91;
    }
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
  .action-btn {
    border: 1px solid #029244;
    border-radius: 5px;
  }
  .action-btn > span {
    font-size: 0.7rem;
    color: #029244;
  }
  .status-span {
    width: 80%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
  }
  .view-more {
    border: 1px solid #029244;
    background: rgba(0, 168, 90, 0.05);
    border-radius: 10px;
    color: #029244;
    font-weight: 600;
    float: right;
  }
  .view-div > span:nth-child(2) {
    float: right;
  }
  .view-div {
    padding-top: 1rem;
    padding-bottom: 2rem;
  }
  thead > tr {
    background: rgba(0, 168, 90, 0);
  }

  td {
    padding: 0px 10px !important;
  }
  tr {
    border-radius: 0px 30px 30px 0px;
    padding: 0px !important;
    background: #fff;
  }
  tr:hover {
    background: rgba(0, 168, 90, 0.1) !important;
  }
  thead > tr :hover {
    background: rgba(0, 168, 90, 0);
  }

  .tableContainer tbody tr td:first-child {
    border-radius: 0px !important;
  }
  .bold-text {
    font-weight: 600;
  }
`;

export default AllAdvertTable;
