import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Calendar from '../../../assets/icons/Calendar.svg';
interface CalProps {
  calendar?: boolean;
  all?: boolean;
}

const Duration = ({ calendar, all }: CalProps) => {
  return (
    <DurationWrapper>
      <p>
        <NavLink to="/app/overview" className="extend" activeClassName="active">
          Year
        </NavLink>
      </p>
      <p>
        <NavLink to="/app/overview" activeClassName="active">
          Month
        </NavLink>
      </p>
      <p>
        <NavLink to="/app/overview" activeClassName="active">
          Week
        </NavLink>
      </p>
      <p>
        <NavLink to="/app/overview" activeClassName="active">
          Yesterday
        </NavLink>
      </p>
      <p>
        <NavLink to="#" activeClassName="active">
          Today
        </NavLink>
      </p>
      {calendar && (
        <p className="ml-5 cal">
          <NavLink id="cal-icon" to="#" activeClassName="active">
            <img src={Calendar} className="" alt="calender" />
          </NavLink>
        </p>
      )}

      {all && (
        <p>
          <NavLink to="#" activeClassName="active">
            All
          </NavLink>
        </p>
      )}
    </DurationWrapper>
  );
};
const DurationWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0.5rem 0;

  a {
    font-size: 0.8rem;
    text-decoration: none;
    margin-right: 1rem;
    padding: 0.2rem 1rem;
    border: 2px solid #c4c4c4;
    border-radius: 50px;
    color: #c4c4c4;
  }

  a:hover,
  .active {
    color: rgb(2, 146, 68);
    border: 2px solid #029244;
  }

  .extend {
    padding: 0.2rem 2rem;
  }

  #cal-icon {
    border: none;
  }

  @media only screen and (max-width: 765px) {
    flex-direction: column;

    a {
      margin-right: 0.3rem;
      font-size: 0.7rem;
    }
    img {
      margin: 0;
      padding: 0;
      margin-right: 3rem;
      /* display: block;
        width: 50%;
        margin: 0 auto; */
    }
  }
`;

export default Duration;
