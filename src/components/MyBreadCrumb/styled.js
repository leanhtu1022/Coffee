import { Breadcrumb } from "antd";
import styled from "styled-components";

export const BreadcrumbContainer = styled.div`
margin-bottom: 30px;
`

export const BreadcrumbItem = styled(Breadcrumb.Item)`
cursor: pointer;
font-size: 16px;
&:hover {
    color: #b5313a;
}
`