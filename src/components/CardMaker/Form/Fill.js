import React from 'react';
import PropTypes from 'prop-types';

class Fill extends React.Component {
  constructor(props) {
    super(props);
    this.handleText = this.handleText.bind(this);
    this.displayPanel = this.displayPanel.bind(this);

    //photo component
    this.fr = new FileReader();
    this.myFileField = React.createRef();
    this.handleFilePicker = this.handleFilePicker.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.getImage = this.getImage.bind(this);
    this.getPreview = this.getPreview.bind(this);
  }

  handleText(ev) {
    const inputValue = ev.currentTarget.value;
    const inputId = ev.currentTarget.id;
    this.props.getInformation(inputId, inputValue);
  }


  displayPanel(ev) {
    ev.preventDefault();
    this.props.handleCollapse(ev.currentTarget.id);
  }

  handleFilePicker() {
    this.myFileField.current.click();
  }

  uploadImage(e) {
    const myFile = e.currentTarget.files[0];
    this.fr.addEventListener('load', this.getImage);
    this.fr.readAsDataURL(myFile);
  }

  getImage() {
    const image = this.fr.result;
    this.props.updateAvatar(image);
  }

  getPreview(isDefault, image) {
    return !isDefault ? { backgroundImage: `url(${image})` } : {};
  }

  render() {
    const { isAvatarDefault, photo } = this.props;
    return (
      <article className="article__fill">
        <div className="form__closed__fill" id={this.props.id} onClick={this.displayPanel}>
          <h2 className="article__fill__title">
            <i className="far fa-keyboard"></i> RELLENA
          </h2>
          <div className="form__arrow--fill">
            <div className="form__arrow--design">
              <i className={`fas fa-chevron-up ${this.props.activePanel === this.props.id ? 'open' : 'close'}`}></i>
            </div>
          </div>
        </div>
        <div className={`form__open__fill ${this.props.activePanel === this.props.id ? 'active' : 'hidden'}`}>
          <fieldset className="article__fill__form">
            <label htmlFor="fullName">
              Nombre<span className="required__field"> *</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="Ej. Bette Calman"
              maxLength="20"
              value={this.props.userInfo.name}
              onChange={this.handleText}
              required
            />
            <label htmlFor="position">
              Puesto<span className="required__field"> *</span>
            </label>
            <input id="job" type="text" placeholder="Grandma Karma" value={this.props.userInfo.job} onChange={this.handleText} required />
            <div className="article__fill__addimg">
              <h3 className="article__fill__titimg">Imagen de perfil</h3>
              <div className="action article__fill__minimg">
                <input
                  type="file"
                  ref={this.myFileField}
                  name=""
                  id="photo"
                  className="action__hiddenField article__fill__button"
                  onChange={this.uploadImage}
                />
                <button className="action__upload-btn article__fill__addImg" type="button" onClick={this.handleFilePicker}>
                  Añadir Imagen
                </button>
                <div className="profile__preview  article__fill__rectangle">
                  <div className="profile__image" style={this.getPreview(isAvatarDefault, photo)}></div>
                </div>
              </div>
            </div>
            <label htmlFor="email">
              Email<span className="required__field"> *</span>
            </label>
            <input
              id="email"
              type="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              placeholder="bette@grandmakarma.com"
              required
              value={this.props.userInfo.email}
              onChange={this.handleText}
            />
            <label htmlFor="phone">Teléfono</label>
            <input
              id="phone"
              type="tel"
              pattern="[0-9]{9}"
              maxLength="12"
              placeholder="656 656 656"
              required
              value={this.props.userInfo.phone}
              onChange={this.handleText}
            />
            <label htmlFor="linkedin">
              Linkedin<span className="required__field"> *</span>
            </label>
            <input id="linkedin" type="text" placeholder="grandmaKarma" required value={this.props.userInfo.linkedin} onChange={this.handleText} />
            <label htmlFor="github">
              Github<span className="required__field"> *</span>
            </label>
            <input id="github" type="text" placeholder="grandmaKarma" required value={this.props.userInfo.github} onChange={this.handleText} />
          </fieldset>
        </div>
      </article>
    );
  }
}

// const isEmail = function (props, propName, componentName) {
//   const regex = /^((([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,})))?$/;
//   if (!regex.test(props[propName])) {
//     return new Error(`Invalid prop ${this.email} passed to ${Fill}. Expected a valid email address.`);
//   }
// };

Fill.propTypes = {
  name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  //email: isEmail,
  email: PropTypes.string.isRequired,
  phone: PropTypes.number,
  linkedin: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
};

export default Fill;
