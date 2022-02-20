import { useState } from "react";
import { connect } from 'react-redux'



const INITIAL_STATE = {
    email:'',
    password:'',
}

const LoginPage = ({dispatch, error}) => {
    const [form, setForm] = useState (INITIAL_STATE);

    const change = ({target:{name, value}}) => setForm({...form, [name]: value})

    const submitForm = (ev) => {
        ev.preventDefault();
        dispatch(loginUser(form, false));
    };

    return (
        <>
            <h1>
                LOGIN
            </h1> 
            <br/>

            <form onSubmit={submitForm}>
                <label>
                    <p>Email</p>
                    <div><input type="email" name="email" value={form.email} onChange={change} /></div>
                </label>

                <label>
                    <p>password</p>
                    <div><input type="password" name="password" value={form.password} onChange={change} /></div>
                </label>
            <br/>
            <button type="submit" >Acceder</button>

            </form>
            <br/>
            <br/>

            {error && <div style={{color:red}}>{error}</div>}
        </>
    );
};

const mapStateToProps = (state)=> ({
    error:state.auth.error,
});

export default connect(mapStateToProps)(LoginPage)