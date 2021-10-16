import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AdvertCardView from './AdvertCardView';
import { useParams } from 'react-router-dom';
import instances from '../../../../axios/authbearer';
const GraphView = () => {
  const [avail, setAvail] = useState(false);
  const [status, setstatus] = useState();
  const [approval, setapproval] = useState(true);

  const params = useParams<any>();

  async function fetchdata() {
    if (avail === false) {
      setAvail(true);
      try {
        let res = await instances.get<any>(
          '/advert/v2/admin/single-ad/' + params.id + '?platform=web',
        );

        let result = await res.data;
        if (result && result.status === 'success') {
          setstatus(result.data.data.status);
          setapproval(result.data.data.approval_status);
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
  async function approve() {
    try {
      let res = await instances.put<any>(
        '/advert/v2/admin/approve-ad/' + params.id + '?platform=web',
      );

      let result = await res.data;
      if (result && result.status === 'success') {
        setAvail(false);
        fetchdata();
      }
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <StyledAd>
      <div className="head-sect">
        <div>
          <span className="active">{status}</span>&nbsp;
          <button onClick={() => approve()} className="button">
            {approval === true ? 'Disapprove' : 'Approve'}
          </button>
        </div>
        <div>
          <span className="call-ads">On-call Ads</span>
          <img className="icons" src="/assets/Edit.svg" alt="" />
          <img className="icons" src="/assets/Delete.svg" alt="" />
        </div>
      </div>

      <AdvertCardView />
    </StyledAd>
  );
};

const StyledAd = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 2rem 3rem;
  margin: 2rem;
  .head-sect {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .active {
    background: #e7ffed;
    border-radius: 10px;
    color: #045860;
    padding: 0.7rem 2.2rem;
    font-weight: 700;
  }
  .button {
    background: #e7ffed;
    border-radius: 10px;
    color: #045860;
    padding: 0.7rem 2.2rem;
    font-weight: 700;
  }
  .call-ads {
    background: rgba(251, 188, 5, 0.1);
    border-radius: 10px;
    color: #045860;
    padding: 0.7rem 2.2rem;
    font-weight: 600;
  }
  .head-sect > div:nth-child(2) {
    justify-self: right;
  }
  .icons {
    margin-left: 5rem;
  }
`;

export default GraphView;
