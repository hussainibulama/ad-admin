import React from 'react';
import UpdateBtn from './UpdateBtn';
import styled from 'styled-components';
const BuildDetails = () => {
  return (
    <BDWrapper>
      <div className="build-details">
        <h2>User Build Details</h2>

        <div className="subBox">
          <div className="build-box1">
            <div className="sub-details1">
              <table>
                <tbody>
                  <tr>
                    <td>User</td>
                    <td>Jane101</td>
                  </tr>
                  <tr>
                    <td>Device Brand</td>
                    <td>SAMSUNG</td>
                  </tr>
                  <tr>
                    <td>Device Model</td>
                    <td>GalaxyS21</td>
                  </tr>
                  <tr>
                    <td>Device ID</td>
                    <td>jane101</td>
                  </tr>
                  <tr>
                    <td>Device OS</td>
                    <td>Android 11</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="sub-details2">
              <p className="last-update">Last App Updated</p>
              <p>V4.1</p>
              <UpdateBtn />
            </div>
          </div>

          <div className="build-box2">
            <h3>API LEVEL</h3>
            <p>
              Android <span className="api-span">23</span>
            </p>
            <h3>IMEI</h3>
            <p>277233237346637643798829KD</p>
            <h3>TIME ZONE</h3>
            <p id="west">WEST CENTRA AFRICA</p>
          </div>
        </div>
      </div>

      <div className="app-build">
        <h2>App Build</h2>
      </div>
    </BDWrapper>
  );
};

const BDWrapper = styled.div`
  .build-details {
    background-color: #fff;
    padding: 2rem;
    border-radius: 10px;

    h2 {
      margin-bottom: 2rem;
      font-size: 1.2rem;
      font-weight: bold;
      color: #045860;
    }
  }

  .subBox,
  .sub-details2 {
    display: flex;
    justify-content: space-between;
  }

  .build-box1 {
    flex-basis: 65%;
  }

  .sub-details1 {
    padding: 0.5rem;
    border: 1px solid #f0f0f0;
  }
  table {
    margin-left: 6rem;
  }

  .sub-details1 td {
    padding: 5px 2rem;
  }

  .sub-details1 tr td:first-child {
    font-size: 0.9rem;
    font-weight: 600;
    color: #045860;
  }

  .sub-details1 tr td:last-child {
    font-weight: normal;
  }

  .sub-details2 {
    width: 80%;
    p {
      margin: 0;
    }
    margin-top: 1rem;
    background: #e7ffed;
    padding: 0.8rem 0.5rem 0.8rem 2rem;
    border: 1px solid #e6f7ef;
    border-radius: 10px;
    justify-content: space-between;
    align-items: center;
  }

  .last-update {
    font-weight: 600;
    font-size: 1rem;
    color: #045860;
  }

  .build-box2 {
    padding: 2rem;
    border: 1px solid #f0f0f0;
    border-radius: 5px;
  }
  .api-span {
    margin-left: 7rem;
  }

  .build-box2 h3 {
    color: #045860;
    font-size: 1rem;
    font-weight: 600;
  }

  .build-box2 p {
    color: #045860;
    padding: 0.5rem 1.5rem;
    background: #e7ffed;
  }

  #west {
    color: #045860;
    background: #e5f0f9;
  }

  .app-build {
    margin: 2rem 0;
    background-color: #fff;
    padding: 2rem;
    height: 500px;
    border-radius: 10px;
  }
  .app-build h2 {
    font-size: 1.2rem;
    font-weight: bold;
    color: #045860;
  }

  @media only screen and (max-width: 769px) {
    .subBox,
    .sub-details2 {
      width: 100%;
      flex-direction: column;
    }

    .sub-details2 p {
      margin: 1rem 0;
    }

    table {
      margin-left: 0rem;
    }

    .build-box2 {
      margin: 1rem 0;
      padding: 0.5rem;
    }

    .api-span {
      margin-left: 2rem;
    }
  }
`;

export default BuildDetails;
