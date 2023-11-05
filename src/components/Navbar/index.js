import { Row, Col } from "antd";
import { HomeOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { StyledNavLink, NavBarContainer } from "./styled";
import { useEffect, useState } from "react";
import { getAllCategories } from "../../services/categoryService";

const NavBar = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            const res = await getAllCategories();
            setCategories(res.data);
        }
        getCategories();
    }, [])

    return (
        <NavBarContainer>
            <Row>
                <Col style={{ marginBottom: '40px' }}>
                    <Link href='http://localhost:3000/' ><HomeOutlined style={{ fontSize: "150%", padding: "0 20px 0 0", color: '#b5313a' }} /></Link>
                </Col>
                <Col style={{ marginBottom: '40px' }}>
                    <StyledNavLink to={'/'} className={({ isActive }) => isActive ? "active-link" : ""}>Trang chủ</StyledNavLink>
                </Col>
                <Col style={{ marginBottom: '40px' }}>
                    <StyledNavLink to={'/san-pham'} className={({ isActive }) => isActive ? "active-link" : ""}>Sản phẩm</StyledNavLink>
                </Col>
                <Col style={{ marginBottom: '40px' }}>
                    <StyledNavLink to={'/gioi-thieu'} className={({ isActive }) => isActive ? "active-link" : ""}>Giới thiệu</StyledNavLink>
                </Col>
            </Row>

            <Row>
                {
                    categories?.map(cate =>
                        <Col style={{ marginBottom: '40px' }}>
                            <StyledNavLink to={`/san-pham/${cate?.id}`}>{cate?.name}</StyledNavLink>
                        </Col>
                    )
                }
            </Row>
        </NavBarContainer>
    );
}

export default NavBar;