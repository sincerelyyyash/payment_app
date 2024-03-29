import React, { useState } from 'react'
import {useNavigate, useSearchParams} from 'react-router-dom';
import axios from 'axios';

function Send() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();

  function sendMoney() {
    const token = localStorage.getItem("token");
  
    if (!token) {
      console.error('No token found. User not authenticated.');
      return;
    }
  
    axios.post(
      "http://localhost:3000/api/v1/account/transfer",
      {
        to: id,
        amount: amount
      },
      {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      }
    )
    .then(response => {
      console.log('Transfer successful:', response.data);
      alert("Transfer Succesfull")
      navigate("/dashboard");
    })
    .catch(error => {
      console.error('Error transferring money:', error);
    });
  }
 


  return (
    <div className='flex justify-center'>
    <div className="w-full p-5 shadow-2xl lg:max-w-lg mt-10 rounded-lg">
            <div className="space-y-2">
            <div className='flex flex-col px-10 py-10'>
        <h3 className='flex justify-center text-black text-4xl font-bold'>
            Send Money
        </h3>
        <div class="flex items-center space-x-4">
            <div class="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center mt-5">
            <span class="text-2xl text-white">{name[0].toUpperCase()}</span>
            </div>
            <h3 class="text-2xl  mt-5 italic">{name}</h3>
        </div>

        <p className='mt-10 font-bold text-md'>Amount (Rs.) </p>
        <input variant="outlined" type="number" name="lastName" id="lastname" placeholder='Enter Amount'
            onChange={(e)=>{
              setAmount(e.target.value);
            }}
            className='w-full border border-gray-300 h-10  mt-3 rounded-lg p-2'
        />
        <button
        onClick={sendMoney}
        className='mt-5 bg-black text-white font-bold text-xl h-12 rounded-lg'
        >Transfer</button>
        </div>
        </div>
    </div>
    </div>
  )
}



export default Send