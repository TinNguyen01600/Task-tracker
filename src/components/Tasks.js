import Task from "./Task"

const Tasks = (props) => {
    const { tasks } = props
    return (
        <>
            {tasks.map(task => <Task task={task} key={task.id} />)}
        </>
    )
}

export default Tasks