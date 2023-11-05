import LayoutUser from "../../components/Layouts/LayoutUser";
import Login from "../../components/Login/Login";
import BreadCrumbCustom from "../../components/MyBreadCrumb/BreadCrumbCustom";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/selector";
import NotFoundPage from "../ErrorPage/NotFoundPage";

const LoginPage = () => {

    const user = useSelector(userSelector)
    
    return (
        <>
            {
                !user.is_login ?
                    <LayoutUser>
                        <BreadCrumbCustom title='Đăng nhập' path='/dang-nhap' />
                        <Login />
                    </LayoutUser>
                    : <NotFoundPage />
            }
        </>
    );
}
 
export default LoginPage;