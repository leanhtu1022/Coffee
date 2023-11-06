import React from 'react';
import { Row, Col } from 'antd';
import { FooterContainer, FooterSize, FooterTitle, FooterContent, FooterIcon } from "./styled";
import { Link } from 'react-router-dom';
import { FacebookOutlined, TwitterOutlined, YoutubeOutlined, InstagramOutlined } from '@ant-design/icons';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSize>
                <Row>
                    <Col style={{marginBottom:'12px'}} xl={6} lg={6} md={12} sm={12} xs={24}>
                        <FooterTitle>HIGHLANDS COFFEE CPG</FooterTitle>
                        <FooterContent>Highlands Coffee® CPG thuộc công ty TNHH MTV Thái Kiên tự hào là nhà phân phối hợp lệ và độc quyền cho tất cả các sản phẩm mang thương hiệu Highlands Coffee®.</FooterContent>
                    </Col>
                    <Col style={{marginBottom:'12px'}} xl={6} lg={6} md={12} sm={12} xs={24}>
                        <FooterTitle>THÔNG TIN CÔNG TY</FooterTitle>
                        <FooterContent>Trụ sở văn phòng: 127 Nguyễn Cơ Thạch, An Lợi Đông, Q.2, Tp. Hồ Chí Minh</FooterContent>
                        <FooterContent>Điện thoại: 0917561212</FooterContent>
                        <FooterContent>Email: cpg.customerservice@vtijs.com</FooterContent>
                    </Col>
                    <Col style={{marginBottom:'12px'}} xl={6} lg={6} md={12} sm={12} xs={24}>
                        <FooterTitle>HỖ TRỢ KHÁCH HÀNG</FooterTitle>
                        <FooterContent>
                            <Link to="/search" style={{ color: 'black' }}>Tìm kiếm</Link>
                        </FooterContent>
                        <FooterContent>
                            <Link to="/gioi-thieu" style={{ color: 'black' }}>Giới thiệu</Link>
                        </FooterContent>
                        <FooterContent>
                            <Link to="/chinh-sach-doi-tra" style={{ color: 'black' }}>Chính sách đổi trả</Link>
                        </FooterContent>
                        <FooterContent>
                            <Link to="/chinh-sach-bao-mat" style={{ color: 'black' }}>Chính sách bảo mật</Link>
                        </FooterContent>
                        <FooterContent>
                            <Link to="/chinh-sach-giao-hang" style={{ color: 'black' }}>Chính sách giao hàng</Link>
                        </FooterContent>
                        <FooterContent>
                            <Link to="tel+84391283198" style={{ color: 'black' }}>Liên hệ</Link>
                        </FooterContent>
                    </Col>
                    <Col style={{marginBottom:'12px'}} xl={6} lg={6} md={12} sm={12} xs={24}>
                        <FooterTitle>CHĂM SÓC KHÁCH HÀNG</FooterTitle>
                        <FooterContent>Cà phê đóng gói: 091.756.1212</FooterContent>
                        <FooterContent>Cà phê tại quán: 1900.1755</FooterContent>
                        <FooterContent>cpg.customerservice@vtijs.com</FooterContent>
                        <FooterTitle>FOLLOW US</FooterTitle><br />
                        <FooterIcon href="https://www.facebook.com/highlandscoffeevietnam">
                            <FacebookOutlined />
                        </FooterIcon>
                        <FooterIcon href="https://twitter.com/highlandsvn">
                            <TwitterOutlined />
                        </FooterIcon>
                        <FooterIcon href="https://www.youtube.com/@highlandscoffeevietnam5504">
                            <YoutubeOutlined />
                        </FooterIcon>
                        <FooterIcon href="https://www.instagram.com/highlandscoffeevietnam">
                            <InstagramOutlined />
                        </FooterIcon>
                    </Col>
                </Row>
            </FooterSize>
        </FooterContainer>
    );
}

export default Footer;