import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Home = () => {

  const[adminTotal, setAdminTotal] = useState(0)
  const[employeeTotal, setemployeeTotal] = useState(0)
  const[salaryTotal,setSalaryTotal] = useState(0)

useEffect (() => {
adminCount();
employeeCount();
salaryCount();
},[])

const adminCount = () => {
  axios.get('http://localhost:3001/auth/admin_count')
  .then(result => {
    if(result.data.Status) {
      setAdminTotal(result.data.Result[0].admin)
    }
  })
}

const employeeCount = () => {
  axios.get('http://localhost:3001/auth/employee_count')
  .then(result => {
    if(result.data.Status) {
      setemployeeTotal(result.data.Result[0].employee)
    }
  })
}

const salaryCount = () => {
  axios.get('http://localhost:3001/auth/salary_count')
  .then(result => {
    if(result.data.Status) {
      setSalaryTotal(result.data.Result[0].salary)
    }
  })
}


  return (
    <> 
<div className='row'>
  <div className='col m-3' style={{border:"1px solid black",borderRadius:"15px",backgroundColor:"skyblue"}}>
    <h2>Admin</h2>
    <h4>Total: {adminTotal}</h4>
  </div>
  <div className='col m-3' style={{border:"1px solid black",borderRadius:"15px",backgroundColor:"skyblue"}}>
    <h2>Employee</h2>
    <h4>Total: {employeeTotal}</h4>
  </div>
  <div className='col m-3' style={{border:"1px solid black",borderRadius:"15px",backgroundColor:"skyblue"}}>
    <h2>Salary</h2>
    <h4>Total: {salaryTotal}</h4>
  </div>
</div>
</>


  )
}

export default Home