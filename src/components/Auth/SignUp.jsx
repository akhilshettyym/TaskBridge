import { Link, signupAlreadyRegistered, signupContainerDiv, signupCreateOrgBtn, signupCreateOrgDiv, signupDescDiv, signupFormClass, signupHeaderDiv, signupHeaderH1, signupInputClass, signupLabelClass, signupLinkToSignIn, signupMainDiv, signupMessagePTag, signupOrgAdminDets, signupOrgDets, signupOrgInfo, signupOrgLeftRight, signupTextareaClass } from '../../constants/imports'

const SignUp = () => {

    return (

        <div className={signupMainDiv}>

            <div className={signupHeaderDiv}>
                <h1 className={signupHeaderH1}> Create Your Organization </h1>
                <p className={signupMessagePTag}> Register as an organization admin to manage employees and tasks </p>
            </div>

            <div className={signupContainerDiv}>
                <form className={signupFormClass}>
                    <div className={signupOrgAdminDets}>
                        <h2 className={signupOrgDets}> Organization Admin Details </h2>
                        <Link to="/signin" className={signupLinkToSignIn}> Already have an account ? </Link>
                    </div>

                    {/* LEFT */}
                    <div className={signupOrgLeftRight}>
                        <div>
                            <label className={signupLabelClass}> First Name </label>
                            <input type="text" placeholder="Enter your first name" className={signupInputClass} />
                        </div>

                        <div>
                            <label className={signupLabelClass}> Email Address </label>
                            <input type="email" placeholder="Enter your email" className={signupInputClass} />
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className={signupOrgLeftRight}>
                        <div>
                            <label className={signupLabelClass}> Last Name </label>
                            <input type="text" placeholder="Enter your last name" className={signupInputClass} />
                        </div>

                        <div>
                            <label className={signupLabelClass}> Password </label>
                            <input type="password" placeholder="Create a strong password" className={signupInputClass} />
                        </div>
                    </div>

                    <div className={signupOrgInfo}>
                        <h2 className={signupOrgDets}> Organization Information </h2>
                    </div>

                    {/* ORG LEFT */}
                    <div className={signupOrgLeftRight}>
                        <div>
                            <label className={signupLabelClass}> Organization Name </label>
                            <input type="text" placeholder="Enter organization name" className={signupInputClass} />
                        </div>
                    </div>

                    {/* ORG RIGHT */}
                    <div className={signupOrgLeftRight}>
                        <div>
                            <label className={signupLabelClass}> Organization Category </label>
                            <input type="text" placeholder="IT, Marketing, Finance, R&D" className={signupInputClass} />
                        </div>
                    </div>

                    {/* DESCRIPTION */}
                    <div className={signupDescDiv}>
                        <label className={signupLabelClass}> Organization Description </label>
                        <textarea rows="5" placeholder="Briefly describe what your organization does" className={signupTextareaClass} />
                    </div>

                    {/* CTA */}
                    <div className={signupCreateOrgDiv}>
                        <button className={signupCreateOrgBtn}> Create Organization </button>
                        <Link to="/signin" className={signupAlreadyRegistered}> Already registered ? Sign In </Link>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default SignUp;