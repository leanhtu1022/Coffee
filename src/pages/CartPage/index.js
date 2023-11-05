import Cart from "../../components/Cart";
import LayoutUser from "../../components/Layouts/LayoutUser";
import BreadCrumbCustom from "../../components/MyBreadCrumb/BreadCrumbCustom";

const CartPage = () => {
    return (
        <LayoutUser>
            <BreadCrumbCustom title='Giỏ hàng' />
            <Cart />
        </LayoutUser>
    );
}
 
export default CartPage;