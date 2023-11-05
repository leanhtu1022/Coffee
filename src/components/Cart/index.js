import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { CartContainer, CommonDiv, Tittle, CartBody, PayAll, ButtonPayAll, DeleteAll } from './styled'
import { globalSelector, userSelector } from '../../redux/selector';
import Cookies from 'js-cookie';
import CartItem from './CartItem';

const Cart = () => {

    const global = useSelector(globalSelector);
    const navigate = useNavigate()
    const [carts, setCarts] = useState([]);


    useEffect(() => {
        Cookies.get('cart') && setCarts(JSON.parse(Cookies.get('cart').slice(2)));
    }, [global.reRender])


    return (
        <CartContainer>

            <Tittle>
                Giỏ hàng của bạn
            </Tittle>

            <CartBody>
                {
                    carts.length !== 0 ?
                        carts.map((cart, index) =>
                            <CartItem cart={cart} index={index} />
                        )
                        :
                        <Tittle>
                            Hiện không có sản phẩm nào
                        </Tittle>
                }

                {
                    carts.length !== 0 ?
                        <PayAll>
                            <CommonDiv style={{ display: 'flex' }}>
                                <CommonDiv>
                                    <DeleteAll> Xóa tất cả</DeleteAll>
                                </CommonDiv>
                            </CommonDiv>
                            <CommonDiv></CommonDiv>
                            <CommonDiv style={{ display: 'flex' }}>
                                <CommonDiv style={{ marginTop: '8px' }}>Tổng thanh toán: <span style={{ color: '#b5313a' }}>{carts.reduce((total, cart) => { return total + cart?.price }, 0)?.toFixed()}.000đ</span></CommonDiv>
                                <CommonDiv>
                                    <ButtonPayAll onClick={() => navigate('/checkout')}>Thanh Toán</ButtonPayAll>
                                </CommonDiv>
                            </CommonDiv>
                        </PayAll>
                        : ''
                }
            </CartBody>
        </CartContainer>
    );
}

export default Cart;