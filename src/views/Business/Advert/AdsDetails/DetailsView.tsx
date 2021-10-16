import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MtnLogo from '../../../../assets/icons/mtn-logo-nav.svg';
import { useParams } from 'react-router-dom';
import instances from '../../../../axios/authbearer';

const DetailsView = () => {
  const [avail, setAvail] = useState(false);
  const [id, setid] = useState(0);
  const [channels, setchannels] = useState();
  const [date, setdate] = useState();
  const [location, setlocation] = useState();
  const params = useParams<any>();

  async function fetchdata() {
    if (avail === false) {
      try {
        let res = await instances.get<any>(
          '/advert/v2/admin/single-ad/' + params.id + '?platform=web',
        );

        let result = await res.data;
        if (result && result.status === 'success') {
          setid(result.data.data.id);
          setchannels(result.data.data.channels.channels);
          setdate(result.data.data.start_date);
          setlocation(result.data.data.location.state);
        }
      } catch (e) {
        console.log(e);
      }
    }
  }
  useEffect(() => {
    if (avail === false) {
      fetchdata();
      setAvail(true);
    }
  });
  return (
    <StyledDiv>
      <h5 className="ads">Ads Details</h5>

      <div className="details-flex">
        <div className="txt"> {id} </div>
        <div className="txt">{JSON.stringify(channels)}</div>
        <div className="txt">{date}</div>
        <div className="txt">30 Days</div>
        <div className="txt">{JSON.stringify(location)}</div>
        <div className="txt">2394</div>
        <div className="logo-div">
          <img src={MtnLogo} alt="" />
        </div>
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 3rem;
  margin: 2rem;

  .ads {
    color: #045860;
    font-size: 1.5rem;
  }

  .details-flex {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 2fr;
    grid-gap: 2rem;
    background: rgba(0, 168, 90, 0.05);
    border-radius: 10px;
    padding: 2rem;
    height: 100%;
    align-items: center;
    margin-top: 3rem;
  }
  .logo-div {
    background: #ffcc00;
    padding: 1rem;
  }
  .txt {
    color: #045860;
    font-weight: 300;
  }
`;

export default DetailsView;
