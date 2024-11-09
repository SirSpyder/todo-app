import React from 'react';
//Check box and the task with in the list 
function ToDoItem({ item, onDelete }) {
    return (
        <li className="task-item">
            <input type="checkbox" checked={item.completed} readOnly />
            <span>{item.title}</span>
            <button onClick={onDelete} style={{ marginLeft: '10px' }}>Delete</button>
        </li>
    );
}

export default ToDoItem;

