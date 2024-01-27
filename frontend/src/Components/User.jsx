import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function User() {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(()=>{
        axios.get("https://localhost:3000/api/v1/user/bulk?filter='"+filter)
        .then(response => {
            setUsers(response.data.user)
        })
    },[filter])


  return (
    <div className='flex flex-col p-4'>
        <h3 className='text-2xl font-bold'>Users</h3>
        <input variant="outlined" type="text" name="userSearch" id="userSearch" placeholder='Search Users . . .'
            className='w-full border border-gray-300 h-14  mt-3 rounded-lg p-2'
        />
        <div>
            {users.map(user => <UserCard user ={user}/>)}
        </div>


    </div>
  )
}

function UserCard({user}){
    const navigate = useNavigate();

    return
    <div className='flex justify-between'>
        <div className='flex'>
            <div className='flex flex-col justify-center h-full text-xl'>
                {user.firstName[0]}
            </div>
            <div className='flex flex-col justify-center h-full'>
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className='flex flex-col justify-center h-full'>
            <button onClick={()=>{
                navigate("/send?id=" +user._id + "&name=" +user.firstName);
            }}>Send Money</button>

        </div>
    </div>
}

export default User