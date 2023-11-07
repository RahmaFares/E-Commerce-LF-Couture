import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;