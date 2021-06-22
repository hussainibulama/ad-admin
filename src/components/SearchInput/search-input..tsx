import React from "react";
import "./search-input.scss";
import searchIcon from "../../assets/icons/search.png";
interface Search {
  placeholder?: string;
}
const SearchInput = ({placeholder}:Search) => {
  return (
    <div className="search">
      <input type="text" placeholder={placeholder} />
      <img className="search-icon" src={searchIcon} alt="search" />
    </div>
  );
};

export default SearchInput;
