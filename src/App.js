import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Doctors Appointment', day: 'Feb 5th 2:30pm' },
        { id: 2, text: 'Meeting at School', day: 'Feb 6th 1:30pm' },
        { id: 3, text: 'Food shopping', day: 'Feb 5th 2:30pm' },
    ])

    // Delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    return (
        <div className="container">
            <Header />
            {tasks.length > 0
                ? <Tasks tasks={tasks} deleteTask={deleteTask} />
                : 'No Tasks To Show'}
        </div>
    );
}

export default App;
