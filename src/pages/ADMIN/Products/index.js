import { AutoComplete, Input, Space, Spin } from 'antd';

import LayoutAdmin from "../../../components/Layouts/LayoutAdmin";
import ModalCreate from "../../../components/ModalCreate";
import TableCustom from '../../../components/Table/TableCustom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../../../services/productService';

const AdminProduct = () => {

    const [products, setProducts] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);


    const column = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt'
        },
        {
            title: 'Tên',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Loại sản phẩm',
            dataIndex: 'categoryName',
            key: 'categoryName'
        },
        {
            title: 'Ảnh',
            dataIndex: 'image',
            key: 'image',
            render: (_, record) => (
                <Space size='middle'>
                    <img style={{ width: '100px', height: '100px' }} src={record?.image} alt='' />
                </Space>
            )
        },
        {
            title: 'Giá',
            dataIndex: 'price',
            key: 'price'
        },
        {
            title: 'Giảm giá',
            dataIndex: 'discount',
            key: 'discount'
        },
        {
            title: 'Số lương',
            dataIndex: 'quantity',
            key: 'quantity'
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size='middle'>
                    <Link to={`/admin/san-pham/${record?.id}`}>Chi tiết</Link>
                    <Link>Xóa</Link>
                </Space>
            ),
        }
    ]

    let data = [];
    products && products.forEach((product, index) =>
        data.push({
            id: product?.id,
            stt: index + 1,
            name: product?.name,
            categoryName: product?.Category?.categoryName,
            image: product?.image,
            price: product?.price,
            discount: product?.discount,
            quantity: product?.quantity,
            slug: product?.slug
        })
    )

    const getProducts = async () => {
        try {
            setLoading(true);
            const res = await getAllProducts();
            setProducts(
                res.data.filter(i => i?.name.toUpperCase().includes(keyword.toUpperCase()))
            );
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProducts();
    }, [keyword])

    const handlePageChange = (page, pageSize) => {
        setCurrentPage(page);
    };

    return (
        <LayoutAdmin>
            <ModalCreate type='sản phẩm' getProducts={getProducts} />
            <AutoComplete
                popupClassName="certain-category-search-dropdown"
                style={{
                    width: '90%',
                    marginBottom: '12px'
                }}
            >
                <Input.Search
                    onSearch={(e) => setKeyword(e)}
                    size="large" />
            </AutoComplete>
            <Spin spinning={loading}>
                <TableCustom
                    column={column}
                    data={data}
                    title='sản phẩm'
                    pagination={{
                        current: currentPage,
                        pageSize: 8,
                        onChange: handlePageChange,
                    }}
                />
            </Spin>
        </LayoutAdmin>
    );
}

export default AdminProduct;