import { Header } from "../../../constants/imports";
import Dashboard from "./Dashboard";
import AdminControl from "./AdminControl";

const AdminDashboard = ({ data, handleLogout, orgData }) => {
    return (
        <div className="h-screen w-full p-10">
            <Header data={data} handleLogout={handleLogout} orgData={orgData} />
            <AdminControl />
            <Dashboard data={data} handleLogout={handleLogout} orgData={orgData} />
        </div>
    )
}

export default AdminDashboard;