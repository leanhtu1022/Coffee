import { Breadcrumb } from 'antd';
import { useNavigate } from 'react-router-dom'
import { BreadcrumbContainer, BreadcrumbItem } from './styled';

const BreadCrumbCustom = ({ title }) => {

    const navigate = useNavigate();

    return (
        <BreadcrumbContainer>
            <Breadcrumb>
                <BreadcrumbItem onClick={() => navigate('/')}>
                    Trang chủ
                </BreadcrumbItem>
                <Breadcrumb.Item>
                    <span style={{fontSize:'16px', color:'#b5313a'}}>{title}</span>
                </Breadcrumb.Item>
            </Breadcrumb>
        </BreadcrumbContainer>
    );
}

export default BreadCrumbCustom;