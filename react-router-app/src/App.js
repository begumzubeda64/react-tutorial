import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderComp from './Header';
import HomeComponent from './Home';
import TeamComponent from './Team';
import TeamChildComponent from './team-child';
import { Private } from './private';
import Login, { fakeAuth } from './Login';

const Item = (props) => {
  console.log(props);
  return <h1>Hello World!!</h1>
}

export default class App extends React.Component{
  render(){
    const data = { name: 'Zubu' };
    return (
      <Router>
        <HeaderComp/>
        <Switch>
          <Route exact path="/" component={HomeComponent}></Route>
          <Route exact path="/teams" component={TeamComponent}></Route>
          <Route exact path="/teams/:teamname" component={TeamChildComponent}></Route>
          <Route exact path="/items" render={(props) => <Item {...props} data={data} />} />
          <Route path="/login" component={Login}></Route>
          <Private path="/admin" 
          Component={HomeComponent} 
          isAuthenticated={fakeAuth.isAuthenticated} />
          <Route render={() => 'NOT FOUND'}></Route>
        </Switch>
      </Router>
    );
  }
  
}
