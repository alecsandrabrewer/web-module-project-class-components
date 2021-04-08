import React, { useState } from 'react';
import ReactDom from 'react-dom';

import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const tasks = [
  {
    task: 'Complete HW',
    id: 1, 
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: tasks
    }
  }

  //// Class Methods
  toggleItem = itemID => {
    console.log('Toggling Item')
    const updatedTasks = this.state.tasks.map(item => {
      if (itemID) {
        return {...item, completed: !item.completed}
      }
      return item;
    })
    this.setState({
      ...this.state,
      tasks: updatedTasks
    })
  }



  //// Event Handlers
  handleInputChnage = event => {
    this.setState({ tasks: event.target.value });
  }


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <h4>Tasks:</h4>
        <TodoList toggleItem={this.toggleItem} tasks={tasks}/>
        {/* <TodoForm/> */}
      </div>
    );
  }
}

export default App;
