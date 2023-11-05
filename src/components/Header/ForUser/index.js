import React, { useEffect, useState } from 'react';
import { Row, Col, Dropdown, AutoComplete, Input, Badge, Space, Drawer } from 'antd';

import { Link, useNavigate } from 'react-router-dom';
import { UserOutlined, MenuOutlined, ShoppingCartOutlined, SearchOutlined } from '@ant-design/icons';

import { HeaderContainer, HeaderSize, Logo, StyledLink, MenuItemText, ButtonSearch } from "./styled";

import { userSelector, globalSelector } from '../../../redux/selector';
import { useDispatch, useSelector } from 'react-redux';
import globalSlice from '../../../redux/globalSlice';
import { getTotalInCart } from '../../../services/cartService';



const items = [
    {
        label: <a href="http://localhost:3000/" style={{ padding: '0 100px 30px 0', fontSize: '16px', fontFamily: 'sans-serif' }}>Trang chủ</a>,
        key: '0',
    },
    {
        label: <a href="http://localhost:3000//san-pham" style={{ padding: '0 100px 30px 0', fontSize: '16px', fontFamily: 'sans-serif' }}>Sản phẩm</a>,
        key: '1',
    },
    {
        label: <a href="http://localhost:3000/gioi-thieu" style={{ padding: '0 100px 30px 0', fontSize: '16px', fontFamily: 'sans-serif' }}>Giới thiệu</a>,
        key: '2',
    },
    {
        type: 'divider',
    },
    {
        label: 'Bạn cần hỗ trợ?',
    },
    {
        type: 'divider',
    },
    {
        label: '+84123456789',
    },
    {
        label: 'abc@gmail.com',
    },
];



const HeaderHome = () => {

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const [quantity, setQuantity] = useState();
    const dispatch = useDispatch();
    const user = useSelector(userSelector);
    const navigate = useNavigate();
    const global = useSelector(globalSelector);

    useEffect(() => {
        setQuantity(getTotalInCart());
    }, [global.reRender])



    const handleSearch = (e) => {
        dispatch(globalSlice.actions.changePage(0));
        navigate(`/search?query=${e}`);
    }



    return (
        <div>
            <HeaderContainer>
                <HeaderSize>
                    <Row justify="space-between" align="middle" maxWidth="80%" >
                        <Col xl={2} lg={2} md={2} sm={2} xs={2} style={{ display: 'grid' }}>
                            <Dropdown
                                menu={{
                                    items,
                                }}
                                placement="bottomLeft"
                                trigger={['click']}
                            >
                                <Space style={{ display: 'grid', cursor: 'pointer' }}>
                                    <MenuOutlined style={{ paddingLeft: '10px', fontSize: '16px' }} />
                                    <span style={{ color: 'while', fontSize: '14px' }}>Menu</span>
                                </Space>
                            </Dropdown>
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={3} xs={3} >
                            <Link to="/">
                                <Logo src="https://bizweb.dktcdn.net/100/465/740/themes/884110/assets/logo.png?1693532040126" alt="Logo" />
                            </Link>
                        </Col>
                        <Col xl={14} lg={14} md={14} sm={0} xs={0}>
                            <div style={{ textAlign: 'center' }}>
                                <AutoComplete
                                    popupClassName="certain-category-search-dropdown"
                                    style={{
                                        width: '90%',
                                        margin: 'auto'
                                    }}
                                >
                                    <Input.Search
                                        onSearch={handleSearch}
                                        size="large" placeholder="Tìm sản phẳm..." />
                                </AutoComplete>
                            </div>
                        </Col>
                        <Col xl={0} lg={0} md={0} sm={14} xs={14}>
                            <ButtonSearch onClick={showDrawer}>
                                <SearchOutlined />
                            </ButtonSearch>
                            <Drawer title="Tìm kiếm sản phẩm" placement="right" onClose={onClose} open={open}>
                                <AutoComplete
                                    popupClassName="certain-category-search-dropdown"
                                    style={{
                                        width: '90%',
                                        margin: 'auto',
                                    }}
                                >
                                    <Input.Search
                                        onSearch={handleSearch}
                                        size="large" placeholder="Tìm sản phẳm..." />
                                </AutoComplete>
                            </Drawer>
                        </Col>
                        <Col xl={5} lg={5} md={5} sm={5} xs={5}>
                            <Row>
                                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                    {
                                        sessionStorage.getItem('account') ?
                                            <StyledLink md={0} to="/trang-ca-nhan">
                                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                    <UserOutlined style={{ fontSize: '25px' }} />
                                                </div>
                                                <MenuItemText>{JSON.parse(sessionStorage.getItem('account')).fullname}</MenuItemText>
                                            </StyledLink>
                                            :
                                            <StyledLink md={0} to="/dang-nhap">
                                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                    <UserOutlined style={{ fontSize: '25px' }} />
                                                </div>
                                                <MenuItemText>Tài khoản</MenuItemText>
                                            </StyledLink>
                                    }
                                </Col>
                                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <StyledLink to="/gio-hang">
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <Badge
                                                count={quantity}
                                                showZero>
                                                <ShoppingCartOutlined style={{ color: "white", fontSize: '25px' }} />
                                            </Badge>
                                        </div>
                                        <MenuItemText>Giỏ hàng</MenuItemText>
                                    </StyledLink>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </HeaderSize>
            </HeaderContainer>

        </div>

    );
}

export default HeaderHome;