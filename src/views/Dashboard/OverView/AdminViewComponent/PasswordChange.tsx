import React from "react";
import styled from "styled-components";

const PasswordChange = ({ show, setShow, handleShow }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <StyledDiv>
      <div className={showHideClassName}>
        <div className="form-layout card">
          <div>
            <div className="close" onClick={handleShow}>
              x
            </div>
          </div>
          <div>
            <h5 className="header-title">Change Password</h5>
          </div>
          <form className="mt-4"> 
            <div className="grid-cont">
              <div className="inputWithIcon">
                <label htmlFor="new">
                  <span className="ml-3 label-span">New Password</span>
                  <input type="password" id="new" />
                </label>
              </div>
              <div className="inputWithIcon">
                <label htmlFor="confirm">
                  <span className="ml-3 label-span">Confirm Password</span>
                  <input type="password" id="confirm" />
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  .header-title {
    color: #045860;
    font-weight: 700;
  }
  .grid-cont {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }

  .form-layout {
    padding: 3rem;
    border: 1px solid #f0f0f0;
    border-radius: 10px;
    margin-top: 5rem;
    width: 50%;
    margin: auto auto;
    position: relative;
    top: 30%;
  }
  form {
    padding: 1rem 8rem 1rem 2rem;
    border: 1px solid #f0f0f0;
    border-radius: 10px;
  }
  input[type="password"] {
    width: 100%;
    border: none;
    border-radius: 4px;
    margin: 8px 0;
    outline: none;
    padding: 8px;
    box-sizing: border-box;
    transition: 0.3s;
    background: rgba(0, 168, 90, 0.05);
    border-radius: 10px;
    color: #aac7b9;
    padding: 0.8rem 1rem;
    font-size: 1.2rem;
  }
  .inputWithIcon input[type="password"] {
    color: #aac7b9;
    border: 1px solid #add9ab;
  }
  .inputWithIcon input[type="password"]::placeholder {
    color: #045860;
  }

  .inputWithIcon {
    position: relative;
  }
  .label-span {
    color: #c4c4c4;
    font-size: 1.3rem;
  }
  label {
    width: 100%;
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }

  .modal-main {
    border-radius: 10px;
    padding: 3rem;
    position: fixed;
    background: white;
    width: 50%;
    margin: 0 auto;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .display-block {
    display: block;
  }

  .display-none {
    display: none;
  }
  .close {
    float: right;
    font-size: 1.5rem;
    color: #e31a1c;
    cursor: pointer;
  }

  @media only screen and (min-width: 280px) and (max-width: 767px) {
    .form-layout {
      padding: 1rem;
      border: 1px solid #f0f0f0;
      border-radius: 10px;
      margin-top: 5rem;
      width: 50%;
      margin: auto auto;
      position: relative;
      top: 40%;
    }
    .header-title {
      color: #045860;
      font-weight: 700;
      font-size: 1rem;
      margin-top: 0%.8rem;
    }
    .grid-cont {
      display: flex;
      flex-direction: column;
      gap: 0rem !important;
    }
    form {
      padding: 1rem 0.4rem;
      border: 1px solid #f0f0f0;
      border-radius: 10px;
    }
    .inputWithIcon input[type="password"] {
      color: #aac7b9;
      border: 1px solid #add9ab;
      height: 2rem;
    }
    .label-span {
      color: #c4c4c4;
      font-size: 0.7rem;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1365px) {
    form {
      padding: 2rem;
      border: 1px solid #f0f0f0;
      border-radius: 10px;
    }
    .form-layout {
      padding: 3rem;
      border: 1px solid #f0f0f0;
      border-radius: 10px;
      margin-top: 5rem;
      width: 70%;
      margin: auto auto;
      position: relative;
      top: 40%;
    }
  }
`;

export default PasswordChange;
