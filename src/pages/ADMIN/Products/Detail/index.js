import { Button, Form, Input, Select } from 'antd';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LayoutAdmin from "../../../../components/Layouts/LayoutAdmin";
import { getAllCategories, getAllCategoriesNotPageinate, updateCategory } from '../../../../services/categoryService';
import TextArea from 'antd/es/input/TextArea';
import { getDetailProduct, updateProduct } from '../../../../services/productService';


const AdminDetailProduct = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const [categories, setCategories] = useState([]);
    const [cateid, setCateid] = useState();
    const [image, setImage] = useState();
    const [previewImage, setPreviewImage] = useState();

    useEffect(() => {
        const getCategories = async () => {
            const res = await getAllCategories();
            setCategories(res.data);
        }
        getCategories();
    }, [])

    useEffect(() => {
        const getDetail = async () => {
            try {
                const res = await getDetailProduct(id);
                setCateid(res.data.category_id);
                setPreviewImage(res.data.image);
                form.setFieldsValue({
                    name: res.data.name,
                    category_id: res.data.category_id,
                    price: res.data.price,
                    discount: res.data.discount,
                    quantity: res.data.quantity,
                    description: res.data.description,
                })
            } catch (error) {
                navigate('/not-found');
            }
        }
        getDetail();
    }, [form])

    const onFinish = async (values) => {
        const res = await updateProduct(id, values.image ? { ...values, image: image } : { ...values, image: previewImage });
        toast.success("Cập nhật thành công!");
        navigate('/admin/san-pham');
    }

    const handleImage = (e) => {
        if (e.target.files[0] === null) {
            setImage('https://tse4.mm.bing.net/th?id=OIP.1Kb48pEGCuofJ2ONrfYx8wHaEi&pid=Api&P=0&h=180');
        } else {
            const fr = new FileReader();
            fr.readAsDataURL(e.target.files[0]);
            fr.addEventListener('load', () => {
                setImage(fr.result)
            })
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
            >
                <Form.Item
                    name="name"
                    label="Name"
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
                    name="category_id"
                    label='Category'
                >
                    <Select defaultValue={cateid}>
                        {
                            categories.map(category =>
                                <Select.Option value={category.id}>{category.name}</Select.Option>
                            )
                        }
                    </Select>
                </Form.Item>

                <Form.Item
                    name="price"
                    label="Price"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your price!',
                        },
                        {
                            pattern: /^[0-9]*$/,
                            message: 'Vui lòng nhập giá trị số!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="discount"
                    label="Discount"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your price!',
                        },
                        {
                            pattern: /^[0-9]*$/,
                            message: 'Vui lòng nhập giá trị số!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="quantity"
                    label="Quantity"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your price!',
                        },
                        {
                            pattern: /^[0-9]*$/,
                            message: 'Vui lòng nhập giá trị số!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="description"
                    label="Description"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your price!',
                        },
                    ]}
                >
                    <TextArea />
                </Form.Item>

                <Form.Item>
                    <img style={{ width: '200px', height: '200px' }} src={previewImage} alt='' />
                </Form.Item>

                <Form.Item
                    name="image"
                    label="Image"
                >
                    <Input type='file' onChange={(e) => { handleImage(e); setPreviewImage(URL.createObjectURL(e.target.files[0])) }} />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 16,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit" >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </LayoutAdmin>
    );
}

export default AdminDetailProduct;