import React from 'react'

function Balance({value}) {
  return (
    <div className='flex flex-rows mt-10 p-4 gap-3'>
        <p className='text-2xl font-bold'>Your Balance: </p>
        <p className='text-2xl font-bold italic'>Rs. {value}</p>
    </div>
  )
}

export default Balance