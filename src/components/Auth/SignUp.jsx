import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      HI
      <h4 className="text-gray-400"> Not a Registered User ? <Link to="/signin" className="pl-3 hover:text-[#FFDAB3] transition-colors duration-300"> Sign In </Link></h4>
    </div>
  )
}

export default SignUp;