import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Balance() {
  const [balance,setBalance] = useState();
  const token = localStorage.getItem("token");

  useEffect(()=>{
    const fetchBalance = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/accounts/balance", {
          headers: {
            Authorization: `Bearer ${token}` 
          }
        });
        setBalance(response.data.user);
      } catch (error) {
        console.error('Error fetching balance:', error);
      }
    };
},[token])


  return (
    <div className='flex flex-rows mt-10 p-4 gap-3'>
        <p className='text-2xl font-bold'>Your Balance: </p>
        <p className='text-2xl font-bold italic'>Rs. {balance}</p>
    </div>
  )
}

export default Balance