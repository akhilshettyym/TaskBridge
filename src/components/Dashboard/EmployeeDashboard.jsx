import { Header, TaskListNo, TaskList, employeeDivClass } from "../../constants/imports";

const EmployeeDashboard = ({ data, handleLogout, orgData }) => {

  if (!data) return null;

  return (
    <div className={employeeDivClass}>
      <Header data={data} handleLogout={handleLogout} orgData={orgData} />
      <TaskListNo data={data} />
      <TaskList data={data} />
    </div>
  )
}

export default EmployeeDashboard;