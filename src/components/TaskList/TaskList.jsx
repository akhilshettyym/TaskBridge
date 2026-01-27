import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";

const TaskList = ({ data }) => {
    return (
        <>
            <div className="flex flex-wrap">
                <AcceptTask />
                <CompleteTask />
            </div>
        </>
    )
}

export default TaskList;