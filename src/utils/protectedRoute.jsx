import { Navigate , Outlet } from 'react-router-dom';
import { useUserContext } from './contexts/UserContext';

const ProtectedRoute = () => {
    let user = useUserContext()

    if (!user) {
        return <Navigate to="/login" replace/>;
    }else {
        return <Outlet />;
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