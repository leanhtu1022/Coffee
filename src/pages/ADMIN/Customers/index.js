import { useEffect, useState } from "react";
import LayoutAdmin from "../../../components/Layouts/LayoutAdmin";
import { getAllCustomer } from "../../../services/authService";
import { AutoComplete, Input, Spin } from "antd";
import TableCustom from "../../../components/Table/TableCustom";


const AdminCustomers = () => {


    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [keyword, setKeyword] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const column = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt'
        },
        {
            title: 'Họ và tên',
            dataIndex: 'fullname',
            key: 'fullname'
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email'
        },
    ]

    let data = [];

    customers && customers.forEach((customer, index) =>
        data.push({
            key: index,
            stt: index + 1,
            fullname: customer?.fullname,
            email: customer?.email
        })
    )

    useEffect(() => {
        getCustomers();
    }, [keyword])


    const getCustomers = async () => {
        try {
            setLoading(true);
            const res = await getAllCustomer();
            if (res.data) {
                setCustomers(
                    res.data.filter(i => i?.fullname.toUpperCase().includes(keyword.toUpperCase()))
                );
            }
        } finally {
            setLoading(false);
        }
    }

    const handlePageChange = (page, pageSize) => {
        setCurrentPage(page);
    };

    return (
        <LayoutAdmin>

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
                    title='khách hàng'
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

export default AdminCustomers;