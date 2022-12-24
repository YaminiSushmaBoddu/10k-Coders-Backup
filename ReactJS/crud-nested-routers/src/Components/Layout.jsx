import React from 'react';
import { Outlet } from "react-router-dom"
import Users from './Users';
const Layout = () => {
    return (
        <div>
           <h1>Welcome to CRUD Application</h1> 
           {/* <Outlet/> */}
           <Users/>
        </div>
    );
}

export default Layout;
