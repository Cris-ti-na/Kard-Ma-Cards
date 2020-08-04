import React from 'react';
import Form from './Form/Form';
import Preview from './Preview';
import Footer from '../Footer';
import Header from '../Header';
import defaultImage from './Form/image/defaultImage';
// import get, set from ''

class CardMaker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAvatarDefault: true,
      userInfo: {
        palette: '1',
        name: '',
        job: '',
        photo: defaultImage,
        email: '',
        phone: '',
        linkedin: '',
        github: '',
      },
      activePanel: 'collapse-1',
      formCompleted: false,
    };
    this.initialState = this.state;

    this.handleInfo = this.handleInfo.bind(this);
    this.handleCollapse = this.handleCollapse.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.updateAvatar = this.updateAvatar.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  //Modifica el valor de UserInfo con los datos recogidos en el input del formulario
  handleInfo(inputId, inputValue) {
    this.setState((prevState) => {
      return {
        userInfo: {
          ...prevState.userInfo,
          [inputId]: inputValue,
        },
      };
    }, () => this.validateForm());
  }

  //Valida que estén todos los campos rellenos excepto el teléfono que no es obligatorio
  validateForm() {
    let completedValues = 0;
    Object.entries(this.state.userInfo).forEach(([key, value]) => {
      if(value !== '' && key !== 'phone') {
        completedValues = completedValues + 1;
      }
    })
    if(completedValues === 7) {
      this.setState({formCompleted: true});
    } else if(completedValues !== 7){
      this.setState({formCompleted: false});
    }
  }

  //actualiza la imagen de la tarjeta y recoge que ya no es la imagen por defecto
  updateAvatar(img) {
    const { userInfo } = this.state;
    this.setState((prevState) => {
      const newProfile = { ...userInfo, photo: img };
      return {
        userInfo: newProfile,
        isAvatarDefault: false,
      };
    });
  }
  


  handleReset() {
    this.setState(this.initialState);
  }

  handleCollapse(targetId) {
    //si el colapsable que he clickado es distinto que el guardado en el estado, seteo de nuevo el estado
    //con el valor del colapsable clickado, en caso contrario reseteo el valor del colapsable
    if (targetId !== this.state.activePanel) {
      this.setState({ activePanel: targetId });
    } else {
      this.setState({ activePanel: '' });
    }
  }



  render() {
    const { userInfo, isAvatarDefault } = this.state;
    console.log(this.state.userInfo);
    return (
      <div>
        <Header />
        <main className="main__grid">
          <Preview userInfo={this.state.userInfo} resetInfo={this.handleReset} photo={userInfo.photo} />
          <Form
            userInfo={this.state.userInfo}
            getInformation={this.handleInfo}
            activePanel={this.state.activePanel}
            handleCollapse={this.handleCollapse}
            updateAvatar={this.updateAvatar}
            isAvatarDefault={isAvatarDefault}
            photo={userInfo.photo}
            formCompleted={this.state.formCompleted}
            validateForm={this.validateForm}
          />
        </main>
        <Footer />
      </div>
    );
  }
}
export default CardMaker;
