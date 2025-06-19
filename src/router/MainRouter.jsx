import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Developers from '../pages/Developers'
import Dashboard from '../pages/Dashboard'
import Auth from '../pages/Auth'
import Login from '../components/Login'
import Register from '../components/Register'
import AdminDashboard from '../pages/AdminDashboard'

function MainRouter({ login,admin }) {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects login={login} />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/auth" element={<Auth />} >
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
            </Route>

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path='/admin' element={<AdminDashboard admin={admin} />} />
        </Routes>
    )
}

export default MainRouter