import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

  return (
    <div className='flex justify-center'>
    <div className="w-full p-5 shadow-2xl lg:max-w-lg mt-10 rounded-lg">
            <div className="space-y-2">
            <div className='flex flex-col px-10 py-10'>
        <h3 className='flex justify-center text-black text-4xl font-bold'>
            Sign In
        </h3>
        <p className='flex justify-center mt-4 text-gray-500 text-xl'>
            Enter your credentials to login
        </p>
        

        <p className='mt-5 font-bold text-lg'>Email</p>
        <input variant="outlined" type='email' name="email" id="email" placeholder='tony@example.com'
            onChange={(e)=>{
                setUsername(e.target.value);
            }}
            className='w-full border border-gray-300 h-10  mt-3 rounded-lg p-2'
        />

        <p className='mt-5 font-bold text-lg'>Password</p>
        <input variant="outlined" type="text" name="password" id="password" 
            onChange={(e)=>{
                setPassword(e.target.value);
            }}
            className='w-full border border-gray-300 h-10  mt-3 rounded-lg p-2'
        />

        <button
        onClick={async () => {
            const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
              username,
              password
            });
            localStorage.setItem("token", response.data.token)
            navigate("/dashboard")
          }}
        className='mt-5 bg-black text-white font-bold text-xl h-12 rounded-lg'
        >Sign In</button>
        <div className='flex flex-row mt-4 justify-center gap-1'>
        <p>Don't have an account?</p><button className='font-bold underline'>Sign-Up</button>
        </div>
        </div>
        </div>
        </div>
        </div>
  )
}


// async function signIn ({username,password}){
//     const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
//         username,
//         password
//     });
//     localStorage.setItem("token", response.data.token)
//     navigate("/dashboard")

// }

export default Signin