import React, { useState } from 'react';
// import { FormGroup, Input } from "reactstrap";
import Table from '../../../../components/Table';
// import { ReactComponent as Dots } from "../../imgs/dot.svg";
import './business-table.scss';
// import { Popover, PopoverBody } from "reactstrap";
// import { Link } from "react-router-dom";
// import AppModal from "../../components/Modals/AppModal";
// import {useModal} from "../../Helpers/useModal";
import eyeIcon from '../../../../assets/icons/Show.png';
import delIcon from '../../../../assets/icons/delete-user.png';
import caretDown from '../../../../assets/icons/caret-down.png';

const BusinessTable = () => {
	// const appModal = useModal(false);

	const [popoverOpen2, setPopoverOpen2] = useState(false);

	// const toggle = () => setPopoverOpen2(!popoverOpen2);

	const tableHead: { name: keyof TableData; displayName: any }[] = [
		{
			name: 'num',
			displayName: (
				<div className="d-flex align-items-center">
					<span className="mr-1">Business</span>
					<img src={caretDown} alt={caretDown} />
				</div>
			),
		},
		{ name: 'date', displayName: 'Date' },
		{ name: 'complainant', displayName: 'Complainant' },
		{ name: 'reason', displayName: 'Reason' },
		{ name: 'action', displayName: 'ACTION' },
	];

	type TableData = {
		id: string;
		num: React.ReactNode;
		date: string;

		complainant: string;

		reason: string;

		action?: React.ReactNode;
	};

	const products: TableData[] = [
		{
			id: '1',
			num: <h6>#01</h6>,

			date: '26 Jan 2020',
			complainant: 'Adele Kelechi',
			reason: 'Payment Failure',
		},
		{
			id: '2',
			num: <h6>#01</h6>,
			date: '26 Jan 2020',
			complainant: 'Adele Kelechi',
			reason: 'Payment Failure',
		},
		{
			id: '3',
			num: <h6>#01</h6>,
			date: '26 Jan 2020',
			complainant: 'Adele Kelechi',
			reason: 'Payment Failure',
		},
		{
			id: '4',
			num: <h6>#01</h6>,
			date: '26 Jan 2020',
			complainant: 'Adele Kelechi',
			reason: 'Payment Failure',
		},
		{
			id: '5',
			num: <h6>#01</h6>,
			date: '26 Jan 2020',
			complainant: 'Adele Kelechi',
			reason: 'Payment Failure',
		},
	];
	return (
		<>
			{/* <AppModal
       show={appModal.isOpen}
        onClose={appModal.close}
        onOpen={appModal.open}
        // title={"Deactivate Vendor"}
        // paragraph={"deactivate this vendor."}
        // buttonText={"Deactivate Vendor"}
      /> */}
			<div className="disputes">
				<Table<TableData>
					fields={tableHead}
					tableData={products}
					checked={true}
					builder={(field, data) => {
						switch (field.name) {
							case 'action':
								return (
									<div className="cursor-pointer d-flex ">
										{/* <div id="DisputePopover">...</div> */}
										<div className="col-1">
											<img src={eyeIcon} alt="view" />
										</div>
										<div className="col-1">
											<img src={delIcon} alt="delete" />
										</div>
									</div>
								);
							default:
								return data[field.name];
						}
					}}
				/>
			</div>
		</>
	);
};

export default BusinessTable;
