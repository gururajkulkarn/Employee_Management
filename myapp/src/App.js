import React from 'react'
import Login from './Components/Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Home from'./Components/Home'
import Manageemply from './Components/Manageemply'
import Category from './Components/Category'
import Profile from './Components/Profile'
import Addcategory from './Components/Addcategory'
import AddEmployee from './Components/AddEmployee'
import EditEmployee from './Components/EditEmployee'


const App = () => {
  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path="/adminlogin" element={<Login/>} />

      <Route path="/dashboard" element={<Dashboard/>}>
      <Route path="" element={<Home/>} />
      <Route path="/dashboard/manageemply" element={<Manageemply/>} />
      <Route path="/dashboard/category" element={<Category/>} />
      <Route path="/dashboard/profile" element={<Profile/>} />
      <Route path="/dashboard/add_category" element={<Addcategory/>} />
      <Route path="/dashboard/add_employee" element={<AddEmployee/>} />
      <Route path="/dashboard/edit_employee/:id" element={<EditEmployee/>} />
      </Route>

    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App