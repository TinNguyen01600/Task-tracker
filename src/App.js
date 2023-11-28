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
    // When delete task on UI, the task is also deleted from db.json
    const deleteTask = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: "DELETE"
        })
        setTasks(tasks.filter(task => task.id !== id))
    }

    // Toggle Reminder
    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await res.json()
        return data
    }

    const toggleReminder = async(id) => {
        // setTasks(tasks.map(task => 
        //     task.id === id 
        //         ? { ...task, reminder: !task.reminder } 
        //         : task
        // ))

        const toggleTask = await fetchTask(id)
        const updatedTask = {...toggleTask, reminder: !toggleTask.reminder}
        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: "PUT",
            body: JSON.stringify(updatedTask),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        
        setTasks(tasks.map(task => {
            if (task.id === id) return { ...task, reminder: data.reminder }
            else    return task
        }))
    }

    // Add Task
    const addTask = async (task) => {
        const data = await fetch('http://localhost:5000/tasks', {
            method: "POST",
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const newTask = await data.json()
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
