import ForbiddenPage from '../ErrorPage/ForbiddenPage';
import { Outlet } from 'react-router-dom';


const AdminRoutes = () => {


    return (
        <>
            {
                JSON.parse(sessionStorage.getItem('account'))?.isAdmin ?
                    <Outlet />
                    : <ForbiddenPage />
            }
        </>
    );
}

export default AdminRoutes;