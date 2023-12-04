import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Sidebar from './Components/SidebarMenu/Sidebar';
import './Admin.css'

function AdminLayout({ children }) {
    return (
        <div className="admin-panel light">
            <NavBar />
            <Sidebar />
            <div className="content">
                {children}
            </div>
        </div>
    );
}

export default AdminLayout;
