import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../../Contexts/AuthContext'

export const ProtectedRoutes = () => {
    const {user, loading} = useContext(AuthContext)

    if(loading){
        return null
    }

    return (
        <>
        {user ? (
            <Outlet />
        ) : (
            <Navigate to='/' />
        )}
        
    </>
  )
}
