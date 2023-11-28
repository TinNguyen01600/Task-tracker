import { useState, useEffect } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const getTasks = async () => {
            const initialTasksFromServer = await fetchTasks()
            setTasks(initialTasksFromServer)
        }
        getTasks()
    }, [])

    // Fetch Tasks from mock API server
    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()
        return data
    }

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
