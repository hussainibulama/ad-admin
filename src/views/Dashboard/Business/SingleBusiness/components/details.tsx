import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DetailsCard = () => {
  return (
    <>
      <DetailsWrapper>
        <div className="head">
          <Link to="/" className="status">
            Active
          </Link>

          <div className="icons">
            <Link to="/">
              <img src="/assets/download.svg" alt="" />
            </Link>
            <Link to="/">
              <img src="/assets/Edit.svg" alt="" />
            </Link>
            <Link to="/">
              <img src="/assets/Delete.svg" alt="" />
            </Link>
          </div>
        </div>
        <div className="details">
          <div className="left">
            <h2 className="title">Business Details</h2>
            <p className="phone">
              <span>
                <img src="/assets/call.svg" alt="" />
              </span>
              +234 801 234 5678
            </p>
            <p className="email">
              <span>
                <img src="/assets/message.svg" alt="" />
              </span>
              support@admoni.com
            </p>
            <p className="notify">
              <span>
                <img src="/assets/Chat.svg" alt="" />
              </span>
              Notify
            </p>
          </div>
          <div className="right">
            <p className="logo">
              <img src="/assets/image4.svg" alt="admoni/logo" />
            </p>
            <i className="fas fa-chevron-up arrow"></i>
            <h2>Admoni Investment Comp</h2>

            <p className="address">
              23, Jack Benson Avenue, <br />
              Lekki, Lagos
            </p>
            <p className="id">
              Business ID <span className="number">2122394</span>
            </p>
          </div>
        </div>
      </DetailsWrapper>
    </>
  );
};

const DetailsWrapper = styled.div`
  padding: 1.5rem 4rem;
  background-color: #fff;
  border-radius: 20px;
  /* width: 100%; */
  /* margin: 0 auto; */

  a {
    text-decoration: none;
  }
  .head,
  .icons,
  .details {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
  .details {
    margin-top: 3rem;
  }

  .status {
    padding: 0.6rem 2rem;
    font-weight: bold;
    font-size: 1rem;
    border-radius: 10px;
    color: #029244;
    background: rgba(0, 168, 90, 0.1);
  }
  .icons {
    justify-content: space-evenly;
  }
  .icons a {
    margin-left: 3rem;
  }
  .icons img {
    width: 100%;
    height: 100%;
  }
  .left {
    color: #045860;
    font-size: 1.2rem;
    font-weight: bold;
  }
  .title {
    font-size: 1.2rem;
    font-weight: 500;
  }

  .left span {
    padding-right: 1rem;
  }
  .phone,
  .email {
    padding: 0.5rem;
    padding-right: 5rem;
    font-size: 0.9rem;
  }
  .phone {
    background: rgba(0, 168, 90, 0.1);
  }
  .email {
    background: rgba(0, 103, 192, 0.1);
  }

  .notify {
    display: inline-block;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    font-size: 0.9rem;
    background: rgba(0, 168, 90, 0.1);
    border: 4px solid #d4f0e3;
    border-radius: 105px;
  }

  .notify span {
    padding-right: 0.5rem;
  }

  .right {
    text-align: center;
    color: #045860;
    position: relative;
  }
  .logo {
    width: 20%;
    margin: 0 auto;
    display: inline-block;
  }
  .logo img {
    width: 100%;
    height: 100%;
  }

  .right h2 {
    font-size: 1.5rem;
    margin-top: 0.5rem;
  }

  .arrow {
    position: absolute;
    right: 2%;
    border: 3px solid rgba(2, 52, 57, 0.4);
    width: 50px;
    height: 50px;
    padding-top: 12px;
    font-size: 1.2rem;
    border-radius: 50%;
  }

  .address,
  .id {
    opacity: 0.9;
    margin: 0;
  }

  .id {
    margin: 1rem 0 0 0;
  }
  .number {
    padding: 0.5rem 1.5rem;
    color: #045860;
    font-weight: bold;
    border: 1px solid #045860;
    border-radius: 11px;
    opacity: 1 !important;
  }

  @media only screen and (max-width: 769px) {
    width: 100%;

    .head {
      flex-direction: column;
      align-items: center;
    }

    .details {
      flex-direction: column-reverse;
    }
    .icons {
      margin: 1rem 0;
    }

    .icons a {
      margin: 0 1rem;
    }

    .left {
      margin: 2rem 0;
    }
  }
`;

export default DetailsCard;
