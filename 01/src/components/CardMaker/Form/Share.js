import React from 'react';

class Share extends React.Component {
  constructor(props) {
    super(props);
    this.displayPanel = this.displayPanel.bind(this);
  }

  displayPanel(ev) {
    ev.preventDefault();
    this.props.handleCollapse(ev.currentTarget.id);
  }
  render() {
    return (
      <article className="article__share">
        {/* --Share close--> */}
        <div className="form__closed__share" id={this.props.id} onClick={this.displayPanel}>
          <h2 className="article__share__title">
            <i className="fas fa-share-alt"></i> COMPARTE
          </h2>
          <div className={`form__arrow--share ${this.props.activePanel === this.props.id ? 'open' : 'close'}`}>
            <i className="fas fa-chevron-down arrow-js"></i>
          </div>
        </div>
        {/* --Share open--> */}
        <div className={`form__open__share ${this.props.activePanel === this.props.id ? 'active' : 'hidden'}`}>
          <div className="article__share__container">
            <button className="article__share__button" disabled>
              <i className="far fa-address-card"></i>CREAR TARJETA
            </button>
          </div>
          <div className="article__share__create hidden">
            <h3 className="article__share_copy">La tarjeta ha sido creada:</h3>
            <p className="response link_card"></p>
            <a className="article__twitter__button" href="/">
              <div className="child">
                <i className="fab fa-twitter"></i> Compartir en Twitter
              </div>
            </a>
          </div>
        </div>
      </article>
    );
  }
}

export default Share;
