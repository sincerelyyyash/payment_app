import React from 'react'

function Signup() {
  return (
    <div className='flex justify-center'>
    <div className="w-full p-5 shadow-2xl lg:max-w-lg mt-10">
            <div className="space-y-2">
            <div className='flex flex-col px-10 py-10'>
        <div className='flex justify-center text-black text-4xl font-bold'>
            Sign Up
        </div>
        <div className='flex justify-center mt-4 text-gray-500 text-xl'>
            Enter your information to create an account
        </div>
        <div className='mt-5 font-bold text-lg'>First Name</div>
        <input variant="outlined" type="text" name="firstName" id="firstname" placeholder='Tony'
            className='w-full border border-gray-300 h-10  mt-3 rounded-lg p-2'
        />

        <div className='mt-5 font-bold text-lg'>Last Name</div>
        <input variant="outlined" type="text" name="lastName" id="lastname" placeholder='Stark'
            className='w-full border border-gray-300 h-10  mt-3 rounded-lg p-2'
        />

        <div className='mt-5 font-bold text-lg'>Email</div>
        <input variant="outlined" type='email' name="email" id="email" placeholder='tony@example.com'
            className='w-full border border-gray-300 h-10  mt-3 rounded-lg p-2'
        />

        <div className='mt-5 font-bold text-lg'>Password</div>
        <input variant="outlined" type="text" name="password" id="password" 
            className='w-full border border-gray-300 h-10  mt-3 rounded-lg p-2'
        />

        <button
        className='mt-5 bg-black text-white font-bold text-xl h-12 rounded-lg'
        >Sign Up</button>
        <div className='flex flex-row mt-4 justify-center gap-1'>
        <p>Already have an account?</p><button className='font-bold underline'>Login</button>
        </div>
        </div>
        </div>
        </div>
        </div>
  )
}

export default Signup