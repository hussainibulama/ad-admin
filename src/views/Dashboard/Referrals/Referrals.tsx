import React from 'react';
import styled from 'styled-components';
import Duration from './Duration';
import Table from './TableRef';
import searchIcon from '../../../assets/icons/search.png';
// import Calendar from '../../../assets/icons/Calendar.svg';
// import SearchInput from "../../../components/SearchInput/search-input."
const Referrals = () => {
  return (
    <ReferralsWrapper>
      <div className="referral">
        <div className="referral-head">
          <Duration />

          <div className="searchRef">
            <div className="ref-search">
              <input type="text" placeholder={'Type user referral to search'} />
              <img className="searchref-icon" src={searchIcon} alt="search" />
            </div>
          </div>
        </div>

        <div className="totalRef">
          <h2>Total User Referrals</h2>
          <p>16455 </p>
        </div>
      </div>

      <div className="referral-table">
        <div className="table-head">
          <h2 className="table-title">User Referrals</h2>

          <Duration calendar={true} />
        </div>
        <Table />
      </div>
    </ReferralsWrapper>
  );
};

const ReferralsWrapper = styled.div`
  .referral {
    background-color: #fff;
    border-radius: 10px;
    padding: 2rem 1rem 2rem 4rem;
  }

  .referral-head {
    margin-bottom: 4rem;
  }
  .referral-head,
  .table-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .totalRef {
    margin: 1rem 0;
  }

  .searchRef {
    flex-basis: 30%;
   
  }

  .ref-search{
    width: 90%;
    border-radius:15px;
    border: 1px solid #00a85a;

    input{
      width:85%;
      margin: .2rem;
      border-radius:15px;
      border: none;
      &:focus{
        outline: none;
    }
    }
  }
   .searchRef ::placeholder {
      color: #029244 !important;
      padding: 1rem;
    }
  }
  .totalRef h2 {
    font-weight: bold;
    font-size: 1rem;
    color: #029244;
    margin: 0;
  }

  .totalRef p {
    font-weight: bold;
    font-size: 1.5rem;
    color: #045860;
    margin: 0;
  }
  .referral-table {
    margin: 1rem 0;
    padding: 2rem;
    background-color: #fff;
  }

  .action-table{
    padding: .5rem;
    border: 1px solid #029244;
    border-radius: 5px;
  }

  .table-title {
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 765px) {
    .referral-head {
      flex-direction: column-reverse;
    }

    .referral{
      padding: 2rem;
    }

    .totalRef{
        width: 100%;
        margin: 0 auto;
        h2,p{
            text-align: center;
        }
    }

    .ref-search{
        width: 90%;
  

    input{
      width:75%;

      }
    }

    .table-head{
        flex-direction: column; 
    }
  }
`;

export default Referrals;
