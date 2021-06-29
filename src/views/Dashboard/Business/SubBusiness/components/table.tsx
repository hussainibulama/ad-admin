import React, { useState } from 'react';
import Table from '../../../../../components/Table';
import '../../../../SampleTable/components/BusinessTable/business-table.scss';
import eyeIcon from '../../../../../assets/icons/Show.png';
import delIcon from '../../../../../assets/icons/delete-user.png';
import caretDown from '../../../../../assets/icons/caret-down.png';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const BusinessTable = () => {
  const tableHead: { name: keyof TableData; displayName: any }[] = [
    {
      name: 'business',
      displayName: (
        <div className="d-flex align-items-center">
          <span className="mr-1">Business Name</span>
          <img src={caretDown} alt={''} />
        </div>
      ),
    },

    { name: 'phone', displayName: 'Phone' },
    { name: 'products', displayName: 'Products' },
    { name: 'salespoints', displayName: 'Sales Point' },
    { name: 'wallet', displayName: 'Wallet' },
    { name: 'status', displayName: 'Status' },
    {
      name: 'action',
      displayName: (
        <div className="d-flex align-items-center">
          <span className="mr-1">Action</span>
          <img src={''} alt={''} />
        </div>
      ),
    },
  ];
  const history = useHistory();

  type TableData = {
    id: string;
    business: string;
    phone: string;
    products: number;
    salespoints: number;
    wallet: string;
    status: string;
    action?: React.ReactNode;
  };

  const products1: TableData[] = [
    {
      id: '1',
      business: 'Admoni Investment Company',
      phone: '080234567905',
      products: 11,
      salespoints: 0,
      wallet: 'NGN 00,000.00',
      status: 'Pending',
      action: 'Active',
    },
    {
      id: '2',
      business: 'Admoni Investment Company',
      phone: '080234567901',
      products: 12,
      salespoints: 0,
      wallet: 'NGN 00,000.00',
      status: 'Pending',
      action: 'Active',
    },
    {
      id: '3',
      business: 'Admoni Investment Company',
      phone: '080234567902',
      products: 13,
      salespoints: 0,
      wallet: 'NGN 00,000.00',
      status: 'Pending',
      action: 'Active',
    },
    {
      id: '4',
      business: 'Admoni Investment Company',
      phone: '080234567905',
      products: 14,
      salespoints: 0,
      wallet: 'NGN 00,000.00',
      status: 'Pending',
      action: 'Active',
    },
    {
      id: '5',
      business: 'Admoni Investment Company',
      phone: '080234567905',
      products: 15,
      salespoints: 0,
      wallet: 'NGN 00,000.00',
      status: 'Pending',
      action: 'Active',
    },
  ];

  return (
    <>
      <TableWrapper className="disputes">
        <Table<TableData>
          fields={tableHead}
          tableData={products1}
          checked={true}
          onClick={() => history.push('/app/business/business-details')}
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

export default BusinessTable;
