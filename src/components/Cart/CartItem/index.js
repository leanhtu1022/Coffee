import { CommonDiv, CartDetails, ProductImage, ProductName, ProductPrice, Quantity, Desc, ChangeQuantity, Asc, Action, DivImage, Change, ButtonAction } from '../styled'
import Cookies from 'js-cookie';
import globalSlice from '../../../redux/globalSlice';
import { globalSelector } from '../../../redux/selector';
import { useDispatch, useSelector } from 'react-redux';
import { removeToCart } from '../../../services/cartService';

const CartItem = ({ cart, index }) => {

    const dispatch = useDispatch();
    const global = useSelector(globalSelector);

    const handleChangeQuantity = async (id, price, type) => {
        console.log(price);
        const carts = JSON.parse(Cookies.get('cart').slice(2));
        if (type === 'up') {
            for (let i = 0; i < carts.length; i++) {
                if (carts[i].product_id == id) {
                    carts[i].quantity = carts[i].quantity + 1;
                    carts[i].price = carts[i].price + price;
                }
            }
        }
        if (type === 'down') {
            for (let i = 0; i < carts.length; i++) {
                if (carts[i].product_id == id) {
                    carts[i].quantity = carts[i].quantity - 1;
                    carts[i].price = carts[i].price - price;
                }
            }
        }
        Cookies.set('cart', `j:${JSON.stringify(carts)}`);
        dispatch(globalSlice.actions.changeRerender(!global.reRender));
    }

    const handleDelete = async (id) => {
        removeToCart(id);
        dispatch(globalSlice.actions.changeRerender(!global.reRender));
    }


    return (
        <CartDetails key={index}>
            <DivImage>
                <ProductImage src={`http://localhost:5000/${cart?.image}`} alt='' />
            </DivImage>
            <ProductName>
                {cart?.name}
            </ProductName>
            <Quantity>
                <Change>
                    <Desc disabled={cart?.quantity === 1 ? true : ''} onClick={() => handleChangeQuantity(cart?.product_id, (cart?.price?.toFixed() / cart?.quantity), 'down')}> - </Desc>
                    <ChangeQuantity> {cart?.quantity} </ChangeQuantity>
                    <Asc onClick={() => handleChangeQuantity(cart?.product_id, (cart?.price / cart?.quantity), 'up')}> + </Asc>
                </Change>
            </Quantity>
            <ProductPrice>
                {cart?.price?.toFixed()}.000đ
            </ProductPrice>
            <Action>
                <CommonDiv>
                    <ButtonAction onClick={() => handleDelete(cart?.product_id)}> Xóa </ButtonAction>
                </CommonDiv>
            </Action>
        </CartDetails>
    );
}

export default CartItem;