import React, { useState } from 'react';

function Sidebar({ onAddTask, onClearTasks }) {
    const [taskTitle, setTaskTitle] = useState("");

    // Handle adding a new task
    const handleAddTaskClick = () => {
        onAddTask(taskTitle); // Pass the entered task title to App.js
        setTaskTitle(""); // Clear the input field after adding the task
    };

    return (
        <div style= {{padding: '20px', backgroundColor: '#ADD8E6', width: '200px'}}>
            <h2>Task Manager</h2>
            <input
                type="text"
                placeholder="New task"
                value={taskTitle} // Controlled input
                onChange={(e) => setTaskTitle(e.target.value)} // Update state on input
            />
            <button onClick={handleAddTaskClick} style={{ marginTop: '10px' }}>
                Add Task
            </button>
        </div>
    );
}

export default Sidebar;
