import React from 'react'

function Appbar() {
  return (
    <div className='shadow h-16 flex justify-between'>
        <p className='flex flex-col justify-center text-3xl font-bold p-5'>Payments App</p>
        <div className='flex justify-between gap-6 p-4 mr-5 '>
    </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-4">
                Hello User
            </div>
            <div className="rounded-full h-12 w-12 mr-4 bg-gray-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    U
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Appbar