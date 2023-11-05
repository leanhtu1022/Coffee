import LayoutUser from "../../components/Layouts/LayoutUser";
import About from '../../components/About';
import BreadCrumbCustom from "../../components/MyBreadCrumb/BreadCrumbCustom";

const AboutUsPage = () => {
    return (
        <LayoutUser>
            <BreadCrumbCustom title='Giới thiệu Highlands Coffee' path='/gioi-thieu' />
            <About />
        </LayoutUser>
    );
}
 
export default AboutUsPage;