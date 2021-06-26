import React from "react"
import styled from "styled-components";
import circularcaret from "../../../assets/icons/circularcaret.svg"
import Lock from "../../../assets/icons/Lock.svg";
import Message from "../../../assets/icons/Message.svg";
import Phone from "../../../assets/icons/Call.png";
import ColdStone from "../../../assets/icons/ColdStone.svg";


const AdvertisersView = () => {
    return (
      <StyledDiv>
        <div className="grid-cont">
          <div>
            <button className="active-btn">Active</button>
          </div>
          <div>
            <img className="icon" src="/assets/download.svg" alt="" />
            <img className="icon-two" src="/assets/Edit.svg" alt="" />
            <img className="icon-three" src="/assets/Delete.svg" alt="" />
          </div>
        </div>
        <div className="mt-5 second-section">
          <div>
            <span className="details-heading">Advertisers Account Details</span>
            <img className="circularIcon" src={circularcaret} alt="caret" />
          </div>
          <div className="detail-div mt-5">
            <div>
              <div className="phone-details">
                <div>
                  <img src={Phone} alt="" />
                </div>
                <div className="txt">+234 801 234 5678</div>
              </div>
              <div className="email-details">
                <div>
                  <img src={Message} alt="" />
                </div>
                <div className="txt">coldstoneng@gmail.com</div>
              </div>
              <div className="password-details">
                <div>
                  <img src={Lock} alt="" />
                </div>
                <div className="txt">**************</div>
              </div>
            </div>

            <div>
              <div>
                <img src={ColdStone} alt="" />
                <h5 className="mb-0 coldstone-txt">Coldstone Creamery</h5>
                <p className="mb-0 addr">23, Jack Benson Avenue, <br/> Lekki, Lagos</p>
              </div>
              <div className="mt-4">
                <span className="addr">Ads ID</span>
                <span className="id-span">2122394</span>
              </div>
            </div>
          </div>
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
  .second-section {
    padding: 0 3rem;
  }
  .details-heading {
    color: #045860;
    font-weight: 600;
    font-size: 1.5rem;
    margin-left: 1rem;
  }
  .circularIcon {
    float: right;
  }
  .detail-div {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .detail-div > div:nth-child(2) {
    text-align: center;
    color: #045860;
  }
  .phone-details,
  .email-details,
  .password-details {
    display: flex;
    padding: 1rem 1rem;
    gap: 2rem;
    margin-top: 1.5rem;
  }
  .phone-details {
    background: rgba(0, 168, 90, 0.1);
    border-radius: 5px;
    color: #045860;
  }
  .email-details {
    background: rgba(0, 103, 192, 0.1);
    border-radius: 5px;
    color: #045860;
  }
  .password-details {
    background: rgba(0, 168, 90, 0.1);
    border-radius: 5px;
    color: #045860;
  }
  .txt {
    font-size: 1rem;
    font-weight: 800;
  }
  .id-span {
    padding: 0.3rem 1.8rem;
    background-color: #fff;
    border-radius: 10px;
    font-size: 1.3rem;
    font-weight: 600;
    border: 1px solid #045860;
    margin-left: 1rem;
  }
  .coldstone-txt {
    font-weight: 700;
    font-size: 1.7rem;
  }
  .addr {
    font-size: 1.2rem;
    font-weight: 300;
  }
`;

export default AdvertisersView;