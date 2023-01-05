import React from 'react'
import { Routes,Route,Link } from 'react-router-dom'
import MySignUp from '../Login-SignUp/SignUp'
import MyLogin from '../Login-SignUp/Login'
function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<MySignUp/>} />
            <Route path='/login' element={<MyLogin/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes