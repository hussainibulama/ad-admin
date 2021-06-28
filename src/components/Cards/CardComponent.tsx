import React from "react";
import styled from "styled-components"
import { UpIconCards, DownIconCards } from "../Cards/Cards";
import Bag1 from "../../assets/icons/Bag1.svg";
import Bag2 from "../../assets/icons/Bag2.svg";
import Scan from "../../assets/icons/Scan.svg";
import Wallet from "../../assets/icons/Wallet.svg";
import Users from "../../assets/icons/addUsers.svg"
import './cards.scss'


const CardComponent = () => {
    return (
      <div className='card-container' >
        <div className="rows p-3 ">
          <div className="col">
        <UpIconCards
          bgColor="#fff"
          textColor="rgba(4, 88, 96, 1)"
          icon={Bag2}
          title="Products"
          amount={10}
          borderColor="1px solid #C4C4C4"
          numberColor="rgba(4, 88, 96, 1)"
          />
          </div>
          <div className="col">
        <UpIconCards
          bgColor="#fff"
          textColor="rgba(255, 127, 0, 1)"
          icon={Bag1}
          title="Unavailable Products"
          amount={20}
          borderColor="1px solid #C4C4C4"
          numberColor="rgba(4, 88, 96, 1)"
            />
          </div>
           <div className="col"> 
        <DownIconCards
          bgColor="#fff"
          textColor="rgba(4, 88, 96, 1)"
          icon={Users}
          title="Sales Rep"
          amount={5}
          borderColor="1px solid #C4C4C4"
          numberColor="rgba(4, 88, 96, 1)"
            />
          </div>
           <div className="col">
        <UpIconCards
          bgColor="#fff"
          textColor="rgba(4, 88, 96, 1)"
          icon={Wallet}
          title="Wallet"
          amount="NGN 34,000,000"
          borderColor="1px solid #C4C4C4"
          numberColor="rgba(4, 88, 96, 1)"
            />
            </div>
           </div>
      </div >
    );
}
                
 

export default CardComponent;