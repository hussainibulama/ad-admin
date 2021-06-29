import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Switch from '@material-ui/core/Switch';
import UsersIcon from '../../../../assets/icons/users-profile-icon.svg';
import SwapIcon from '../../../../assets/icons/Swap.svg';
import LocationIcon from '../../../../assets/icons/Location.svg';
import KeyLock from '../../../../assets/icons/key-lock.svg';
import ProfilePix from '../../../../assets/images/profile-pix.svg';
import BaseMap from '../../../../assets/images/basemap.svg';
import ChartIcon from '../../../../assets/icons/Chart-total.svg';
import ReferralsIcon from '../../../../assets/icons/referrals.svg';
import SwitchBuuton from '../../../../components/switch';
import DeleteModal from '../../../../components/DeleteModal/index';
import Table from './table';
import { cardData } from '../data';

const Index = () => {
  const [showModal, setShowModal] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      {showModal && <DeleteModal isClose={setShowModal} />}
      <DetailsWrapper>
        <div className="head">
          <Link to="/" className="status">
            Active
          </Link>

          <div className="icons">
            <Link to="/">
              <img src="/assets/download.svg" alt="" />
            </Link>
            <Link to="/">
              <img src="/assets/Edit.svg" alt="" />
            </Link>
            <div onClick={() => setShowModal(true)} className="delete-bin">
              <img src="/assets/Delete.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="details-top">
          <h2 className="title">User Account Details </h2>
          <div className="left">
            {showProfile ? (
              <i
                className="fas fa-chevron-up arrow"
                onClick={() => setShowProfile(false)}
              ></i>
            ) : (
              <div className="profile-section">
                <div className="profile-pix">
                  <img src={ProfilePix} alt="profile pict" />
                  <div className="profile-name">Jeniffer Gabriel</div>
                </div>

                <i
                  className="fas fa-chevron-down arrow"
                  onClick={() => setShowProfile(true)}
                ></i>
              </div>
            )}
          </div>
        </div>
        {showProfile && (
          <div className="details">
            <div className="left">
              <p className="phone">
                <span>
                  <img src="/assets/call.svg" alt="" />
                </span>
                +234 801 234 5678
              </p>
              <p className="username">
                <span>
                  <img src={UsersIcon} alt="" />
                </span>
                jenny01
              </p>
              <p className="email">
                <span>
                  <img src="/assets/message.svg" alt="" />
                </span>
                support@admoni.com
              </p>
              <p className="lock">
                <span>
                  <img src={KeyLock} alt="" />
                </span>
                Last Password Update
              </p>
            </div>
            <div className="right">
              <div className="divrofile-pix">
                <img src={ProfilePix} alt="profile pix" />
              </div>
              <div className="name-section">
                <div className="first-name">
                  <div className="">First Name</div>
                  <div className="title">Jeniffer</div>
                </div>
                <div className="first-name">
                  <div className="">Last Name</div>
                  <div className="title">Gabriel</div>
                </div>
              </div>
              <div className="name-section">
                <div className="first-name">
                  <div className="">Date of Birth</div>
                  <div className="title">07, Nov, 84</div>
                </div>
                <div className="first-name">
                  <div className="">Gender</div>
                  <div className="title">Female</div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="seciton-map">
          <div className="seciton-map-left">
            <img src={BaseMap} alt="map" />
          </div>
          <div className="seciton-map-right">
            <div className="seciton-map-right-top">
              <SwitchBuuton color="#E31A1C" text="Block" />
              <SwitchBuuton color="#029244" text="Redem" />
            </div>
            <div className="seciton-map-right-location">
              <div>Current Location</div>
              <div className="address">
                <img src={LocationIcon} alt="icon" />
                <div>26B, Dr. Ezekuese Close, Lekki Phase 1</div>
                <img src={SwapIcon} alt="icon" />
              </div>
            </div>
            <div className="switch-advert">
              Advert Cap
              <Switch
                className=""
                // checked={state.checkedA}
                // onChange={handleChange}
                name="checkedA"
                // inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
            </div>
          </div>
        </div>
        <div className="card-section d-flex flex-column flex-md-row justify-content-md-between flex-wrap">
          {cardData.map((item, index) => (
            <div className={`card ${item.className} mt-5 `} key={index}>
              <div className="title1">{item.title}</div>
              <div className="value">{item.value}</div>
              <div className="d-flex lex-md-row justify-content-between">
                <div className="wallet-text">{item.wallet}</div>
                <div className="img">
                  {item.icon2 && (
                    <img src={item.icon2} alt="" className="mr-3" />
                  )}
                  <img src={item.icon} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="card-total d-flex mt-5 justify-content-between">
          <div className="card-total-left px-5 py-4">
            <div className="topLeft mb-4">
              <img src={ChartIcon} alt="icon" className="mr-3" />
              Total Impression
            </div>
            <div className="value">450987</div>
            <div className="switch1 ml-auto">
              Turn Ads On and Off{' '}
              <Switch
                className=""
                // checked={state.checkedA}
                // onChange={handleChange}
                name="checkedA"
                // inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
            </div>
          </div>
          <div className="card-total-right px-5 py-4">
            <div className="topLeft mb-4">
              <img src={ReferralsIcon} alt="icon" className="mr-3" />
              Total Referrals
            </div>
            <div className="value">128</div>
            <div className="referal ml-auto">
              <div className="referal-title">Referral Code</div>
              <div className="referal-code ">JOAN6352</div>
            </div>
          </div>
        </div>
        <Table />
      </DetailsWrapper>
    </>
  );
};

const DetailsWrapper = styled.div`
	padding: 1.5rem 4rem;
	background-color: #fff;
	border-radius: 20px;
	/* width: 100%; */
	/* margin: 0 auto; */

	a {
		text-decoration: none;
	}
	.head,
	.icons,
	.details {
		display: flex;
		justify-content: space-between;
		align-content: center;
	}
	.icons{
		border: 3px solid #F0F0F0;
		box-sizing: border-box;
		border-radius: 45px;
		padding: 0.5em 1em;
		

	}

	.details-top{
		display:flex;
		justify-content: space-between;
		align-items: center;
		margin-top:2em;
		.profile-section{
			display:flex;
			justify-content: space-between;
			align-items: center;
			.profile-pix{
				display:flex;
				justify-content: space-between;
				align-items: center;
				margin-right:3em;
				img{
					height:50px;
					width:50px;
					margin-right:1em;
					border: 3px solid #029244;
					border-radius: 50%;
				}
			}
		}
	}
	.details {
		margin-top: 3rem;
	}

	.status {
		padding: 0.9rem 2rem;
		font-weight: bold;
		font-size: 1rem;
		border-radius: 10px;
		color: #029244;
		background: rgba(0, 168, 90, 0.1);
	}
	.icons {
		justify-content: space-evenly;
	}
	.icons a, .delete-bin {
		margin-left: 3rem;
		cursor:pointer;
	}
	.icons img {
		width: 100%;
		height: 100%;
	}
	.left {
		color: #045860;
		font-size: 1.2rem;
		font-weight: bold;
	}
	.title {
		font-size: 1.2rem;
		font-weight: 500;
	}

	.left span {
		padding-right: 1rem;
	}
	.phone,
	.email,.username,.lock {
		padding: 1rem;
		// padding-right: 15rem;
		width:500px;
		font-size: 0.9rem;
		border-radius: 5px;
	}
	.phone {
		background: rgba(0, 168, 90, 0.1);
	}
	.username {
		background: rgba(251, 188, 5, 0.1);
	}
	.email {
		background: rgba(0, 103, 192, 0.1);
	}
	.lock{
		background: rgba(0, 168, 90, 0.1);
	}

	.notify {
		display: inline-block;
		padding: 0.5rem 1rem;
		margin-top: 1rem;
		font-size: 0.9rem;
		background: rgba(0, 168, 90, 0.1);
		border: 4px solid #d4f0e3;
		border-radius: 105px;
	}

	.notify span {
		padding-right: 0.5rem;
	}

	.right {
		text-align: center;
		color: #045860;
		position: relative;
		.profile-pix{
			img{
				height:100px;
				width:100px;
				margin-right:1em;
				border-radius: 50%;
			}
		}
		.name-section{
			display:flex;
			justify-content: space-between;
			align-items: center;
			.first-name:nth-child(1){
				margin-right:3em;
			}
		}
		.name-section:nth-child(1){
			margin-bottom:13em;
		}
	}


	.right h2 {
		font-size: 1.5rem;
		margin-top: 0.5rem;
	}

	.arrow {
		// position: absolute;
		// right: 2%;
		border: 3px solid rgba(2, 52, 57, 0.4);
		width: 50px;
		height: 50px;
		display:flex;
		justify-content: center;
		align-items: center;
		cursor:pointer;
		// padding-top: 12px;
		font-size: 1.2rem;
		border-radius: 50%;
	}
	.seciton-map{
		display:flex;
		justify-content: space-between;
		align-items: center;
		margin-top:3em;
		.seciton-map-right{
			.seciton-map-right-top{
				width:400px;
				display:flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom:3em;
			}
			.seciton-map-right-location{
				background: rgba(0, 168, 90, 0.1);
				border-radius: 10px;
				width: 453px;
				// height: 96px;
				color: #045860;
				padding 2em;
				.address{
					display:flex;
					justify-content: space-between;
					align-items: center;
				}
			}
			.switch-advert{
				margin-top:3em;
				display:flex;
				align-items: center;
					justify-content: space-between;
					padding:1em;
				background: rgba(0, 168, 90, 0.1);
				border-radius: 10px;
				color: #045860;
				font-weight: 500;
				font-size: 18px;
			}
		}
	}
	
	.card-section{
		margin-top:4em;
		.card{
			padding:2em;
			width: 227px;
			background: rgba(0, 168, 90, 0.1);
			border-radius: 10px;
			border:none;
			.value{
				font-weight: bold;
				font-size: 18px;
				color: #045860;
				margin:1em 0;
			}
			.wallet-text{
				color: #F9A825;
			}
		}
		.wallet{
			background: rgba(251, 188, 5, 0.17);	
		}
		.watch{
			background: rgba(106, 27, 154, 0.1);
		}
		.video{
			background: rgba(203, 0, 11, 0.24)
		}
	}
	.card-total{
		.card-total-left, .card-total-right{
			width:48%;
			background: rgba(0, 103, 192, 0.1);
			border-radius: 10px;
			color: #045860;
			.value{
				font-weight: bold;
				font-size: 24px;
				color: #045860;
				margin-left:1.5em;
			}
			.switch1{
				width:200px;
				margin-top:2em;
			}
		}
		.card-total-right{
			background: rgba(0, 168, 90, 0.1);
			color: #045860;
			.referal{
				width:100px;
				.referal-code{
					font-weight: bold;
					font-size: 18px;
				}
			}
		}
	}	
.table-title{
	font-weight: bold;
	font-size: 24px;
	line-height: 16px;
	color: #045860;
	margin-top:4em;
}
.table-hover tbody tr:hover{
	background: rgba(0, 103, 192, 0.1);
}
.table{
	label{
		display:none;
	}
}
.view-all{
	border: 1px solid #029244;
box-sizing: border-box;
border-radius: 15px;
color: #029244;
width: 114px;
height: 26px;
margin-left:auto;
text-align:center;
margin-top:-8em;
cursor:pointer;
}
	@media only screen and (max-width: 769px) {
		width: 100%;

		.head {
			flex-direction: column;
			align-items: center;
		}

		.details {
			flex-direction: column-reverse;
		}
		.icons {
			margin: 1rem 0;
		}

		.icons a, .delete-bin {
			margin: 0 1rem;
		}

		.left {
			margin: 2rem 0;
		}
		.card{
			width:100%;
		}
	}
`;

export default Index;
