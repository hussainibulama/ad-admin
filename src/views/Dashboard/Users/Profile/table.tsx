import React, { useState } from "react";
import Table from "../../../../components/Table";
import eyeIcon from "../../../assets/icons/Show.png";
import delIcon from "../../../assets/icons/delete-user.png";
import caretDown from "../../../assets/icons/caret-down.png";

const DiscountPartnersTable = () => {
  
  const [popoverOpen2, setPopoverOpen2] = useState(false);



  const tableHead: { name: keyof TableData; displayName: any }[] = [
    {
      name: "num",
      displayName: "Account"
      
    },
    { name: "complainant", displayName: "NGN" },
    { name: "reason", displayName: "Service" },
    { name: "date", displayName: "Date" },
    { name: "status", displayName: "Status" },
  ];

  type TableData = {
    id: string;
    num: React.ReactNode;
    date: string;

    complainant: string;

    reason: string;
    status: string;
    action?: React.ReactNode;
  };

  const products: TableData[] = [
    {
      id: "1",
      num: "0808 479 4980",

      date: "26 Jan 2020",
      complainant: "5000",
      reason: "Electicity",
      status: "Successful",
    },
    {
      id: "2",
      num: "0808 479 4980",
      date: "26 Jan 2020",
      complainant: "2000",
      status:"Successful",
      reason: "Electicity",
    },
    {
      id: "3",
      num: "0808 479 4980",
      date: "26 Jan 2020",
      complainant: "5000",
      status: "Successful",
      reason: "Electicity",
    },
    {
      id: "4",
      num: "0808 479 4980",
      date: "26 Jan 2020",
      complainant: "5000",
      status:"Successful",
      reason: "Electicity",
    },
    {
      id: "5",
      num: "0808 479 4980",
      date: "26 Jan 2020",
      complainant: "100",
      status:"Successful",
      reason: "Electicity",
    },
  ];
  return (
    <>
      <div className="table-title">Last 5 Transaction</div>
      <div className="disputes">
        <Table<TableData>
          fields={tableHead}
          tableData={products}
          checked={true}
          builder={(field, data) => {
            switch (field.name) {
              case "action":
                return (
                  <div className="cursor-pointer d-flex ">
                  </div>
                );
              default:
                return data[field.name];
            }
          }}
        />
      </div>
      <div className="view-all">View all</div>
    </>
  );
};

export default DiscountPartnersTable;
