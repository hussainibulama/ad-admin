import React, {useState} from "react";
import styled from "styled-components";
import Lock from "../../../../assets/icons/Lock.svg";
import Delete from "../../../../assets/icons/delete-user.svg";
import Edit from "../../../../assets/icons/edit-user.svg";
import Profile from "../../../../assets/icons/Profile.svg";
import Message from "../../../../assets/icons/Message.svg";
import { Link } from "react-router-dom";
import PasswordChange from "./PasswordChange"

const AdminProfile = () => {
    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(!show)
    }
  return (
    <StyledProfile>
      <div className="grid-cont-one">
        <div className="grid-cont">
          <div className="admin">Admin Profile</div>
          <div>
            <div>
              <span className="active">Active</span>
            </div>
          </div>
        </div>
        <div className="grid-cont">
          <div>
            <button className="button" onClick={handleShow}>
              <span>
                <img src={Lock} alt="lock icon" />
              </span>
              <span className="ml-2">Change Password</span>
            </button>
          </div>
          <div>
            <img src={Delete} alt="delete icon" />
          </div>
        </div>
      </div>

      <PasswordChange show={show} setShow={setShow} handleShow={handleShow} />

      <div className="details-section">
        <div>
          <span>
            <img src={Profile} alt="profile" />
            <span className="name ml-3">Shola Abe</span>
          </span>
          <span className="role">Admin</span>
        </div>
        <div className="mt-3">
          <span>
            <img src={Message} alt="email" />
            <span className="name ml-3">shola.abe@admoni.ng</span>
          </span>
        </div>
      </div>

      <div className="btn-div mt-4">
        <button className="edit-btn">
          <Link to="/app/admin/edit" className="link">
            <span>
              <img src={Edit} alt="arrow" />
            </span>
            <span className="ml-3">Edit Admin Profile</span>
          </Link>
        </button>
      </div>

      <div className="toggle-div">
        <label className="switch">
          <span className="text-span">Disabled</span>
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
    </StyledProfile>
  );
};

const StyledProfile = styled.div`
  background-color: #fff;
  width: 65%;
  margin: 0 auto;
  border-radius: 20px;
  padding: 3rem;

  .grid-cont-one {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
    align-items: center;
    width: 100%;
  }
  .grid-cont-one > div:nth-child(2) {
    justify-self: right;
  }
  .grid-cont {
    display: flex;
    gap: 2rem;
    height: 100%;
    align-items: center;
  }
  .admin {
    color: #045860;
    font-size: 1.3rem;
    font-weight: 700;
  }
  .active {
    background: rgba(0, 168, 90, 0.1);
    border-radius: 10px;
    color: #029244;
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
    padding: 0.7rem 2rem;
  }
  .button {
    border: 2px solid #029244;
    border-radius: 10px;
    background: #fff;
    color: #029244;
    padding: 0.5rem 0.7rem;
    font-size: 1.2rem;
    font-weight: 600;
    outline: none;
  }
  .details-section {
    background: rgba(251, 188, 5, 0.17);
    border-radius: 10px;
    padding: 2rem;
    margin-top: 6rem;
  }
  .name {
    color: #045860;
    font-weight: 400;
    font-size: 1.2rem;
  }
  .role {
    justify-self: flex-end;
    background: rgba(0, 168, 90, 0.1);
    border-radius: 5px;
    padding: 0.5rem 2rem;
    font-size: 1.1rem;
  }
  .details-section > div:nth-child(1) {
    display: grid;
    grid-template-columns: 1fr 3fr;
    height: 100%;
    align-items: center;
  }
  .details-section > div:nth-child(1) > span:nth-child(1) {
    display: flex;
    height: 100%;
    align-items: center;
  }
  .details-section > div:nth-child(2) > span:nth-child(1) {
    display: flex;
    height: 100%;
    align-items: center;
  }
  .edit-btn {
    background: #029244;
    border-radius: 10px;
    border: none;
    color: #fff;
    padding: 0.7rem 1rem;
    display: flex;
    height: 100%;
    align-items: center;
    font-size: 1.1rem;
    font-weight: 600;
  }
  .link {
    color: #fff;
    text-decoration: none;
  }
  .toggle-div {
    margin-top: 10rem;
    width: 10%;
    margin-left: auto;
  }
  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .switch input {
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
    background-color: #fff;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border: 1px solid #e31a1c;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 4px;
    bottom: 8px;
    background: #cb6b6c;
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
    right: 150%;
    top: 15%;
    color: #e31a1c;
    font-size: 1.2rem;
  }
  @media only screen and (min-width: 280px) and (max-width: 767px) {
    width: 100%;
    padding: 1rem;

    .grid-cont-one {
      display: grid;
      grid-template-columns: 1fr;
      height: 100%;
      align-items: center;
      grid-gap: 1.8rem;
      width: 100%;
    }

    .grid-cont {
      display: flex;
      gap: 1rem;
      height: 100%;
      align-items: center;
    }
    .details-section {
      background: rgba(251, 188, 5, 0.17);
      border-radius: 10px;
      padding: 0.5rem;
      margin-top: 4rem;
    }
    .details-section > div:nth-child(1) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      height: 100%;
      align-items: center;
    }
    .toggle-div {
      margin-top: 6rem;
      width: 20%;
      margin-left: auto;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1365px) {
  background-color: #fff;
  width: 100%;
  margin: 0 auto;
  border-radius: 20px;
  padding: 3rem;
  }
`;

export default AdminProfile;
