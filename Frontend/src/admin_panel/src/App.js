import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Sidebar from "./Components/SidebarMenu/Sidebar";
import "./App.css";
import Home from "./Pages/Home/Home";
import UserList from './Pages/UserList/UserList';
import NewUser from './Pages/NewUser/NewUser';
import ProductList from './Pages/ProductList/ProductList';
import NewProduct from './Pages/NewProduct/NewProduct';
import GeneralSettings from './Pages/Settings/GeneralSettings';

function App() {
  return (
    <div className="app light">
      <Router>
        <NavBar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/users/add" element={<NewUser />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/add" element={<NewProduct />} />
            <Route path="/general-settings" element={<GeneralSettings />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;