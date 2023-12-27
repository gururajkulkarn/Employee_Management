import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Addcategory = () => {

const[category,setCategory] = useState()

const navigate = useNavigate()

const handlesubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/auth/add_category', {category})
    .then(result => {
        if(result.data.Status) {
            navigate('/dashboard/category')      
        }
        else{
            alert(result.data.error)
        }
    }
        )
    .catch(err => console.log(err))
}

  return (
    <div>
<div className='container'>
    <h1>Add Category</h1>

    
<div className='d-flex justify-content-center align-tems-center vf-100 loginPage'>
    <div className='p-3 roundedw-25 border loginFom'>
<div className='text-danger'>

</div>
  
    <form onSubmit={handlesubmit}>
        <div>
            <label><strong>Category</strong></label>
            <input type="text" name="category" placeholder="Category" className='form-control rounded-0' 
            onChange={(e) => setCategory(e.target.value)}/>

        </div>
  
        <button className='btn btn-success mt-4  w-50 rounded-3'>Add</button>
    </form>
</div>

</div>


</div>


    </div>
  )
}

export default Addcategory