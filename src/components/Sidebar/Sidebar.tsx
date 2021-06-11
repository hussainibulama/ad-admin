import React, { useLayoutEffect, useState } from "react";
import NavWrapper from "./Sidebar.styles";
import "./Sidebar.scss";
import "../../UtilitiesClass/animations/animate.css";
import twitter from "../../assets/twitter.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import P from "../AtomicComponent/Paragraph";

interface Iprops {
  bgColor?: string;
  img1: string;
  img2: string;
}

const Sidebar: React.FC<Iprops> = ({ bgColor, img1, img2 }) => {
  const [active, setActive] = useState<boolean | null>(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [offset, setOffset] = useState(0);

  useLayoutEffect(() => {
    const handleScroll = (e) => {
      setScrolled(window.scrollY > 0);
      setOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleButton = () => {
    setIsOpen(!isOpen);
    setActive(false);
  };

  return (
    <NavWrapper bgColor={bgColor}>
      <header>
        <div className={offset > 10 ? "navbar-closed sticky" : "navbar-closed"}>
          <div className="navbar-brand">
            <img src={offset > 600 ? img2 : img1} alt="logo" />
          </div>
          <div className="nav-button-cont">
            <div
              className={
                isOpen ? "navigation_button open" : "navigation_button"
              }
              onClick={toggleButton}
            >
              <span className="navigation_icon">&nbsp;</span>
            </div>
          </div>
        </div>
        {/* {isOp} */}
        <div className={isOpen ? "cont show" : "cont"}>
          <div
            className={isOpen ? "logo-container show" : "logo-container"}
          ></div>

          <nav className={isOpen ? "topnav show" : "topnav"}>
            <div className="w-100">
              <ul className="nav-linkz">
                <li className={active ? "li-animate" : ""}>
                  <a href="/page1" className="nav-linc">
                    Home{" "}
                  </a>
                </li>
                <li className={active ? "li-animate" : ""}>
                  <a href="/register" className="nav-linc">
                    About us{" "}
                  </a>
                </li>
                <li className={active ? "li-animate" : ""}>
                  <a href="/register" className="nav-linc">
                    services{" "}
                  </a>
                </li>
                <li className={active ? "li-animate" : ""}>
                  <a href="/register" className="nav-linc">
                    Get i touch{" "}
                  </a>
                </li>
              </ul>
              <div className="mt-5">
                <div className="row rw1 justify-content-center">
                  <P
                    color="lightOrange"
                    name="rds.riby.ng"
                    size="1.3rem"
                    weight="bolder"
                    className=" col-sm-10 offset-md-2 "
                  ></P>
                  <div className="col-sm-2 ringed mx-3 rw1">
                    <img src={twitter} alt="" />
                  </div>
                  <div className="col-sm-2 ringed mx-3 rw1">
                    <img src={facebook} alt="" />
                  </div>
                  <div className="col-sm-2 ringed mx-3 rw1">
                    <img src={instagram} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        {/* </Animated> */}
      </header>
    </NavWrapper>
  );
};

export default Sidebar;
