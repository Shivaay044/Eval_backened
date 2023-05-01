import React, { useState } from "react";
import "../Style/Login.css"
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../Redux/action";
import { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { store } from "../Redux/store";




function Login() {
   

  const [form,setForm] = useState <Login|{}>({})

  const dispatch : Dispatch<any> | (() => any) =  useDispatch()

  const store = useSelector((store) =>console.log(store))

  const handleSubmit = (e:React.FormEvent):void => {
   e.preventDefault()
   dispatch(userLogin(form)).then((res:AxiosResponse<any>)=>{ alert("Login Success") })
 }

 const handleChange = (e:React.FormEvent<HTMLInputElement>):void =>{
  setForm({
        ...form,
         [e.currentTarget.name]: e.currentTarget.value
      })
 }


  return <div className="login-main">
    <form className="login" onSubmit={handleSubmit}>
      <input placeholder="email" name="email" onChange={handleChange}/>
      <input placeholder="password" name="pass" onChange={handleChange}/>
      <input  type="submit" value={"Login"}/>
    </form>
  </div>;
}

export default Login;
