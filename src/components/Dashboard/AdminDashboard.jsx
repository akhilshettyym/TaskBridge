import AllTask from "../Others/AllTask";
import Createtask from "../Others/Createtask";
import Header from "../Others/Header";

const AdminDashboard = ({ data }) => {
    return (
        <div className="h-screen w-full p-10">
            <Header data={data} />
            <Createtask data={data} />
            <AllTask data={data} />
        </div>
    )
}

export default AdminDashboard;