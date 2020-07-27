import React from "react";
import "../stylesheets/layout/_header.scss";
import LogoHand from "../images/logo-cards/logo-kardMA.png";
class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="wrapper">
          <div className="logo__cards">
            <a href="./index.html" title="Go to home page">
              <img src={LogoHand} alt="Awesome profile-cards logo" />
            </a>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
