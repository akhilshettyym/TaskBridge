import AllTask from "../Others/AllTask";
import Createtask from "../Others/Createtask";
import Header from "../Others/Header";

const AdminDashboard = () => {
    return (
        <div className="h-screen w-full p-10">
            <Header />
            <Createtask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard;