import { Col } from "antd";
import { DataContainer, Product } from "./styled";
import ProductItem from './ProductItem';



const ListProducts = ({ products, categories, cateSlug, query }) => {


    return (
        <DataContainer>

            <DataContainer>
                <Product>
                    {products.map((product, index) =>
                        <Col style={{ margin: '16px 0' }} span={6} key={index}>
                            <ProductItem productItem={product} />
                        </Col>
                    )
                    }
                </Product>
            </DataContainer>

        </DataContainer>


    );
};

export default ListProducts;
