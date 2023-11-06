import LayoutUser from "../../components/Layouts/LayoutUser";
import ListProducts from "../../components/ListProducts";
import SliderCustom from "../../components/Slider";
import slider_2 from "../../assets/images/slider_2.png";
import slider_3 from "../../assets/images/slider_3.png";
import slider_4 from "../../assets/images/slider_4.png";
import policy_1 from "../../assets/images/policy_1.webp"
import policy_2 from "../../assets/images/policy_2.webp"
import policy_4 from "../../assets/images/policy_4.webp"
import policy_5 from "../../assets/images/policy_5.webp"
import policy_6 from "../../assets/images/policy_6.webp"

import { HomeSection, HomeSectionImage, HomeTittle, DataContainer, TextSpan, ButtonCategory } from './styled';


import { useEffect, useState } from "react";
import { getAllCategories } from '../../services/categoryService';
import { getAllProducts } from '../../services/productService';
import { Spin } from "antd";
import ProductItem from "../../components/ListProducts/ProductItem";
import { useSelector } from "react-redux";
import { globalSelector } from "../../redux/selector";




const HomePage = () => {


    const global = useSelector(globalSelector)
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const getProducts = async () => {
        setLoading(true);
        try {
            const res = await getAllProducts();
            setProducts(res.data);
        } finally {
            setLoading(false);
        }
    }


    useEffect(() => {
        getProducts();
    }, [])

    return (
        <LayoutUser>
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

            <HomeSection>
                <div>
                    <HomeTittle href='http://localhost:3000/chinh-sach-giao-hang' >
                        <HomeSectionImage src={policy_1} alt='Giao hàng' />
                        <span>Giao hàng</span>
                    </HomeTittle>
                </div>
                <div>
                    <HomeTittle href='http://localhost:3000/flash-sale' >
                        <HomeSectionImage src={policy_2} alt='flash sale' />
                        <span>Flash Sale</span>
                    </HomeTittle>
                </div>
                <div>
                    <HomeTittle href='https://www.google.com/maps/search/Highlands+Coffee' >
                        <HomeSectionImage src={policy_4} alt='Cửa Hàng' />
                        <span>Cửa Hàng</span>
                    </HomeTittle>
                </div>
                <div>
                    <HomeTittle href='http://localhost:3000/cach-pha' >
                        <HomeSectionImage src={policy_5} alt='Cách pha' />
                        <span>Cách pha</span>
                    </HomeTittle>
                </div>
                <div>
                    <HomeTittle href='http://localhost:3000/lien-he' >
                        <HomeSectionImage src={policy_6} alt='Liên hệ' />
                        <span>Liên hệ</span>
                    </HomeTittle>
                </div>
            </HomeSection>

            <Spin spinning={loading}>
                {
                    global.categories?.map((category, index) => (
                        <DataContainer key={index}>
                            <ButtonCategory size="large" key={category?.id}>
                                <TextSpan>
                                    {category?.name}
                                </TextSpan>
                            </ButtonCategory>
                            <SliderCustom dots={false} slidesToShow={3} arrows={true} autoplay={false} slidesToScroll={1}>
                                {products.map((product, index) =>
                                    product?.category_id === category?.id ? (
                                        <ProductItem key={index} productItem={product} />
                                    ) : ("")
                                )}
                            </SliderCustom>
                        </DataContainer>
                    ))
                }
            </Spin>
        </LayoutUser>
    );
}

export default HomePage;