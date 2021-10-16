import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Chart from '../../../../assets/icons/impression-chart.svg';
import Cam from '../../../../assets/icons/cam-icon.svg';
import Clicks from '../../../../assets/icons/clicks-icon.svg';
import { MiniChart1 } from '../../../Dashboard/OverView/MiniCharts';
import { MiniChart2 } from '../../../Dashboard/OverView/MiniCharts';
import MTN from '../../../../assets/icons/mtn-icon.svg';
import instances from '../../../../axios/authbearer';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
const AdvertCardView = () => {
  const [datas, setDatas] = useState([]);
  const [avail, setAvail] = useState(false);
  const [impression, setImpression] = useState(0);
  const [click, setClick] = useState(0);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [feedtype, setfeedtype] = useState('');
  const [feed, setfeed] = useState('');
  const [bannertype, setbannertype] = useState('');
  const [banner, setbanner] = useState('');
  const [call, setcall] = useState('');
  const [calltype, setcalltype] = useState('');
  const params = useParams<any>();

  async function fetchdata() {
    if (avail === false) {
      try {
        let res = await instances.get<any>(
          '/advert/v2/admin/single-ad/' + params.id + '?platform=web',
        );

        let result = await res.data;
        if (result && result.status === 'success') {
          setClick(result.data.clicks);
          setImpression(result.data.impression);
          setDatas(result.data);
          setName(result.data.data.name);
          setDescription(result.data.data.description);
          if (result.data.data.channels_media.feed) {
            setfeed(result.data.data.channels_media.feed.file);
            setfeedtype(result.data.data.channels_media.feed.mimetype);
          }
          if (result.data.data.channels_media.banner) {
            setbanner(result.data.data.channels_media.banner.file);
            setbannertype(result.data.data.channels_media.banner.mimetype);
          }
          if (result.data.data.channels_media.call) {
            setcall(result.data.data.channels_media.call.file);
            setcalltype(result.data.data.channels_media.call.mimetype);
          }
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
    <StyledCard>
      <div className="grid-cont-one">
        <div>
          <div className="flex-cont">
            <div>
              <img className="chart" src={Chart} alt="" />
            </div>
            <div>
              <p className="num">{impression}</p>
              <p className="imp">impressions </p>
            </div>
          </div>
          <div className="min-graph">
            <MiniChart1 />
          </div>
        </div>
        <div
          style={{
            width: '100%',
            height: '20em',
            overflowX: 'auto',
            display: 'flex !important',
            flexDirection: 'column',
            justifyContent: 'space-between !important',
          }}
        >
          <div style={{ marginBottom: '0.5em' }}>
            {banner !== '' && bannertype === 'video' && (
              <ReactPlayer controls={true} playing={true} url={'' + banner} />
            )}

            {banner !== '' && bannertype === 'image' && (
              <img
                style={{ width: '100%', height: '20em', objectFit: 'contain' }}
                src={'' + banner}
                alt="images"
              />
            )}
          </div>
          <div style={{ marginBottom: '0.5em' }}>
            {call !== '' && calltype === 'video' && (
              <ReactPlayer controls={true} playing={true} url={'' + call} />
            )}

            {call !== '' && calltype === 'image' && (
              <img
                style={{ width: '100%', height: '20em', objectFit: 'contain' }}
                src={'' + call}
                alt="images"
              />
            )}
          </div>
          <div style={{ marginBottom: '0.5em' }}>
            {feed !== '' && feedtype === 'video' && (
              <ReactPlayer controls={true} playing={true} url={'' + feed} />
            )}

            {feed !== '' && feedtype === 'image' && (
              <img
                style={{ width: '100%', height: '20em', objectFit: 'contain' }}
                src={'' + feed}
                alt="images"
              />
            )}
          </div>
        </div>
      </div>
      <div className="grid-cont-two">
        <div>
          <div>
            <div className="flex-cont">
              <div>
                <img className="chart" src={Clicks} alt="" />
              </div>
              <div>
                <p className="num">{click}</p>
                <p className="imp">clicks</p>
              </div>
            </div>
            <div className="min-graph">
              <MiniChart2 />
            </div>
          </div>
        </div>
        <div>
          <h5 className="push-not">Push Notification</h5>

          <div className="inner-grid-cont">
            <div>
              <h5 className="mtn-title">{name}</h5>
              <p className="mt-3 mtn-txt" style={{ wordWrap: 'break-word' }}>
                {description}
              </p>
            </div>
            <div>
              <img src={MTN} alt="" />
            </div>
          </div>
        </div>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  margin-top: 3rem;
  .grid-cont-one {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 2rem;
  }

  .grid-cont-one > div:nth-child(1) {
    background: #fff;
    border: 1px solid #f0f0f0;
    padding: 1rem;
    border-radius: 10px;
  }

  .grid-cont-one > div:nth-child(2) {
    background: rgba(251, 188, 5, 0.1);

    border: 1px solid #f5f5f5;

    border-radius: 10px;
  }
  .flex-cont {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
  .num {
    font-weight: 800;
    margin: 0;
    font-size: 1.5rem;
    color: #045860;
  }
  .chart {
    width: 3rem;
  }
  .imp {
    margin: 0;
    color: #7b7b7b;
    font-weight: 300;
  }
  .min-graph {
    width: 60%;
    margin-top: 3rem;
  }
  .grid-cont-two {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 2rem;
    margin: 3rem 0rem;
    color: #045860;
  }
  .grid-cont-two > div:nth-child(1) {
    background: #fff;
    border: 1px solid #f0f0f0;
    padding: 1rem;
    border-radius: 10px;
  }

  .inner-grid-cont {
    display: grid;
    margin-top: 2rem;
    grid-template-columns: 3fr 1fr;
    gap: 2rem;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.07);
    border-radius: 10px;
    padding: 1.4rem 2rem;
  }
  .push-not {
    font-weight: 800;
  }
  .mtn-title {
    font-weight: 600;
  }
  .mtn-txt {
    font-size: 1.3rem;
    font-weight: 400;
  }
  .inner-grid-cont > div:nth-child(2) {
    justify-self: right;
  }
`;

export default AdvertCardView;
