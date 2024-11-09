import React from 'react';
import ToDoItem from './ToDoItem';
// Header 2 and to do list function
function ToDoList({ items, onDeleteTask }) {
    return (
        <div>
            <h2>List of Tasks</h2>
            <ul>
                {items.map(item => (
                    <ToDoItem 
                    key={item.id}
                    item={item}
                    onDelete={() => onDeleteTask(item.id)}/>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;
