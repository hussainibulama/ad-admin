import React from 'react';
import Table from '../../../components/Table';
import eyeIcon from '../../../assets/icons/Show.png';
import delIcon from '../../../assets/icons/delete-user.png';
import caretDown from '../../../assets/icons/caret-down.png';
import styled from 'styled-components';

const AppTable = () => {
  const tableHead: { name: keyof TableData; displayName: any }[] = [
    { name: 'firstname', displayName: 'First Name' },
    { name: 'lastname', displayName: 'Last Name' },
    { name: 'user', displayName: 'User' },
    { name: 'lastVersionUpdate', displayName: 'Last Version Update' },
    { name: 'pendingVersionUpdate', displayName: 'Pending Version Update' },
    // { name: 'recentReferrals', displayName: 'Recent Referrals' },
  ];

  type TableData = {
    id?: string;
    firstname?: string;
    lastname?: string;
    user?: string;
    lastVersionUpdate?: string;
    pendingVersionUpdate?: string;
    action?: React.ReactNode;
  };

  const products1: TableData[] = [
    {
      id: '1',
      firstname: 'Jane',
      lastname: 'Doe',
      user: 'jane101',
      lastVersionUpdate: 'V 3.1.0',
      pendingVersionUpdate: 'V4.1.0',
    },
    {
      id: '2',
      firstname: 'Jane',
      lastname: 'Doe',
      user: 'jane101',
      lastVersionUpdate: 'V 3.1.0',
      pendingVersionUpdate: 'V4.1.0',
    },
    {
      id: '3',
      firstname: 'Jane',
      lastname: 'Doe',
      user: 'jane101',
      lastVersionUpdate: 'V 3.1.0',
      pendingVersionUpdate: 'V4.1.0',
    },
    {
      id: '4',
      firstname: 'Jane',
      lastname: 'Doe',
      user: 'jane101',
      lastVersionUpdate: 'V 3.1.0',
      pendingVersionUpdate: 'V4.1.0',
    },
    {
      id: '5',
      firstname: 'Jane',
      lastname: 'Doe',
      user: 'jane101',
      lastVersionUpdate: 'V 3.1.0',
      pendingVersionUpdate: 'V4.1.0',
    },
    {
      id: '6',
      firstname: 'Jane',
      lastname: 'Doe',
      user: 'jane101',
      lastVersionUpdate: 'V 3.1.0',
      pendingVersionUpdate: 'V4.1.0',
    },
    {
      id: '7',
      firstname: 'Jane',
      lastname: 'Doe',
      user: 'jane101',
      lastVersionUpdate: 'V 3.1.0',
      pendingVersionUpdate: 'V4.1.0',
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

export default AppTable;
