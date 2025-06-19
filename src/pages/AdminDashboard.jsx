import React from 'react'

function AdminDashboard({admin}) {
  return (
    <>
        {admin ? <p>admin panel ✔️</p> : <p>You are not an admin ❌</p> }
    </>
  )     
}

export default AdminDashboard