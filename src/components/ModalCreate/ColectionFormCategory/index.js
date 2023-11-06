import { Form, Input, Modal, Spin } from 'antd';
import { createCategory } from '../../../services/categoryService';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const CollectionFormCategory = ({ open, onCancel, getCategories }) => {

    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const onCreate = async (values) => {
        try {
            setLoading(true);
            const res = await createCategory({ ...values, id: uuidv4() });
            toast.success('Thêm thành công');
            onCancel();
            getCategories();
        } finally {
            setLoading(false)
        }
    }

    return (
        <Spin spinning={loading}>
            <Modal
                open={open}
                title="Thêm mới loại sản phẩm"
                okText="Create"
                cancelText="Cancel"
                onCancel={onCancel}
                onOk={() => {
                    form
                        .validateFields()
                        .then((values) => {
                            form.resetFields();
                            onCreate(values);
                        })
                        .catch((info) => {
                        });
                }}
            >
                <Form
                    form={form}
                    layout="vertical"
                    name="form_in_modal"

                >
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the name of collection!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </Spin>
    );
};

export default CollectionFormCategory;