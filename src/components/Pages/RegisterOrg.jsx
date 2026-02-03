import { signupContainerDiv, signupCreateOrgBtn, signupCreateOrgDiv, signupFormClass, signupHeaderDiv, signupHeaderH1, signupInputClass, signupLabelClass, signupMainDiv, signupMessagePTag, signupOrgAdminDets, signupOrgDets, signupOrgLeftRight } from '../../constants/imports';

import { generateSequentialId, getLocalStorage, setLocalStorage } from "../../utils/localStorage";
import { useState } from "react";
import AddEmployees from './AddEmployees';
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from 'react-router-dom';
import PasswordToggle from '../Basics/PasswordToggle';
// import toast from "react-hot-toast";


const RegisterOrg = () => {

  const navigate = useNavigate();

  const [employees, setEmployees] = useState(getLocalStorage()?.employees || []);
  const adminOrgNull = getLocalStorage();

  // const handleAddEmployee = (e) => {
  //   if (!(adminOrgNull?.admin) || (!adminOrgNull?.organization)) {
  //     alert("You need to set up an organization first.");
  //     navigate("/signup");
  //     // toast.error("Please create an organization before adding employees.");
  //     // navigate("/signup");
  //     return null;
  //   }

  //   e.preventDefault();

  //   const newEmployee = {
  //     uuid: `emp-${uuidv4()}`,
  //     id: generateSequentialId("emp"),
  //     firstName: e.target.firstName.value,
  //     lastName: e.target.lastName.value,
  //     email: e.target.email.value,
  //     password: e.target.password.value,
  //     position: e.target.position.value,
  //     dob: e.target.dob.value,
  //     taskNumbers: { active: 0, newTask: 0, completed: 0, failed: 0 },
  //     tasks: []
  //   };

  //   const taskbridge = getLocalStorage();
  //   taskbridge.employees.push(newEmployee);

  //   setLocalStorage(taskbridge);
  //   setEmployees([...taskbridge.employees]);
  //   e.target.reset();
  // };

  const handleAddEmployee = (e) => {
    e.preventDefault();

    const taskbridge = getLocalStorage();

    if (!taskbridge?.admin || !taskbridge?.organization) {
      toast.error("Please create an organization first.");
      navigate("/signup");
      return;
    }

    const form = e.target;

    const newEmployee = {
      uuid: `emp-${uuidv4()}`,
      id: generateSequentialId("emp"),
      firstName: form.firstName.value.trim(),
      lastName: form.lastName.value.trim(),
      email: form.email.value.trim(),
      password: form.password.value,
      position: form.position.value.trim(),
      dob: form.dob.value,
      taskNumbers: { active: 0, newTask: 0, completed: 0, failed: 0 },
      tasks: [],
    };

    const emailExists = taskbridge.employees?.some(
      (emp) => emp.email === newEmployee.email
    );

    if (emailExists) {
      toast.error("Employee with this email already exists.");
      return;
    }

    const updatedEmployees = [...(taskbridge.employees || []), newEmployee];

    setLocalStorage({
      ...taskbridge,
      employees: updatedEmployees,
    });

    setEmployees(updatedEmployees);
    form.reset();
    toast.success("Employee added successfully");
  };
  return (
    <>
      <div className={signupMainDiv}>
        <div className={signupHeaderDiv}>
          <h1 className={signupHeaderH1}> Complete Your Organization </h1>
          <p className={signupMessagePTag}> Register employees to the Org. </p>
        </div>

        <div className={signupContainerDiv}>
          <form onSubmit={handleAddEmployee} className={signupFormClass}>

            <div className={signupOrgAdminDets}>
              <h2 className={signupOrgDets}> Add Employee Details </h2>
            </div>

            <div className={signupOrgLeftRight}>
              <div>
                <label className={signupLabelClass}> First Name </label>
                <input name="firstName" type="text" placeholder="Enter your first name" className={signupInputClass} />
              </div>

              <div>
                <label className={signupLabelClass}> Email Address </label>
                <input name="email" type="email" placeholder="Enter your email" className={signupInputClass} />
              </div>
            </div>

            <div className={signupOrgLeftRight}>
              <div>
                <label className={signupLabelClass}> Last Name </label>
                <input name="lastName" type="text" placeholder="Enter your last name" className={signupInputClass} />
              </div>

              <div>
                <label className={signupLabelClass}> Password </label>
                <PasswordToggle name="password" placeholder="Create a strong password" className={signupInputClass} iconClassName="top-[55%]" />
              </div>
            </div>

            <div className={signupOrgLeftRight}>
              <div>
                <label className={signupLabelClass}> Employee Position </label>
                <input name="position" type="text" placeholder="Trainee, Jr., Sr. etc." className={signupInputClass} />
              </div>
            </div>

            <div className={signupOrgLeftRight}>
              <div>
                <label className={signupLabelClass}> Date Of Birth </label>
                <input name="dob" type="text" placeholder="DD/MM/YYYY" className={signupInputClass} />
              </div>
            </div>

            {adminOrgNull && (
              <div className={signupCreateOrgDiv}>
                <button type="submit" className={signupCreateOrgBtn}> Add Employee </button>
              </div>
            )}

          </form>
        </div>

        <hr class="mt-5 border-[#FFDAB3] border-2 rounded"></hr>

        <AddEmployees employees={employees} setEmployees={setEmployees} />

        <div className={signupCreateOrgDiv}>
          <button type="submit" onClick={() => navigate("/signin")} className="bg-[#FFDAB3] text-lg text-[#1B211A] font-bold px-15 py-4 rounded-full hover:brightness-110 active:scale-95 transition-all uppercase"> Register Org. </button>

          <div className="mt-3 space-y-3 text-[#FFDAB3]/65 text-sm leading-relaxed">
            <p>Log in on the next screen to get started. Note: You can add more employees later.</p>
          </div>
        </div>

      </div>
    </>
  );
};

export default RegisterOrg;