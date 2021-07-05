import React from "react"
import styled from "styled-components"
import { DownIconCards } from '../../../components/Cards/Cards';
import RedShield from "../../../assets/icons/RedShield.svg"

const ErrorsCard = () => {
    return (
      <StyledDiv>
        <div className="first-grid">
          <div>
            <DownIconCards
              bgColor="rgba(0, 168, 90, 0.1)"
              textColor="#045860"
              title="User ID"
              amount="jane101"
              borderColor="none"
              numberColor="#00A85A"
            />
          </div>
          <div>
            <DownIconCards
              bgColor="#fff"
              textColor="#CB000B"
              title="Error Code"
              icon={RedShield}
              amount={404}
              borderColor="1px solid #CB000B"
              numberColor="#CB000B"
            />
          </div>
          <div>
            <DownIconCards
              bgColor="rgba(0, 168, 90, 0.1)"
              textColor="#045860"
              title="Platform"
              amount="Android"
              borderColor="none"
              numberColor="#005398"
            />
          </div>
        </div>

        <div className="second-grid">
          <div>
            <DownIconCards
              bgColor="rgba(0, 103, 192, 0.1)"
              textColor="#045860"
              title="Environment"
              amount="Test"
              borderColor="none"
              numberColor="#005398"
            />
          </div>
          <div>
            <DownIconCards
              bgColor="rgba(0, 168, 90, 0.1)"
              textColor="#045860"
              title="App Version"
              amount="4.0.3"
              borderColor="none"
              numberColor="#00A85A"
            />
          </div>
          <div>
            <DownIconCards
              bgColor="rgba(0, 168, 90, 0.1)"
              textColor="#045860"
              title="Operating System"
              amount="Q"
              borderColor="none"
              numberColor="#00A85A"
            />
          </div>
        </div>

        <div className="third-grid">
          <div>
            <DownIconCards
              bgColor="rgba(0, 103, 192, 0.1)"
              textColor="#045860"
              title="Device Make"
              amount="Infinix"
              borderColor="none"
              numberColor="#005398"
            />
          </div>
          <div>
            <DownIconCards
              bgColor="rgba(0, 103, 192, 0.1)"
              textColor="#045860"
              title="Device Module"
              amount="SM900-F"
              borderColor="none"
              numberColor="#005398"
            />
          </div>
        </div>
      </StyledDiv>
    );
}

const StyledDiv = styled.div`
margin: 7rem 0rem 3rem 0rem ;
  .first-grid {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-gap: 2rem;
  }
  .second-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-gap: 2rem;
  }
  .third-grid {
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-gap: 2rem;
  }
`;

export default ErrorsCard;