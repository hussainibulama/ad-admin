import React, { useState } from 'react';
import Table from '../../../../../components/Table';
import '../../../../SampleTable/components/BusinessTable/business-table.scss';
import eyeIcon from '../../../../../assets/icons/Show.png';
import delIcon from '../../../../../assets/icons/delete-user.png';
import caretDown from '../../../../../assets/icons/caret-down.png';
import styled from 'styled-components';


const SalesRecordTable = () => {
  const tableHead: { name: keyof TableData; displayName: any }[] = [
    {
      name: 'id',
      displayName:  'OrderId'
    },
    {
      name: 'discount',
        displayName:  'Discount'
    },
    { name: 'barcode', displayName: 'Barcode' },
    { name: 'Qty', displayName: 'Qty Sold' },
    { name: 'date', displayName: 'Date' },
    { name: 'soldby', displayName: 'Sold By' },
    {
      name: 'status',
      displayName: (
        <div className="d-flex align-items-center">
          <span className="mr-1">Status</span>
          <img src={''} alt={''} />
        </div>
      ),
    },
    { name: 'action',  displayName: (
        <div className="action">
          <span  >Action</span>
          
        </div>
      ), },
  ];

  type TableData = {
    id: string;
    discount: string;
    barcode: string;
    Qty: number;
    soldby: string;
    date:string
    lastSold: string;
    status: string;
    action?: React.ReactNode;
  };

  const products1: TableData[] = [
    {
      id: '1',
     discount: '10%',
     date:'20 April, 2020',
      barcode:'12345667',
      Qty:1,
      soldby:'Ope pearls',
      lastSold: '26 Jan 2020',
      status: 'Active',
    },
    {
      id: '1',
      discount: '20%',
     date:'20 April, 2020',
      barcode:'12345667',
      Qty:1,
      soldby:'Ope pearls',
      lastSold: '26 Jan 2020',
      status: 'Active',
    },
     
    {
      id: '1',
      discount: '10%',
     date:'20 April, 2020',
      barcode:'12345667',
      Qty:1,
      soldby:'Ope pearls',
      lastSold: '26 Jan 2020',
      status: 'Active',
    },
     
  ];

  return (
    <>
      <TableWrapper className="disputes">
        <Table<TableData>
          fields={tableHead}
          tableData={products1}
          checked={true}
          builder={(field, data) => {
            switch (field.name) {
              case 'action':
                return (
                  <div className="cursor-pointer d-flex">
                    {/* <div id="DisputePopover">...</div> */}
                    <div className="col-1 eye">
                      <img src={eyeIcon} alt="view" />
                    </div>
                    <div className="col-1 delete">
                      <img src={delIcon} alt="delete" />
                    </div>
                  </div>
                );
              default:
                return data[field.name];
            }
          }}
        />
      </TableWrapper>
    </>
  );
};

const TableWrapper = styled.div`
  .cursor-pointer.d-flex {
    margin-right: 0 !important;
    width: 50%;
  }

  .delete {
    margin-right: 0 !important;
  }
`;

export default SalesRecordTable;
