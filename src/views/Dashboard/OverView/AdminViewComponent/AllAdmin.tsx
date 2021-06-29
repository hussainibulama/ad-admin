import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Table from '../../../../components/Table';
import eyeIcon from '../../../../assets/icons/Show.png';
import delIcon from '../../../../assets/icons/delete-user.png';
import caretDown from '../../../../assets/icons/caret-down.png';
import SearchInput from '../../../../components/SearchInput/search-input.';

const AllAdmin = () => {
  const [popoverOpen2, setPopoverOpen2] = useState(false);

  const tableHead: { name: keyof TableData; displayName: any }[] = [
    {
      name: 'adminName',
      displayName: (
        <div className="d-flex align-items-center">
          <span className="mr-1">Admin Name</span>
          <img src={caretDown} alt={caretDown} />
        </div>
      ),
    },
    { name: 'email', displayName: 'Email' },
    { name: 'role', displayName: 'Role' },
    { name: 'phone', displayName: 'Phone' },
    { name: 'status', displayName: 'Status' },
    { name: 'action', displayName: 'ACTION' },
  ];

  type TableData = {
    id: string;
    adminName: React.ReactNode;
    email: string;
    role: string;

    phone: string;

    status: string;

    action?: React.ReactNode;
  };

  const names: TableData[] = [
    {
      id: '1',
      adminName: 'Shola Abe',
      email: 'shola.abe@admoni.ng',
      role: 'Admin',
      phone: '080446658828',
      status: 'Active',
    },
    {
      id: '2',
      adminName: 'Michael Gaffield',
      email: 'michael@admoni.ng',
      role: 'Marketer',
      phone: '080234567905',
      status: 'Away',
    },
    {
      id: '3',
      adminName: 'Hammed Scott',
      email: 'Hammed@admoni.ng',
      role: 'Content Review',
      phone: '080234567435',
      status: 'Active',
    },
    {
      id: '4',
      adminName: 'E Johnson',
      email: 'johnson@admoni.ng',
      role: 'Data Analysis',
      phone: '080234567435',
      status: 'Disabled',
    },
  ];
  return (
    <StyledList>
      <div className="grid-cont">
        <div>
          <h3 className="mb-0 title">All Admin</h3>
        </div>
        <div className="sub-grid-cont">
          <div className="add-btn">
            <Link to="/app/admin/add">+</Link>
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
                return (
                  <div className="cursor-pointer d-flex ">
                    <div className="col-1">
                      <img src={eyeIcon} alt="view" />
                    </div>
                    <div className="col-1">
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
    display: grid;
    grid-template-columns: 6fr 2fr;
    padding: 3rem 1rem 1rem 1rem;
    height: 100%;
    align-items: center;
  }
  .sub-grid-cont {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 2rem;
  }
  .sub-grid-cont > div:nth-child(1) {
    justify-self: right;
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
