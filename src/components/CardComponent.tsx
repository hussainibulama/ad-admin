import React from "react";
import styled from "styled-components"
import { UpIconCards, DownIconCards } from "./Cards";
import Bag1 from "../assets/Bag1.svg";
import Bag2 from "../assets/Bag2.svg";
import Scan from "../assets/Scan.svg";
import Wallet from "../assets/Wallet.svg";




const CardComponent = () => {
    return (
      <StyledDiv>
        <UpIconCards
          bgColor="#fff"
          textColor="rgba(4, 88, 96, 1)"
          icon={Bag2}
          title="Products"
          amount={10}
          borderColor="1px solid #C4C4C4"
          numberColor="rgba(4, 88, 96, 1)"
        />
        <UpIconCards
          bgColor="#fff"
          textColor="rgba(255, 127, 0, 1)"
          icon={Bag1}
          title="Unavailable Products"
          amount={20}
          borderColor="1px solid #C4C4C4"
          numberColor="rgba(4, 88, 96, 1)"
        />
        <DownIconCards
          bgColor="#fff"
          textColor="rgba(4, 88, 96, 1)"
          icon={Scan}
          title="QR Codes"
          amount={5}
          borderColor="1px solid #C4C4C4"
          numberColor="rgba(4, 88, 96, 1)"
        />
        <UpIconCards
          bgColor="#fff"
          textColor="rgba(4, 88, 96, 1)"
          icon={Wallet}
          title="Wallet"
          amount="NGN 34,000,000"
          borderColor="1px solid #C4C4C4"
          numberColor="rgba(4, 88, 96, 1)"
        />
      </StyledDiv>
    );
}
                
const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;

  @media only screen and (min-width: 320px) and (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

export default CardComponent;