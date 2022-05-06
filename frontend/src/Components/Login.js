import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const loginUrl = 'http://localhost:4000/api/auth/login'


const Login = () => {
    const navigate = useNavigate();
    console.log(navigate);
    const [user, setUser] = useState({
        "email" : "",
        "password" : ""
    });

    let name,value;
    const changeHandle = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({
            ...user,
            [name] : value
        })
    }

    const clickHandle = () => {
        fetch(loginUrl, {
            method : "POST",
            headers : { "Content-Type" : "application/json" },
            body : JSON.stringify(user)
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            navigate("/")
        })
        .catch((err) => {
            console.log(err);
        })
    }
    
    return (
        <div className='container'>
            <form method="post">
                <h3>Welcome to Login</h3>
                <hr />
                <label htmlFor="email">
                    Email
                    <input type="email" name="email" id="email" onChange={changeHandle}/>
                </label>
                <br />

                <label htmlFor="password">
                    Password
                    <input type="text" name="password" id="password" onChange={changeHandle}/>
                </label>
                <br />

                <button type='button' onClick={clickHandle}>Login</button>
            </form>
            <hr />
            <Link to={"/register"} >
                <button type='button'>Register</button>
            </Link>
            <Link to={"/"} >
                <button type='button'>Dashboard</button>
            </Link>
        </div>
    )
}

export default Login