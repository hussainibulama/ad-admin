import React from 'react';
import Table from '../../../components/Table';
import eyeIcon from '../../../assets/icons/Show.png';
import delIcon from '../../../assets/icons/delete-user.png';
import caretDown from '../../../assets/icons/caret-down.png';
import styled from 'styled-components';

const TableRef = () => {
  const tableHead: { name: keyof TableData; displayName: any }[] = [
    {
      name: 'username',
      displayName: (
        <div className="d-flex align-items-center">
          <span className="mr-4">Username</span>
          <img src={caretDown} alt={'arrowdown'} />
        </div>
      ),
    },
    { name: 'tokenBalance', displayName: 'Token Balance' },
    { name: 'referralCode', displayName: 'Referral Code' },
    {
      name: 'totalReferrals',
      displayName: (
        <div className="d-flex align-items-center">
          <span className="mr-1">Total Referrals</span>
          <img src={caretDown} alt={'arrowdown'} />
        </div>
      ),
    },

    { name: 'recentReferrals', displayName: 'Recent Referrals' },
    {
      name: 'date',
      displayName: (
        <div className="d-flex align-items-center">
          <span className="mr-1">Date</span>
          <img src={caretDown} alt={'arrowdown'} />
        </div>
      ),
    },
    {
      name: 'action',
      displayName: (
        <div className="d-flex align-items-center action-table">
          <span className="mr-1">Action</span>
          <img className="ml-4" src={caretDown} alt={'arrowdown'} />
        </div>
      ),
    },
  ];

  type TableData = {
    id?: string;
    username?: string;
    tokenBalance?: string;
    referralCode?: string;
    totalReferrals?: string;
    recentReferrals?: string;
    date: string;
    action?: React.ReactNode;
  };

  const products1: TableData[] = [
    {
      id: '1',
      username: 'jane101',
      tokenBalance: '2000',
      referralCode: 'JANE20201',
      totalReferrals: '40',
      recentReferrals: 'decksonaj1',
      date: '20/03/2021',
    },
    {
      id: '2',
      username: 'jane101',
      tokenBalance: '2000',
      referralCode: 'JANE20201',
      totalReferrals: '40',
      recentReferrals: 'decksonaj1',
      date: '20/03/2021',
    },
    {
      id: '3',
      username: 'jane101',
      tokenBalance: '2000',
      referralCode: 'JANE20201',
      totalReferrals: '40',
      recentReferrals: 'decksonaj1',
      date: '20/03/2021',
    },
    {
      id: '4',
      username: 'jane101',
      tokenBalance: '2000',
      referralCode: 'JANE20201',
      totalReferrals: '40',
      recentReferrals: 'decksonaj1',
      date: '20/03/2021',
    },
    {
      id: '5',
      username: 'jane101',
      tokenBalance: '2000',
      referralCode: 'JANE20201',
      totalReferrals: '40',
      recentReferrals: 'decksonaj1',
      date: '20/03/2021',
    },
    {
      id: '6',
      username: 'jane101',
      tokenBalance: '2000',
      referralCode: 'JANE20201',
      totalReferrals: '40',
      recentReferrals: 'decksonaj1',
      date: '20/03/2021',
    },
    {
      id: '7',
      username: 'jane101',
      tokenBalance: '2000',
      referralCode: 'JANE20201',
      totalReferrals: '40',
      recentReferrals: 'decksonaj1',
      date: '20/03/2021',
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
                      {/* <img src={eyeIcon} alt="view" /> */}
                    </div>
                    <div className="col-1 delete">
                      {/* <img src={delIcon} alt="delete" /> */}
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

export default TableRef;
