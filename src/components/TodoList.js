import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    return (
        <div className='todo-list'>
            {props.tasks.map(item => (
                <Todo toggleItem={props.toggleItem} key={item.id} item={item} />
            ))}
        </div>
    )
}

export default TodoList;