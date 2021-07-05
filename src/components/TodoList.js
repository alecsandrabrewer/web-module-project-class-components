import React from 'react';
import '../styles.scss';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className='todo-list'>
            {props.tasks.map(item => (
                <Todo toggleItem={props.toggleItem} key={item.id} item={item} />
            ))}
            <button onClick={props.clearTasks} className='clear-btn'>Clear List</button>
        </div>
    )
}

export default TodoList;