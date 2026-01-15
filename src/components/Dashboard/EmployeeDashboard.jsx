import Header from "../Others/Header";
import TaskListNo from "../Others/TaskListNo";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = () => {
  return (
    <div className="p-10 bg-[#21351] h-screen">
      <Header />
      <TaskListNo />
      <TaskList />
    </div>
  )
}

export default EmployeeDashboard;