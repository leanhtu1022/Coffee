import { Link, NavLink, useNavigate } from "react-router-dom";
import { HeaderAdminContainer } from './styled'
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const HeaderAdmin = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem('account');
        navigate('/');
    }


    return (

        <HeaderAdminContainer>
            <Header style={{ backgroundColor: 'transparent' }}>
                <Menu theme="#b5313a" mode="horizontal" defaultSelectedKeys={['home']}>
                    <Menu.Item>
                        <Link to={'/admin/tong-quan'}>
                            <img style={{ maxHeight: '50px' }} src="https://bizweb.dktcdn.net/100/465/740/themes/884110/assets/logo.png?1693532040126" alt="Logo" />
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="home" style={{ marginLeft: '80%' }}>
                        <NavLink to={'/'} style={{ fontWeight: '600', color: 'white' }} onClick={(e) => handleLogout(e)}>Logout</NavLink>
                    </Menu.Item>
                </Menu>
            </Header>
        </HeaderAdminContainer>
    );
}

export default HeaderAdmin;