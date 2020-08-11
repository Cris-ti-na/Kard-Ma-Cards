import React from 'react';

class Design extends React.Component {
  constructor(props) {
    super(props);
    this.handleColor = this.handleColor.bind(this);
    this.displayPanel = this.displayPanel.bind(this);
  }
  handleColor(ev) {
    const inputValue = ev.currentTarget.value;
    const inputId = ev.currentTarget.id;

    this.props.getInformation(inputId, inputValue);
  }

  displayPanel(ev) {
    ev.preventDefault();
    this.props.handleCollapse(ev.currentTarget.id);
  }

  render() {
    return (
      <article className="article__custom__artdesign" id="diseña">
        <div className="form__closed__design" id={this.props.id} onClick={this.displayPanel}>
          <h2 className="article__custom__titledesign">
            <i className="far fa-object-ungroup"></i>DISEÑA
          </h2>
          <div className="form__arrow--design">
            <i className={`fas fa-chevron-up  ${this.props.activePanel === this.props.id ? 'open' : 'close'}`}></i>
          </div>
        </div>
        <div className={`form__open__design ${this.props.activePanel === this.props.id ? 'active' : 'hidden'}`}>
          <div className="article__custom__ccolor">
            <h3 className="article__custom__subtitdesign">COLORES</h3>
            <fieldset className="article__custom__colors">
              <label className="article__custom__cgreen">
                <input
                  type="radio"
                  value="1"
                  name="select-color"
                  id="palette"
                  onChange={this.handleColor}
                  checked={this.props.userInfo.palette === '1' ? true : false}
                />

                <div className="article__custom__cgreen1"></div>
                <div className="article__custom__cgreen2"></div>
                <div className="article__custom__cgreen3"></div>
                <p className="chrakra__name">REACTJSDHA</p>
              </label>
              <label className="article__custom__cred">
                <input
                  type="radio"
                  value="2"
                  id="palette"
                  name="select-color"
                  onChange={this.handleColor}
                  checked={this.props.userInfo.palette === '2' ? true : false}
                />

                <div className="article__custom__cred4"></div>
                <div className="article__custom__cred5"></div>
                <div className="article__custom__cred6"></div>
                <p className="chrakra__name">SASSRHARA</p>
              </label>
              <label className="article__custom__cmix">
                <input
                  type="radio"
                  value="3"
                  id="palette"
                  name="select-color"
                  onChange={this.handleColor}
                  checked={this.props.userInfo.palette === '3' ? true : false}
                />

                <div className="article__custom__cmix7"></div>
                <div className="article__custom__cmix8"></div>
                <div className="article__custom__cmix9"></div>
                <p className="chrakra__name">JAVASCRIPNA</p>
              </label>
            </fieldset>
          </div>
        </div>
      </article>
    );
  }
}

export default Design;
