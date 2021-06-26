import React, {useState} from "react"
import styled from "styled-components";
import AdvertisersTable from './AdvertisersTable';
import TransactionTable from './TransactionTable';
import AdvertCard from "./AdvertCard";
import DisplayDetails from "./DisplayDetails"
import DeleteUser from "./DeleteUser"


const AdvertisersView = () => {
  const [details, setDetails] = useState(false)
   const [show, setShow] = useState(false);

   const handleShow = () => {
     setShow(!show);
   };

  const handleChange = () => {
    setDetails(!details);
  }
    return (
      <StyledDiv>
        <div className="grid-cont">
          <div>
            <button className="active-btn">Active</button>
          </div>
          <div>
            <img className="icon" src="/assets/download.svg" alt="" />
            <img className="icon-two" src="/assets/Edit.svg" alt="" />
            <img onClick={handleShow} className="icon-three" src="/assets/Delete.svg" alt="" />
          </div>
        </div>
        <DeleteUser show={show} setShow={setShow} handleShow={handleShow}/>

        <div className="wrapper-section">
          <DisplayDetails details={details} handleChange={handleChange} />
          <AdvertCard />
          <AdvertisersTable />
          {details && <TransactionTable />}
        </div>
      </StyledDiv>
    );
}

const StyledDiv = styled.div`
  background: #fff;
  padding: 2rem;
  .grid-cont {
    display: grid;
    grid-template-columns: 3fr 1fr;
  }
  .grid-cont > div:nth-child(2) {
    justify-self: left;
  }
  .icon-two,
  .icon-three {
    margin-left: 3rem;
  }
  .active-btn {
    background: rgba(0, 168, 90, 0.1);
    border-radius: 10px;
    padding: 0.4rem 1.7rem;
    border: none;
    outline: none;
    color: #029244;
    font-size: 1.3rem;
    font-weight: 600;
  }
  .wrapper-section {
    padding: 0 3rem;
  }
  
`;

export default AdvertisersView;