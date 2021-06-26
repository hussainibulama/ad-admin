import React from "react"
import styled from "styled-components"
import circularcaret from "../../../../assets/icons/circularcaret.svg";
import Lock from "../../../../assets/icons/Lock.svg";
import Message from "../../../../assets/icons/Message.svg";
import Phone from "../../../../assets/icons/Call.png";
import ColdStone from "../../../../assets/icons/ColdStone.svg";
import ReversedCircularCaret from "../../../../assets/icons/ReversedCircularCaret.svg";



const DisplayDetails = ({ details, handleChange }) => {
  return (
    <StyledDiv>
      {details === false ? (
        <div className="mt-5 second-section">
          <div>
            <span className="details-heading">Advertisers Account Details</span>
            <img
              onClick={handleChange}
              className="circularIcon"
              style={{ cursor: "pointer" }}
              src={circularcaret}
              alt="caret"
            />
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
                <p className="mb-0 addr">
                  23, Jack Benson Avenue, <br /> Lekki, Lagos
                </p>
              </div>
              <div className="mt-4">
                <span className="addr">Ads ID</span>
                <span className="id-span">2122394</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="adv-off mt-5">
          <div>
            <h5 className="details-heading">Advertisers Account Details</h5>
          </div>
          <div className="adv-off-flex">
            <div className="cold-stone">
              <img src={ColdStone} alt="" />
            </div>
            <div>
              <h5 className="first-coldstone-txt">Coldstone Creamery</h5>
              <p className="first-addr">
                23, Jack Benson Avenue, <br></br>Lekki, Lagos
              </p>
            </div>
            <div>
              <img
                style={{ cursor: "pointer" }}
                onClick={handleChange}
                src={ReversedCircularCaret}
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
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
    font-size: 1.5rem;
  }
  .addr {
    font-size: 1.2rem;
    font-weight: 300;
  }

  /* adv off */
  .adv-off {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
  }
  .adv-off-flex {
    display: flex;
    gap: 3rem;
  }
  .cold-stone {
    width: 5rem;
    height: 5rem;
  }
  .cold-stone > img {
    height: 100%;
  }
  .first-coldstone-txt {
    color: #045860;
    font-weight: 600;
    font-size: 1.5rem;
  }
  .first-addr {
    color: #045860;
  }
`;

export default DisplayDetails
