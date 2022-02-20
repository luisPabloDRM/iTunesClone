import { useState } from "react";
import { connect } from 'react-redux';
import {registeruser} from "../redux/Actions/auth.actions";

const INITIAL_STATE = {
    email: '',
    password:'',
    username:'',
}

const RegisterPage =({dispatch, error}) => {
    const [form, setForm] = useState(INITIAL_STATE);

    const change = ({target: {name, value}}) => setForm({...form, [name]: value })

    const submitForm = (ev) => {
        ev.preventDefault();
        dispatch(registeruser(form));
    };

    return(
        <>
            <h1>Register</h1>
            <br/>

            <form onSubmit={submitForm}>

                <label>
                    <p>Username</p>
                    <div><input type="text" name="username" value={form.username} onChange={change}  /></div>
                </label>

                <label>
                    <p>Email</p>
                    <div><input type="email" name="email" value={form.email} onChange={change}  /></div>
                </label>

                <label>
                    <p>Password</p>
                    <div><input type="password" name="password" value={form.password} onChange={change}  /></div>
                </label>

                <br/>
                <button  type="submit" >Register me</button>

            </form>
            <br/>
            <br/>

            {error && <div style={{color: 'red'}}>{error}</div>}

        </>

    );
};

const mapStateToProps = (state) => ({
    error: state.auth.error,
});

export default connect(mapStateToProps)(RegisterPage);
