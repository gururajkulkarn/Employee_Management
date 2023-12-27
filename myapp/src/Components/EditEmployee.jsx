import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditEmployee = () => {
  const { id } = useParams();

  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    address: '',
    password: '',
    category_id: '',
    salary: '',
    image: ''
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories
    axios.get('http://localhost:3001/auth/category')
      .then((response) => {
        console.log(response.data);
        setCategories(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // Fetch employee data
 axios.get(`http://localhost:3001/auth/employee/${id}`)
  .then(result => {
    console.log(result.data);
    const employeeData = result.data.data;  // Access 'data' property directly

    setEmployee({
      name: employeeData.name,
      email: employeeData.email,
      password: employeeData.password,
      salary: employeeData.salary,
      address: employeeData.address,
      category_id: employeeData.category_id,
    });
  })
  .catch(err => console.log(err));


  }, [id]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access the updated employee state with the fetched data
    console.log(employee);
  };

  return (
    <>
      <div>Edit Employee</div>

      <div className='container'>
        <h1>Edit Employee</h1>

        <div className='d-flex justify-content-center align-tems-center vf-100 loginPage'>
          <div className='p-3 roundedw-25 border loginFom'>
            <div className='text-danger'></div>

            <form onSubmit={handleFormSubmit}>
              <div>
                <label><strong>Employee</strong></label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className='form-control rounded-0'
                  value={employee.name}
                  onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
                />

                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className='form-control rounded-0'
                  value={employee.email}
                  onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
                />

                <input
                  type="text"
                  name="password"
                  placeholder="Password"
                  className='form-control rounded-0'
                  value={employee.password}
                  onChange={(e) => setEmployee({ ...employee, password: e.target.value })}
                />

                <input
                  type="text"
                  name="salary"
                  placeholder="Salary"
                  className='form-control rounded-0'
                  value={employee.salary}
                  onChange={(e) => setEmployee({ ...employee, salary: e.target.value })}
                />

                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  className='form-control rounded-0'
                  value={employee.address}
                  onChange={(e) => setEmployee({ ...employee, address: e.target.value })}
                />

                <select
                  name="category_id"
                  id="category"
                  onChange={(e) => setEmployee({ ...employee, category_id: e.target.value })}
                >
                  {categories.map((item) => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                  ))}
                </select>

                <input
                  type="file"
                  name="image"
                  placeholder="Address"
                  className='form-control rounded-0'
                  onChange={(e) => setEmployee({ ...employee, image: e.target.files[0] })}
                />
              </div>

              <button className='btn btn-success mt-4 w-50 rounded-3' type="submit">Update</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditEmployee;
