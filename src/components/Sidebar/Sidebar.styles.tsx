import React from "react";
import styled from "styled-components";
import "../../UtilitiesClass/animations/animate.css";

interface Iprops {
  bgColor?: string;
}

const NavWrapper: React.FC<Iprops> = ({ bgColor, children }) => {
  const NavStyle = styled.div`
    header {
      width: 100%;
      top: 0 !important;
      transition: all 5s ease;
      overflow-x: hidden !important;
    }
    .navbar-closed {
      background: ${bgColor ? bgColor : "transparent"};
      position: absolute;
      width: 100%;
      z-index: 3000;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: all 5s ease;
      height: 8rem;
      box-shadow: 4px 0px 2px #00000014;
      padding: 3rem 3rem 3rem 20rem;
      .navbar-brand {
        flex: 1 0 70%;
        left: 10%;
        img {
          width: 4.8rem;
        }
      }
      @media (max-width: 900px) {
        padding: 3rem 3rem 3rem 10rem;
      }
    }
    .navbar-closed.sticky {
      position: fixed !important;
    }
    .nav-button-cont {
      flex: 1 0 30%;
      .navigation_button {
        background: white;
        border-radius: 50%;
        height: 4.5rem;
        width: 4.5rem;
        box-shadow: 2px 2px 4px grey;
        z-index: 3000;
        cursor: pointer;
        transition: transform 0.2s ease-in-out;
        transform: translateX(0rem);
        @media (max-width: 576px) {
          height: 4rem;
          width: 4rem;
        }
      }
      .navigation_button.open {
        transform: translateX(10rem);
        border: 1px solid var(--darkGray1);
        opacity: 0.44;
        transition: transform 0.2s ease;
      }
    }
    .cont {
      width: 100%;
      height: 100vh;
      right: -100%;
      /* overflow-x: hidden; */
      position: fixed;
      z-index: 2000;
      transition: all 5s ease;
    }
    .cont.show {
      right: 0% !important;
      transition: all 5s ease;
    }

    .logo-container {
      width: 100%;
      background-color: var(--darkGray1);
      height: 100vh;
      opacity: 0.44;
      position: absolute;
      right: -100%;
      visibility: hidden;
      z-index: 1900;
      animation: slideInLeft 1s ease;
    }
    .logo-container.show {
      right: 0%;
      visibility: visible;
      animation: slideInRight 1s ease;
      perspective: 1000;
    }
    .topnav {
      padding: 3.5rem;
      background: white;
      height: 100vh;
      width: 25%;
      visibility: hidden;
      right: 0%;
      z-index: 2000;
      display: flex;
      justify-content: start;
      position: absolute;
      animation: moveInLeft 1.5s ease;
      perspective: 1000;
    }
    .topnav.show {
      height: 100vh;
      visibility: visible;
      animation: slideInRight 1.4s ease;
    }

    .ml {
      margin-right: 10px;
    }
    .nav-linkz {
      /* visibility: hidden; */
      display: flex;
      width: 100%;
      list-style: none;
      flex-direction: row;
      justify-content: center;
      font-weight: 600;
      overflow: hidden;
      li {
        margin: 4rem 0rem;
        a {
          font-size: 25px;
          color: var(--darkGray1);
          /* transition: all 0.9s ease; */
          position: relative;
          &:hover {
            color: var(--lightOrange);
            width: 100%;
            transition: all 0.2s ease;
            perspective: 3000;
            backface-visibility: hidden;
            &:after {
              transform: translate(0%, 5px);
              left: 0;
              opacity: 1;
              transition: all 0.5s ease;
            }
          }
          &:after {
            content: " ";
            position: absolute;
            height: 3.5px;
            bottom: 0;
            left: -1000%;
            transform: translate(0%, 5px);
            width: 105%;
            background: var(--darkGray1);
            transition: all 3s;
          }
        }
      }
    }
    .nav-linkz.open {
      visibility: visible;
    }

    .nav-linc {
      text-decoration: none;
      font-size: 18px;
      color: #0930f4;
      &:hover {
        color: darkblue;
      }
    }

    .navigation_button .navigation_icon {
      position: relative;
      /* margin-top: 10px; */
      height: 3px;
      width: 2rem;
      background-color: black;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      margin: 0px;
      border-radius: 3px;
      display: inline-block;
      transition: all 0.2s ease-in-out;
      @media (max-width: 576px) {
        width: 1.8rem;
      }
    }

    .navigation_icon::before,
    .navigation_icon::after {
      content: "";
      width: 2rem;
      height: 3px;
      border-radius: 3px;
      background-color: black;
      display: inline-block;
      position: absolute;
      left: 0;
      box-shadow: 0 2px 5px rgba(255, 170, 80, 0.2);
      transition: all 0.2s ease-in-out;
      @media (max-width: 576px) {
        width: 1.8rem;
      }
    }
    .navigation_icon::before {
      transform: translateY(-7px);
    }
    .navigation_icon::after {
      transform: translateY(7px);
    }

    .navigation_button.open .navigation_icon {
      background: transparent;
    }
    .navigation_button.open .navigation_icon::before {
      transform: rotate(45deg);
      background: black;
      top: 0;
    }
    .navigation_button.open .navigation_icon::after {
      transform: rotate(-45deg);
      background: black;
      top: 0;
    }
    @keyframes moveInLeft {
      0% {
        -webkit-transform: translateX(-10rem);
        transform: translateX(-10rem);
        visibility: visible;
      }

      100% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }
    @media screen and (max-width: 768px) {
      /* .topnav {
      transition: all 0.5s ease-in;
      height: 35vh;
      padding: 0;
      margin-top: 0rem;
      margin-right: -8rem;
      justify-content: center;
      align-items: center;
      flex: 1 0 18%;
      display: none;
    } */
      .nav-linkz {
        flex-direction: column;
        /* justify-content:center; */
        /* align-items: center; */
      }
      .topnav.responsive {
        display: flex;
      }
      .topnav.responsive li {
        margin: 1rem 0px;
        &:hover {
          background-color: #ffbf00;
          padding: 0.3rem 0.5rem;
          border-radius: 3px;
        }
        /* opacity: 0; */
      }
    }
  `;
  return <NavStyle>{children}</NavStyle>;
};
export default NavWrapper;
