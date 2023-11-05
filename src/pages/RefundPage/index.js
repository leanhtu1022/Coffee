import LayoutUser from "../../components/Layouts/LayoutUser";
import Refund from '../../components/Delivery/Refund';
import BreadCrumbCustom from "../../components/MyBreadCrumb/BreadCrumbCustom";

const RefundPage = () => {
    return (
        <LayoutUser>
            <BreadCrumbCustom title='Chính sách đổi trả' path='chinh-sach-doi-tra' />
            <Refund />
        </LayoutUser>
    );
}
 
export default RefundPage;