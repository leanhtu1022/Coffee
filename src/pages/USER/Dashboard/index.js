import { Col, Row } from "antd";
import LayoutUser from "../../../components/Layouts/LayoutUser";
import SideBar from "../../../components/Sidebar";
import BreadCrumbCustom from "../../../components/MyBreadCrumb/BreadCrumbCustom";

const DasboardUser = ({ children, title }) => {
    return (
        <LayoutUser>
            <BreadCrumbCustom title={title} />
            <Row>
                <Col xl={5} lg={5} md={6} sm={24} xs={24}>
                    <SideBar />
                </Col>

                <Col xl={19} lg={19} md={14} sm={24} xs={24}>
                    {children}
                </Col>
            </Row>
        </LayoutUser>
    );
}

export default DasboardUser;