import LayoutUser from "../../components/Layouts/LayoutUser";
import ListProducts from "../../components/ListProducts";
import SliderCustom from "../../components/Slider";
import slider_2 from "../../assets/images/slider_2.png";
import slider_3 from "../../assets/images/slider_3.png";
import slider_4 from "../../assets/images/slider_4.png";

import { ArrowDownOutlined } from '@ant-design/icons';

import { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import { globalSelector } from '../../redux/selector'
import { getAllCategories } from '../../services/categoryService';
import { getAllProducts, getAllProductsLimit } from '../../services/productService';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Select, Spin } from "antd";
import BreadCrumbCustom from "../../components/MyBreadCrumb/BreadCrumbCustom";
import Paginate from "../../components/Paginate";
import { TextResultProduct } from './styled'


const ResultProductPage = () => {

    const global = useSelector(globalSelector);

    const navigate = useNavigate();

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const { cateid } = useParams();
    const loacation = useLocation();
    const params = new URLSearchParams(window.location.search);
    const query = params.get('query');


    useEffect(() => {
        setLoading(true);
        const getCategories = async () => {
            const res = await getAllCategories();
            setCategories(res.data);
        }
        getCategories();
        setLoading(false);
    }, [])


    const getProducts = async () => {
        try {
            setLoading(true);
            const res = await getAllProducts();
            if (query) {
                setProducts(
                    res.data.filter(i => i?.name.toUpperCase().includes(query.toUpperCase()))
                );
            } else {
                setProducts(
                    res.data.filter(i => i?.category_id === cateid)
                );
            }
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProducts()
    }, [cateid, query])


    return (
        <LayoutUser>
            {loacation.pathname.includes('search') && <BreadCrumbCustom title='Kết quả tìm kiếm' />}
            {
                categories.map(cate =>
                    cate?.id === cateid ? <BreadCrumbCustom title={cate?.name} /> : <></>
                )
            }

            <div style={{ display: loacation.pathname.includes('search') ? 'none' : 'block' }}>
                <SliderCustom dots={false} slidesToShow={1} arrows={false} autoplay={true} slidesToScroll={1}>
                    <div>
                        <img style={{ maxHeight: '280px', margin: 'auto', width: '100%' }} src={slider_2} alt="" />
                    </div>
                    <div>
                        <img style={{ maxHeight: '280px', margin: 'auto', width: '100%' }} src={slider_3} alt="" />
                    </div>
                    <div>
                        <img style={{ maxHeight: '280px', margin: 'auto', width: '100%' }} src={slider_4} alt="" />
                    </div>
                </SliderCustom>
            </div>

            <Spin spinning={loading}>
                <ListProducts products={products} />
            </Spin>
        </LayoutUser >
    );
}

export default ResultProductPage;