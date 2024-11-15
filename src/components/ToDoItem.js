import React from 'react';

// Task item with a checkbox and delete button
function ToDoItem({ item, onDelete, onToggle }) {
    return (
        <li style={{ fontSize: '20px', marginBottom: '8px' }}>
            {/* Checkbox to toggle completion */}
            <input 
                type="checkbox" 
                checked={item.completed} 
                onChange={onToggle} 
                style={{ marginRight: '10px' }}
            />
            {item.title}
            <button onClick={onDelete} style={{ marginLeft: '10px' }}>Delete</button>
        </li>
    );
}

export default ToDoItem;
