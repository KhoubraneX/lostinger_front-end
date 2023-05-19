import { Navigate , Outlet } from 'react-router-dom';
import { useUserContext } from './contexts/UserContext';
import { checkToken } from './authServices';

const ProtectedRoute = () => {
    checkToken()
    let user = useUserContext()
    if (user) {
        return <Outlet />;
    } else {
        return <Navigate to="/login" replace />;
    }
};

const ProtectedRouteAdmin = () => {
    checkToken()
    let user = useUserContext()
    if (user.role === "admin") {
        return <Outlet />;
    } else {
        return <Navigate to="/login" replace />;
    }
};

const CheckAuthRoute = () => {
    let user = useUserContext()

    if (!user) {
        return <Outlet />;
    } else {
        return <Navigate to="/home" replace />;
    }
};


export {ProtectedRoute , CheckAuthRoute , ProtectedRouteAdmin};