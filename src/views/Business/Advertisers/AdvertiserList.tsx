import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Table from "../../../components/Table";
import eyeIcon from "../../../assets/icons/Show.png";
import delIcon from "../../../assets/icons/delete-user.png";
import caretDown from "../../../assets/icons/caret-down.png";
import SortIcon from "../../../assets/icons/SortIcon.svg";
import SearchInput from "../../../components/SearchInput/search-input.";

const AdvertiserList = () => {
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
    { name: "action", displayName: "ACTION" },
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
          <div className="sort-btn">
           <span className="sort-text">Sort</span> <img src={SortIcon} alt="filter"/>
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
              case "action":
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

        <div className="page">
          Showing <span>5</span> of <span>20</span>
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
    grid-gap: 4rem;
  }
  .grid-cont > div:nth-child(1) {
    justify-self: right;
  }
  .sub-grid-cont {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem;
    height: 100%;
    align-items: center;
  }
  .sub-grid-cont > div:nth-child(1) {
    justify-self: right;
  }
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
`;

export default AdvertiserList;
