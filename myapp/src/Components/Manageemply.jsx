import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react';
import axios from 'axios';

const Manageemply = () => {


  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/auth/employee')
      .then((response) => {
        console.log(response.data);
        setData(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
    <div>Manageemply</div>
    <div className='container'>
    <h3>Employees List</h3>
  </div>
  <div>
    <Link to="/dashboard/add_employee" className='btn btn-success'>
      Add Employee
    </Link>
  </div>

  <div>
        <table className='table'>
          <thead>
            <tr>
              <th>Name of The Category</th>
            </tr>
          </thead>
          <tbody style={{border:"1px solid black"}} >
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>{item.salary}</td>
                <td>{item.address}</td>
                <td><img src={`http://localhost:3001/Images/`+item.image} width="150px" alt="pic"/></td>
                <td><Link to={`/dashboard/edit_employee/`+item.id} className='btn btn-warning'>Edit</Link></td>
                <td><button className='btn btn-danger'>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  </>
  )
}

export default Manageemply