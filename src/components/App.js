import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CardMaker from './CardMaker/CardMaker';
import Landing from './Landing';
import '../stylesheets/App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/cardMaker" component={CardMaker} />
        </Switch>
      </div>
    );
  }
}

export default App;
