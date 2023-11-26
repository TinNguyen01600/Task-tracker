import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Doctors Appointment', day: 'Feb 5th 2:30pm', reminder: true },
        { id: 2, text: 'Meeting at School', day: 'Feb 6th 1:30pm', reminder: false },
        { id: 3, text: 'Food shopping', day: 'Feb 5th 2:30pm', reminder: true },
    ])

    // Delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    // Toggle Reminder
    const toggleReminder = (id) => {
        // setTasks(tasks.map(task => 
        //     task.id === id 
        //         ? { ...task, reminder: !task.reminder } 
        //         : task
        // ))
        setTasks(tasks.map(task => {
            if (task.id === id) return { ...task, reminder: !task.reminder }
            else    return task
        }))
    }

    // Add Task
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newTask = {id, ...task}
        setTasks([...tasks, newTask])
    }

    return (
        <div className="container">
            <Header 
                onAdd={() => setIsFormOpen(!isFormOpen)}
                isFormOpen={isFormOpen}    
            />
            {isFormOpen && <AddTask addTask={addTask}/>}
            {tasks.length > 0
                ? <Tasks
                    tasks={tasks}
                    deleteTask={deleteTask}
                    toggleReminder={toggleReminder}
                />
                : 'No Tasks To Show'}
        </div>
    );
}

export default App;
