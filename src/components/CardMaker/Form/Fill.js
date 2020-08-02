import React from 'react';

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

  uploadImage(e){
    const myFile = e.currentTarget.files[0];
    this.fr.addEventListener('load', this.getImage);
    this.fr.readAsDataURL(myFile);
  }

  getImage() {
    const image = this.fr.result;
    this.props.updateAvatar(image);
  }

  getPreview(isDefault, image) {
    console.log(image, isDefault);
    return (!isDefault) ? {backgroundImage: `url(${image})`} : {};
  }


  render() {
    const {isAvatarDefault, photo} = this.props;
    return (
      <article className="article__fill">
        <div className="form__closed__fill" id={this.props.id} onClick={this.displayPanel}>
          <h2 className="article__fill__title">
            <i className="far fa-keyboard"></i> RELLENA
          </h2>
          <div className="form__arrow--fill">
            <div className="form__arrow--design">
              <i className={`fas fa-chevron-down ${this.props.activePanel === this.props.id ? 'open' : 'close'}`}></i>
            </div>
          </div>
        </div>
        <div className={`form__open__fill ${this.props.activePanel === this.props.id ? 'active' : 'hidden'}`}>
          <fieldset className="article__fill__form">
            <label htmlFor="fullName">Nombre</label>
            <input id="name" type="text" placeholder="Introduce tu nombre" value={this.props.userInfo.name} onChange={this.handleText} required />
            <label htmlFor="position">Puesto</label>
            <input id="job" type="text" placeholder="Front-End Developer" value={this.props.userInfo.job} onChange={this.handleText} required />
            <div className="article__fill__addimg">
              <h3 className="article__fill__titimg">Imagen de perfil</h3>
              <div className="action article__fill__minimg">
                <input type="file" ref={this.myFileField} name="" id="photo" className="action__hiddenField article__fill__button" onChange={this.uploadImage}/>
                <button className="action__upload-btn article__fill__addImg" type="button" onClick={this.handleFilePicker}>
                  Añadir Imagen
                </button>
                <div className="profile__preview  article__fill__rectangle">
                  <div className="profile__image" style={this.getPreview(isAvatarDefault, photo)}></div>
                </div>
              </div>
            </div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              placeholder="karmacards@makeapp.com"
              required
              value={this.props.userInfo.email}
              onChange={this.handleText}
            />
            <label htmlFor="phone">Teléfono</label>
            <input
              id="phone"
              type="tel"
              pattern="[0-9]{9}"
              placeholder="656 656 656"
              required
              value={this.props.userInfo.phone}
              onChange={this.handleText}
            />
            <label htmlFor="linkedin">Linkedin</label>
            <input
              id="linkedin"
              type="text"
              placeholder="linkedin.com/in/front-end-developer/"
              required
              value={this.props.userInfo.linkedin}
              onChange={this.handleText}
            />
            <label htmlFor="github">Github</label>
            <input
              id="github"
              type="text"
              placeholder="https://github.com/adalab"
              required
              value={this.props.userInfo.github}
              onChange={this.handleText}
            />
          </fieldset>
        </div>
      </article>
    );
  }
}

export default Fill;
