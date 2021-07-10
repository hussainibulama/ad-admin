import React from "react"
import styled from "styled-components"
import { DownIconCards } from "../../components/Cards/Cards"
import StarWhite from "../../assets/icons/StarWhite.svg"
import StarColor from "../../assets/icons/StarColor.svg"
import AppTable from './AppTable';

const AppReviews = () => {
    return (
      <StyledDiv>
        <h5>App Review</h5>
        <div className="grid-sec">
          <div>
            <DownIconCards
              bgColor="#fff"
              textColor="#045860"
              title="User Rating"
              amount="4.5"
              icon={StarWhite}
              borderColor="none"
              numberColor="#045860"
            />
          </div>
          <div>
            <DownIconCards
              bgColor="#fff"
              textColor="#045860"
              title="Total Review"
              amount={245}
              icon={StarWhite}
              borderColor="none"
              numberColor="#045860"
            />
          </div>

          <div className="star-flex">
            <div className="border-num">
              <div>
                <span>1</span>{' '}
                <span>
                  <img src={StarColor} alt="star" />
                </span>
              </div>
              <div className="num-star">32</div>
            </div>
            <div>
              <span>2</span>{' '}
              <span className="ml-1">
                <img src={StarColor} alt="star" />
              </span>
            </div>
            <div>
              <span>3</span>{' '}
              <span className="ml-1">
                <img src={StarColor} alt="star" />
              </span>
            </div>
            <div>
              <span>4</span>{' '}
              <span className="ml-1">
                <img src={StarColor} alt="star" />
              </span>
            </div>
            <div>
              <span>5</span>{' '}
              <span className="ml-1">
                <img src={StarColor} alt="star" />
              </span>
            </div>
          </div>
        </div>
        <AppTable/>
      </StyledDiv>
    );
}

const StyledDiv = styled.div`
margin: 1rem;
  .grid-sec {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
  }
  .star-flex {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 0.7rem;
    background: #fff;
    border-radius: 10px;
    padding: 1rem 1rem;
    height: 135px;
    min-width: 250px;
    width: 100%;
  }
  .border-num {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border: 1px solid #f9a825;
    border-radius: 10px;
    max-height: 80px;
    padding: 0.3rem;
    width: 100%;
  }
`;

export default AppReviews