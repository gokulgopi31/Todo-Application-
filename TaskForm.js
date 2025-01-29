import React, { useState } from "react";
import api from "./api";

const TaskForm = ({ onTaskAdded }) => {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        api.post("/create", { title, completed: false })
            .then((response) => onTaskAdded(response.data))
            .catch((error) => console.error(error));
        setTitle("");
    };

    return (
        <form onSubmit={handleSubmit} className="form-in">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Task title"
                required
                className="input-box"
            />
            <button className="sub" type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
