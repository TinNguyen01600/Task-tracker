import { useState } from "react"

const AddTask = (props) => {
    const { addTask } = props

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            alert('Add a task!')
            return
        }
        addTask({ text, day, reminder })

        // Clear the form
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-text">
                <label>Task</label>
                <input 
                    type="text" 
                    placeholder="Add Task" 
                    value={text} 
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="form-date">
                <label>Date & Time</label>
                <input 
                    type="text" 
                    placeholder="Add Date & Time" 
                    value={day} 
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className="form-reminder">
                <label>Set Reminder</label>
                <input 
                    type="checkbox"
                    value={reminder}
                    checked={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>

            <input id="submit-btn" type="submit" value="Save Task" />
        </form>
    )
}


export default AddTask