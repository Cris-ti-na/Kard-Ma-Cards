import React from 'react';

class Fill extends React.Component {
  constructor(props) {
    super(props);
    this.handleText = this.handleText.bind(this);
  }

  handleText(ev) {
    const inputValue = ev.currentTarget.value;
    const inputId = ev.currentTarget.id;
    // console.log('event.currentTarget.value;', event.target.value);
    // console.log('event.currentTarget.id;', event.target.id);

    console.log('handleText de fill está ejecutandose');
    this.props.getInformation(inputId, inputValue);
  }
  render() {
    console.log('props en el render del nieto', this.props); //Compruebo que recibe funcion del padre
    return (
      <article className="article__fill">
        {/* --Fill close--> */}
        <div className="form__closed__fill">
          <h2 className="article__fill__title">
            <i className="far fa-keyboard"></i> RELLENA
          </h2>
          <div className="form__arrow--fill closed">
            <i className="fas fa-chevron-down arrow-js"></i>
          </div>
        </div>
        {/* --Fill open--> */}
        <div className="form__open__fill ">
          {/* hidden */}
          <fieldset className="article__fill__form article__form__noborder">
            <label for="fullName">Nombre completo</label>
            <input
              className="fullName-js"
              id="fullName"
              type="text"
              placeholder="Introduce tu nombre"
              onKeyUp={this.handleText}
              required
            />
            <label for="position">Puesto</label>
            <input
              className="job-js"
              id="position"
              type="text"
              placeholder="Front-End Developer"
              onKeyUp={this.handleText}
              required
            />
            <div className="article__fill__addimg">
              <h3 className="article__fill__titimg">Imagen de perfil</h3>
              <div className="action article__fill__minimg">
                <input
                  type="file"
                  name=""
                  id="img-selector"
                  className="action__hiddenField js__profile-upload-btn article__fill__button addImage-js"
                />
                <button
                  className="action__upload-btn js__profile-trigger article__fill__addImg"
                  type="button"
                >
                  Añadir Imagen
                </button>
                <div className="profile__preview js__profile-preview article__fill__rectangle">
                  <div className="profile__image js__profile-image"></div>
                </div>
              </div>
            </div>
            <label for="email">Email</label>
            <input
              className="email-js"
              id="email"
              type="text"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              placeholder="karmacards@makeapp.com"
              required
              onKeyUp={this.handleText}
            />
            <label for="phone">Teléfono</label>
            <input
              className="telephone-js"
              id="phone"
              type="text"
              pattern="[0-9]{9}"
              placeholder="656 656 656"
              required
              onKeyUp={this.handleText}
            />
            <label for="linkedin">Linkedin</label>
            <input
              className="linkedIn-js"
              id="linkedin"
              type="text"
              placeholder="linkedin.com/in/front-end-developer/"
              required
              onKeyUp={this.handleText}
            />
            <label for="github">Github</label>
            <input
              className="gitHub-js"
              id="github"
              type="text"
              placeholder="https://github.com/adalab"
              required
              onKeyUp={this.handleText}
            />
          </fieldset>
        </div>
      </article>
    );
  }
}

export default Fill;
