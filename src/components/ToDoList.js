import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ items, onDeleteTask, onToggleComplete }) {
    return (
        <ul>
            {items.map((item) => (
                <ToDoItem
                    key={item.id}
                    item={item}
                    onDelete={() => onDeleteTask(item.id)} // Pass the delete function
                    onToggle={() => onToggleComplete(item.id)} // Pass the toggle function
                />
            ))}
        </ul>
    );
}

export default ToDoList;
