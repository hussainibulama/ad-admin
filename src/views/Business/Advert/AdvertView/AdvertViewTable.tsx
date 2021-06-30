import React, { useState } from 'react';
import styled from 'styled-components';
import Table from '../../../../components/Table';
import caretDown from '../../../../assets/icons/caret-down.png';
import SearchInput from '../../../../components/SearchInput/search-input.';
import AdvertSortSelect from '../AdvertSortSelect';
import { useHistory, Link } from 'react-router-dom';

const AdvertViewTable = () => {
    const history = useHistory();
     const options = [
       { value: 'sortAdvertisers', label: 'Sort Advertisers' },
       { value: 'duration', label: 'Duration' },
       { value: 'activeAdviser', label: 'Active Adviser' },
       { value: 'inactiveAdviser', label: 'Inactive Adviser' },
       { value: 'date', label: 'Date' },
     ];
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
    }
  ];
  return (
    <StyledList>
      <div className="grid-cont">
        <div>
          <h3 className="mb-0 title">All adverts</h3>
          <div>
            <button className="add-btn">
              <span>
                <span style={{ opacity: 0.4 }}>+</span>
              </span>
              <span className="ml-3">Add New Advert</span>
            </button>
          </div>
        </div>
        <div className="sub-grid-cont">
          <AdvertSortSelect options={options} />
          <div>
            <SearchInput placeholder="Search" />
          </div>
        </div>
      </div>
      <div className="disputes">
        <Table<TableData>
          fields={tableHead}
          tableData={names}
          checked={true}
          onClick={() => history.push('/app/business/ads-details')}
          builder={(field, data) => {
            return data[field.name];
          }}
        />
      </div>
      <div className="view-div">
        <Link to="/app/business/advert-list" className="view-more px-3">
          View More
        </Link>
      </div>
    </StyledList>
  );
};

const StyledList = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 0rem 1rem;
  margin-top: 2rem;
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
    text-decoration: none;
    border: 1px solid #029244;
    background: rgba(0, 168, 90, 0.05);
    border-radius: 10px;
    color: #029244;
    font-weight: 600;
    float: right;
  }

  .view-div {
    padding-top: 1rem;
    padding-bottom: 4rem;
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
  .title {
    color: rgba(4, 88, 96, 1);
    font-weight: 600;
  }

  .add-btn {
    background: #00a85a;
    border-radius: 20px;
    color: #fff;
    padding: 0.5rem 1.5rem;
    border: none;
    outline: none;
  }
  .add-btn > span:nth-child(1) {
    border: 2px solid #fff;
    font-size: 1rem;
    padding: 0.1rem 0.3rem;
    border-radius: 7px;
  }

  .add-btn > span:nth-child(2) {
    font-size: 1.2rem;
    font-weight: 700;
  }

  .grid-cont {
    display: grid;
    grid-template-columns: 2fr 2fr;
    padding: 3rem 1rem 1rem 1rem;
    height: 100%;
    align-items: center;
    grid-gap: 8rem;
  }
  .grid-cont > div:nth-child(1) {
    justify-self: left;
    display: flex;
    gap: 4rem;
    height: 100%;
    align-items: center;
  }
  .sub-grid-cont {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
    align-items: center;
  }

  .sort-btn {
    cursor: pointer;
  }
  .sort-text {
    color: #029244;
  }
  a {
    text-decoration: none;
    color: #029244;
  }
  .search input {
    width: 100%;
  }
`;

export default AdvertViewTable
