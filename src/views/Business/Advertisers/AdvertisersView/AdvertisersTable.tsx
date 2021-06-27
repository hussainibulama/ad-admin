import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Table from "../../../../components/Table";
import eyeIcon from "../../../../assets/icons/Show.png";
import delIcon from "../../../../assets/icons/delete-user.png";
import caretDown from "../../../../assets/icons/caret-down.png";
import downloadLink from "../../../../assets/icons/Link.svg";

const AdvertisersTable = () => {
  const [popoverOpen2, setPopoverOpen2] = useState(false);

    const tableHead: { name: keyof TableData; displayName: any }[] = [
      { name: "ads", displayName: "Ads" },

      {
        name: "type",
        displayName: (
          <div className="d-flex align-items-center">
            <span className="mr-1">Type</span>
            <img src={caretDown} alt={caretDown} />
          </div>
        ),
      },
      { name: "budgets", displayName: "Budgets" },
      { name: "impressions", displayName: "Impressions" },
      { name: "clicks", displayName: "Clicks" },
      {
        name: "date",
        displayName: (
          <div className="d-flex align-items-center">
            <span className="mr-1">Date</span>
            <img src={caretDown} alt={caretDown} />
          </div>
        ),
      },
      {
        name: "status",
        displayName: (
          <div className="d-flex align-items-center">
            <span className="mr-1">Status</span>
            <img src={caretDown} alt={caretDown} />
          </div>
        ),
      },
      {
        name: "action",
        displayName: (
          <div className="d-flex align-items-center">
            <span className="action-btn p-1">
              <span className="mr-1"> ACTION</span>
              <img style={{color: "#029244"}} src={caretDown} alt={caretDown} />
            </span>
          </div>
        ),
      },
    ];

  type TableData = {
    id: string;
    ads: React.ReactNode;
    type: React.ReactNode;
    budgets: string;
    impressions: React.ReactNode;

    clicks: string;
    date: React.ReactNode;

    status: React.ReactNode;

    action?: React.ReactNode;
  };

  const names: TableData[] = [
    {
      id: "1",
      ads: <span className="bold-text">Ice-Cream</span>,
      type: "On-Call Ads",
      budgets: "10878",
      impressions: <span className="bold-text">12090</span>,
      clicks: "3494",
      date: "02/12/2020",
      status: (
        <div className="d-flex align-items-center">
          <span className=" p-1 status-span">
            <span className="mr-1" style={{ fontWeight: 600 }}>
              {" "}
              Active
            </span>
            <img style={{ color: "#029244" }} src={caretDown} alt={caretDown} />
          </span>
        </div>
      ),
    },
    {
      id: "2",
      ads: <span className="bold-text">Ice-Cream</span>,
      type: "On-Call Ads",
      budgets: "10878",
      impressions: <span className="bold-text">12090</span>,
      clicks: "3494",
      date: "02/12/2020",
      status: (
        <div className="d-flex align-items-center">
          <span className=" p-1 status-span">
            <span className="mr-1" style={{ fontWeight: 600 }}>
              {" "}
              Completed
            </span>
            <img style={{ color: "#029244" }} src={caretDown} alt={caretDown} />
          </span>
        </div>
      ),
    },
    {
      id: "3",
      ads: <span className="bold-text">Ice-Cream</span>,
      type: "On-Call Ads",
      budgets: "10878",
      impressions: <span className="bold-text">12090</span>,
      clicks: "3494",
      date: "02/12/2020",
      status: (
        <div className="d-flex align-items-center">
          <span className=" p-1 status-span">
            <span className="mr-1" style={{ fontWeight: 600 }}>
              {" "}
              Inactive
            </span>
            <img style={{ color: "#029244" }} src={caretDown} alt={caretDown} />
          </span>
        </div>
      ),
    },
    {
      id: "4",
      ads: <span className="bold-text">Ice-Cream</span>,
      type: "On-Call Ads",
      budgets: "10878",
      impressions: <span className="bold-text">12090</span>,
      clicks: "3494",
      date: "02/12/2020",
      status: (
        <div className="d-flex align-items-center">
          <span className=" p-1 status-span">
            <span className="mr-1" style={{ fontWeight: 600 }}>
              {" "}
              Draft
            </span>
            <img style={{ color: "#029244" }} src={caretDown} alt={caretDown} />
          </span>
        </div>
      ),
    },
    {
      id: "5",
      ads: <span className="bold-text">Ice-Cream</span>,
      type: "On-Call Ads",
      budgets: "10878",
      impressions: <span className="bold-text">12090</span>,
      clicks: "3494",
      date: "02/12/2020",
      status: (
        <div className="d-flex align-items-center">
          <span className=" p-1 status-span">
            <span className="mr-1" style={{ fontWeight: 600 }}>
              {" "}
              Pending
            </span>
            <img style={{ color: "#029244" }} src={caretDown} alt={caretDown} />
          </span>
        </div>
      ),
    },
  ];
  return (
    <StyledList>
      <div className="grid-cont-table">
        <div>
          <h3 className="mb-0 title">Adverts</h3>
        </div>
        <div className="btns-adverts">
          <span>Day</span>
          <span>Week</span>
          <span>Month</span>
          <span>Year</span>
        </div>
        <div>
          <img src={downloadLink} alt="" />
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
                  <div className="cursor-pointer d-flex">
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
      <div className="view-div">
        <button className="view-more px-3">View More</button>
      </div>
    </StyledList>
  );
};

const StyledList = styled.div`
  background: rgba(0, 168, 90, 0.05);
  border-radius: 20px;
  padding: 0rem 1rem;
  margin-top: 2rem;

  .title {
    color: rgba(4, 88, 96, 1);
    font-weight: 600;
  }
  .grid-cont-table {
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
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
    padding: 0.2rem 0.7rem;
  }
  .btns-adverts > span:nth-child(1) {
    border: 1px solid #1f78b4;
    border-radius: 15px;
    color: #1f78b4;
    padding: 0.2rem 0.5rem;
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
  .view-more {
    border: 1px solid #029244;
    background: rgba(0, 168, 90, 0.05);
    border-radius: 10px;
    color: #029244;
    font-weight: 600;
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
    background: rgba(0, 168, 90, 0.05);
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

export default AdvertisersTable;
