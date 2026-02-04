import { useRef } from "react";
import {
    AuthContext, PriorityTag, TaskCount, useContext, useEffect, useState, allTaskChildDiv, allTaskChildInnerDiv, allTaskChildH2, allTaskMainDiv, allTaskMainH1, allTaskChildInnerH2, allTaskTasksDiv, allTaskDivSpan, allTaskDivDiv,
    Header
} from "../../../constants/imports";
import DateConversion from "../../Basics/DateConversion";
import AdminControl from "./AdminControl";

const CreatedTasks = ({ data, handleLogout, orgData }) => {

    const authData = useContext(AuthContext);

    const employees = authData?.employees ?? [];

    return (
        <div className="h-screen w-full p-10">
        <Header data={data} handleLogout={handleLogout} orgData={orgData} />
        <AdminControl />
            <div className="pb-10">
                <h1 className="mt-5 font-bold text-[#FFDAB3] text-xl uppercase"> Created Tasks </h1>

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