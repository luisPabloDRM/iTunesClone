import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage, ProfilePage } from "./Pages";
import PrivateRoute from "./components/PrivateRoute";
import { Route, Routes } from "react-router-dom";
import { checkUserSession } from "./redux/Actions/auth.actions";
import { connect } from "react-redux";
import "./App.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { faApple } from '@fortawesome/free-brands-svg-icons';

/**
 * TODO:
 *    - LOGOUT
 *    - REFACTOR
 */

const App = ({ dispatch, user }) => {
  useEffect(() => {
    dispatch(checkUserSession());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <div className="welcome">
        <div className="welcome__text">
        <FontAwesomeIcon  className="icon" icon={faApple} />
           <h2>Welcome {user && user.username}</h2>
        
        
       
    

          <div className="navBar">
                <NavLink to="/">
                  <button>Home</button>
                </NavLink>

                <NavLink to="/register">
                  <button>Register</button>
                </NavLink>

                <NavLink to="/login">
                  <button>Login</button>
                </NavLink>

                <NavLink to="/profile">
                  <button>Profile</button>
                </NavLink>
          </div>
          </div>
      </div>
      {/* <Link to="/">Ir a la Home</Link> */}
      {/* <Link to="/register">Ir a Registro</Link>
      <Link to="/login">Ir a Login</Link>
      <Link to="/profile">Ir a Perfil</Link> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/profile"
          element={<PrivateRoute component={<ProfilePage />} />}
        />
      </Routes>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(App);
