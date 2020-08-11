import React from 'react';
import '../../stylesheets/layout/_preview.scss';
import grandmaGif from '../../images/test-bette-colors2.gif';
import grandmaPng from '../../images/test-bette-colors.png';

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.handleResetStyle = this.handleResetStyle.bind(this);
    this.handleGrandmaMove = this.handleGrandmaMove.bind(this);
    this.handleGrandmaQuote = this.handleGrandmaQuote.bind(this);
  }
  handleResetStyle() {
    this.props.resetInfo();
  }
  handleGrandmaMove() {
    this.props.handleGrandma();
    this.handleGrandmaQuote();
  }
  handleGrandmaQuote() {
    return this.props.handleRandomQuote();
  }
  render() {
    const { photo } = this.props;
    return (
      <section className={`preview palette${this.props.userInfo.palette}`}>
        <div className="wrapper">
          <fieldset>
            <button type="reset" className="preview__button" onClick={this.handleResetStyle}>
              <i className="far fa-trash-alt"></i>Reset
            </button>
          </fieldset>
          <article className="preview__main">
            <div className="preview__main__name">
              <h2 className="preview__main__name__title">{this.props.userInfo.name || 'Bette Calman'}</h2>
              <h3 className="preview__main__name__subtitle">{this.props.userInfo.job || 'Grandma  Karma'}</h3>
            </div>
            <div className="preview__main__photo" style={{ backgroundImage: `url(${photo})` }}></div>
            <nav>
              <ul className="preview__main__icons">
                <li>
                  <div className={`preview__main__icons__item ${this.props.userInfo.phone === '' ? 'unactiveButton' : 'activeButton'}`}>
                    <a
                      className="preview__main__icons__item__tel"
                      href={'tel:' + this.props.userInfo.phone}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-mobile-alt"></i>
                    </a>
                  </div>
                </li>
                <li>
                  <div className={`preview__main__icons__item ${this.props.userInfo.email === '' ? 'unactiveButton' : 'activeButton'}`}>
                    <a
                      className="preview__main__icons__item__email  "
                      href={'mailto:' + this.props.userInfo.email}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="far fa-envelope"></i>
                    </a>
                  </div>
                </li>
                <li>
                  <div className={`preview__main__icons__item ${this.props.userInfo.linkedin === '' ? 'unactiveButton' : 'activeButton'}`}>
                    <a
                      className="preview__main__icons__item__linkedin"
                      href={'https://linkedin.com/in/' + this.props.userInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </li>
                <li>
                  <div className={`preview__main__icons__item ${this.props.userInfo.github === '' ? 'unactiveButton' : 'activeButton'}`}>
                    <a
                      className="preview__main__icons__item__github"
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
          <div className="grandmaBot">
            <img
              className="grandmaBot__img"
              src={this.props.grandmaActive ? grandmaGif : grandmaPng}
              alt="talking"
              onMouseOver={this.handleGrandmaMove}
              onClick={this.handleGrandmaMove}
            />
            <p className={`grandmaBot__quote ${this.props.grandmaActive ? 'quoteOn' : 'quoteOff'}`}>{this.handleGrandmaQuote()}</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Preview;
