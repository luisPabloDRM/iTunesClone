import { connect } from "react-redux";

const ProfilePage = ({user}) => {
    return (
        <>
            <h1>PERFIL</h1>

            <h2>Nombre: {user.username}</h2>
            <h2>Email: {user.email}</h2>

            <p>HOLI</p>
            <p>HOLI</p>
            <p>HOLI</p>
            <p>HOLI</p>
        </>
    )
}

const mapStateToProps = (state) => ({
    user: state.auth.user,
});

export default connect(mapStateToProps)(ProfilePage);
