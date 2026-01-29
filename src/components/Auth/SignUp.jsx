import { Link } from "react-router-dom";

const SignUp = () => {
    return (

        <div className="h-screen w-full p-10 bg-[#0F1412] overflow-auto">

            <div className="flex flex-col items-center justify-center text-center mb-10">
                <h1 className="text-3xl font-bold uppercase tracking-wider text-[#FFDAB3]">
                    Create Your Organization
                </h1>
                <p className="mt-2 text-sm text-[#FFDAB3]/70">
                    Register as an organization admin to manage employees and tasks
                </p>
            </div>

            <div className="w-full flex justify-center ">
                <form className="w-full bg-[#1B211A] p-10 rounded-3xl border border-[#FFDAB3]/40 shadow-[0_0_40px_rgba(0,0,0,0.6)] flex flex-wrap gap-8">

                    <div className="w-full flex justify-between items-center">
                        <h2 className="text-xl uppercase tracking-wide text-[#FFDAB3]">
                            Organization Admin Details
                        </h2>
                        <Link to="/signin" className="text-sm text-gray-400 hover:text-[#FFDAB3] transition-colors uppercase" >
                            Already have an account ?
                        </Link>
                    </div>

                    {/* LEFT */}
                    <div className="w-full md:w-[48%] flex flex-col gap-6">
                        <div>
                            <label className="text-sm uppercase tracking-wide text-[#FFDAB3]/80">
                                First Name
                            </label>
                            <input type="text" placeholder="Enter your first name" className="mt-2 w-full bg-[#0F1412] border border-[#FFDAB3]/30 rounded-xl px-4 py-3 text-[#F8F8F2] outline-none focus:border-[#FFDAB3] focus:ring-1 focus:ring-[#FFDAB3]/50 transition" />
                        </div>

                        <div>
                            <label className="text-sm uppercase tracking-wide text-[#FFDAB3]/80">
                                Email Address
                            </label>
                            <input type="email" placeholder="Enter your email" className="mt-2 w-full bg-[#0F1412] border border-[#FFDAB3]/30 rounded-xl px-4 py-3 text-[#F8F8F2] outline-none focus:border-[#FFDAB3] focus:ring-1 focus:ring-[#FFDAB3]/50 transition" />
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="w-full md:w-[48%] flex flex-col gap-6">
                        <div>
                            <label className="text-sm uppercase tracking-wide text-[#FFDAB3]/80">
                                Last Name
                            </label>
                            <input type="text" placeholder="Enter your last name" className="mt-2 w-full bg-[#0F1412] border border-[#FFDAB3]/30 rounded-xl px-4 py-3 text-[#F8F8F2] outline-none focus:border-[#FFDAB3] focus:ring-1 focus:ring-[#FFDAB3]/50 transition" />
                        </div>

                        <div>
                            <label className="text-sm uppercase tracking-wide text-[#FFDAB3]/80">
                                Password
                            </label>
                            <input type="password" placeholder="Create a strong password" className="mt-2 w-full bg-[#0F1412] border border-[#FFDAB3]/30 rounded-xl px-4 py-3 text-[#F8F8F2] outline-none focus:border-[#FFDAB3] focus:ring-1 focus:ring-[#FFDAB3]/50 transition" />
                        </div>
                    </div>

                    <div className="w-full pt-6 border-t border-[#FFDAB3]/20">
                        <h2 className="text-xl uppercase tracking-wide text-[#FFDAB3]">
                            Organization Information
                        </h2>
                    </div>

                    {/* ORG LEFT */}
                    <div className="w-full md:w-[48%] flex flex-col gap-6">
                        <div>
                            <label className="text-sm uppercase tracking-wide text-[#FFDAB3]/80">
                                Organization Name
                            </label>
                            <input type="text" placeholder="Enter organization name" className="mt-2 w-full bg-[#0F1412] border border-[#FFDAB3]/30 rounded-xl px-4 py-3 text-[#F8F8F2] outline-none focus:border-[#FFDAB3] focus:ring-1 focus:ring-[#FFDAB3]/50 transition" />
                        </div>
                    </div>

                    {/* ORG RIGHT */}
                    <div className="w-full md:w-[48%] flex flex-col gap-6">
                        <div>
                            <label className="text-sm uppercase tracking-wide text-[#FFDAB3]/80">
                                Organization Category
                            </label>
                            <input type="text" placeholder="IT, Marketing, Finance, R&D" className="mt-2 w-full bg-[#0F1412] border border-[#FFDAB3]/30 rounded-xl px-4 py-3 text-[#F8F8F2] outline-none focus:border-[#FFDAB3] focus:ring-1 focus:ring-[#FFDAB3]/50 transition" />
                        </div>
                    </div>

                    {/* DESCRIPTION */}
                    <div className="w-full flex flex-col">
                        <label className="text-sm uppercase tracking-wide text-[#FFDAB3]/80 mb-2">
                            Organization Description
                        </label>
                        <textarea rows="5" placeholder="Briefly describe what your organization does" className="bg-[#0F1412] border border-[#FFDAB3]/30 rounded-xl px-4 py-4 text-[#F8F8F2] outline-none resize-none focus:border-[#FFDAB3] focus:ring-1 focus:ring-[#FFDAB3]/50 transition" />
                    </div>

                    {/* CTA */}
                    <div className="w-full flex flex-col items-center pt-6">
                        <button className="bg-[#FFDAB3] text-[#1B211A] font-semibold px-12 py-3 rounded-full hover:brightness-110 active:scale-95 transition-all uppercase">
                            Create Organization
                        </button>

                        <Link to="/signin" className="mt-4 text-sm text-gray-400 hover:text-[#FFDAB3] transition-colors uppercase">
                            Already registered ? Sign In
                        </Link>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default SignUp;