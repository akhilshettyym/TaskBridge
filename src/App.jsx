import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import { useEffect, useState } from "react";
import { setLocalStorage } from "./utils/localStorage";

const App = () => {

  const[user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if(email == 'admin@taskbridge.com' && password == '12345'){
      setUser('admin');
    } else if(email == 'user@gmail.com' && password == '12345') {
      setUser('employee');
    }
    else {
      alert("Invalid Creds");
    }
  }

  // handleLogin('admin@gmail.com', 12345);

  // useEffect(() => {
  //   setLocalStorage();
  // },[]);

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === 'admin' ? <AdminDashboard /> : <EmployeeDashboard/> }
      {/* <AdminDashboard /> */}
      {/* <EmployeeDashboard/> */}
    </>
  )
}

export default App;