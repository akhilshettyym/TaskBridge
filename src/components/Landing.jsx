import { useNavigate } from "react-router-dom";
import { signupMainDiv, signupCreateOrgBtn } from "../constants/imports";

const Landing = () => {

    const navigate = useNavigate();

    return (
        <div
            className={`${signupMainDiv} flex items-center justify-center`} style={{ overflow: "hidden" }}>
            <div className="w-full max-w-xl text-center">

                <h1 className="text-5xl font-bold tracking-widest text-[#FFDAB3] uppercase"> TaskBridge </h1>

                <p className="mt-4 text-[#FFDAB3]/70 text-sm uppercase tracking-wider"> Organization & Task Management System </p>

                <div className="mt-10 space-y-3 text-[#FFDAB3]/65 text-sm leading-relaxed">
                    <p> Create and manage organizations. </p>
                    <p> Assign tasks, track progress, and collaborate with employees. </p>
                    <p> Built for clarity, control, and persistence. </p>
                </div>

                <div className="mt-14">
                    <button onClick={() => navigate("/signin")} className={`${signupCreateOrgBtn} px-16`}> Enter Workspace </button>
                </div>

                <p className="mt-6 text-xs text-[#FFDAB3]/50 uppercase tracking-wide cursor-pointer hover:text-[#FFDAB3]" onClick={() => navigate("/signup")}>
                    New organization? Create one →
                </p>

            </div>
        </div>
    );
};

export default Landing;