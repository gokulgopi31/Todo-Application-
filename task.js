
// import React, { useEffect, useState } from "react";
// import api from "./api";

// const TaskList = () => {
//     const [tasks, setTasks] = useState([]);

//     useEffect(() => {
//         api.get("/tasks")
//             .then((response) => setTasks(response.data))
//             .catch((error) => console.error(error));
//     }, []);

//     const deleteTask = (id) => {
//         api.delete(`/${id}`).then(() => {
//             setTasks(tasks.filter((task) => task.id !== id));
//         });
//     };

//     return (
//         <div>
//             <h1>Tasks</h1>
//             <ul>
//                 {tasks.map((task) => (
//                     <li key={task.id}>
//                         {task.title} - {task.completed ? "Completed" : "Pending"}
//                         <button onClick={() => deleteTask(task.id)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default TaskList;
