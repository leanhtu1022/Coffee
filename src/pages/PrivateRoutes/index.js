import { Outlet } from "react-router-dom";
import ForbiddenPage from "../ErrorPage/ForbiddenPage";


const PrivateRoutes = () => {


    return (
        <>
            {
                (sessionStorage.getItem('account') && !JSON.parse(sessionStorage.getItem('account'))?.isAdmin) ? <Outlet /> : <ForbiddenPage />
            }
        </>
    );
}

export default PrivateRoutes;