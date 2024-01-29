import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function User() {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/user/bulk?filter="+ filter)
        .then(response => {
            setUsers(response.data.user)
        })
    },[filter])


  return (
    <div className='flex flex-col p-4'>
        <h3 className='text-2xl font-bold'>Users</h3>
        <input 
        onChange={(e)=>{
            setFilter(e.target.value);
        }}
        variant="outlined" type="text" name="userSearch" id="userSearch" placeholder='Search Users . . .'
            className='w-full border border-gray-300 h-14  mt-3 rounded-lg p-2'
        />
        <div>
            {users.map(user => <UserCard user ={user} key={user._id}/>)}
        </div>


    </div>
  )
}

function UserCard({user}){
    const navigate = useNavigate();
    return <div className='flex justify-between'>
        <div className='flex'>
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
            <div className='flex flex-col justify-center h-full text-xl'>
                {user.firstname[0]}
            </div>
            </div>
            <div className='flex flex-col justify-center h-full'>
                <div>
                    {user.firstname} {user.lastname}
                </div>
            </div>
        </div>

        <div className='flex flex-col justify-center h-full'>
            <button 
            className='mt-5 bg-black text-white  h-12 rounded-lg p-2'
            onClick={(e)=>{
                navigate("/send?id=" +user._id + "&name=" +user.firstname);
            }}>Send Money</button>

        </div>
    </div>
}

export default User