import React from 'react';
import './App.css';
import ErrorBoundry from './error-boundry';

class UserLifeCycle extends React.Component{
  state = {
    show: true
  }
    
  static getDerivedStateFromProps(props, state){
    console.log('getDerivedStateFromProps');
    if(props.show !== state.show){
      return {
        show: props.show
      }
    }
    else{
      return {
        show: state.show
      }
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate');
    return true;
  }

  handleClick(){
    console.log('handleClick');
    this.setState({
      show: !this.state.show
    });
  }
  
  render(){
    console.log('render');
    return (
      <ErrorBoundry>
        <h1 onClick={() => this.handleClick()}>
          {this.state.show ? 'Show' : 'Hide'}
        </h1>
      </ErrorBoundry>
    );
  }

  componentDidMount(){
    console.log('componentDidMount');
    setTimeout(() => {
      this.setState({ state: this.state.show });
    }, 1000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('getSnapshotBeforeUpdate');
    return {
      show: prevState.show
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('componentDidUpdate');
    return {
      show: !prevState.show
    }
  }
  
}

export default UserLifeCycle;
