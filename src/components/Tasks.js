import Task from "./Task"

const Tasks = (props) => {
    const { tasks, deleteTask } = props
    return (
        <>
            {tasks.map(task => 
            <Task 
                task={task} 
                key={task.id} 
                deleteTask={deleteTask} 
            />)}
        </>
    )
}

export default Tasks