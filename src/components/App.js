import React from 'react';
import '../stylesheets/App.scss';
import CardMaker from './CardMaker/CardMaker';
import Landing from './Landing';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CardMaker />
        {/* <Landing /> */}
      </div>
    );
  }
}

export default App;
