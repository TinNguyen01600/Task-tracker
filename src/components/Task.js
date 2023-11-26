import { FaTimes } from 'react-icons/fa'

const Task = (props) => {
    const { task, deleteTask, toggleReminder } = props
    return (
        <div className={`taskItem ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => toggleReminder(task.id)}>
            <div style={{ display: 'block' }}>
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