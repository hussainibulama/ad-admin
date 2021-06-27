import React, { useState } from 'react';
import Table from '../../../components/Table';
import eyeIcon from '../../../assets/icons/Show.png';
import delIcon from '../../../assets/icons/delete-user.png';
import caretDown from '../../../assets/icons/caret-down.png';
import styled from 'styled-components';
const table2 = () => {
  const tableHead: { name: keyof TableData; displayName: any }[] = [
    {
      name: 'advertiser',
      displayName: (
        <div className="d-flex align-items-center">
          <span className="mr-1">Advertiser</span>
          <img src={caretDown} alt={'arrowdown'} />
        </div>
      ),
    },
    { name: 'adsID', displayName: 'Ads ID' },
    {
      name: 'category',
      displayName: (
        <div className="d-flex align-items-center">
          <span className="mr-1">Category</span>
          <img src={caretDown} alt={'arrowdown'} />
        </div>
      ),
    },

    { name: 'date', displayName: 'Date' },
    { name: 'duration', displayName: 'Duration' },
    { name: 'cap', displayName: 'Cap' },
    {
      name: 'status',
      displayName: (
        <div className="d-flex align-items-center">
          <span className="mr-1">Status</span>
          <img src={caretDown} alt={'arrowdown'} />
        </div>
      ),
    },
  ];

  type TableData = {
    id?: string;
    advertiser: string;
    adsID: string;
    category: string;
    date: string;
    duration: string;
    cap: string;
    status: string;
    action?: React.ReactNode;
  };

  const products1: TableData[] = [
    {
      id: '1',
      advertiser: 'Farm Palace',
      adsID: '10287367',
      category: 'On-Call Ads',
      date: '01/04/2021',
      duration: '60 Days',
      cap: 'Lekki',
      status: 'Active',
    },
    {
      id: '2',
      advertiser: 'Shoprite, Lekki',
      adsID: '32874894',
      category: 'In-App Banner',
      date: '20/03/2021',
      duration: '30 Days',
      cap: 'Lekki',
      status: 'Inactive',
    },
    {
      id: '3',
      advertiser: 'MTN Nigeria',
      adsID: '102883729',
      category: 'On-Call Ads',
      date: '01/04/2021',
      duration: '60 Days',
      cap: 'Lekki',
      status: 'Active',
    },
    {
      id: '4',
      advertiser: 'Temi’s Fashion',
      adsID: '10287367',
      category: 'On-Call Ads',
      date: '09/01/2021',
      duration: '14 Days',
      cap: 'Lekki',
      status: 'Inactive',
    },
    {
      id: '5',
      advertiser: 'Farm Palace',
      adsID: '10287367',
      category: 'Video Ads',
      date: '01/04/2021',
      duration: '60 Days',
      cap: 'Lekki',
      status: 'Active',
    },
    {
      id: '6',
      advertiser: 'Farm Palace',
      adsID: '10287367',
      category: 'In-App Banner',
      date: '01/04/2021',
      duration: '60 Days',
      cap: 'Lekki',
      status: 'Active',
    },
    {
      id: '7',
      advertiser: 'Farm Palace',
      adsID: '10287367',
      category: 'On-Call Ads',
      date: '01/04/2021',
      duration: '60 Days',
      cap: 'Lekki',
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

export default table2;
