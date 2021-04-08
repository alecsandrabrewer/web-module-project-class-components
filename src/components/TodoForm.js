import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newTask: ''
        }
    }

    //// Event Handlers
    handleInputChnage = event => {
        this.setState({ 
            ...this.state,
            newTask: event.target.value 
        });
    }
    submitTask = event => {
        event.preventDefault();
        this.props.addTask(this.state.newTask);
    }
    
  render() {
      return (
          <form onSubmit={this.submitTask}>
              <input value={this.state.newTask} onChange={this.handleInputChnage} type='text'/>
              <button className='add-btn'>Add Task</button>
          </form>
      )
  }
}

export default TodoForm;