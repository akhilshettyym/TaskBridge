import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import PriorityTag from "../Basics/PriorityTag";

const AllTask = () => {

    const authData = useContext(AuthContext);

    return (
        <div className="pb-10">
            <h1 className="text-[#FFDAB3] text-2xl">Employee Details :</h1>
            {authData?.employees.map((empDet, empIndex) => {
                const authTasks = empDet.tasks;
                console.log("empDet", authTasks);
                return (
                    <div key={empDet.id || empIndex} className="bg-[#1B211A] rounded-2xl p-4 mt-5 border border-[#FFDAB3]/30 shadow-inner">
                        <div className="bg-[#0F1412] py-3 px-5 flex items-center rounded-xl mb-3 border border-[#FFDAB3]/20">
                            <h2 className="w-1/6 text-[#FFDAB3] text-xl font-medium">{empDet?.firstname || "Employee"}</h2>

                            <h2 className="w-1/6 text-[#FFDAB3] text-sm font-medium flex items-center gap-2"> Active Tasks : <span className="h-6 w-6 flex items-center justify-center rounded-full bg-[#FFDAB3] text-[#0F1412] text-xs font-semibold">{empDet?.taskNumbers.active ?? 0}</span></h2>

                            <h2 className="w-1/6 text-[#FFDAB3] text-sm font-medium flex items-center gap-2"> New Tasks : <span className="h-6 w-6 flex items-center justify-center rounded-full bg-[#FFDAB3] text-[#0F1412] text-xs font-semibold">{empDet?.taskNumbers.newTask ?? 0}</span></h2>

                            <h2 className="w-1/6 text-[#FFDAB3] text-sm font-medium flex items-center gap-2"> Completed Tasks : <span className="h-6 w-6 flex items-center justify-center rounded-full bg-[#FFDAB3] text-[#0F1412] text-xs font-semibold">{empDet?.taskNumbers.completed ?? 0}</span></h2>

                            <h2 className="w-1/6 text-[#FFDAB3] text-sm font-medium flex items-center gap-2"> Failed Tasks : <span className="h-6 w-6 flex items-center justify-center rounded-full bg-[#FFDAB3] text-[#0F1412] text-xs font-semibold">{empDet?.taskNumbers.failed ?? 0}</span></h2>

                            <h2 className="w-1/6 text-[#FFDAB3] text-sm font-medium flex items-center gap-2"> Total Number Of Tasks : <span className="h-6 w-6 flex items-center justify-center rounded-full bg-[#FFDAB3] text-[#0F1412] text-xs font-semibold">{empDet?.tasks.length ?? 0}</span></h2>
                        </div>

                        {authTasks?.map((task, taskIndex) => {
                            const renderActivity = task.active === true ? "Active" : "" || task.newTask === true ? "New Task" : "" || task.completed === true ? "Completed" : "" || task.failed === true ? "Failed" : "";
                            console.log("task", task)
                            return (
                                <div key={task.id || taskIndex} className="bg-[#0F1412] py-3 px-5 flex items-center rounded-xl mb-3 border border-[#FFDAB3]/20">
                                    <span className="w-1/6 text-[#FFDAB3] text-sm font-medium">{task.title}</span>
                                    <span className="w-1/6 text-[#FFDAB3] text-sm font-medium">{task.category}</span>
                                    <span className="w-1/6 text-[#FFDAB3] text-sm font-medium">{renderActivity}</span>
                                    <span className="w-1/6 text-[#FFDAB3] text-sm font-medium">{task.date}</span>
                                    <span className="w-1/6 text-[#FFDAB3] text-sm font-medium">{task.date}</span>
                                    <div className="w-1/6 flex justify-center">
                                        <PriorityTag priorityMsg={task.priority} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default AllTask;