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
    };
    this.handleInfo = this.handleInfo.bind(this);
    //this.handleColor = this.handleColor.bind(this);

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

  render() {
    console.log(this.state);
    return (
      <div>
        <Header />
        {
          <main className="main__grid">
            <Preview userInfo={this.state.userInfo} />
            <Form getInformation={this.handleInfo} />
          </main>
        }
        <Footer />
      </div>
    );
  }
}
export default CardMaker;
