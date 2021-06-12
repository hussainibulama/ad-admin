import React from "react";
import FilterIcon from "../../../assets/icons/Filter.png";
import SearchInput from "../../../components/SearchInput/search-input.";
import BusinessTable from "../components/BusinessTable/business-table";
const BusinessPage = () => {
  return (
    <div className="p-3">
      <div className="top-section row justify-content-between align-items-center p-3">
        <div className="col-md-3 top-section-text">
          <p>Business</p>
        </div>
        <div className="row col-md-6 justify-content-end">
          <div className="col-lg-2 col-md-3 top-section-sort">
            <span className='green mr-2'>Sort</span>
            <img src={FilterIcon} alt="filter" />
          </div>
          <div className="col-md-4">
            <SearchInput />
          </div>
        </div>
      </div>

      <section>
        <BusinessTable />
      </section>
    </div>
  );
};

export default BusinessPage;
