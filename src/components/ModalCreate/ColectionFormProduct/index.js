import { Form, Input, Modal, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { getAllCategories } from '../../../services/categoryService';
import { toast } from 'react-toastify';
import { createProduct } from '../../../services/productService';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { globalSelector } from '../../../redux/selector';

const CollectionFormProduct = ({ open, onCancel, getProducts }) => {

    const [form] = Form.useForm();
    const global = useSelector(globalSelector)
    const [image, setImage] = useState();
    const [previewImage, setPreviewImage] = useState();


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

    const onCreate = async (values) => {
        const res = await createProduct({ ...values, image: image, id: uuidv4(), price: +values?.price, discount: +values?.discount, quantity: +values?.quantity });
        toast.success('Thêm thành công');
        onCancel();
        setPreviewImage();
        getProducts();
    }

    return (
        <>

            <Modal
                open={global.categories?.length !== 0 ? open : false}
                title="Create a new category"
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
                    initialValues={{
                        modifier: 'public',
                    }}
                >
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the name of product!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="category_id"
                        label='Category'
                    >
                        <Select>
                            {
                                global.categories?.map(category =>
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
                                message: 'Please input the price of product!',
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
                                message: 'Please input the discount of product!',
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
                                message: 'Please input the quantity of product!',
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
                                message: 'Please input the description of product!',
                            },
                        ]}
                    >
                        <Input.TextArea />
                    </Form.Item>

                    {
                        previewImage && <Form.Item style={{ display: 'flex', justifyContent: 'center' }}>
                            <img style={{ width: '100px', height: '100px' }} src={previewImage} alt='' />
                        </Form.Item>
                    }

                    <Form.Item
                        name="image"
                        label="Image"
                        rules={[
                            {
                                required: true,
                                message: 'Please choose the image of product!',
                            },
                        ]}
                    >
                        <Input type='file' onChange={(e) => { handleImage(e); setPreviewImage(URL.createObjectURL(e.target.files[0])) }} />
                    </Form.Item>

                </Form>
            </Modal>
        </>
    );
};

export default CollectionFormProduct;