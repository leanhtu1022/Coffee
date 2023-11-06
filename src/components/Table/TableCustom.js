import { Empty, Table } from 'antd';

const TableCustom = ({ column, data, title, pagination }) => {
    return (
        <Table
            columns={column}
            dataSource={data}
            pagination={pagination}
            locale={
                {
                    emptyText: (
                        <Empty
                            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                            imageStyle={{ height: 60 }}
                            description={<h3>Không có {title} nào</h3>}
                        />
                    )
                }
            }
        />
    );
}

export default TableCustom;