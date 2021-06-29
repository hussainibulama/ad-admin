import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Table from "../../../../components/Table";
import downloadLink from "../../../../assets/icons/Link.svg";
import pageleft from "../../../../assets/icons/pageleft.svg";
import pageright from "../../../../assets/icons/page-right.svg";

const TransactionTable = () => {
  const [popoverOpen2, setPopoverOpen2] = useState(false);

  const tableHead: { name: keyof TableData; displayName: any }[] = [
    { name: "account", displayName: "Account" },
    { name: "ngn", displayName: "NGN" },
    { name: "description", displayName: "Description" },
    { name: "date", displayName: "Date" },
    { name: "time", displayName: "Time" },
    { name: "status", displayName: "Status" },
  ];

  type TableData = {
    account: React.ReactNode;
    description: React.ReactNode;
    date: string;
    time: string;

    ngn: string;
    status: string;
  };

  const names: TableData[] = [
    {
      account: <span className="bold-text">2122394</span>,
      ngn: "100000",
      description: <span className="bold-text">Account Funded</span>,
      date: "02/12/2020",
      time: "2:24PM",
      status: "successful",
    },
    {
      account: <span className="bold-text">2122394</span>,
      ngn: "100000",
      description: <span className="bold-text">Account Funded</span>,
      date: "02/12/2020",
      time: "2:24PM",
      status: "successful",
    },
    {
      account: <span className="bold-text">2122394</span>,
      ngn: "100000",
      description: <span className="bold-text">Account Funded</span>,
      date: "02/12/2020",
      time: "2:24PM",
      status: "successful",
    },
    {
      account: <span className="bold-text">2122394</span>,
      ngn: "100000",
      description: <span className="bold-text">Account Funded</span>,
      date: "02/12/2020",
      time: "2:24PM",
      status: "successful",
    },
    {
      account: <span className="bold-text">2122394</span>,
      ngn: "100000",
      description: <span className="bold-text">Account Funded</span>,
      date: "02/12/2020",
      time: "2:24PM",
      status: "successful",
    },
  ];
  return (
    <StyledList>
      <div className="grid-cont-table">
        <div>
          <h3 className="mb-0 title">Transactions</h3>
        </div>
        <div className="btns-adverts">
          <span>Day</span>
          <span>Week</span>
          <span>Month</span>
          <span>Year</span>
        </div>
        <div>
          <img className="icon mr-5" src="/assets/download.svg" alt="" />
          <img src={downloadLink} alt="" />
        </div>
      </div>
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
          Showing <span className="bold-text">5</span> of{" "}
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
  background: #fff;
  border-radius: 20px;
  padding: 0rem 1rem;
  margin-top: 2rem;

  .title {
    color: rgba(4, 88, 96, 1);
    font-weight: 600;
  }
  .grid-cont-table {
    display: grid;
    grid-template-columns: 3fr 1fr 2fr;
    padding: 3rem 1rem 1rem 1rem;
    height: 100%;
    align-items: center;
    grid-gap: 7rem;
  }
  .grid-cont-table > div:nth-child(1) {
    justify-self: right;
  }
  .grid-cont-table > div:nth-child(3) {
    justify-self: right;
  }
  .btns-adverts > span {
    border: 1px solid #c4c4c4;
    margin-left: 1rem;
    color: #c4c4c4;
    border-radius: 15px;
    padding: 0.3rem 1.5rem;
  }
  .btns-adverts > span:nth-child(1) {
    border: 1px solid #1f78b4;
    border-radius: 15px;
    color: #1f78b4;
    padding: 0.3rem 0.8rem;
  }
  .disputes {
    h5 {
      font-family: "HelveticaMedium";
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
  tr > th:nth-child(1) {
    display: none;
  }
  tr > td:nth-child(1) {
    display: none;
  }
  tr:hover {
    background: rgba(0, 103, 192, 0.26) !important;
  }
  .page-num {
    color: #a3a3a3;
  }
`;

export default TransactionTable;
