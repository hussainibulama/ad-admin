import React from 'react';
import ReactDom from 'react-dom';
import styled, { css } from 'styled-components';
import edit from '../../../assets/icons/editgreen.svg';
import deletes from '../../../assets/icons/deletered.svg';
import closed from '../../../assets/icons/closeSquare.svg';
const portalDiv = document.getElementById('portal');
const Modal = ({ close }) => {
  return portalDiv
    ? ReactDom.createPortal(
        <>
          <OVERLAY>
            <ModalBox>
              <p className="float-right" onClick={close}>
                <img src={closed} alt="close" />
              </p>
              <span className="title-span">Notification</span>{' '}
              <h2 className="modal-title">App Update</h2>
              <p className="modal-contents">
                Kindly update your App to enjoy great features Kindly update
                your App to enjoy great features Kindly update your App to enjoy
                great features Kindly update your App to enjoy great features
                Kindly update your App to enjoy great features Kindly update
                your App to enjoy great features{' '}
              </p>
              <div className="modal-func float-right">
                <span>
                  <img src={edit} alt="edit" />
                </span>
                <span>
                  <img src={deletes} alt="delete" />
                </span>
              </div>
            </ModalBox>
          </OVERLAY>
        </>,
        portalDiv,
      )
    : null;
};

const OVERLAY = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
  backdrop-filter: blur(2px);
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    width: 100%;
  }
`;

const Center = css`
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 50px 50px;
  min-width: 32%;
`;

const ModalBox = styled.div`
  ${Center}
  min-width: 42%;
  position: fixed;
  background: #fff;
  z-index: 4000;
  opacity: 1;
  border-radius: 20px;

  .title-span {
    position: relative;
    top: 2rem;
    font-weight: bold;
    font-size: 0.8rem;
    color: #c4c4c4;
  }

  .modal-title {
    /* clear: both; */
    margin-bottom: 1rem;
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
    color: #045860;
  }

  .modal-contents {
    font-weight: normal;
    font-size: 1rem;
    color: #023439;
    opacity: 0.6;
  }

  .modal-func span {
    margin: 0.2rem;
  }

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    width: 85%;
  }
`;

export default Modal;
