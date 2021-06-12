import React from "react";
import "./search-input.scss";
import searchIcon from "../../assets/icons/search.png";
const SearchInput = () => {
  return (
    <div className="search">
      <input type="text" placeholder="Search" />
      <img className="search-icon" src={searchIcon} alt="search" />
    </div>
  );
};

export default SearchInput;
