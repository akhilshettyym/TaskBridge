import { useRef } from "react";
import { AuthContext, PriorityTag, TaskCount, useContext, useEffect, useState, allTaskChildDiv, allTaskChildInnerDiv, allTaskChildH2, allTaskMainDiv, allTaskMainH1, allTaskChildInnerH2, allTaskTasksDiv, allTaskDivSpan, allTaskDivDiv, Header, setLocalStorage, getLocalStorage } from "../../../constants/imports";
import DateConversion from "../../Basics/DateConversion";
import AdminControl from "./AdminControl";
import RemoveTask from "../../Basics/RemoveTask";
import toast from "react-hot-toast";

const CreatedTasks = ({ data, handleLogout, orgData }) => {

    const { updateAuthData } = useContext(AuthContext);
    const authData = useContext(AuthContext);
    const employees = authData?.employees ?? [];

    const handleDeleteTask = (taskId) => {
        const taskbridge = getLocalStorage() || { admin: {}, employees: [] };

        if (!taskbridge.admin || !taskbridge.employees) {
            toast.error("Invalid data structure");
            return;
        }

        let taskFound = false;
        let affectedEmployee = null;

        const updatedAdminTasks = (taskbridge.admin.tasks || []).filter(task => {
            if (task.id === taskId) {
                taskFound = true;
                return false;
            }
            return true;
        });

        const updatedEmployees = taskbridge.employees.map((emp) => {
            if (!emp.tasks) return emp;

            const updatedTasks = emp.tasks.filter((task) => {
                if (task.id === taskId) {
                    taskFound = true;
                    affectedEmployee = emp;
                    return false;
                }
                return true;
            });

            if (taskFound && affectedEmployee?.id === emp.id) {
                const newTaskCount = updatedTasks.filter(t => t.status === "new" || t.newTask).length;
                const activeCount = updatedTasks.filter(t => t.status === "active" || t.active).length;
                const completedCount = updatedTasks.filter(t => t.completed).length;
                const failedCount = updatedTasks.filter(t => t.failed).length;

                return {
                    ...emp,
                    tasks: updatedTasks,
                    taskNumbers: {
                        ...emp.taskNumbers,
                        newTask: newTaskCount,
                        active: activeCount,
                        completed: completedCount,
                        failed: failedCount,
                    }
                };
            }
            return emp;
        });

        if (!taskFound) {
            toast.error("Task not found");
            return;
        }

        const updatedTaskbridge = {
            ...taskbridge,
            admin: {
                ...taskbridge.admin,
                tasks: updatedAdminTasks,
            },
            employees: updatedEmployees,
        };

        setLocalStorage(updatedTaskbridge);
        updateAuthData(updatedTaskbridge);

        toast.success("Task removed successfully");
        console.log("✅ Task deleted from employee and admin:", taskId);
    };


    return (
        <div className="h-screen w-full p-10">
            <Header data={data} handleLogout={handleLogout} orgData={orgData} />
            <AdminControl />
            <div className="pb-10">
                <h1 className="mt-5 font-bold text-[#FFDAB3] text-xl uppercase flex"> Created Tasks </h1>

                {employees.map((emp) => (
                    <div key={emp.id}>
                        <hr className="my-5 border border-[#FFDAB3]/40" />

                        <div className={allTaskChildDiv}>
                            <div className="bg-[#FFDAB3]/20 py-3 px-5 flex items-center rounded-xl mb-3 border border-[#FFDAB3]/10">
                                <span className="w-1/6 text-[#FFDAB3] text-sm font-medium uppercase">Title</span>
                                <span className="w-1/6 text-[#FFDAB3] text-sm font-medium uppercase">Category</span>
                                <span className="w-1/6 text-[#FFDAB3] text-sm font-medium uppercase">Status</span>
                                <span className="w-1/6 text-[#FFDAB3] text-sm font-medium uppercase">Created</span>
                                <span className="w-1/6 text-[#FFDAB3] text-sm font-medium uppercase">Due</span>
                                <span className="w-1/6 text-[#FFDAB3] text-sm font-medium uppercase text-center">Priority</span>
                            </div>

                            <hr className="my-2 border border-[#FFDAB3]/40" />
                            {emp.tasks.map((task) => {
                                return (
                                    <div key={task.id} className={allTaskTasksDiv}>
                                        <span className={allTaskDivSpan}>{task.title}</span>
                                        <span className={allTaskDivSpan}>{task.category}</span>
                                        <span className={allTaskDivSpan}>{task.status}</span>
                                        <span className={allTaskDivSpan}><DateConversion convertDate={task?.createdAt} /></span>
                                        <span className={allTaskDivSpan}><DateConversion convertDate={task?.dueDate} /></span>
                                        <div className={allTaskDivDiv}>
                                            <PriorityTag priorityMsg={task.priority} />
                                        </div>
                                        <RemoveTask onDelete={() => handleDeleteTask(task.id)} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CreatedTasks;