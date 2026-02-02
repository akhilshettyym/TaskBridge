import { AllTask, CreateTask, Header, adminDivClass } from "../../constants/imports";

const AdminDashboard = ({ data, handleLogout, orgData }) => {
    return (
        <div className={adminDivClass}>
            <Header data={data} handleLogout={handleLogout} orgData={orgData} />
            <CreateTask data={data} />
            <AllTask data={data} />
        </div>
    )
}

export default AdminDashboard;