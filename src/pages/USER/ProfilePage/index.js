import Profile from "../../../components/Profile";
import DasboardUser from "../Dashboard";

const ProfilePage = () => {
    return (
        <DasboardUser title='Trang tài khoản'>
            <Profile />
        </DasboardUser>
    );
}

export default ProfilePage;