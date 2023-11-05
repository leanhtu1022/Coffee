import Header from '../../Header/ForUser';
import Footer from '../../Footer';
import { LayoutUserStyled } from './styled';
import NavBar from '../../Navbar';

const LayoutUser = ({ children }) => {



    return (
        <LayoutUserStyled>
            <Header />
            <div className='content'>
                <NavBar />
                {children}
            </div>
            <Footer />
        </LayoutUserStyled>
    );
}

export default LayoutUser;