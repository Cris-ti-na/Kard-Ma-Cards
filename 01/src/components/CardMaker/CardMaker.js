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
    this.parentFunction = this.parentFunction.bind(this);
  }
  parentFunction(inputId, inputValue) {
    this.setState((inputId, prevState) => {
      return {
        userInfo: {
          ...prevState.userInfo,
          inputId: inputValue,
        },
      };
    });
  }
  // console.log(inputId, inputValue);
  // if (inputId === 'fullName') {
  //   this.setState({
  //     name: inputValue,
  //   });
  // } else if (inputId === 'position') {
  //   this.setState({
  //     job: inputValue,
  //   });
  // } else if (inputId === 'email') {
  //   this.setState({
  //     email: inputValue,
  //   });
  // } else if (inputId === 'phone') {
  //   this.setState({
  //     phone: inputValue,
  //   });
  // } else if (inputId === 'linkedin') {
  //   this.setState({
  //     linkedin: inputValue,
  //   });
  // } else if (inputId === 'github') {
  //   this.setState({
  //     github: inputValue,
  //   });
  // }
  render() {
    console.log(this.state);
    return (
      <div>
        <Header />
        {
          <main className="main__grid">
            <Preview />
            <Form getInformation={this.parentFunction} />
          </main>
        }
        <Footer />
      </div>
    );
  }
}
export default CardMaker;
