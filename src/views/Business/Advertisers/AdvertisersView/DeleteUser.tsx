import React from "react";
import styled from "styled-components"
import Profile from "../../../../assets/icons/Profile.svg";

const DeleteUser = ({ show, setShow, handleShow }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <StyledDiv>
      <div className={showHideClassName}>
        <div className="form-section">
          {" "}
          <div>
            <h5 className="table-header">Do you want to delete this user?</h5>
          </div>
          <div className="mt-4">
            <p className="confirm">To confirm deletion, input the username of the account</p>
          </div>
          <div className="inputWithIcon">
            <input type="text" placeholder='Type "Delete"' />
            <img className="all-icons" src={Profile} alt="profile" />
          </div>
          <div className="mt-4">
            <button className="cancel" onClick={handleShow}>cancel</button>
            <button className="yes ml-5">yes</button>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  .form-section {
    background: #fff;
    padding: 4rem 2rem;
    border-radius: 5px;
    width: 30%;
    border-radius: 10px;
    margin-top: 5rem;
    margin: auto auto;
    position: relative;
    top: 30%;
    text-align: center;
  }
  .table-header {
    font-weight: 600px;
  }
  .confirm {
    color: #a3a3a3;
  }

  input[type="text"] {
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
    font-size: 1rem;
  }

  .inputWithIcon input[type="text"] {
    padding-left: 3rem;
    color: #aac7b9;
  }

  .inputWithIcon input[type="text"]::placeholder {
    color: #aac7b9;
  }

  .inputWithIcon {
    position: relative;
  }
  .inputWithIcon .all-icons {
    position: absolute;
    left: 0;
    top: 8px;
    padding: 16px 8px 16px 12px;
    color: #aaa;
    transition: 0.3s;
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
  .cancel {
    color: #00a85a;
    background: #f2fbf7;
    border: 1px solid #d4f0e3;
    border-radius: 15px;
    padding: 0.2rem 2rem;
    font-weight: 500;
    font-size: 1.2rem;
  }
  .yes {
    background: rgba(203, 0, 11, 0.24);
    border: 1px solid rgba(203, 0, 11, 0.24);
    border-radius: 15px;
    color: #e31a1c;
    padding: 0.2rem 2rem;
    font-weight: 500;
    font-size: 1.2rem;
  }
`;

export default DeleteUser;