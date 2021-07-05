import React, { useState } from "react";
import styled from "styled-components";
import Discovery from "../../../../assets/icons/Discovery.svg";
import WalletAdvert from "../../../../assets/icons/WalletAdvert.svg";
import VideoAdvert from "../../../../assets/icons/VideoAdvert.svg";
import TimeCircle from "../../../../assets/icons/TimeCircle.svg";
import VideoAdvertTwo from "../../../../assets/icons/VideoAdvertTwo.svg";
import { MixedIcons } from "../../../../components/Cards/Cards";
import ChartAd from "../../../../assets/icons/ChartAd.svg";
import TicketAd from "../../../../assets/icons/TicketAd.svg";

const AdvertCard = () => {
    return (
      <StyledDiv>
        <div className="mt-5">
          <div className="card-grid">
            <MixedIcons
              bgColor="rgba(0, 168, 90, 0.1);"
              textColor="rgba(4, 88, 96, 1)"
              icon1={Discovery}
              title="Total Clicks"
              amount={298748}
              borderColor="none"
              numberColor="#045860"
            />
            <MixedIcons
              bgColor="rgba(251, 188, 5, 0.17)"
              textColor="#045860"
              icon3={WalletAdvert}
              title="Wallet Balance"
              amount={2000}
              text="Topup Wallet"
              borderColor="none"
              numberColor="#045860"
              secondTextColor="#F9A825"
            />
            <MixedIcons
              bgColor="rgba(106, 27, 154, 0.1)"
              textColor="#045860"
              icon2={TimeCircle}
              icon3={VideoAdvert}
              title="Total Watch Duration"
              amount="5h:35m"
              borderColor="none"
              numberColor="rgba(4, 88, 96, 1)"
            />
            <MixedIcons
              bgColor="rgba(203, 0, 11, 0.24)"
              textColor="#045860;"
              icon3={VideoAdvertTwo}
              title="Total Video watched"
              amount={563}
              borderColor="none"
              numberColor="#045860"
            />
          </div>
        </div>
        <div className="second-card-section">
          <div className="second-grid-cont">
            <div className="second-flex-cont">
              <div>
                {" "}
                <img src={ChartAd} alt="" />
              </div>
              <div>
                <p>Total Impression</p>
                <p className="number-impr">450987</p>
              </div>
            </div>
            <div>
              <div className="switch-toggle-div">
                {" "}
                <label className="switch-div">
                  <span className="text-span">Adverts</span>
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
          </div>
          <div className="ads-div">
            <MixedIcons
              bgColor="rgba(0, 168, 90, 0.1)"
              textColor="#045860;"
              icon3={TicketAd}
              title="Total Ads"
              amount={563}
              borderColor="2px solid #029244"
              numberColor="#045860"
            />
          </div>
        </div>
      </StyledDiv>
    );
}

const StyledDiv = styled.div`
  .card-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1.8rem;
  }
  .second-card-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
  .second-grid-cont {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: rgba(0, 103, 192, 0.1);
    border-radius: 10px;
    padding: 2rem 1.5rem;
  }

  .second-flex-cont {
    display: flex;
    gap: 1rem;
  }
  .number-impr {
    font-size: 1.5rem;
    font-weight: 600;
    color: #045860;
  }
  .switch-toggle-div {
    border: 2px solid #029244;
    border-radius: 50px;
    padding: 1rem;
    padding: 0.4rem;
    height: 3.5rem;
    position: relative;
    width: 80%;
    float: right;
  }

  /* The switch - the box around the slider */
  .switch-div {
    position: relative;
    display: inline-block;
    height: 25px;
    float: right;
    margin-top: 0.3rem;
  }

  .switch-div input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 168, 90, 0.1);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 4px;
    bottom: 4px;
    background: #00a85a;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background: rgba(203, 0, 11, 0.1);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(32px);
    -ms-transform: translateX(32px);
    transform: translateX(32px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
  .text-span {
    position: relative;
    right: 170%;
    top: 15%;
    color: #045860;
    font-size: 1rem;
  }
  .ads-div > div:nth-child(1) {
    height: 100%;
  }
`;

export default AdvertCard; 