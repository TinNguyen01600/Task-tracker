import { FaTimes } from 'react-icons/fa'

const Task = (props) => {
    const { task, deleteTask } = props
    return (
        <div className="taskItem">
            <div style={{display: 'block'}}>
                <h3>{task.text}</h3>
                <p>{task.day}</p>
            </div>
            <FaTimes style={FaTimesStyles} onClick={() => deleteTask(task.id)} />
        </div>
    )
}

const FaTimesStyles = {
    color: 'red',
    cursor: 'pointer'
}

export default Task