import React from 'react'

const Dashboard = (props) => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <h4 onClick={() => props.onFormSwitch('login')}>Sign Out</h4>
    </div>
  )
}

export default Dashboard