import Header from "../Others/Header";
import TaskListNo from "../Others/TaskListNo";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ data, handleLogout }) => {
  if(!data) return null;
  return (
    <div className="p-10 bg-[#21351] h-screen">
      <Header data={data} handleLogout={handleLogout} />
      <TaskListNo data={data} />
      <TaskList data={data} />
    </div>
  )
}

export default EmployeeDashboard;