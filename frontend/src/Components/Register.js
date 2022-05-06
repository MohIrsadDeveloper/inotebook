import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const registerUrl = 'http://localhost:4000/api/auth/register'

const Register = () => {
    const [user, setUser] = useState({
        name : "",
        email : "",
        password : "",
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
        fetch(registerUrl, {
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(user)
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

  return (
    <div className='container'>
            <form method="post">
                <h3>Welcome to Registration</h3>
                <hr />
                <label htmlFor="name">
                    Name
                    <input type="text" name="name" id="name" onChange={changeHandle}/>
                </label>
                <br />

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

                <button type='button' onClick={clickHandle}>Register</button>
            </form>
            <hr />
            <Link to={"/login"} >
                <button type='button'>Login</button>
            </Link>
            <Link to={"/"} >
                <button type='button'>Dashboard</button>
            </Link>
        </div>
  )
}

export default Register