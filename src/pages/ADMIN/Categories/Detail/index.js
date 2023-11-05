import LayoutAdmin from "../../../../components/Layouts/LayoutAdmin";
import { Button, Form, Input } from 'antd';
import { getOneCategory, updateCategory } from "../../../../services/categoryService";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminDetailCategory = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [form] = Form.useForm();


    useEffect(() => {
        const getDetail = async () => {
            try {
                const res = await getOneCategory(id);
                form.setFieldsValue({
                    name: res.data.name
                })
            } catch (error) {
                navigate('/not-found');
            }
        }
        getDetail();
    }, [form])

    const onFinish = async (values) => {
        const res = await updateCategory(id, values);
        if (res.data) {
            toast.success("Chỉnh sửa thành công!");
            navigate('/admin/loai-san-pham');
        } else {
            navigate('/not-found');
        }

    }


    return (
        <LayoutAdmin>
            <Form
                name="basic"
                labelCol={{
                    offset: 0,
                    span: 5,
                }}
                wrapperCol={{
                    offset: 0,
                    span: 19,
                }}
                style={{
                    maxWidth: 600,
                }}
                form={form}
                onFinish={onFinish}
                initialValues={{ name: '' }}
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 16,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit" >
                        Chỉnh sửa
                    </Button>
                </Form.Item>
            </Form>
        </LayoutAdmin>
    );
}

export default AdminDetailCategory;