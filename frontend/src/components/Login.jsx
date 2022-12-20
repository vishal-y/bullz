import React from 'react'
import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Signup from './Signup';

const Login = () => {
    const navigate = useNavigate();
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const userLogin = async (e)=>{
        e.preventDefault();
        const res = await fetch("http://localhost:5000/signin",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,password
            })
        });
        const data = res.json()
        if(res.status === 400 || !data){
            window.alert("Invalid Credential")
        }else{
            window.alert("Login Successfully");
            navigate("/")
        }
    }
    

  return (
    <>
        <section className="signup">
            <div className="container">
                <div className="signup-content">
                    <div className="signup-form" style={{"textAlign":"center"}}>
                        <h2 className="formTitle">login</h2>
                        <form method='POST' className="form">
                            <label htmlFor="name">
                            <i className="zmdi zmdi-account"></i>
                            </label>
                            <input type="text" name='email' id='email' autoComplete='off' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter Your email' />
                            <label htmlFor="password">
                            <i className="zmdi zmdi-account"></i>
                            </label>
                            <input type="password" name='password' id='password' autoComplete='off' value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter Your password' />
                            <div className="formbtn">
                                <input type="submit" name="signup" id="signup" value='Log In' onClick={userLogin}/>
                            </div>
                            <Link to="/signup">I do not have any account.</Link>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Login
