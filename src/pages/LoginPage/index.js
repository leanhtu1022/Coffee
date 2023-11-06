import LayoutUser from "../../components/Layouts/LayoutUser";
import Login from "../../components/Login/Login";
import BreadCrumbCustom from "../../components/MyBreadCrumb/BreadCrumbCustom";
import NotFoundPage from "../ErrorPage/NotFoundPage";

const LoginPage = () => {


    return (
        <>
            {
                !sessionStorage.getItem('account') ?
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