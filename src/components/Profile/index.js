
const Profile = () => {


    return (
        <>
            <p style={{ marginBottom: '50px', fontSize: '25px' }}>Thông tin tài khoản</p>
            <div>
                <p style={{ marginBottom: '20px' }}><span style={{ fontWeight: 'bold', fontSize: '15px' }}>Họ tên:   </span>{JSON.parse(sessionStorage.getItem('account'))?.fullname}</p>
            </div>
            <div>
                <p><span style={{ fontWeight: 'bold', fontSize: '15px' }}>Email:   </span>{JSON.parse(sessionStorage.getItem('account'))?.email}</p>
            </div>
        </>
    );
}

export default Profile;