import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const [text,setText] = useState({
        name:"",email:"",password:"",cpassword:""
    });

    let name,value;
    const handleOnChange = (event) =>{
        console.log(event)
        name = event.target.name;
        value = event.target.value;
        setText({...text,[name]:value});

    }

    const postData = async(event)=>{
        event.preventDefault();
        const {name,email,password,cpassword} = text;
        const res = await fetch("http://localhost:5000/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,password,cpassword
            })
        })
        const data = await res.json();
        if(data.status===422 || !data){
            window.alert("Invalid Registration");
            console.log("Invalid Registration")
        }else{
            window.alert("Registration Successfull")
            console.log("Successfull Registration")
            navigate("/login");
        }
    }


  return (
    <>
        <section className="signup">
            <div className="container">
                <div className="signup-content">
                    <div className="signup-form" style={{"textAlign":"center"}}>
                        <h2 className="formTitle">Sign Up</h2>
                        <form method='POST' className="form">
                            <label htmlFor="name">
                            <i className="zmdi zmdi-account"></i>
                            </label>
                            <input type="text" name='name' id='name' autoComplete='off' value={text.name} onChange={handleOnChange} placeholder='Enter Your Name' />
                            <label htmlFor="email">
                            <i className="zmdi zmdi-account"></i>
                            </label>
                            <input type="text" name='email' id='email' autoComplete='off' value={text.email} onChange={handleOnChange} placeholder='Enter Your email' />
                            <label htmlFor="password">
                            <i className="zmdi zmdi-account"></i>
                            </label>
                            <input type="password" name='password' id='password' autoComplete='off' value={text.password} onChange={handleOnChange} placeholder='Enter Your password' />
                            <label htmlFor="cpassword">
                            <i className="zmdi zmdi-account"></i>
                            </label>
                            <input type="password" name='cpassword' id='cpassword' autoComplete='off' value={text.cpassword} onChange={handleOnChange} placeholder='Enter Your cpassword' />
                            <div className="formbtn">
                                <input type="submit" name="signup" id="signup" onClick={postData} />
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Signup
