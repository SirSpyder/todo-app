import React, { useState } from 'react';

function Sidebar({ onAddTask, onClearTasks }) {
    const [taskTitle, setTaskTitle] = useState("");

    // Handle adding a new task
    const handleAddTask = () => {
        if (taskTitle.trim()) {
            onAddTask({ id: Date.now(), title: taskTitle, completed: false });
            setTaskTitle(""); // Clear the input field
        }
    };

    return (
        <div className="sidebar">
            <h2>Task Manager</h2>
            <input
                type="text"
                placeholder="New task"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
            />
            <button onClick={handleAddTask} style={{ marginTop: '10px' }}>Add Task</button>
            <button onClick={onClearTasks} style={{ marginTop: '10px' }}>
                Clear Tasks
            </button>
        </div>
    );
}

export default Sidebar;
