import axios, {AxiosResponse} from "axios"
import { notesFaliureAction, notesRequestAction, notesSuccessAction, postLoginFaliureAction, postLoginRequestAction, postLoginSuccessAction, postReqisterFaliureAction, postReqisterRequestAction, postReqisterSuccessAction } from "./actionType"


export const GET_NOTES_REQUEST:String = "GET_NOTES_REQUEST"
export const GET_NOTES_SUCCESS:String = "GET_NOTES_SUCCESS"
export const GET_NOTES_FALIURE:String = "GET_NOTES_FALIURE"


export const POST_LOGIN_REQUEST:String = "POST_LOGIN_REQUEST"
export const POST_LOGIN_SUCCESS:String = "POST_LOGIN_SUCCESS"
export const POST_LOGIN_FALIURE:String = "POST_LOGIN_FALIURE"


export const POST_REGISTER_REQUEST:String = "POST_REGISTER_REQUEST"
export const POST_REGISTER_SUCCESS:String = "POST_REGISTER_SUCCESS"
export const POST_REGISTER_FALIURE:String = "POST_REGISTER_FALIURE"


type userPost = (form:Login) => Promise<void>;

export const userRegister  = (form:Login | any ) => (dispatch:any) => {
dispatch(postReqisterFaliureAction())
 return axios.post("http://localhost:4500/users/register",form)
.then((res:AxiosResponse<Login>)=>{postReqisterSuccessAction(res.data)})
.catch((err)=>console.log(postReqisterFaliureAction()))
}

export const userLogin  = ( form:Login | any ) => (dispatch:any) => {
    dispatch(postLoginRequestAction())
    return axios.post("http://localhost:4500/users/login",form)
   .then((res:AxiosResponse<Login>)=>{postLoginSuccessAction(res.data)})
   .catch((err)=>console.log(postLoginFaliureAction()))
}


export const getNotes  = (dispatch:any)  => {
    dispatch(notesRequestAction())
     axios.get("http://localhost:4500/users/register")
   .then((res:AxiosResponse<Notes[]>)=>{notesSuccessAction(res.data)})
   .catch((err)=>console.log(notesFaliureAction()))
}