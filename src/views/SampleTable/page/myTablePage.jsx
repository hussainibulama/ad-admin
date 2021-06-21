import React from 'react';
import FilterIcon from '../../../assets/icons/Filter.png';
import SearchInput from '../../../components/SearchInput/search-input.';
import BusinessTable from '../components/BusinessTable/myTable';
import styled from 'styled-components';
const myTablePage = () => {
	return (
		<BusinnessWrapper className="p-3 mt-4">
			<div className="top-section">
				<div className="top-section-text">
					<p>Products</p>
				</div>
				<div className="sort-search">
					<div className="col-lg-2 col-md-3 top-section-sort">
						<span className="green mr-2">Sort</span>
						<img src={FilterIcon} alt="filter" />
					</div>
					<div className="col-md-4 top-section-search">
						<SearchInput />
					</div>
				</div>
			</div>

			<section>
				<BusinessTable />
			</section>
		</BusinnessWrapper>
	);
};

const BusinnessWrapper = styled.div`
	background-color: #fff;

	border-radius: 50px;
	p {
		margin: 0;
	}
	.top-section {
		display: flex;
		justify-content: space-between;
		padding: 3rem 0rem 0 2rem;
	}
	.top-section-text {
		display: flex;
	}
	.sort-search {
		display: flex;
		justify-content: center;
		margin-right: 3rem;
	}
`;

export default myTablePage;
