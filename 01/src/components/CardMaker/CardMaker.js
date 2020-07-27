import React from 'react';
import Form from './Form/Form';
import Preview from './Preview';
import Footer from '../Footer';
import Header from '../Header';

class CardMaker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        palette: '', //antes colorSelected
        name: '',
        job: '',
        photo: '',
        email: '',
        phone: '', //antes telephone
        linkedin: '', //antes linkedIn
        github: '', //antes gitHubZ}
      },
      activePanel: 'collapse-1'
    };
    this.handleInfo = this.handleInfo.bind(this);
    this.handleCollapse = this.handleCollapse.bind(this);
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
    });
  }

  handleCollapse(targetId) {
    //si el colapsable que he clickado es distinto que el guardado en el estado, seteo de nuevo el estado
    //con el valor del colapsable clickado, en caso contrario reseteo el valor del colapsable
    if(targetId !== this.state.activePanel){
      this.setState({activePanel: targetId})
    // } else {
    //   this.setState({activePanel: ''})
    }
  }

  render() {
    //console.log(this.state);
    return (
      <div>
        <Header />
          <main className="main__grid">
            <Preview userInfo={this.state.userInfo} />
            <Form getInformation={this.handleInfo}
            activePanel={this.state.activePanel}
            handleCollapse={this.handleCollapse}/>
          </main>
        <Footer />
      </div>
    );
  }
}
export default CardMaker;
