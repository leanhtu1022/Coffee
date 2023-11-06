import { useNavigate } from 'react-router-dom';
import SideBar from '../../Sidebar';
import { Row, Col, AutoComplete, Input } from 'antd';
import HeaderAdmin from '../../Header/ForAdmin';

const LayoutAdmin = ({ children }) => {

    const navigate = useNavigate();

    return (
        <>
            <div>
                <HeaderAdmin />
            </div>
            <Row>
                <Col span={6}>
                    <SideBar />
                </Col>
                <Col span={16}>
                    {children}
                </Col>
            </Row>
        </>
    );
}

export default LayoutAdmin;