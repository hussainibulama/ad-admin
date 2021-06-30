import React from "react"
import styled from "styled-components"
import MtnLogo from "../../../../assets/icons/mtn-logo-nav.svg"

const DetailsView = () => {
    return (
      <StyledDiv>
        <h5 className="ads">Ads Details</h5>

        <div className="details-flex">
          <div className="txt"> 32874894 </div>
          <div className="txt">In-App Banner</div>
          <div className="txt">20/03/2021</div>
          <div className="txt">30 Days</div>
          <div className="txt">Lekki</div>
          <div className="txt">2394</div>
          <div className="logo-div">
            <img src={MtnLogo} alt="" />
          </div>
        </div>
      </StyledDiv>
    );
}

const StyledDiv = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 3rem;
  margin: 2rem;

  .ads {
    color: #045860;
    font-size: 1.5rem;
  }

  .details-flex {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 2fr;
    grid-gap: 2rem;
    background: rgba(0, 168, 90, 0.05);
    border-radius: 10px;
    padding: 2rem;
    height: 100%;
    align-items: center;
    margin-top: 3rem;
  }
  .logo-div {
    background: #ffcc00;
    padding: 1rem;
  }
  .txt {
    color: #045860;
    font-weight: 300;
  }
`;

export default DetailsView;