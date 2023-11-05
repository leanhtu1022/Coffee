import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import LayoutUser from '../../components/Layouts/LayoutUser';
import BreadCrumbCustom from '../../components/MyBreadCrumb/BreadCrumbCustom';

const NotFoundPage = () => {

    const navigate = useNavigate();

    return (
      <LayoutUser>
        <BreadCrumbCustom title='Không tìm thấy trang' path='/not-found' />
          <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary" onClick={() => navigate('/')}>Back Home</Button>}
          />
      </LayoutUser>
      );
}
export default NotFoundPage;