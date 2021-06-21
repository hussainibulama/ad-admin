import React, {useState} from "react";
import styled from "styled-components";
import Profile from "../../../../assets/icons/Profile.svg";
import Message from "../../../../assets/icons/Message.svg";
import Lock from "../../../../assets/icons/Lock.svg";
import InfoCircle from "../../../../assets/icons/Info-circle.svg";
import passwordshow from "../../../../assets/icons/passwordshow.svg";
import ShieldDone from "../../../../assets/icons/Shield-done.svg";
import continueArrow from "../../../../assets/icons/continue-arrow.svg";
import Select from "react-select";


const AddAdmin = () => {
    const options = [
      { value: "Admin", label: "Admin" },
      { value: "Marketer", label: "Marketer" },
      { value: "DataAnalysis", label: "Data Analysis" },
      { value: "ContentReviewer", label: "Content Reviewer" },
      { value: "SuperAdmin", label: "Super Admin" },
    ];
    const [selectedOption, setSelectedOption] = useState("");
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
      setPasswordShown(passwordShown ? false : true);
    };
    const handleTypeSelect = (e) => {
      setSelectedOption(e.value);
    };

    const customStyles = {
      control: (styles, state) => ({
        ...styles,
        backgroundColor: "rgba(0,168,90,0)",
         border: state.isFocused ? 0 : 0,
    boxShadow: state.isFocused ? 0 : 0,
    '&:hover': {
       border: state.isFocused ? 0 : 0
    }
    
      }),
      indicatorSeparator: (styles) => ({ display: "none" }),
      placeholder: (defaultStyles) => {
        return {
          ...defaultStyles,
          color: "#045860",
          fontSize: "1.2rem",
        };
      },
      dropdownIndicator: (styles) => ({ color: "#045860" }),
      option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isFocused ? "#4285F4" : "#fff",
      color: isFocused ? "#fff" : "#263238",
      fontSize: "1.3rem",
      cursor: isDisabled ? "not-allowed" : "default",
    };
  },
    };
   
  return (
    <StyledDiv>
      <div>
        <h3 className="title">Add Admin</h3>
      </div>
      <div className="form-layout">
        <form>
          <div className="grid-cont">
            <div className="inputWithIcon">
              <input type="text" placeholder="First Name" />
              <img className="all-icons" src={Profile} alt="profile" />
            </div>
            <div className="inputWithIcon">
              <input type="text" placeholder="Last Name" />
              <img className="all-icons" src={Profile} alt="profile" />
            </div>
          </div>
          <div className="inputWithIcon mt-3">
            <input type="text" placeholder="Official Email" />
            <img className="all-icons" src={Message} alt="profile" />
          </div>
          <div className="inputWithIcon mt-3">
            <Select
              className="select"
              classNamePrefix="select"
              styles={customStyles}
              options={options}
              value={options.filter(function (option) {
                return option.value === selectedOption;
              })}
              onChange={handleTypeSelect}
              placeholder={<div>Select Role</div>}
            />
            <img className="select-icon" src={ShieldDone} alt="lock" />
          </div>

          {/* error div */}
          <div className="error-area">
            <div className="error-grid">
              <div>
                <img src={InfoCircle} alt="info-circle" />
              </div>
              <div className="register">
                Register with your Admoni official email.
              </div>
            </div>
            <div>
              <div>x</div>
            </div>
          </div>

          <div className="inputWithIcon mt-3">
            <input
              type={passwordShown ? "text" : "password"}
              placeholder="Password"
            />
            <img className="all-icons" src={Lock} alt="lock" />
            <img
              className="eye-icon"
              onClick={togglePasswordVisiblity}
              src={passwordshow}
              alt="eyelock"
            />
          </div>

          <div className="btn-div mt-5">
            <button className="continue-btn">
              <span>Continue</span>
              <span>
                <img src={continueArrow} alt="arrow" />
              </span>
            </button>
          </div>
        </form>
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  background-color: #fff;
  border-radius: 20px;
  padding: 3rem 5rem;
  width: 80%;
  margin: 0 auto;
  .grid-cont {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }
  .title {
    text-align: center;
    color: rgba(4, 88, 96, 1);
  }
  .form-layout {
    padding: 4rem 8rem;
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
    font-size: 1.2rem;
  }
  .react-select {
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

  .inputWithIcon input[type="text"] {
    padding-left: 3rem;
    color: #aac7b9;
  }
  .inputWithIcon .select {
    padding-left: 2.5rem;
    padding-right: 1rem;
    color: #aac7b9;
  }
  .inputWithIcon input[type="text"]::placeholder {
    color: #aac7b9;
  }

  .inputWithIcon input[type="password"] {
    padding-left: 3rem;
    color: #aac7b9;
  }
  .inputWithIcon input[type="password"]::placeholder {
    color: #aac7b9;
  }

  .inputWithIcon {
    position: relative;
  }
  .inputWithIcon .select-icon {
    position: absolute;
    left: 0;
    top: 8px;
    padding: 6px 8px 16px 12px;
    color: #aaa;
    transition: 0.3s;
  }
  .inputWithIcon .all-icons {
    position: absolute;
    left: 0;
    top: 8px;
    padding: 16px 8px 16px 12px;
    color: #aaa;
    transition: 0.3s;
  }
  .inputWithIcon .eye-icon {
    position: absolute;
    left: 91%;
    top: 8px;
    padding: 16px 8px 16px 12px;
    color: #aaa;
    transition: 0.3s;
  }
  .continue-btn {
    background: #00a85a;
    border-radius: 10px;
    border: none;
    color: #fff;
    padding: 0.7rem 1.5rem 0.7rem 2rem;
    margin: 0 auto;
    display: flex;
    height: 100%;
    align-items: center;
  }
  .continue-btn span:nth-child(2) {
    margin-left: 1.4rem;
  }
  .continue-btn span:nth-child(1) {
    font-size: 1.4rem;
    font-weight: 600;
  }
  .btn-div {
    text-align: center;
  }
  .error-area {
    background: rgba(251, 188, 5, 0.05);
    border: 1px solid #e1b000;
    box-sizing: border-box;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 3fr 1fr;
    padding: 1rem 1rem 1.5rem 1rem;
    margin-top: 1.7rem;
  }
  .error-grid {
    display: flex;
    height: 100%;
    align-items: center;
  }
  .error-grid > div:nth-child(2) {
    margin-left: 1rem;
    color: #045860;
    font-size: 1.1rem;
  }
  .error-area > div:nth-child(2) {
    justify-self: right;
  }
  .error-area > div:nth-child(2) > div {
    background: #e31a1c;
    color: white;
    font-weight: 900;
    height: 1.4rem;
    width: 1.4rem;
    display: flex;
    align-content: center;
    justify-content: center;
    border-radius: 2px;
  }
  .select[class*="-indicatorSeparator"] {
    display: none !important;
  }
  .select[class*="-container"] {
    background: rgba(0, 168, 90, 0.05);
  }
  .select__menu {
    position: absolute;
    right: 0%;
  }
  .select__single-value{
      font-size: 1.2rem;
      color: #045860;
  }
  @media only screen and (min-width: 280px) and (max-width: 767px) {
    padding: 1rem;
    width: 100%;
    .grid-cont {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 0.4rem;
    }
    .register {
      font-size: 0.8rem;
    }
    .form-layout {
      padding: 0 !important;
    }
    .inputWithIcon .eye-icon {
      position: absolute;
      left: 85%;
      top: 8px;
      padding: 16px 8px 16px 12px;
      color: #aaa;
      transition: 0.3s;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1365px) {
    background-color: #fff;
    border-radius: 20px;
    padding: 3rem 5rem;
    width: 100%;
    margin: 0 auto;

    .form-layout {
      padding: 3rem 3rem;
    }
    .inputWithIcon .eye-icon {
      position: absolute;
      left: 90%;
      top: 8px;
      padding: 16px 8px 16px 12px;
      color: #aaa;
      transition: 0.3s;
    }
  }
`;

export default AddAdmin;
