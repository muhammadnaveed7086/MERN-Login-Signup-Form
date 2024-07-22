
import React, { useState } from "react"
import "./login.css"
import axios from "axios"
import { NavLink } from "react-router-dom"
const Login = () => {
   const [user, setUser] = useState({
      email: "",
      password: ""
   })
   const inputChange = e => {
      const { name, value } = e.target
      setUser({
         ...user,
         [name]: value
      })
   }
   const login = () => {
      axios.post("http://localhost:9002/login", user)
         .then(res => {
            alert(res.data.message)
            res.send('<h1>Welcome to our World')
            console.log('login');
         })
   }
   return (
      <>
         <div className="login-form">
            <div className="text">
               LOGIN
            </div>
            <div className="form">
               <div className="field">
                  <div className="fas fa-envelope"></div>
                  <input type="text" placeholder="Email or Phone" name="email" onChange={inputChange} />
               </div>
               <div className="field">
                  <div className="fas fa-lock"></div>
                  <input type="password" placeholder="Password" name="password" onChange={inputChange} />
               </div>
               <button  onClick={login}>LOGIN</button>
               <div className="link">
                  Not a member?
                  <NavLink to="/signup">Signup now</NavLink>
               </div>
            </div>
         </div>
      </>
   )
}
export default Login;
