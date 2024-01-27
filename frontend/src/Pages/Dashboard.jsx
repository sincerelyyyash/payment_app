import React from 'react'
import Appbar from '../Components/Appbar'
import Balance from '../Components/Balance'
import User from '../Components/User'

function Dashboard() {
  return (
    <div>
      <Appbar/>
      <Balance/>
      <User/>
    </div>
  )
}

export default Dashboard