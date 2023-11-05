import ChangePassword from "../../components/ChangePassword";
import LayoutUser from "../../components/Layouts/LayoutUser";
import BreadCrumbCustom from "../../components/MyBreadCrumb/BreadCrumbCustom";

const ChangePasswordPage = () => {
    return (
        <LayoutUser>
            <BreadCrumbCustom title='Thay đổi mật khẩu' />
            <ChangePassword />
        </LayoutUser>
    );
}
 
export default ChangePasswordPage;