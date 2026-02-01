import { taskListNoChildDiv, taskListNoH2, taskListNoH3, taskListNoMainDiv, taskListNoTaskDiv } from "../../constants/imports";

const TaskListNo = ({ data }) => {
    return (
        <div className={taskListNoMainDiv}>
            <div className={taskListNoChildDiv}>
                <h2 className={taskListNoH2}>{data.taskNumbers.newTask ?? 0}</h2>
                <h3 className={taskListNoH3}>New Tasks</h3>
            </div>

            <div className={taskListNoTaskDiv}>
                <h2 className={taskListNoH2}>{data.taskNumbers.active ?? 0}</h2>
                <h3 className={taskListNoH3}>In Progress</h3>
            </div>

            <div className={taskListNoTaskDiv}>
                <h2 className={taskListNoH2}>{data.taskNumbers.completed ?? 0}</h2>
                <h3 className={taskListNoH3}>Completed</h3>
            </div>

            <div className={taskListNoTaskDiv}>
                <h2 className={taskListNoH2}>{data.taskNumbers.failed ?? 0}</h2>
                <h3 className={taskListNoH3}>Failed</h3>
            </div>
        </div>
    )
}

export default TaskListNo;