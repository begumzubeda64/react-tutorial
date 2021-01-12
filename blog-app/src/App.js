import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header';
import UserContainer from './components/user-container';
import ContainerComp from './components/container';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={ContainerComp} />
          <Route exact path="/blog" component={ContainerComp} />
          <Route exact path="/blog/:userid" component={UserContainer} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
