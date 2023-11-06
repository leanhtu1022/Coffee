import { Row, Col } from "antd";
import { HomeOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { StyledNavLink, NavBarContainer } from "./styled";
import { useSelector } from "react-redux";
import { globalSelector } from "../../redux/selector";

const NavBar = () => {

    const global = useSelector(globalSelector);

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
                    global.categories?.map(cate =>
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