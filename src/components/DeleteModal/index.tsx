import React from "react";
import "./index.scss";
import searchIcon from "../../assets/icons/Profile.svg";

interface Search {
  placeholder?: string;
}
const Modal = ({isClose}:any) => {
  return (
    <div className="modal-delete">
     <div className="card">
       <div className="card-title">
       Do you want to delete this user?
       </div>
       <div className="card-text">To confirm deletion, input the username of the account</div>
       <div className="card-input-section">

      <img className="" src={searchIcon} alt="search" />
     <input type="text" placeholder="Input Username" />
       </div>
       <div className="card-btn-section">
        <button className="cancel" onClick={()=>isClose(false)}>Cancel</button>
        <button className="yes">Yes</button>
       </div>
     </div>

    </div>
  );
};

export default Modal;
