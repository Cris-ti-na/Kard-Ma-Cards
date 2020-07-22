import React from "react";
import "../stylesheets/layout/_footer.scss";
import Logo from "../images/logo-adalab.png";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="wrapper">
          <span className="copy">Kardma Profile-Cards 🌸🧘🏻‍♀️ @2020</span>
          <div className="logo">
            <a
              href="https://adalab.es/"
              target="_blanck"
              title="Ir a la web de Adalab"
            >
              <img className="logo--image" src={Logo} alt="Logo de Adalab" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
