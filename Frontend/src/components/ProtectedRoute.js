import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = () => {
    // Using Redux to check if the user is authenticated
    const user = useSelector((state) => state.user.currentUser);

    // Redirect to login if there is no authenticated user
    return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
