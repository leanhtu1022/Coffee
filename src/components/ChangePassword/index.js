import { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { toast } from 'react-toastify';
import { checkPassword, update } from '../../services/authService';
import { ProfileContainer } from './styled'
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {

    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const onFinish = async () => {
        try {
            setLoading(true);
            const values = await form.validateFields();
            const check = await checkPassword(JSON.parse(sessionStorage.getItem('account'))?.email, values?.password);
            if (check.data.length === 0) return toast('Mật khẩu sai');
            const body = {
                ...JSON.parse(sessionStorage.getItem('account')),
                password: values?.newpassword
            }
            const response = await update(JSON.parse(sessionStorage.getItem('account'))?.id, body);
            toast.success('Đổi mật khẩu thành công');
            form.resetFields();
            navigate('/dang-nhap');
        } finally {
            setLoading(true);
        }
    };


    return (
        <ProfileContainer>
            <h2>Đổi mật khẩu</h2>
            <Form form={form} onFinish={onFinish} style={{ maxWidth: '500px' }}>
                <Form.Item
                    name="oldpassword"
                    label="Mật khẩu cũ"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập mật khẩu cũ!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    name="newpassword"
                    label="Mật khẩu mới"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập mật khẩu mới!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    name="confirmnewpassword"
                    label="Xác nhận mật khẩu mới"
                    dependencies={['newpassword']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng xác nhận mật khẩu mới!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('newpassword') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('Mật khẩu xác nhận không khớp!');
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Cập nhật
                    </Button>
                </Form.Item>
            </Form>
        </ProfileContainer>
    );
}

export default ChangePassword;