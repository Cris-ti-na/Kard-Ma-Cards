import React from 'react';
import '../stylesheets/App.scss';
import CardMaker from './CardMaker/CardMaker';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      palette: '', //antes colorSelected
      name: '',
      job: '',
      photo: '',
      email: '',
      phone: '', //antes telephone
      linkedin: '', //antes linkedIn
      github: '', //antes gitHubZ
    };
  }
  render() {
    return (
      <div className="App">
        <CardMaker />
      </div>
    );
  }
}

export default App;
