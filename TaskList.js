import React, { useEffect, useState } from "react";
import axios from "axios";
import api from "./api";
import "./Tasklist.css"; // Add CSS for styling

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/tasks");
            setTasks(response.data);
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };

    const updateTask = async (id, updatedTask) => {
        try {
            const response = await axios.put(
                `http://localhost:8080/api/${id}`,
                updatedTask,
                { headers: { "Content-Type": "application/json" } }
            );
            setTasks(tasks.map((task) => (task.id === id ? response.data : task)));
        } catch (error) {
            console.error("Error updating task:", error);
        }
    };

    const toggleTaskCompletion = (task) => {
        const updatedTask = { ...task, completed: !task.completed };
        updateTask(task.id, updatedTask);
    };
    const deleteTask = (id) => {
            api.delete(`/${id}`).then(() => {
                setTasks(tasks.filter((task) => task.id !== id));
            });
        };

    return (
        <div className="task-container">
            <h1>Todo Application</h1>
            <ul className="task-list">
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        className={task.completed ? "task completed" : "task"}
                    >
                        <span>{task.title}</span>
                        <div className="buttons">
                        <button
                            className="status-btn"
                            onClick={() => toggleTaskCompletion(task)}
                        >
                            {task.completed ? "Mark as Incomplete" : "Mark as Complete"}
                        </button>
                        <button
                            className="delete-btn"
                            onClick={() => deleteTask(task.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
