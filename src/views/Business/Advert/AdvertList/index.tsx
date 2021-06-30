import React from "react"
import styled from "styled-components"
import AllAdvertTable from './AllAdvertTable';
import SearchInput from '../../../../components/SearchInput/search-input.';
import AdvertSortSelect from '../AdvertSortSelect';

const AdvertList = () => {
      const options = [
        { value: 'sortAdvertisers', label: 'Sort Advertisers' },
        { value: 'duration', label: 'Duration' },
        { value: 'activeAdviser', label: 'Active Adviser' },
        { value: 'inactiveAdviser', label: 'Inactive Adviser' },
        { value: 'date', label: 'Date' },
      ];
    return (
      <Styledlist>
        <div className="grid-cont">
          <div>
            <h3 className="mb-0 title">All adverts</h3>
            <div>
              <button className="add-btn">
                <span>
                  <span style={{ opacity: 0.4 }}>+</span>
                </span>
                <span className="ml-3">Add New Advert</span>
              </button>
            </div>
          </div>
          <div className="sub-grid-cont">
                    <AdvertSortSelect options={options}/>
            <div>
              <SearchInput placeholder="Search" />
            </div>
          </div>
        </div>

        <div className="flex-container">
          <div>
            <span>All Adverts</span>
            <span>50</span>
          </div>
          <div>
            <span>Active</span>
            <span>10</span>
          </div>
          <div>
            <span>Inactive</span>
            <span>104</span>
          </div>
          <div>
            <span>Pending</span>
            <span>104</span>
          </div>
        </div>

        <AllAdvertTable />
      </Styledlist>
    );
}

const Styledlist = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 0rem 1rem;
  margin-top: 2rem;
  .title {
    color: rgba(4, 88, 96, 1);
    font-weight: 600;
  }

  .add-btn {
    background: #00a85a;
    border-radius: 20px;
    color: #fff;
    padding: 0.5rem 1.5rem;
    border: none;
    outline: none;
  }
  .add-btn > span:nth-child(1) {
    border: 2px solid #fff;
    font-size: 1rem;
    padding: 0.1rem 0.3rem;
    border-radius: 7px;
  }

  .add-btn > span:nth-child(2) {
    font-size: 1.2rem;
    font-weight: 700;
  }

  .grid-cont {
    display: grid;
    grid-template-columns: 2fr 2fr;
    padding: 3rem 1rem 1rem 1rem;
    height: 100%;
    align-items: center;
    grid-gap: 8rem;
  }
  .grid-cont > div:nth-child(1) {
    justify-self: left;
    display: flex;
    gap: 4rem;
    height: 100%;
    align-items: center;
  }
  .sub-grid-cont {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
    align-items: center;
  }

  .sort-btn {
    cursor: pointer;
  }
  .sort-text {
    color: #029244;
  }
  a {
    text-decoration: none;
    color: #029244;
  }
  .search input {
    width: 100%;
  }

  .flex-container {
    display: flex;
    gap: 3rem;
    margin-top: 4rem;
  }
  .flex-container > div:nth-child(1) {
    background: #e5f0f9;
    padding: 0.5rem 1.5rem;
    border-radius: 10px 10px 0px 0px;
  }
  .flex-container > div:nth-child(1) > span:nth-child(1) {
    font-weight: 600;
    color: #045860;
  }

  .flex-container > div:nth-child(1) > span:nth-child(2) {
    color: #0067c0;
    font-weight: 600;
    background: #b1d1ed;
    margin-left: 3rem;
    padding: 0.2rem 0.3rem;
    border-radius: 5px;
  }
  .flex-container > div:nth-child(2) {
    padding: 0.5rem 1.5rem;
  }
  .flex-container > div:nth-child(2) > span:nth-child(1) {
    font-weight: 600;
    color: #00a85a;
  }

  .flex-container > div:nth-child(2) > span:nth-child(2) {
    font-weight: 600;
    background: #92e3a9;
    border-radius: 5px;
    margin-left: 3rem;
    padding: 0.2rem 0.3rem;
    border-radius: 5px;
  }
  .flex-container > div:nth-child(3) {
    padding: 0.5rem 1.5rem;
  }
  .flex-container > div:nth-child(3) > span:nth-child(1) {
    font-weight: 600;
    color: #e31a1c;
  }

  .flex-container > div:nth-child(3) > span:nth-child(2) {
    font-weight: 600;
    color: #e31a1c;
    background: rgba(203, 0, 11, 0.24);
    border-radius: 5px;
    margin-left: 3rem;
    padding: 0.2rem 0.3rem;
    border-radius: 5px;
  }
  .flex-container > div:nth-child(4) {
    padding: 0.5rem 1.5rem;
  }
  .flex-container > div:nth-child(4) > span:nth-child(1) {
    font-weight: 600;
    color: #f9a825;
  }

  .flex-container > div:nth-child(4) > span:nth-child(2) {
    font-weight: 600;
    color: #f9a825;
    background: rgba(251, 188, 5, 0.17);
    border-radius: 5px;
    margin-left: 3rem;
    padding: 0.2rem 0.3rem;
    border-radius: 5px;
  }
`;
export default AdvertList;
