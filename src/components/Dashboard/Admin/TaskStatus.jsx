import AdminControl from "./AdminControl"
import Header from "../../Basics/Header"
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import PriorityTag from "../../Basics/PriorityTag";
import DateConversion from "../../Basics/DateConversion";

const TaskStatus = ({ data, handleLogout, orgData }) => {
  const authData = useContext(AuthContext);
  const employees = authData?.employees ?? [];
  return (
    <div className="h-screen w-full p-10">
      <Header data={data} handleLogout={handleLogout} orgData={orgData} />
      <AdminControl />
      <div className="pb-10">
        <h1 className="mt-5 font-bold text-[#FFDAB3] text-xl uppercase flex"> Tasks Status </h1>

        {employees.map((emp) => (
          <div key={emp.id}>
            <hr className="my-5 border border-[#FFDAB3]/40" />

            <div className="bg-[#1B211A] rounded-2xl p-4 mt-5 border border-[#FFDAB3]/30 shadow-inner">
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
                  <div key={task.id} className="bg-[#0F1412] py-3 px-5 flex items-center rounded-xl mb-3 border border-[#FFDAB3]/20">
                    <span className="w-1/6 text-[#FFDAB3] text-sm font-medium capitalize">{task.title}</span>
                    <span className="w-1/6 text-[#FFDAB3] text-sm font-medium capitalize">{task.category}</span>
                    <span className="w-1/6 text-[#FFDAB3] text-sm font-medium capitalize">{task.status}</span>
                    <span className="w-1/6 text-[#FFDAB3] text-sm font-medium capitalize"><DateConversion convertDate={task?.createdAt} /></span>
                    <span className="w-1/6 text-[#FFDAB3] text-sm font-medium capitalize"><DateConversion convertDate={task?.dueDate} /></span>
                    <div className="w-1/6 flex justify-center">
                      <PriorityTag priorityMsg={task.priority} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

      <div id="tasklist" className="h-[50%] w-92 p-6 bg-[#1B211A] rounded-2xl border border-[#FFDAB3]/30 shadow-md py-5 mt-10">
        <div className="flex justify-between items-center">
          <span className="text-xs px-4 py-1 rounded-sm bg-[#DCD9D6]/15 text-[#ffffff] tracking-wide"> Task In Progress </span>
          <PriorityTag priorityMsg={data?.priority ?? ""} />
          <DateConversion convertDate={data?.createdAt} className="text-xs text-[#F8F8F2]/70" />
        </div>

        <h2 className="mt-5 text-xl font-semibold text-[#F8F8F2]"> {data?.title ?? ""} </h2>
        <h6 className="mt-1 text-sm text-[#F8F8F2]"> Category : {data?.category ?? ""} </h6>
        <p className="text-sm mt-3 text-[#F8F8F2]/70 leading-relaxed"> {data?.description ?? ""} </p>

        <div className="mt-5 text-right">
          <h6 className="text-xs text-[#F8F8F2]/70"> Due Date : <DateConversion convertDate={data?.dueDate} /> </h6>
        </div>
      </div>




      </div>
    </div>
  )
}

export default TaskStatus
