import React from 'react';
import Business from './business';
import Cards from '../../components/Cards/CardComponent';
import Sample from '../../views/SampleTable/page/myTablePage';
const index = () => {
	return (
		<>
			<Business />
			<Cards />
			<Sample />
		</>
	);
};

export default index;
