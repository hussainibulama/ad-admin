import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from 'react-router-dom';
import Table from "../../../components/Table";
import eyeIcon from "../../../assets/icons/Show.png";
import delIcon from "../../../assets/icons/delete-user.png";
import caretDown from "../../../assets/icons/caret-down.png";
import SortIcon from "../../../assets/icons/SortIcon.svg";
import SearchInput from "../../../components/SearchInput/search-input.";
import SortSelect from "./SortSelect"
import pageleft from "../../../assets/icons/pageleft.svg";
import pageright from "../../../assets/icons/page-right.svg";

const AdvertiserList = () => {
  const history = useHistory();
  const [popoverOpen2, setPopoverOpen2] = useState(false);

  const tableHead: { name: keyof TableData; displayName: any }[] = [
    {
      name: "businessName",
      displayName: (
        <div className="d-flex align-items-center">
          <span className="mr-1">Bussiness Name</span>
          <img src={caretDown} alt={caretDown} />
        </div>
      ),
    },

    { name: "email", displayName: "Email" },
    { name: "phone", displayName: "Phone" },
    { name: "totalAds", displayName: "Total Ads" },
    { name: "budget", displayName: "Budget" },
    { name: "status", displayName: "Status" },
    {
      name: "action",
        displayName: (
          <div className="d-flex align-items-center">
            <span className="action-btn p-1">
              <span className="mr-1"> ACTION</span>
              <img
                style={{ color: "#029244" }}
                src={caretDown}
                alt={caretDown}
              />
            </span>
          </div>
        ),
    },
  ];

  type TableData = {
    id: string;
    email: string;
    businessName: string;
    totalAds: number;
    budget: string;
    phone: string;

    status: string;

    action?: React.ReactNode;
  };

  const names: TableData[] = [
    {
      id: "1",
      businessName: "Coldstone NG",
      email: "coldstoneng@gmail.com",
      phone: "080446658828",
      totalAds: 23,
      budget: "NGN 35, 746 .08",
      status: "Active",
    },
    {
      id: "2",
      businessName: "Coldstone NG",
      email: "coldstoneng@gmail.com",
      phone: "080446658828",
      totalAds: 23,
      budget: "NGN 35, 746 .08",
      status: "Active",
    },
    {
      id: "4",
      businessName: "Coldstone NG",
      email: "coldstoneng@gmail.com",
      phone: "080446658828",
      totalAds: 23,
      budget: "NGN 35, 746 .08",
      status: "Active",
    },
    {
      id: "5",
      businessName: "Coldstone NG",
      email: "coldstoneng@gmail.com",
      phone: "080446658828",
      totalAds: 23,
      budget: "NGN 35, 746 .08",
      status: "Active",
    },
    {
      id: "5",
      businessName: "Coldstone NG",
      email: "coldstoneng@gmail.com",
      phone: "080446658828",
      totalAds: 23,
      budget: "NGN 35, 746 .08",
      status: "Active",
    },
    {
      id: "6",
      businessName: "Coldstone NG",
      email: "coldstoneng@gmail.com",
      phone: "080446658828",
      totalAds: 23,
      budget: "NGN 35, 746 .08",
      status: "Active",
    },
    {
      id: "7",
      businessName: "Coldstone NG",
      email: "coldstoneng@gmail.com",
      phone: "080446658828",
      totalAds: 23,
      budget: "NGN 35, 746 .08",
      status: "Active",
    },
    {
      id: "8",
      businessName: "Coldstone NG",
      email: "coldstoneng@gmail.com",
      phone: "080446658828",
      totalAds: 23,
      budget: "NGN 35, 746 .08",
      status: "Active",
    },
    
   
  ];
  return (
    <StyledList>
      <div className="grid-cont">
        <div>
          <h3 className="mb-0 title">Advertisers</h3>
        </div>
        <div className="sub-grid-cont">
          <SortSelect />
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
          onClick={() => history.push('/app/business/advertisers-view')}
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

  .title {
    color: rgba(4, 88, 96, 1);
    font-weight: 600;
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
    justify-self: right;
  }
  .sub-grid-cont {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
    align-items: center;
  }
  /* .sub-grid-cont > div:nth-child(1) {
    justify-self: right;
  } */
  .sub-grid-cont > div:nth-child(2) {
    justify-self: right;
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
  .disputes {
    h5 {
      font-family: "HelveticaMedium";
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
    border-radius: 0px 30px 30px 0px;
    padding: 0px !important;
  }
  .tableContainer tbody tr td:first-child {
    border-radius: 0px !important;
  }
  .bold-text {
    font-weight: 600;
  }
  tr:hover {
    background: rgba(0, 103, 192, 0.26) !important;
  }
  .view-div > span:nth-child(2) {
    float: right;
  }
`;

export default AdvertiserList;
