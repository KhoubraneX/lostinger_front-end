import { Navigate , Outlet } from 'react-router-dom';
import { useUserContext } from './contexts/UserContext';

const ProtectedRoute = () => {
    let user = useUserContext()
    if (user) {
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


export {ProtectedRoute , CheckAuthRoute};