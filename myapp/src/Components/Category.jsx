import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Category = () => {
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

  return (
    <div>
      <div className='container'>
        <h3>Category List</h3>
      </div>
      <div>
        <Link to="/dashboard/add_category" className='btn btn-success'>
          Add category
        </Link>
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>Name of The Category</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Category;
