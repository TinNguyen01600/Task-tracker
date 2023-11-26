import Task from "./Task"

const Tasks = (props) => {
    const { tasks, deleteTask, toggleReminder } = props
    return (
        <>
            {tasks.map(task => 
            <Task 
                task={task} 
                key={task.id} 
                deleteTask={deleteTask}
                toggleReminder={toggleReminder}
            />)}
        </>
    )
}

export default Tasks