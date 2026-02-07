import { taskListCompBtnClass, taskListCompBtnDiv, taskListFailedBtnClass, taskListFailedBtnDiv, taskListInProBtnDiv, taskListInProBtnGreen, taskListInProBtnRed } from "../../../styles/styles";
import DateConversion from "../../Basics/DateConversion";
import PriorityTag from "../../Basics/PriorityTag";
import { useLocation } from "react-router-dom";

const TaskCard = ({ task }) => {
  
  const location = useLocation();
  const { id, status, title, category, description, priority, createdAt, dueDate } = task;
  const isStatusPage = location.pathname.startsWith("/employee/taskstatus");

  const getStatusLabel = () => {
    switch (status) {
      case "new":
        return "New Task";
      case "inProgress":
        return "Task In Progress";
      case "completed":
        return "Completed Task";
      case "failed":
        return "Failed Task";
      default:
        return "Unknown Task";
    }
  };

  const getButtons = () => {
    switch (status) {
      case "new":
        return (
          <div className="grid grid-cols-2 gap-3 w-full">
            <button className="py-2 px-6 rounded-sm text-sm font-semibold bg-green-500 text-white border border-green-500 uppercase hover:bg-green-700 transition-colors"> Accept Task </button>
            <button className="py-2 px-6 rounded-sm text-sm font-semibold bg-red-500 text-white border border-red-500 uppercase hover:bg-red-700 transition-colors"> Reject Task </button>
          </div>
        );

      case "inProgress":
        return (
          <div className={taskListInProBtnDiv}>
            <button className={taskListInProBtnGreen}> Mark as Completed </button>
            <button className={taskListInProBtnRed}> Mark as Failed </button>
          </div>
        );

      case "completed":
        return (
          <div className={taskListCompBtnDiv}>
            <button className={taskListCompBtnClass} disabled> Completed </button>
          </div>
        );

      case "failed":
        return (
          <div className={taskListFailedBtnDiv}>
            <button className={taskListFailedBtnClass} disabled> Failed </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div key={id} className="bg-[#FFDAB3]/10 rounded-2xl border border-[#FFDAB3]/30 hover:border-[#FFDAB3]/50 transition-colors flex flex-col h-full">
      <div className="px-2 py-2 border-b border-[#FFDAB3]/20">
        <div className="flex items-center justify-between gap-2 px-4 py-2 bg-[#1B211A] rounded-2xl border border-[#FFDAB3]/25">
          <h3 className="text-[#FFDAB3] font-medium text-md leading-tight line-clamp-2 flex-1 uppercase"> {title} </h3>
          <PriorityTag priorityMsg={priority} />
        </div>
      </div>

      <div className="px-4 py-3 flex-1 flex flex-col gap-2 text-[#F8F8F2]/80">
        <div className="flex justify-between items-center">
          <span className="font-medium uppercase">Status</span>
          <span className={`px-4 rounded-2xl text-sm font-bold uppercase border ${{
              new: "bg-amber-100 text-amber-700 border-amber-200",
              inProgress: "bg-blue-100 text-blue-700 border-blue-200",
              completed: "bg-emerald-100 text-emerald-700 border-emerald-200",
              failed: "bg-red-100 text-red-700 border-red-200",
            }[status] || "bg-gray-100 text-gray-600 border-gray-200"
            }`}>
            {getStatusLabel()}
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="font-medium">Category :</span>
          <span className="font-medium text-[#FFDAB3]">{category}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span> Created :{" "} <span className="font-medium text-[#FFDAB3]">
            <DateConversion convertDate={createdAt} />
          </span>
          </span>

          <span> Due :{" "} <span className="font-medium text-[#FFDAB3]">
            <DateConversion convertDate={dueDate} />
          </span>
          </span>
        </div>

        <div className="text-sm leading-relaxed">
          <span className="font-medium">Description :</span>
          <span className="ml-2 text-[#FFDAB3]"> {description || "No description provided"} </span>
        </div>

        <span className="text-[#F8F8F2]/60 text-sm"> Task ID: {id} </span>
      </div>

      {!isStatusPage && (
        <div className="border-t border-[#FFDAB3]/20">
          <div className="px-3 py-3">
            <div className="flex items-center justify-between gap-3 px-4 py-3 bg-[#1B211A] rounded-xl border border-[#FFDAB3]/25">
              {getButtons()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskCard;