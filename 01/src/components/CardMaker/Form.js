import React from 'react';
import '../../stylesheets/layout/_form.scss';
class Form extends React.Component {
  render() {
    return (
      <section className="section__custom wrapper__custom">
        {/* Design article */}
        <form action="" className="miForm">
          <article className="article__custom__artdesign" id="diseña">
            {/* --Design close--> */}
            <div className="form__closed__design">
              <h2 className="article__custom__titledesign">
                <i className="far fa-object-ungroup"></i>DISEÑA
              </h2>
              <div className="form__arrow--design">
                <i className="arrow-js fas fa-chevron-down"></i>
              </div>
            </div>
            {/* --Design open--> */}
            <div className="form__open__design">
              <div className="article__custom__ccolor">
                <h3 className="article__custom__subtitdesign">COLORES</h3>
                <fieldset className="article__custom__colors article__form__noborder">
                  <div className="article__custom__cgreen">
                    <input
                      className="palette-js"
                      type="radio"
                      value="1"
                      name="select-color"
                      checked
                    />
                    <div className="article__custom__cgreen1"></div>
                    <div className="article__custom__cgreen2"></div>
                    <div className="article__custom__cgreen3"></div>
                  </div>
                  <div className="article__custom__cred">
                    <input
                      className="palette-js"
                      type="radio"
                      value="2"
                      name="select-color"
                    />
                    <div className="article__custom__cred4"></div>
                    <div className="article__custom__cred5"></div>
                    <div className="article__custom__cred6"></div>
                  </div>
                  <div className="article__custom__cmix">
                    <input
                      className="palette-js"
                      type="radio"
                      value="3"
                      name="select-color"
                    />
                    <div className="article__custom__cmix7"></div>
                    <div className="article__custom__cmix8"></div>
                    <div className="article__custom__cmix9"></div>
                  </div>
                </fieldset>
              </div>
            </div>
          </article>
          {/* --Fill article--> */}
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
                  required
                />
                <label for="position">Puesto</label>
                <input
                  className="job-js"
                  id="position"
                  type="text"
                  placeholder="Front-End Developer"
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
                />
                <label for="phone">Teléfono</label>
                <input
                  className="telephone-js"
                  id="phone"
                  type="text"
                  pattern="[0-9]{9}"
                  placeholder="656 656 656"
                  required
                />
                <label for="linkedin">Linkedin</label>
                <input
                  className="linkedIn-js"
                  id="linkedin"
                  type="text"
                  placeholder="linkedin.com/in/front-end-developer/"
                  required
                />
                <label for="github">Github</label>
                <input
                  className="gitHub-js"
                  id="github"
                  type="text"
                  placeholder="https://github.com/adalab"
                  required
                />
              </fieldset>
            </div>
          </article>
          {/* --Share article--> */}
          <article className="article__share">
            {/* --Share close--> */}
            <div className="form__closed__share">
              <h2 className="article__share__title">
                <i className="fas fa-share-alt"></i> COMPARTE
              </h2>
              <div className="form__arrow--share closed">
                <i className="fas fa-chevron-down arrow-js"></i>
              </div>
            </div>
            {/* --Share open--> */}
            <div className="form__open__share ">
              {/* hidden */}
              <div className="article__share__container">
                <button className="article__share__button" disabled>
                  <i className="far fa-address-card"></i>CREAR TARJETA
                </button>
              </div>
              <div className="article__share__create hidden">
                <h3 className="article__share_copy">
                  La tarjeta ha sido creada:
                </h3>
                <p className="response link_card"></p>
                <a className="article__twitter__button">
                  <div className="child">
                    <i className="fab fa-twitter"></i> Compartir en Twitter
                  </div>
                </a>
              </div>
            </div>
          </article>
        </form>
      </section>
    );
  }
}
export default Form;
