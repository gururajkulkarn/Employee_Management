import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Login = () => {

const[values,setValues] = useState({
    email:'',
    password:''
})

const[error,setError] = useState(null)

const navigate = useNavigate()

axios.defaults.withCredentials = true;

const handlesubmit = (e) => {
    e.preventDefault()

    axios.post('http://localhost:3001/auth/adminlogin', values)
    .then(result => {
        if(result.data.loginStatus) {
            navigate('/dashboard')      
        }
        else{
            setError(result.data.Error)
        }
    }
        )
    .catch(err => console.log(err))

    
}

  return (
    <>
<div className='d-flex justify-content-center align-tems-center vf-100 loginPage'>
    <div className='p-3 roundedw-25 border loginFom'>
<div className='text-danger'>
{error && error}
</div>
    <h2>Login</h2>
    <form onSubmit={handlesubmit}>
        <div>
            <label><strong>Email</strong></label>
            <input type="text" name="email" placeholder="email" className='form-control rounded-0' 
            onChange={(e) => setValues({...values,email:e.target.value})}/>

        </div>
        <div>
            <label><strong>Password</strong></label>
            <input type="password" name="password" placeholder="Password" className='form-control rounded-0' 
            onChange={(e) => setValues({...values,password:e.target.value})}/>

            
        </div>
        <button className='btn btn-success mt-4  w-100 rounded-3'>LogIn</button>
    </form>
</div>

</div>

    </>
  )
}

export default Login