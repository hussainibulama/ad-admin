import React from 'react';
import Table from '../../../components/Table';
import eyeIcon from '../../../assets/icons/Show.png';
import downIcon from '../../../assets/icons/smallUpload.svg';
import caretDown from '../../../assets/icons/caret-down.png';
import styled from 'styled-components';

const AppBuildTable = () => {
  const tableHead: { name: keyof TableData; displayName: any }[] = [
    { name: 'user', displayName: 'User' },
    { name: 'deviceBrand', displayName: 'Device Brand' },
    { name: 'deviceModel', displayName: 'Device Model' },
    { name: 'deviceID', displayName: ' Device ID' },
    { name: 'deviceOS', displayName: 'Device OS' },
    { name: 'lastUpdated', displayName: 'Last Updated' },
    {
      name: 'action',
      displayName: (
        <div className="d-flex align-items-center action-table">
          <span className="mr-1">Action</span>
          {/* <img className="ml-4" src={caretDown} alt={'arrowdown'} /> */}
        </div>
      ),
    },
  ];

  type TableData = {
    id?: string;
    user?: string;
    deviceBrand?: string;
    deviceModel?: string;
    deviceID?: string;
    deviceOS?: string;
    lastUpdated: string;
    action?: React.ReactNode;
  };

  const products1: TableData[] = [
    {
      id: '1',
      user: 'Jane101',
      deviceBrand: 'SAMSUNG ',
      deviceModel: 'GalaxyS21',
      deviceID: 'jane101',
      deviceOS: 'Android 11',
      lastUpdated: 'V4.1',
    },
    {
      id: '2',
      user: 'Jane101',
      deviceBrand: 'SAMSUNG ',
      deviceModel: 'GalaxyS21',
      deviceID: 'jane101',
      deviceOS: 'Android 11',
      lastUpdated: 'V4.1',
    },
    {
      id: '3',
      user: 'Jane101',
      deviceBrand: 'SAMSUNG ',
      deviceModel: 'GalaxyS21',
      deviceID: 'jane101',
      deviceOS: 'Android 11',
      lastUpdated: 'V4.1',
    },
    {
      id: '4',
      user: 'Jane101',
      deviceBrand: 'SAMSUNG ',
      deviceModel: 'GalaxyS21',
      deviceID: 'jane101',
      deviceOS: 'Android 11',
      lastUpdated: 'V4.1',
    },
    {
      id: '5',
      user: 'Jane101',
      deviceBrand: 'SAMSUNG ',
      deviceModel: 'GalaxyS21',
      deviceID: 'jane101',
      deviceOS: 'Android 11',
      lastUpdated: 'V4.1',
    },
    {
      id: '6',
      user: 'Jane101',
      deviceBrand: 'SAMSUNG ',
      deviceModel: 'GalaxyS21',
      deviceID: 'jane101',
      deviceOS: 'Android 11',
      lastUpdated: 'V4.1',
    },
    {
      id: '7',
      user: 'Jane101',
      deviceBrand: 'SAMSUNG ',
      deviceModel: 'GalaxyS21',
      deviceID: 'jane101',
      deviceOS: 'Android 11',
      lastUpdated: 'V4.1',
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
                      <img src={downIcon} alt="delete" />
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

export default AppBuildTable;
