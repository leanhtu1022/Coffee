import { useState } from 'react';
import CollectionFormCategory from './ColectionFormCategory';
import ColectionFormProduct from './ColectionFormProduct';
import { Button } from 'antd';

const ModalCreate = ({ type, getCategories, getProducts, getTotalPageProduct, getTotalPageCategories, pid }) => {

    const [open, setOpen] = useState(false);

    return (
        <div style={{ marginBottom: '10px' }}>
            <Button
                type="primary"
                onClick={() => {
                    setOpen(true);
                }}
            >
                Thêm {type}
            </Button>
            {
                type === 'sản phẩm' && <ColectionFormProduct
                    open={open}
                    onCancel={() => {
                        setOpen(false);
                    }}
                    getProducts={getProducts}
                    getTotalPageProduct={getTotalPageProduct}
                />
            }
            {
                type === 'loại sản phẩm' && <CollectionFormCategory
                    open={open}
                    onCancel={() => {
                        setOpen(false);
                    }}
                    getCategories={getCategories}
                    getTotalPageCategories={getTotalPageCategories}
                />
            }
        </div>
    );
}

export default ModalCreate;