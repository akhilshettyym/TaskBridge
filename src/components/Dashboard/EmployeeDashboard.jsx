import Header from "../Others/Header";
import TaskListNo from "../Others/TaskListNo";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ data }) => {
  return (
    <div className="p-10 bg-[#21351] h-screen">
      <Header data={data} />
      <TaskListNo data={data} />
      <TaskList data={data} />
    </div>
  )
}

export default EmployeeDashboard;