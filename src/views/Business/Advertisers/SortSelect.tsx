import React, {useState} from "react"
import styled from "styled-components";
import Select from "react-select";
import SortIcon from "../../../assets/icons/SortIcon.svg";


const SortSelect = () => {
     const options = [
       { value: "sortAdvertisers", label: "Sort Advertisers" },
       { value: "newAdviser", label: "New Adviser" },
       { value: "activeAdviser", label: "Active Adviser" },
       { value: "inactiveAdviser", label: "Inactive Adviser" },
       { value: "blockedAdviser", label: "Blocked Adviser" },
     ];
     const [selectedOption, setSelectedOption] = useState("");

     const customStyles = {
       control: (styles, state) => ({
         ...styles,
         backgroundColor: "#fff;",
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
           right: "20%",
         };
       },
       dropdownIndicator: (styles) => ({ display: "none" }),
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
          <Select
            className="select"
            classNamePrefix="select"
            styles={customStyles}
            value={selectedOption}
            options={options}
            placeholder={
              <div className="sort-btn">
                <span className="sort-text">Sort</span>{" "}
                <img src={SortIcon} alt="filter" />
              </div>
            }
          />
        </div>
      </StyledDiv>
    );
}

const StyledDiv = styled.div`
  .select {
    width: 100% !important;
  }
  .sort-btn {
    cursor: pointer;
    text-align: center;
  }
  .sort-text {
    color: #029244;
    font-weight: 400;
  }
`;

export default SortSelect;