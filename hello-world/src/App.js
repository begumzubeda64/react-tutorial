import './App.css';
import TodoList from './child';
import React from 'react';

class App extends React.Component {
  state = {
    todos: [],
    task: ''
  }

  removeItem(index){
    const todoList = this.state.todos;
    todoList.splice(index, 1);
    this.setState({ todos: todoList });
  }

  addNewTodo(){
    this.setState(prevState => ({ 
      todos: prevState.todos.concat(this.state.task)
    }));
  }

  handleChange(e){
    const value = e.target.value;
    this.setState({
      task: value
    });
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <input onChange={(e) => this.handleChange(e)} type="text" value={this.state.task} />
          <button onClick={() => this.addNewTodo()}>Add Task</button>
          <TodoList removeItem={(index) => this.removeItem(index)} tasks={this.state.todos} />
        </header>
      </div>
    );
  }
  
}

export default App;
