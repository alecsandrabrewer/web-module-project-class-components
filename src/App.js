import React, { useState } from 'react';
import ReactDom from 'react-dom';

import './styles.scss';

import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const tasks = [
  {
    task: 'Complete HW',
    id: 1, 
    completed: false
  },
  {
    task: 'Make Dinner',
    id: 2,
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
    console.log('updated tasks list array', updatedTasks)
    this.setState({
      ...this.state,
      tasks: updatedTasks
    })
  }

  addTask = taskName => {
    this.setState({
      ...this.state, 
      tasks: [...this.state.tasks, 
        {
          task: taskName,
          id: Date.now(), 
          completed: false
      }]
    })
  }

  clearTasks = event => {
    event.preventDefault();
    this.setState({
      ...this.state,
      tasks: this.state.tasks.filter(item => !item.completed)
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <h4>Tasks:</h4>
        <TodoList toggleItem={this.toggleItem} tasks={this.state.tasks} clearTasks={this.clearTasks}/>
        <TodoForm addTask={this.addTask}/>
      </div>
    );
  }
}

export default App;
