import React, { useState } from 'react';
import styled from 'styled-components';
// import Select from 'react-select';
import Cards from './NotifyCards';
import Selects from './SelectNotify';
import Modal from './Modal';
import arrow1 from '../../../assets/icons/whitearrow.svg';
import arrowRight from '../../../assets/icons/arrowright2.svg';
import image2 from '../../../assets/icons/Image2.svg';

const Notification = () => {
  //file Upload
  const [files, setFiles] = useState({});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files as any;
    setFiles(files[0]);
  };

  const handleUpload = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Image sent');
    // uploadImage(files, storeMerchantImageUrl, null);
  };

  const options = [
    // { value: 'Push Notification', label: 'Push Notification' },
    { value: 'Email', label: 'Email' },
    { value: 'SMS', label: 'SMS' },
    { value: 'In-App', label: 'In-App' },
  ];

  const options3 = [
    { value: 'All User', label: 'All User' },
    { value: 'Single User', label: 'Single User' },
    { value: 'Multiple User', label: 'Multiple User' },
  ];
  const [selectedOptionPush, setSelectedOptionPush] = useState('');
  const [selectedOptionTo, setSelectedOptionTo] = useState('');
  const [selectedOptionUser, setSelectedOptionUser] = useState('');

  const [selectedOption, setSelectedOption] = useState('');
  //state for select
  const handlePushSelect = (e) => {
    setSelectedOptionPush(e.value);
  };
  const handleSendSelect = (e) => {
    setSelectedOptionTo(e.value);
  };
  const handleUserSelect = (e) => {
    setSelectedOptionUser(e.value);
  };

  //Modal Toggle
  const [modalInOpen, setModalIsOpen] = useState(false);
  const modalToggle = () => {
    setModalIsOpen(true);
  };

  const close = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <NotificationWrapper>
        <h2 className="notify-title">Notifications</h2>

        <div className="notify-box">
          <div className="create-subbox">
            <h2 className="create-title">Create Notifications</h2>

            <form className="notify-form">
              <div className="form-group form-text">
                {/* <label htmlFor="exampleInputEmail1">Email address */}
                <input
                  type="text"
                  className="form-control"
                  id="text"
                  aria-describedby="emailHelp"
                  placeholder={'Notification title'}
                />
              </div>

              <div>
                <textarea
                  className="form-textarea"
                  // cols={45}
                  rows={10}
                  placeholder={'Message'}
                ></textarea>
              </div>

              <div className="notify-upload">
                <label htmlFor="fileInput" className="form-label">
                  <img className="image-notify" src={image2} alt="arrowright" />
                  Upload Picture
                </label>

                <button onClick={handleUpload} className="uploades">
                  <img src={arrowRight} alt="arrowright" />
                </button>

                <input
                  type="file"
                  name="file"
                  id="fileInput"
                  style={{ display: 'none' }}
                  onChange={handleChange}
                />
              </div>

              <p className="sendas">Send as</p>

              <Selects
                options={options}
                selectedOption={selectedOptionPush}
                handleTypeSelect={handlePushSelect}
                placeholder={'Push Notifications'}
              />
              <Selects
                options={options}
                selectedOption={selectedOptionTo}
                handleTypeSelect={handleSendSelect}
                placeholder={'Send to'}
              />
              <Selects
                options={options3}
                selectedOption={selectedOptionUser}
                handleTypeSelect={handleUserSelect}
                placeholder={'Select User'}
              />

              <button className="notify-btn">
                <img src={arrow1} alt={'send'} />
                Send
              </button>
            </form>
          </div>

          <div className="previous-subbox">
            <h2 className="previous-title">Previous Sent Notifications</h2>
            <Cards modalToggle={modalToggle} border={true} />
            <div className="sent-box">
              <p className="sent-to">
                sent to: <span>23488</span>
              </p>
              <p>
                <button>Resend</button>
              </p>
            </div>
            <Cards modalToggle={modalToggle} />
            <Cards modalToggle={modalToggle} />
            <Cards modalToggle={modalToggle} />
            <Cards modalToggle={modalToggle} />
            <Cards modalToggle={modalToggle} />
          </div>
        </div>
      </NotificationWrapper>
      {modalInOpen && <Modal close={close} />}
    </>
  );
};

const NotificationWrapper = styled.div`
  padding: 2rem;
  border-radius: 10px;
  background-color: #fff;

  .notify-title,
  .create-title,
  .previous-title {
    font-weight: bold;
    font-size: 1.2rem;
    color: #045860;
  }

  .notify-box,
  .notify-upload,
  .sent-box {
    display: flex;
    justify-content: space-between;
  }
  .create-subbox {
    flex-basis: 60%;
    margin-top: 1rem;
    padding: 3rem 2rem;
    border: 1px solid #92e3a9;
    border-radius: 20px;
  }

  .create-title {
  }

  .notify-form {
    margin: 2rem 0;
    width: 100%;
  }

  .form-control {
    background-color: #f2fbf7;
    border: none !important;
    border-radius: 10px;
  }

  .form-control::placeholder {
    padding: 0 1rem !important;
    font-size: 1.2rem !important;
    font-weight: 500;
  }

  .select__single-value {
    margin-left: 1rem;
    font-size: 1.3rem;
    color: #045860;
  }
  .select {
    border-radius: 10px;
  }

  .form-textarea {
    width: 100%;
    background: #f2fbf7;
    border-radius: 10px;
    border: none;
  }

  textarea::-webkit-input-placeholder {
    padding: 1rem 1.6rem;
    font-size: 1.2rem;
    font-weight: 500;
  }

  .notify-upload {
    width: 60%;
    margin: 1rem 0 2rem 0;
    padding: 0.45rem 0.75rem;
    background: #f2fbf7;
    border: 2px solid #00a85a;
    border-radius: 10px;
    align-items: center;
  }
  .image-notify {
    padding-right: 0.5rem;
  }

  .notify-upload label {
    display: block;
    color: #aac7b9;
    font-size: 1.2rem;
    font-weight: 500;
    margin: 0;
  }

  .notify-upload button {
    border: none;
    background: transparent;
  }

  .sendas {
    margin: 0.5rem;
    font-weight: bold;
    font-size: 0.9rem;
    color: #045860;
  }

  .notify-btn {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    color: #fff;
    font-weight: bold;
    background: #00a85a;
    border: none;
    border-radius: 5px;
  }

  .notify-btn img {
    margin-right: 0.5rem;
  }

  .previous-subbox {
    flex-basis: 35%;
    margin-top: 1rem;
    padding: 2rem 1rem;
    border: 1px solid #92e3a9;
    border-radius: 20px;
  }

  .previous-title {
    font-size: 0.9rem;
    margin-bottom: 2rem;
  }

  .sent-box {
    margin: 1rem 0;
    align-items: center;
    p {
      margin: 0;
    }
  }

  .sent-to {
    color: #7b7b7b;
    font-weight: normal;
  }

  .sent-box span {
    font-weight: bold;
    font-size: 0.7rem;
    color: #029244;
  }

  .sent-box button {
    padding: 0.5rem 1rem;
    color: #fff;
    font-weight: bold;
    background: #00a85a;
    border: none;
    border-radius: 5px;
  }

  @media only screen and (max-width: 768px) {
    .notify-box {
      flex-direction: column;
    }

    .create-subbox,
    .previous-subbox {
      flex-basis: 100%;
      width: 100%;
    }
  }
`;

export default Notification;
