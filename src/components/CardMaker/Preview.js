import React from 'react';
import '../../stylesheets/layout/_preview.scss';

class Preview extends React.Component {
  render() {
    console.log(this.props);
    return (
      <section className={`preview palette${this.props.userInfo.palette}-js`}>
        <div className="wrapper">
          <fieldset className="article__form__noborder">
            <button type="reset" className="preview__button reset__button-js">
              <i className="far fa-trash-alt"></i>Reset
            </button>
          </fieldset>
          <article className="preview__main">
            <div className="preview__main__name">
              <h2 className="preview__main__name__title previewFullName-js">{this.props.userInfo.name || 'Nombre Apellido'}</h2>
              <h3 className="preview__main__name__subtitle previewJob-js">{this.props.userInfo.job || 'Front-End Developer'}</h3>
            </div>
            <div className="preview__main__photo js__profile-preview"></div>
            <nav>
              <ul className="preview__main__icons">
                <li className="li-ssmm">
                  <div
                    className={`preview__main__icons__item previewIconBorder1-js ${
                      this.props.userInfo.phone === '' ? 'unactiveButton' : 'activeButton'
                    }`}
                  >
                    <a
                      className="preview__main__icons__item__tel previewTelephone-js"
                      href={'tel:' + this.props.userInfo.phone}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-mobile-alt"></i>
                    </a>
                  </div>
                </li>
                <li className="li-ssmm">
                  <div
                    className={`preview__main__icons__item previewIconBorder2-js ${
                      this.props.userInfo.email === '' ? 'unactiveButton' : 'activeButton'
                    }`}
                  >
                    <a
                      className="preview__main__icons__item__email previewEmail-js "
                      href={'mailto:' + this.props.userInfo.email}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="far fa-envelope"></i>
                    </a>
                  </div>
                </li>
                <li className="li-ssmm">
                  <div
                    className={`preview__main__icons__item previewIconBorder3-js ${
                      this.props.userInfo.linkedin === '' ? 'unactiveButton' : 'activeButton'
                    }`}
                  >
                    <a
                      className="preview__main__icons__item__linkedin previewLinkedIn-js "
                      href={'https://linkedin.com/in/' + this.props.userInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </li>
                <li className="li-ssmm">
                  <div
                    className={`preview__main__icons__item previewIconBorder4-js ${
                      this.props.userInfo.github === '' ? 'unactiveButton' : 'activeButton'
                    }`}
                  >
                    <a
                      className="preview__main__icons__item__github previewGitHub-js"
                      href={'https://github.com/' + this.props.userInfo.github}
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
Preview.defaultProps = { userInfo: { name: 'Sonia', job: 'Front End' } };

export default Preview;
