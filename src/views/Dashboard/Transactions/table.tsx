import React from 'react';
import Table from '../../../components/Table';
import eyeIcon from '../../../assets/icons/Show.png';
import delIcon from '../../../assets/icons/delete-user.png';
import caretDown from '../../../assets/icons/caret-down.png';
import styled from 'styled-components';
const table = () => {
  const tableHead: { name: keyof TableData; displayName: any }[] = [
    {
      name: 'user',
      displayName: (
        <div className="d-flex align-items-center">
          <span className="mr-4">User</span>
          <img src={caretDown} alt={'arrowdown'} />
        </div>
      ),
    },
    { name: 'type', displayName: 'Type' },
    {
      name: 'agentCode',
      displayName: (
        <div className="d-flex align-items-center">
          <span className="mr-1">Agent Code</span>
          <img src={caretDown} alt={'arrowdown'} />
        </div>
      ),
    },

    { name: 'date', displayName: 'Date' },
    { name: 'operator', displayName: 'Operator' },
    { name: 'destination', displayName: 'Destination' },
    { name: 'time', displayName: 'Time' },
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
    user?: string;
    type?: string;
    agentCode?: string;
    date?: string;
    operator?: string;
    destination: string;
    time?: string;
    status?: string;
    action?: React.ReactNode;
  };

  const products1: TableData[] = [
    {
      id: '1',
      user: 'jane101',
      type: 'ELECTRICITY',
      agentCode: '23347846839',
      date: '20/03/2021',
      operator: 'IKEDC',
      destination: '0808949874',
      time: '09:14 AM',
      status: 'Failed',
    },
    {
      id: '2',
      user: 'jake1451',
      type: 'ELECTRICITY',
      agentCode: '23347846839',
      date: '20/03/2021',
      operator: 'IKEDC',
      destination: '0808949874',
      time: '09:14 AM',
      status: 'Successful',
    },
    {
      id: '3',
      user: 'bridget501',
      type: 'ELECTRICITY',
      agentCode: '23347846839',
      date: '20/03/2021',
      operator: '9MOBILE',
      destination: '0808949874',
      time: '09:14 AM',
      status: 'Invalid',
    },
    {
      id: '4',
      user: 'mike201',
      type: 'ELECTRICITY',
      agentCode: '23347846839',
      date: '20/03/2021',
      operator: 'MTN',
      destination: '0808949874',
      time: '09:14 AM',
      status: 'Failed',
    },
    {
      id: '5',
      user: 'drake101',
      type: 'ELECTRICITY',
      agentCode: '23347846839',
      date: '20/03/2021',
      operator: 'AIRTEL',
      destination: '0808949874',
      time: '09:14 AM',
      status: 'Successful',
    },
    {
      id: '6',
      user: 'jane101',
      type: 'ELECTRICITY',
      agentCode: '23347846839',
      date: '20/03/2021',
      operator: 'IKEDC',
      destination: '0808949874',
      time: '09:14 AM',
      status: 'Failed',
    },
    {
      id: '7',
      user: 'jane101',
      type: 'ELECTRICITY',
      agentCode: '23347846839',
      date: '20/03/2021',
      operator: 'IKEDC',
      destination: '0808949874',
      time: '09:14 AM',
      status: 'Failed',
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

export default table;
