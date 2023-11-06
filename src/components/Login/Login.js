import { Button, Checkbox, Form, Input, Row, Col } from 'antd';
import { LoginContainer, LoginSize, LoginContent, LoginImage, LoginTitle, LoginIcon, LoginMenu, LoginItem } from "./styled"
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { CheckCircleTwoTone } from '@ant-design/icons';
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/authService';
import { toast } from 'react-toastify';
import { useState } from "react";
import { useForm } from 'antd/es/form/Form';




const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form] = useForm();
    const [loading, setLoading] = useState(false);


    const onFinish = async () => {
        try {
            setLoading(true);
            const values = await form.validateFields();
            const res = await login(values?.email, values?.password);
            if (res?.data[0] !== undefined && !res?.data[0].isAdmin) {
                sessionStorage.setItem('account', JSON.stringify(res?.data[0]));
                navigate('/')
            } else if (res?.data[0] !== undefined && res?.data[0].isAdmin) {
                sessionStorage.setItem('account', JSON.stringify(res?.data[0]));
                navigate('/admin/tong-quan');
            } else {
                toast.error('Tài khoản không tồn tại')
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <LoginContainer>
            <LoginSize>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col xl={12} lg={12} md={12} sm={0} xs={0} >
                        <LoginImage src="https://i.pinimg.com/564x/cf/d8/22/cfd822c39a11551624b5bf3e4112f1dd.jpg" alt="Image" />
                        <LoginTitle>QUYỀN LỢI THÀNH VIÊN</LoginTitle>
                        <LoginIcon>
                            <CheckCircleTwoTone />
                            <LoginContent>Mua hàng khắp thế giới cực dễ dàng, nhanh chóng</LoginContent>
                        </LoginIcon>
                        <LoginIcon>
                            <CheckCircleTwoTone />
                            <LoginContent>Theo dõi chi tiết đơn hàng, địa chỉ thanh toán dễ dàng</LoginContent>
                        </LoginIcon>
                        <LoginIcon>
                            <CheckCircleTwoTone />
                            <LoginContent>Nhận nhiều chương trình ưu đãi hấp dẫn từ chúng tôi</LoginContent>
                        </LoginIcon>
                    </Col>
                    <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                        <LoginMenu mode="horizontal">
                            <LoginItem key="login">
                                <Link to="/dang-nhap">Đăng nhập</Link>
                            </LoginItem>
                            <LoginItem key="signup">
                                <Link to="/dang-ky">Đăng ký</Link>
                            </LoginItem>
                        </LoginMenu>
                        <Form
                            form={form}
                            name="normal_login"
                            className="login-form"
                            style={{
                                maxWidth: '350px',
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Email!',
                                    },
                                ]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Password!',
                                    },
                                ]}
                            >
                                <Input.Password
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="unchecked" noStyle>
                                    <Checkbox>Nhớ tài khoản</Checkbox>
                                </Form.Item>

                                <a className="login-form-forgot" href="/quen-mat-khau" style={{ float: 'right' }} >
                                    Quên mật khẩu?
                                </a>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button" loading={loading}>
                                    Đăng nhập
                                </Button>
                            </Form.Item>
                        </Form>
                        <LoginContent>Highlands Coffee CPG cam kết bảo mật và sẽ không bao giờ đăng hay chia sẻ thông tin mà chưa có được sự đồng ý của bạn.</LoginContent>
                    </Col>
                </Row>
            </LoginSize>
        </LoginContainer>
    );
}

export default Login;