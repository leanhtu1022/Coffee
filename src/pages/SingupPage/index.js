import LayoutUser from "../../components/Layouts/LayoutUser";
import BreadCrumbCustom from "../../components/MyBreadCrumb/BreadCrumbCustom";
import SignUp from "../../components/SignUp/SignUp";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/selector";
import NotFoundPage from "../ErrorPage/NotFoundPage";

const SignupPage = () => {

    const user = useSelector(userSelector)

    return (
        <>
            {
                !user.is_login ?
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