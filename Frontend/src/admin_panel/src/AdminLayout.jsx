import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Sidebar from './Components/SidebarMenu/Sidebar';

function AdminLayout({ children }) {
    return (
        <div className="app light">
            <NavBar />
            <div className="container">
                <Sidebar />
                {children}
            </div>
        </div>
    );
}

export default AdminLayout;
