import { useEffect } from "react";
import { HomePage, LoginPage, RegisterPage, ProfilePage } from "./Pages";
import PrivateRoute from './components/PrivateRoute';
import { Route, Routes, Link } from "react-router-dom";
import { checkUserSession } from "./redux/Actions/auth.actions";
import { connect } from "react-redux";
import "./App.scss";

/**
 * TODO:
 *    - LOGOUT
 *    - REFACTOR
 */

const App = ({dispatch, user}) => {
  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <div className="App">
      <h1>Itunes</h1>
      <h2>Welcome Back {user && user.username}</h2>

      <Link to="/">Ir a la Home</Link>
      <Link to="/register">Ir a Registro</Link>
      <Link to="/login">Ir a Login</Link>
      <Link to="/profile">Ir a Perfil</Link>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<PrivateRoute component={<ProfilePage />} /> } />
      </Routes>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(App);
