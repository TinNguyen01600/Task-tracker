const AddTask = () => {
    return (
        <form className="add-form">
            <div className="form-text">
                <label>Task</label>
                <input type="text" placeholder="Add Task"/>
            </div>
            <div className="form-date">
                <label>Date & Time</label>
                <input type="text" placeholder="Add Date & Time"/>
            </div>
            <div className="form-reminder">
                <label>Set Reminder</label>
                <input type="checkbox" />
            </div>

            <input id="submit-btn" type="submit" value="Save Task"/>
        </form>
    )
}


export default AddTask