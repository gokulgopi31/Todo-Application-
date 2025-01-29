// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Gokul
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
// import TaskList from "./components/TaskList";
// import TaskForm from "./components/TaskForm";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

function App() {
    const [tasks, setTasks] = useState([]);

    const handleTaskAdded = (task) => {
        setTasks([...tasks, task]);
    };

    return (
        <div>
            <TaskForm onTaskAdded={handleTaskAdded} />
            <TaskList />
        </div>
    );
}

export default App;
