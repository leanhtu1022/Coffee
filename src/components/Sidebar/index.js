import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { MenuUser } from './styled'

const itemsForUser = [
    {
        key: '/trang-ca-nhan',
        label: 'Thông tin tài khoản'
    },
    {
        key: '/doi-mat-khau',
        label: 'Đổi mật khẩu'
    },
    {
        key: '/dang-xuat',
        label: 'Đăng xuất'
    }
]

const itemsForAdmin = [
    {
        key: '/admin/tong-quan',
        label: 'Tổng quan'
    },
    {
        key: '/admin/khach-hang',
        label: 'Khách hàng'
    },
    {
        key: '/admin/loai-san-pham',
        label: 'Loại sản phẩm'
    },
    {
        key: '/admin/san-pham',
        label: 'Sản phẩm'
    },
]

const SideBar = () => {

    const location = useLocation();
    const navigate = useNavigate();


    const handleLogout = () => {
        sessionStorage.removeItem('account');
        navigate('/');
    }

    const handleMenu = (e) => {
        if (e.key === '/dang-xuat') {
            handleLogout();
        } else {
            navigate(e.key);
        }
    }

    return (
        <>
            {
                JSON.parse(sessionStorage.getItem('account')).isAdmin ? <Menu
                    defaultSelectedKeys={location.pathname}
                    items={itemsForAdmin}
                    onClick={(e) => navigate(e.key)}
                    style={{
                        width: 256,
                    }}
                /> :
                    <>
                        <div style={{ marginBottom: '20px' }}>
                            <p style={{ fontSize: '25px', marginBottom: '3px' }}>Trang cá nhân</p>
                            <h3>Xin chào, {JSON.parse(sessionStorage.getItem('account'))?.fullname}!</h3>
                        </div>
                        <MenuUser
                            style={{ backgroundColor: 'transparent' }}
                            defaultSelectedKeys={location.pathname}
                            items={itemsForUser}
                            onClick={(e) => handleMenu(e)}
                        />
                    </>
            }
        </>
    );
}

export default SideBar;

