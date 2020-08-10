import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/layout/_header.scss';
import LogoHand from '../images/logo_kardma.svg';
class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="wrapper">
          <Link to="/">
            <div className="logo__cards">
              <img src={LogoHand} alt="Awesome profile-cards logo" />
            </div>
          </Link>
        </div>
      </header>
    );
  }
}
export default Header;
