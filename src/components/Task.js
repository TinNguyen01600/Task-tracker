import { FaTimes } from 'react-icons/fa'

const Task = (props) => {
    const {task} = props
    return (
        <div className="taskItem">
            <h3>{task.text} <FaTimes /></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task