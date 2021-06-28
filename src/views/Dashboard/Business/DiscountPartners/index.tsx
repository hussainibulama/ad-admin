import React from 'react';
import { DownIconCards } from '../../../../components/Cards/Cards';
import Bag1 from '../../../../assets/icons/Bag1.svg';
import Bag2 from '../../../../assets/icons/Bag2.svg';
import Scan from '../../../../assets/icons/Scan.svg';
import Wallet from '../../../../assets/icons/Wallet.svg';
import DiscountPartnersTable from './components/discount-table';
import FilterIcon from '../../../../assets/icons/Filter.png';
import SearchInput from '../../../../components/SearchInput/search-input.';

const DiscountPartner = () => {
  return (
    <div>
      <section className="cards-conatiner">
        <div className="rows">
          <div className="cols">
            <DownIconCards
              bgColor="#fff"
              textColor="rgba(4, 88, 96, 1)"
              icon={Bag2}
              title="Products"
              amount={10}
              borderColor="1px solid  "
              numberColor="rgba(4, 88, 96, 1)"
            />
          </div>
          <div className="cols">
            <DownIconCards
              bgColor="#fff"
              textColor="rgba(255, 127, 0, 1)"
              icon={Bag1}
              title="Unavailable Products"
              amount={20}
              borderColor="2px solid rgba(203, 0, 11, 0.24)"
              numberColor="rgba(4, 88, 96, 1)"
            />
          </div>
          <div className="cols">
            <DownIconCards
              bgColor="#fff"
              textColor="rgba(255, 127, 0, 1)"
              icon={Bag1}
              title="Unavailable Products"
              amount={20}
              borderColor="1px solid #C4C4C4"
              numberColor="rgba(4, 88, 96, 1)"
            />
          </div>
          <div className="cols">
            <DownIconCards
              bgColor="#fff"
              textColor="rgba(255, 127, 0, 1)"
              icon={Bag1}
              title="Unavailable Products"
              amount={20}
              borderColor="1px solid #C4C4C4"
              numberColor="rgba(4, 88, 96, 1)"
            />
          </div>
          <div className="cols">
            <DownIconCards
              bgColor="#fff"
              textColor="rgba(255, 127, 0, 1)"
              icon={Bag1}
              title="Unavailable Products"
              amount={20}
              borderColor="1px solid #C4C4C4"
              numberColor="rgba(4, 88, 96, 1)"
            />
          </div>
        </div>
      </section>
      <section className="table-section">
        <div className="top-section w-100 row justify-content-center align-items-center px-2">
          <div className="col-5  mr-3 top-section-text">
            <p>Discount Partner</p>
          </div>
          <div className="col-1"></div>
          <div className="row  col-6 justify-content-end">
            <div className="mr-5">
              <span className="green mr-2">Sort</span>
              <img src={FilterIcon} alt="filter" />
            </div>
            <div className="">
              <SearchInput />
            </div>
          </div>
        </div>

        <section>
          <DiscountPartnersTable />
        </section>
      </section>
    </div>
  );
};

export default DiscountPartner;
