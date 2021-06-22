import React, { useState } from 'react';
import Table from '../../../../../components/Table';
import '../../../../SampleTable/components/BusinessTable/business-table.scss';
import eyeIcon from '../../../../../assets/icons/Show.png';
import delIcon from '../../../../../assets/icons/delete-user.png';
import caretDown from '../../../../../assets/icons/caret-down.png';
import styled from 'styled-components';
const myTable = () => {
  const tableHead: { name: keyof TableData; displayName: any }[] = [
    {
      name: 'products',
      displayName: (
        <div className="d-flex align-items-center">
          <span className="mr-1">Products</span>
          <img src={caretDown} alt={''} />
        </div>
      ),
    },
    {
      name: 'category',
      displayName: (
        <div className="d-flex align-items-center">
          <span className="mr-1">Category</span>
          <img src={''} alt={''} />
        </div>
      ),
    },
    { name: 'barcode', displayName: 'Barcode' },
    { name: 'quantitySold', displayName: 'Qty Sold' },
    { name: 'quantityInStock', displayName: 'Qty in Stock' },
    { name: 'lastSold', displayName: 'Last Sold' },
    {
      name: 'status',
      displayName: (
        <div className="d-flex align-items-center">
          <span className="mr-1">Status</span>
          <img src={''} alt={''} />
        </div>
      ),
    },
    { name: 'action', displayName: 'Action' },
  ];

  type TableData = {
    id: string;
    products: string;
    category: string;
    barcode: number;
    quantitySold: number;
    quantityInStock: number;
    lastSold: string;
    status: string;
    action?: React.ReactNode;
  };

  const products1: TableData[] = [
    {
      id: '1',
      products: 'Gucci Leather Bag',
      category: 'Cloth & Bag',
      barcode: 1234567,
      quantitySold: 78,
      quantityInStock: 100,
      lastSold: '26 Jan 2020',
      status: 'Active',
    },
    {
      id: '1',
      products: 'Gucci Leather Bag',
      category: 'Cloth & Bag',
      barcode: 1234567,
      quantitySold: 78,
      quantityInStock: 100,
      lastSold: '26 Jan 2020',
      status: 'Active',
    },
    {
      id: '1',
      products: 'Gucci Leather Bag',
      category: 'Cloth & Bag',
      barcode: 1234567,
      quantitySold: 78,
      quantityInStock: 100,
      lastSold: '26 Jan 2020',
      status: 'Active',
    },
    {
      id: '1',
      products: 'Gucci Leather Bag',
      category: 'Cloth & Bag',
      barcode: 1234567,
      quantitySold: 78,
      quantityInStock: 100,
      lastSold: '26 Jan 2020',
      status: 'Active',
    },
    {
      id: '1',
      products: 'Gucci Leather Bag',
      category: 'Cloth & Bag',
      barcode: 1234567,
      quantitySold: 78,
      quantityInStock: 100,
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

export default myTable;
