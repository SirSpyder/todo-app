import React, { useState } from 'react';
import ToDoList from './components/ToDoList';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([
        { id: 1, title: "Buy groceries", completed: false },
        { id: 2, title: "Walk the dog", completed: true },
        { id: 3, title: "Read a book", completed: false },
    ]);

    const [editingTask, setEditingTask] = useState(null); // Tracks the task being edited

    // Function to add a new task with a custom title
    const handleAddTask = (title) => {
        if (!title.trim()) return; // Prevent adding empty tasks
        const newTask = { id: Date.now(), title, completed: false };
        setTasks([...tasks, newTask]);
    };

    // Function to edit an existing task
    const handleEditTask = (updatedTask) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === updatedTask.id ? { ...task, ...updatedTask } : task
            )
        );
        setEditingTask(null); // Clear the editing state after saving
    };

    // Function to clear all tasks
    const handleClearTasks = () => {
        setTasks([]);
    };

    // Function to delete a specific task by its ID
    const handleDeleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    // Function to toggle task completion
    const onToggleComplete = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    return (
        <div style={{ display: 'flex' }}>
            <Sidebar onAddTask={handleAddTask} onClearTasks={handleClearTasks} />
            <div style={{ padding: '20px', flex: 1 }}>
                <h1>My To-Do List</h1>

                {/* Display Edit Form if a task is being edited */}
                {editingTask ? (
                    <div>
                        <h2>Edit Task</h2>
                        <input
                            type="text"
                            value={editingTask.title}
                            onChange={(e) =>
                                setEditingTask({ ...editingTask, title: e.target.value })
                            }
                        />
                        <button
                            onClick={() => handleEditTask(editingTask)}
                            style={{ marginLeft: '10px' }}
                        >
                            Save
                        </button>
                        <button
                            onClick={() => setEditingTask(null)}
                            style={{ marginLeft: '10px' }}
                        >
                            Cancel
                        </button>
                    </div>
                ) : (
                    <ToDoList
                        items={tasks}
                        onDeleteTask={handleDeleteTask}
                        onToggleComplete={onToggleComplete}
                        onEditTask={setEditingTask}
                    />
                )}
            </div>
        </div>
    );
}

export default App;
