import LayoutUser from "../../components/Layouts/LayoutUser";
import BreadCrumbCustom from "../../components/MyBreadCrumb/BreadCrumbCustom";
import SignUp from "../../components/SignUp/SignUp";
import NotFoundPage from "../ErrorPage/NotFoundPage";

const SignupPage = () => {


    return (
        <>
            {
                !sessionStorage.getItem('account') ?
                    <LayoutUser>
                        <BreadCrumbCustom title='Đăng nhập' path='/dang-nhap' />
                        <SignUp />
                    </LayoutUser>
                    : <NotFoundPage />
            }
        </>
    );
}

export default SignupPage;