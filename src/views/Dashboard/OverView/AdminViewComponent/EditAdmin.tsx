import React,{useState} from "react";
import styled from "styled-components";
import Profile from "../../../../assets/icons/Profile.svg";
import Message from "../../../../assets/icons/Message.svg";
import ShieldDone from "../../../../assets/icons/Shield-done.svg";
import continueArrow from "../../../../assets/icons/continue-arrow.svg";
import Select from "react-select";

const EditAdmin = () => {
     const options = [
       { value: "Active", label: "Active" },
       { value: "Away", label: "Away" },
       { value: "Disable", label: "Disable" },
     ];
    const [selectedOption, setSelectedOption] = useState("");

     const customStyles = {
       control: (styles, state) => ({
         ...styles,
         backgroundColor: "rgba(0, 168, 90, 0.1);",
         borderRadius: "10px",
         border: state.isFocused ? 0 : 0,
         boxShadow: state.isFocused ? 0 : 0,
         "&:hover": {
           border: state.isFocused ? 0 : 0,
         },
         paddingLeft: "0.8rem",
         paddingRight: "0.4rem",
       }),
       indicatorSeparator: (styles) => ({ display: "none" }),
       placeholder: (defaultStyles) => {
         return {
           ...defaultStyles,
           color: "#029244",
           fontSize: "1rem",
           fontWeight: "700",
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
    <StyledEdit>
      <div className="grid-cont-header">
        <div>
          <h5 className="title mb-0">Edit Admin</h5>
        </div>
        <div>
          <Select
            className="select"
            classNamePrefix="select"
            styles={customStyles}
            value={selectedOption}
            options={options}
            placeholder={<div>Active</div>}
          />
        </div>
      </div>

      <div className="form-layout card">
        <form>
          <div className="grid-cont">
            <div className="inputWithIcon">
              <label htmlFor="name">
                <span className="ml-3 label-span">First Name</span>
                <input type="text" placeholder="First Name" id="name" />
                <img className="all-icons" src={Profile} alt="profile" />
              </label>
            </div>
            <div className="inputWithIcon">
              <label htmlFor="lastname">
                <span className="ml-3 label-span">Last Name</span>
                <input type="text" placeholder="Last Name" id="lastname" />
                <img className="all-icons" src={Profile} alt="profile" />
              </label>
            </div>
          </div>
          <div className="inputWithIcon">
            <label htmlFor="email">
              <span className="ml-3 label-span">Email</span>
              <input type="text" placeholder="Email" id="email" />
              <img className="all-icons" src={Message} alt="email" />
            </label>
          </div>
          <div className="inputWithIcon">
            <label htmlFor="role">
              <span className="ml-3 label-span">Admin Role</span>
              <input type="text" placeholder="Admin Role" id="role" />
              <img className="all-icons" src={ShieldDone} alt="ShieldDone" />
            </label>
          </div>

          <div className="btn-div mt-4">
            <button className="continue-btn">
              <span>Update</span>
              <span>
                <img src={continueArrow} alt="arrow" />
              </span>
            </button>
          </div>
        </form>
      </div>
    </StyledEdit>
  );
};

const StyledEdit = styled.div`
  background-color: #fff;
  border-radius: 20px;
  padding: 3.5rem;
  width: 80%;
  margin: 2rem auto;

  .grid-cont-header {
    display: grid;
    grid-template-columns: 4fr 1fr;
    height: 100%;
    align-items: center;
  }
  .grid-cont-header > div:nth-child(2) {
    /* justify-self: right; */
  }
  .grid-cont {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }
  .title {
    color: rgba(4, 88, 96, 1);
    font-weight: 600;
  }
  .form-layout {
    padding: 3rem 9rem 5rem 2rem;
    border: 1px solid #f0f0f0;
    border-radius: 10px;
    margin-top: 5rem;
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
  .inputWithIcon input[type="text"] {
    padding-left: 3rem;
    color: #aac7b9;
  }
  .inputWithIcon input[type="text"]::placeholder {
    color: #045860;
  }
  .inputWithIcon .all-icons {
    position: absolute;
    left: 0;
    top: 29px;
    padding: 16px 8px 16px 12px;
    color: #aaa;
    transition: 0.3s;
  }
  .inputWithIcon {
    position: relative;
  }
  .label-span {
    color: #c4c4c4;
  }
  label {
    width: 100%;
  }
  .continue-btn {
    background: #00a85a;
    border-radius: 10px;
    border: none;
    color: #fff;
    padding: 0.7rem 1rem 0.7rem 2rem;
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
  @media only screen and (min-width: 280px) and (max-width: 767px) {
    background-color: #fff;
    border-radius: 20px;
    padding: 1rem;
    width: 100%;
    margin: 2rem auto;

    .grid-cont-header {
      display: grid;
      grid-template-columns: 1fr 1fr;
      height: 100%;
      align-items: center;
    }
    .form-layout {
      padding: 1rem;
      border: 1px solid #f0f0f0;
      border-radius: 10px;
      margin-top: 3rem;
    }
    .grid-cont {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 1rem;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1365px) {
    background-color: #fff;
    border-radius: 20px;
    padding: 1rem;
    width: 100%;
    margin: 2rem auto;
    .form-layout {
      padding: 3rem 5rem 5rem 2rem;
      border: 1px solid #f0f0f0;
      border-radius: 10px;
      margin-top: 5rem;
    }
  }
`;

export default EditAdmin;
