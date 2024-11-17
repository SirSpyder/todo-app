import React, { useState } from 'react';
import ToDoList from './components/ToDoList';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
    // To hold the list of tasks
    const [tasks, setTasks] = useState([
        { id: 1, title: "Buy groceries", completed: false },
        { id: 2, title: "Walk the dog", completed: true },
        { id: 3, title: "Read a book", completed: false },
    ]);

      // Function to add a new task with a custom title
      const handleAddTask = (title) => {
        if (!title.trim()) return; // Prevent adding empty tasks
        const newTask = { id: Date.now(), title, completed: false };
        setTasks([...tasks, newTask]);
    };
    

    // Function to clear all tasks
    const handleClearTasks = (id) => {
        setTasks([]);
    };

    // New function to delete a specific task by its id
    const handleDeleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    //for checkbox on tasks
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
                {/* Pass the necessary functions as props to ToDoList */}
                <ToDoList
                    items={tasks}
                    onDeleteTask={handleDeleteTask}
                    onToggleComplete={onToggleComplete} 
                />
            </div>
        </div>
    );
}


export default App;
