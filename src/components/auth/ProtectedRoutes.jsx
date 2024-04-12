import React from "react";
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = ({childern, user, redirect="/signin"}) => {

    if(!user)
        return <Navigate to={redirect} />
    
    return childern ? childern : <Outlet />
}

export default ProtectedRoutes