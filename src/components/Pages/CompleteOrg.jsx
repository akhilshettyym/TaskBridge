import { signupContainerDiv, signupCreateOrgBtn, signupCreateOrgDiv, signupFormClass, signupHeaderDiv, signupHeaderH1, signupInputClass, signupLabelClass, signupMainDiv, signupMessagePTag, signupOrgAdminDets, signupOrgDets, signupOrgLeftRight } from '../../constants/imports'

const CompleteOrg = () => {
    return (
        <div className={signupMainDiv}>

            <div className={signupHeaderDiv}>
                <h1 className={signupHeaderH1}> Complete Your Organization </h1>
                <p className={signupMessagePTag}> Register employees to the Org. </p>
            </div>

            <div className={signupContainerDiv}>
                <form className={signupFormClass}>
                    <div className={signupOrgAdminDets}>
                        <h2 className={signupOrgDets}> Add Employee Details </h2>
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

                    {/* ORG LEFT */}
                    <div className={signupOrgLeftRight}>
                        <div>
                            <label className={signupLabelClass}> Employee Id </label>
                            <input type="text" placeholder="Employee Id (Auto Gen)" className={signupInputClass} />
                        </div>
                    </div>

                    {/* ORG RIGHT */}
                    <div className={signupOrgLeftRight}>
                        <div>
                            <label className={signupLabelClass}> Employee Position </label>
                            <input type="text" placeholder="Trainee, Jr. , Sr. etc." className={signupInputClass} />
                        </div>
                    </div>

                    {/* CTA */}
                    <div className={signupCreateOrgDiv}>
                        <button className={signupCreateOrgBtn}> Add Employee </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CompleteOrg;