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

    //added class for css to work
    // Side Bar as well as Header 2
    return (
        <div className="sidebar"> {/* Make sure to use the correct class name here */}
            <h2>Task Manager</h2>
            <input
                type="text"
                placeholder="New task"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
            />
            <button onClick={handleAddTask}>Add Task</button>
            <button onClick={onClearTasks} style={{ marginTop: '10px' }}>
                Clear Tasks
            </button>
        </div>
    );
}
export default Sidebar;
