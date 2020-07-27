import React from 'react';
import '../stylesheets/App.scss';
import CardMaker from './CardMaker/CardMaker';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CardMaker />
      </div>
    );
  }
}

export default App;
