import React from "react";
import "../../stylesheets/layout/_preview.scss";

class Preview extends React.Component {
  render() {
    console.log(this.props);
    return (
      <section className={`${this.props.userInfo.palette}`}>
        <div className="wrapper">
          <button type="reset" className="preview__button">
            <i className="far fa-trash-alt"></i>Reset
          </button>

          <article className="preview__main">
            <div className="preview__main__name">
              <h2 className="preview__main__name__title">
                {this.props.userInfo.name || "Nombre Apellido"}
              </h2>
              <h3 className="preview__main__name__subtitle">
                {this.props.userInfo.job || "Front-End Developer"}
              </h3>
            </div>
            <div className="preview__main__photo"></div>
            <nav>
              <ul className="preview__main__icons">
                <li className="li-ssmm">
                  <div className="preview__main__icons__item">
                    <a
                      className="preview__main__icons__item__tel"
                      href={"tel:" + this.props.userInfo.phone}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-mobile-alt"></i>
                    </a>
                  </div>
                </li>
                <li className="li-ssmm">
                  <div className="preview__main__icons__item">
                    <a
                      className="preview__main__icons__item__email"
                      href={"mailto:" + this.props.userInfo.email}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="far fa-envelope"></i>
                    </a>
                  </div>
                </li>
                <li className="li-ssmm">
                  <div className="preview__main__icons__item">
                    <a
                      className="preview__main__icons__item__linkedin"
                      href={
                        "https://linkedin.com/in/" +
                        this.props.userInfo.linkedin
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </li>
                <li className="li-ssmm">
                  <div className="preview__main__icons__item ">
                    <a
                      className="preview__main__icons__item__github"
                      href={"https://github.com/" + this.props.userInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github-alt"></i>
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
          </article>
        </div>
      </section>
    );
  }
}
Preview.defaultProps = { userInfo: { name: "Sonia", job: "Front End" } };

export default Preview;
