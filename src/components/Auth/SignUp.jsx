import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <>
            <div className="h-screen w-full p-10">

                <div className="flex flex-col w-full font-semibold items-center justify-center text-2xl uppercase tracking-wide text-[#FFDAB3]/80">
                    Register for an organization
                </div>

                <div className="w-full flex justify-center py-10">
                    <form className="w-full bg-[#1B211A] p-10 rounded-3xl border border-[#FFDAB3]/40 shadow-[0_0_40px_rgba(0,0,0,0.6)] flex flex-wrap gap-8">

                        <div className="w-full md:w-[48%] text-xl uppercase tracking-wide text-[#FFDAB3]/80">
                            Enter Org Admin Details
                        </div>

                        <div className="text-gray-400">
                            <Link to="/signup" className="pl-3 hover:text-[#FFDAB3] transition-colors duration-300"> Sign Up </Link>
                        </div>

                        {/* LEFT  */}
                        <div className="w-full md:w-[48%] flex flex-col gap-6">
                            <div>
                                <label className="text-sm uppercase tracking-wide text-[#FFDAB3]/80"> First Name : </label>
                                <input type="text" placeholder="Enter Your First Name" className="mt-2 w-full bg-[#0F1412] border border-[#FFDAB3]/30 rounded-xl px-4 py-3 text-[#F8F8F2] outline-none focus:border-[#FFDAB3] focus:ring-1 focus:ring-[#FFDAB3]/50 transition" />
                            </div>

                            <div>
                                <label className="text-sm uppercase tracking-wide text-[#FFDAB3]/80"> Email : </label>
                                <input type="text" placeholder="Enter Your Email Id" className="mt-2 w-full bg-[#0F1412] border border-[#FFDAB3]/30 rounded-xl px-4 py-3 text-[#F8F8F2] outline-none focus:border-[#FFDAB3] focus:ring-1 focus:ring-[#FFDAB3]/50 transition" />
                            </div>
                        </div>

                        {/* RIGHT  */}
                        <div className="w-full md:w-[48%] flex flex-col gap-6">
                            <div>
                                <label className="text-sm uppercase tracking-wide text-[#FFDAB3]/80"> Last Name : </label>
                                <input type="text" placeholder="Enter Your Last Name" className="mt-2 w-full bg-[#0F1412] border border-[#FFDAB3]/30 rounded-xl px-4 py-3 text-[#F8F8F2] outline-none focus:border-[#FFDAB3] focus:ring-1 focus:ring-[#FFDAB3]/50 transition" />
                            </div>

                            <div>
                                <label className="text-sm uppercase tracking-wide text-[#FFDAB3]/80"> Password : </label>
                                <input type="text" placeholder="Enter Your Password" className="mt-2 w-full bg-[#0F1412] border border-[#FFDAB3]/30 rounded-xl px-4 py-3 text-[#F8F8F2] outline-none focus:border-[#FFDAB3] focus:ring-1 focus:ring-[#FFDAB3]/50 transition" />
                            </div>
                        </div>


                        <div className="w-full md:w-[100%] text-xl uppercase tracking-wide text-[#FFDAB3]/80 pt-5">
                            Enter Organization Details
                        </div>

                        {/* LEFT  */}
                        <div className="w-full md:w-[48%] flex flex-col gap-6">
                            <div>
                                <label className="text-sm uppercase tracking-wide text-[#FFDAB3]/80"> Org Name : </label>
                                <input type="text" placeholder="Enter Your Organization Name" className="mt-2 w-full bg-[#0F1412] border border-[#FFDAB3]/30 rounded-xl px-4 py-3 text-[#F8F8F2] outline-none focus:border-[#FFDAB3] focus:ring-1 focus:ring-[#FFDAB3]/50 transition" />
                            </div>
                        </div>

                        {/* RIGHT  */}
                        <div className="w-full md:w-[48%] flex flex-col gap-6">
                            <div>
                                <label className="text-sm uppercase tracking-wide text-[#FFDAB3]/80"> Org Category : </label>
                                <input type="text" placeholder="Enter Your Org Category ( IT, Marketing, Finance, R&D )" className="mt-2 w-full bg-[#0F1412] border border-[#FFDAB3]/30 rounded-xl px-4 py-3 text-[#F8F8F2] outline-none focus:border-[#FFDAB3] focus:ring-1 focus:ring-[#FFDAB3]/50 transition" />
                            </div>
                        </div>


                        <div className="w-full md:w-[100%] flex flex-col">
                            <label className="text-sm uppercase tracking-wide text-[#FFDAB3]/80 mb-2"> Description : </label>
                            <textarea rows="5" placeholder="Describe the task clearly so the employee understands expectations..." className="flex-1 bg-[#0F1412] border border-[#FFDAB3]/30 rounded-xl px-4 py-4 text-[#F8F8F2] outline-none resize-none focus:border-[#FFDAB3] focus:ring-1 focus:ring-[#FFDAB3]/50 transition" />
                        </div>

                        <div className="flex flex-col w-full font-semibold items-center justify-center text-lg uppercase tracking-wide text-[#FFDAB3]/80">
                            <button className="bg-[#FFDAB3] text-[#1B211A] font-semibold px-10 py-3 rounded-full hover:brightness-110 active:scale-95 transition-all uppercase"> Create Org </button>
                        </div>


                        <div className="flex justify-end text-gray-400">
                            <Link to="/signin" className="pl-3 hover:text-[#FFDAB3] transition-colors duration-300 uppercase"> Sign In </Link>
                        </div>

                    </form>
                </div>
            </div>

        </>
    )
}

export default SignUp;