import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddEmployee = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/auth/category')
      .then((response) => {
        console.log(response.data);
        setData(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    address: '',
    password: '',
    category_id: '',
    salary: '',
    image: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name',employee.name);
    formData.append('email',employee.email);
    formData.append('address',employee.address);
    formData.append('password',employee.password);
    formData.append('category_id',employee.category_id);
    formData.append('salary',employee.salary);
    formData.append('image',employee.image);



    axios.post('http://localhost:3001/auth/add_employee', formData)
      .then(result => {
        if (result.data.Status) {
          navigate('/dashboard/manageemply');
        } else {
          alert(result.data.error);
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <div className='container'>
        <h1>Add Employee</h1>

        <div className='d-flex justify-content-center align-tems-center vf-100 loginPage'>
          <div className='p-3 roundedw-25 border loginFom'>
            <div className='text-danger'></div>

            <form onSubmit={handleSubmit}>
              <div>
                <label><strong>Employee</strong></label>
                <input type="text" name="name" placeholder="Name" className='form-control rounded-0'
                  onChange={(e) => setEmployee({ ...employee, name: e.target.value })} />
                <input type="text" name="email" placeholder="Email" className='form-control rounded-0'
                  onChange={(e) => setEmployee({ ...employee, email: e.target.value })} />
                <input type="text" name="password" placeholder="Password" className='form-control rounded-0'
                  onChange={(e) => setEmployee({ ...employee, password: e.target.value })} />
                <input type="text" name="salary" placeholder="Salary" className='form-control rounded-0'
                  onChange={(e) => setEmployee({ ...employee, salary: e.target.value })} />
                <input type="text" name="address" placeholder="Address" className='form-control rounded-0'
                  onChange={(e) => setEmployee({ ...employee, address: e.target.value })} />

                <select name="category_id" id="category" onChange={(e) => setEmployee({ ...employee, category_id: e.target.value })}>
                  {data.map((item) => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                  ))}
                </select>

                <input type="file" name="image" placeholder="Address" className='form-control rounded-0'
                  onChange={(e) => setEmployee({ ...employee, image: e.target.files[0] })} />
              </div>

              <button className='btn btn-success mt-4 w-50 rounded-3'>Add</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
