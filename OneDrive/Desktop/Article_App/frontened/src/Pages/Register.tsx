
import React, { useState } from "react"
import "../Style/Login.css"
import { useDispatch } from "react-redux"
import { Dispatch } from "redux"
import axios, {AxiosResponse} from "axios"
import { userRegister } from "../Redux/action"




function Regsiter() {
    const [form,setForm] = useState<Login|{}>({})

    const dispatch : Dispatch<any> | (() => any) = useDispatch()

  const handleSubmit = (e:React.FormEvent) => {
   e.preventDefault()
   dispatch(userRegister(form)).then((res:AxiosResponse<any>)=>{ alert("Registered Success") })
 }

 console.log(form)

 const handleChange = (e:React.FormEvent<HTMLInputElement>):void =>{
  setForm({
        ...form,
         [e.currentTarget.name]: e.currentTarget.value
      })
 }


  return <div className="login-main">
    <form className="login" onSubmit={handleSubmit} >
      <input placeholder="email" name="email" onChange={handleChange}/>
      <input placeholder="password" name="pass" onChange={handleChange}/>
      <input placeholder="location" name="location" onChange={handleChange}/>
      <input placeholder="age" name="age" onChange={handleChange}/>
      <input  type="submit" value={"Register"} onChange={handleChange}/>
    </form>

  </div>;
}

export default Regsiter;