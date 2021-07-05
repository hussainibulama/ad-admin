import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Table from '../../../../components/Table';
import eyeIcon from '../../../../assets/icons/Show.png';
import delIcon from '../../../../assets/icons/delete-user.png';
import caretDown from '../../../../assets/icons/caret-down.png';
import Calendar from '../../../../assets/icons/Calendar.svg';
import SearchInput from '../../../../components/SearchInput/search-input.';
import DeleteModal from '../../../../components/DeleteModal/index';

const AllAdmin = () => {
  const [popoverOpen2, setPopoverOpen2] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const tableHead: { name: keyof TableData; displayName: any }[] = [
    {
      name: 'userName',
      displayName: (
        <div className="d-flex align-items-center">
          <span className="mr-2">AUsername</span>
          <img src={caretDown} alt={caretDown} />
        </div>
      ),
    },
    { name: 'phone', displayName: 'Phone Number' },
    {
      name: 'email',
      displayName: (
        <div className="d-flex align-items-center">
          <span className="mr-2">Email</span>
          <img src={caretDown} alt={caretDown} />
        </div>
      ),
    },
    { name: 'tokenBalance', displayName: 'Token Balance' },
    { name: 'referralCode', displayName: 'Referral Code' },
    { name: 'totalReferral', displayName: 'Total Referrals' },
    {
      name: 'status',
      displayName: (
        <div className="d-flex align-items-center">
          <span className="mr-2">Status</span>
          <img src={caretDown} alt={caretDown} />
        </div>
      ),
    },
    {
      name: 'action',
      displayName: (
        <div className="action">
          {' '}
          ACTION{' '}
          <div>
            {' '}
            <img src={caretDown} alt={caretDown} className="ml-2" />
          </div>
        </div>
      ),
    },
  ];

  type TableData = {
    id: string;
    userName: React.ReactNode;
    email: string;

    phone: string;
    tokenBalance: string;
    referralCode: string;
    totalReferral: number;

    status: string;

    action?: React.ReactNode;
  };

  const names: TableData[] = [
    {
      id: '1',
      userName: 'Shola Abe',
      phone: '080446658828',
      email: 'shola.abe@admoni.ng',
      tokenBalance: '2000',
      referralCode: 'Jane20201',
      totalReferral: 10,
      status: 'Active',
    },
    {
      id: '2',
      userName: 'Michael Gaffield',
      phone: '080234567905',
      email: 'michael@admoni.ng',
      tokenBalance: '2000',
      referralCode: 'Jane20201',
      totalReferral: 10,
      status: 'Away',
    },
    {
      id: '3',
      userName: 'Hammed Scott',
      phone: '080234567435',
      email: 'Hammed@admoni.ng',
      tokenBalance: '2000',
      referralCode: 'Jane20201',
      totalReferral: 10,
      status: 'Active',
    },
    {
      id: '4',
      userName: 'E Johnson',
      phone: '080234567435',
      email: 'johnson@admoni.ng',
      tokenBalance: '2000',
      referralCode: 'Jane20201',
      totalReferral: 10,
      status: 'Disabled',
    },
  ];
  return (
    <>
      {showModal && <DeleteModal isClose={setShowModal} />}
      <StyledList>
        <div className="grid-cont">
          <div>
            <h3 className="mb-0 title">Users</h3>
          </div>
          <div className="sub-grid-cont">
            <div className="year"> Year </div>
            <div className="month"> Month</div>
            <div className="week"> Week </div>
            <div className="yesterday"> Yesterday </div>
            <div className="today"> Today </div>
            <div className="calendar">
              {' '}
              <img src={Calendar} alt="" />{' '}
            </div>
            <div>
              <SearchInput placeholder="Search User" />
            </div>
          </div>
        </div>
        <div className="disputes">
          <Table<TableData>
            fields={tableHead}
            tableData={names}
            checked={true}
            builder={(field, data) => {
              switch (field.name) {
                case 'action':
                  console.log('yes', data.id);
                  return (
                    <div className="cursor-pointer d-flex ">
                      <Link className="col-1" to={`/app/users/${data.id}`}>
                        <img src={eyeIcon} alt="view" />
                      </Link>

                      <div className="col-1" onClick={() => setShowModal(true)}>
                        <img src={delIcon} alt="delete" />
                      </div>
                    </div>
                  );
                default:
                  return data[field.name];
              }
            }}
          />
        </div>
      </StyledList>
    </>
  );
};

const StyledList = styled.div`
  background-color: #fff;
  border-radius: 20px;
  padding: 0rem 2rem;

  .title {
    color: rgba(4, 88, 96, 1);
    font-weight: 600;
  }

  .grid-cont {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 2em;
    .year,
    .month,
    .week,
    .yesterday,
    .today {
      border: 2px solid #c4c4c4;
      box-sizing: border-box;
      border-radius: 15px;
      padding: 0.2em 0.7em;
      color: #c4c4c4;
      cursor: pointer;
      margin-right: 1em;
      font-weight: bold;
      font-size: 12px;
    }
    .calendar {
      margin: 0 2em;
      cursor: pointer;
    }
    .year {
      width: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .today {
      border: 2px solid #00a85a;
      color: #00a85a;
    }
  }
  .sub-grid-cont {
    display: flex;
    align-items: center;
  }
  .action {
    border: 1px solid #029244;
    box-sizing: border-box;
    border-radius: 5px;
    color: #029244;
    width: 92px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 12px;
    cursor: pointer;
  }
  .add-btn {
    height: 2rem;
    width: 2rem;
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
    border: 2px solid #029244;
    font-size: 1.2rem;
    border-radius: 8px;
    background: #ffffff;
    color: #029244;
    opacity: 0.7;
    cursor: pointer;
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
`;

export default AllAdmin;
