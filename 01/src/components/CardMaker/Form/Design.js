import React from 'react';

class Design extends React.Component {
  render() {
    return (
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
                <input className="palette-js" type="radio" value="1" name="select-color" checked />
                <div className="article__custom__cgreen1"></div>
                <div className="article__custom__cgreen2"></div>
                <div className="article__custom__cgreen3"></div>
              </div>
              <div className="article__custom__cred">
                <input className="palette-js" type="radio" value="2" name="select-color" />
                <div className="article__custom__cred4"></div>
                <div className="article__custom__cred5"></div>
                <div className="article__custom__cred6"></div>
              </div>
              <div className="article__custom__cmix">
                <input className="palette-js" type="radio" value="3" name="select-color" />
                <div className="article__custom__cmix7"></div>
                <div className="article__custom__cmix8"></div>
                <div className="article__custom__cmix9"></div>
              </div>
            </fieldset>
          </div>
        </div>
      </article>
    );
  }
}

export default Design;
