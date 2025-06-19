import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Login from '../components/Login'

function Auth() {
    return (
        <div className='flex flex-col items-center'>
            
                <div className='flex gap-2'>
                    <NavLink to="/auth/login" className={({ isActive }) => (isActive ? "px-2 py-3 rounded text-white font-bold bg-gray-500" : "px-2 py-3 text-black")}>Login</NavLink>
                    <NavLink to="/auth/register" className={({ isActive }) => (isActive ? "px-2 py-3 rounded text-white font-bold bg-gray-500" : "px-2 py-3 text-black")}>Register</NavLink>
                </div>
                <div>
                    <Outlet />
                </div>

            
        </div>
    )
}

export default Auth