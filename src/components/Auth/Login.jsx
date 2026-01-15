import { useState } from 'react';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(`Email is ${email}`);
    console.log(`Password is ${password}`);

    setEmail("");
    setPassword("");
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 rounded-3xl p-20">
        <form onSubmit={(e) => {
          submitHandler(e);
        }}
          className="flex flex-col items-center justify-center">
          <input value={email} onChange={(e) => { setEmail(e.target.value) }} required className="outline-none bg-transparent border-2 border-emerald-600 py-3 text-xl px-5 rounded-full placeholder:text-gray-400" type="email" placeholder="Enter your Email" />
          <input value={password} onChange={(e) => { setPassword(e.target.value) }} required className="outline-none bg-transparent border-2 border-emerald-600 py-3 text-xl px-5 rounded-full mt-5 placeholder:text-gray-400" type="password" placeholder="Enter password" />
          <button className="text-white border-none bg-emerald-600 py-3 text-xl px-5 rounded-full mt-7 placeholder:text-gray-400">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login;