import React from "react";
import "../../stylesheets/layout/_preview.scss";

class Preview extends React.Component {
  render() {
    return (
      <section className="preview">
        <div className="wrapper">
          <fieldset className="article__form__noborder">
            <button type="reset" className="preview__button reset__button-js">
              <i className="far fa-trash-alt"></i>Reset
            </button>
          </fieldset>
          <article className="preview__main">
            <div className="preview__main__name">
              <h2 className="preview__main__name__title previewFullName-js">
                Nombre Apellido
              </h2>
              <h3 className="preview__main__name__subtitle previewJob-js">
                Front-End Developer
              </h3>
            </div>
            <div className="preview__main__photo js__profile-preview"></div>
            <nav>
              <ul className="preview__main__icons">
                <li className="li-ssmm">
                  <div className="preview__main__icons__item previewIconBorder1-js">
                    <a
                      className="preview__main__icons__item__tel previewTelephone-js"
                      href="tel:"
                      target="_blank"
                    >
                      <i className="fas fa-mobile-alt"></i>
                    </a>
                  </div>
                </li>
                <li className="li-ssmm">
                  <div className="preview__main__icons__item previewIconBorder2-js">
                    <a
                      className="preview__main__icons__item__email previewEmail-js"
                      href="mailto:"
                      target="_blank"
                    >
                      <i className="far fa-envelope"></i>
                    </a>
                  </div>
                </li>
                <li className="li-ssmm">
                  <div className="preview__main__icons__item previewIconBorder3-js">
                    <a
                      className="preview__main__icons__item__linkedin previewLinkedIn-js"
                      href=""
                      target="_blank"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </li>
                <li className="li-ssmm">
                  <div className="preview__main__icons__item previewIconBorder4-js">
                    <a
                      className="preview__main__icons__item__github previewGitHub-js"
                      href=""
                      target="_blank"
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
export default Preview;
