import AdminControl from "./AdminControl"
import Header from "../../Basics/Header"

const TaskStatus = ({ data, handleLogout, orgData }) => {
  return (
    <div className="h-screen w-full p-10">
      <Header data={data} handleLogout={handleLogout} orgData={orgData} />
      <AdminControl />
    </div>
  )
}

export default TaskStatus
