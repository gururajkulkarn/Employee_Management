import React from 'react'
import {Link, Outlet} from 'react-router-dom'
const Dashboard = () => {
  return (
    <div className='container-fluid'>
      <div className='row flex-nowrap'>
        <div className='col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark'> 
        <div className='d-flex  flex-column align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white'>
          <Link to="/dashboard">Gururaj Kulkarni</Link>
        </div>
        <ul>
          <li>
          <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
          <Link to="/dashboard/manageemply">Manage Eployees</Link>
          </li>
          <li>
          <Link to="/dashboard/category">Category</Link>
          </li>
          <li>
          <Link to="/dashboard/profile">Profile</Link>
          </li>
        </ul>
        <div>
        </div>
        </div>
        
        <div className='col'>
          <div>
          <h1>EMPLOYEE MANAGEMENT SYSTEM</h1>
          </div>
          <Outlet/>
          </div>

 
      </div>
    </div>
  )
}

export default Dashboard