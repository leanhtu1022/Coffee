import Policy from "../../components/Delivery/Policy";
import LayoutUser from "../../components/Layouts/LayoutUser";
import BreadCrumbCustom from "../../components/MyBreadCrumb/BreadCrumbCustom";

const PolicyPage = () => {
    return (
        <LayoutUser>
            <BreadCrumbCustom title='Chính sách bảo mật' path='chinh-sach-bao-mat' />
            <Policy />
        </LayoutUser>
    );
}
 
export default PolicyPage;