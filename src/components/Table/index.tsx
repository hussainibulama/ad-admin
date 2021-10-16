import React, { useState } from 'react';
import classNames from 'classnames';
import './table.scss';
import { withStyles } from '@material-ui/core/styles';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import { FormControlLabel } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { useHistory, Link } from 'react-router-dom';

export interface TableField<T> {
  name: keyof T;
  displayName?: string;
}

export interface tableData<T> {
  items: T[];
}

export type FieldBuilder<T, D> = (
  field: TableField<T>,
  data: D,
  row: number,
  column: number,
) => React.ReactNode;

export interface TableProps<T, D> {
  fields: TableField<T>[];
  onSelectAllClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  numSelected?: number;
  checked?: boolean;
  tableData: D[];
  noDataMessage?: string;
  builder: FieldBuilder<T, D>;
  isLoading?: boolean;
  startColumn?: number;
  startRow?: number;
  columns?: number;
  rows?: number;
  before?: React.ReactNode;
  after?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

function Table<TField, TData = TField>({
  checked = false,
  tableData,
  fields,
  builder,
  isLoading = false,
  columns,
  rows,
  after,
  noDataMessage = 'No records found to display',
  startColumn = 0,
  startRow = 0,
  onClick,
}: TableProps<TField, TData & { id?: string | Number }>) {
  const numberOfColumns = columns || fields.length;
  const numberOfRows = tableData.length > 0 ? rows || tableData.length : 0;
  const columnElements: React.ReactNode[] = [];
  const [isChecked] = useState<boolean>(checked);
  const [selected, setSelected] = useState<any[]>([]);

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = tableData.map((n, i) => n.id!);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };
  const history = useHistory();

  const GreenCheckbox = withStyles({
    root: {
      color: '#029244',
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props: CheckboxProps) => <Checkbox color="default" {...props} />);

  for (let i = startRow; i < startRow + numberOfRows; i += 1) {
    const data = tableData[i];
    const rowElements: React.ReactNode[] = [];

    for (let j = startColumn; j < startColumn + numberOfColumns; j += 1) {
      const field = fields[j];

      rowElements.push(
        <td
          onClick={() => history.push('/app/business/ads-details/' + data.id)}
          key={j}
        >
          {builder(field, data, i, j)}
        </td>,
      );
    }

    const isSelected = selected.indexOf(data.id!) !== -1;

    columnElements.push(
      <tr key={i}>
        {isChecked && (
          <td>
            {/* <input
              type="checkbox"
              onChange={(event) =>
                handleChange(event, data.id as unknown as any)
              }
              checked={isSelected}
              name="check"
              className="checkbox"
            /> */}
            <FormControlLabel
              control={
                <GreenCheckbox
                  checked={isSelected}
                  onChange={(event) =>
                    handleChange(event, data.id as unknown as any)
                  }
                  name="check"
                />
              }
              label=""
            />
          </td>
        )}
        {rowElements}
      </tr>,
    );
  }

  return (
    <div className="tableContainer table-responsive">
      <table className="table table-borderless table-hover ">
        <thead>
          <tr>
            {isChecked && (
              <th>
                <FormControlLabel
                  control={
                    <GreenCheckbox
                      checked={
                        tableData.length > 0 &&
                        selected.length === tableData.length
                      }
                      onChange={handleSelectAllClick}
                      name="check"
                    />
                  }
                  label=""
                />
              </th>
            )}
            {fields.map((data) => (
              <th scope="col" key={Math.random().toString()}>
                {data.displayName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="tbody">{columnElements}</tbody>
      </table>
      {/* <BackDrop className="table-loading-back-drop" open={!tableData.length && isLoading}>
        <CircularProgress size={25} />
      </BackDrop> */}
      <div
        className={classNames(
          'table-min-height d-flex align-items-center justify-content-center',
          { 'd-none': columnElements?.length > 0 },
        )}
      >
        <div className={classNames({ 'd-none': isLoading })}>
          {noDataMessage}
        </div>
      </div>
      <div className="table-container-after">{after || null}</div>
    </div>
  );
}

export default Table;
