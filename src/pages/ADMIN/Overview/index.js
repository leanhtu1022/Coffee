import LayoutAdmin from '../../../components/Layouts/LayoutAdmin';
import { useState, useEffect } from 'react';
import { getAllCustomer } from '../../../services/authService';
import { getAllCategories } from '../../../services/categoryService';
import { getAllProducts } from '../../../services/productService';
import { globalSelector } from '../../../redux/selector';
import { useSelector } from 'react-redux'
import OverviewItem from './OverviewItem';
import { Spin } from 'antd';

const Overview = () => {

    const [totalCategories, setTotalCategories] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);
    const [totalCustomers, setTotalCustomers] = useState(0);

    const [loading, setLoading] = useState(false);

    const global = useSelector(globalSelector);

    const items = [
        {
            total: totalCategories,
            title: 'Loại sản phẩm'
        },
        {
            total: totalProducts,
            title: 'Sản phẩm'
        },
        {
            total: totalCustomers,
            title: 'Khách hàng'
        },
    ]

    const getCustomers = async () => {
        setLoading(true);
        try {
            const res = await getAllCustomer();
            setTotalCustomers(res.data.length);
        } finally {
            setLoading(false);
        }
    }

    const getCategories = async () => {
        setLoading(true);
        try {
            const res = await getAllCategories();
            setTotalCategories(res.data.length);
        } finally {
            setLoading(false);
        }
    }

    const getProducts = async () => {
        setLoading(true);
        try {
            const res = await getAllProducts();
            setTotalProducts(res.data.length);
        } finally {
            setLoading(false);
        }
    }


    useEffect(() => {
        getCustomers();
        getCategories();
        getProducts();
    }, [])

    return (
        <LayoutAdmin>
            <Spin spinning={loading}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    {
                        items.map(item =>
                            <OverviewItem total={item.total} title={item.title} />
                        )
                    }
                </div>
            </Spin>
        </LayoutAdmin>
    );
}

export default Overview;