import { GET_NOTES_FALIURE, GET_NOTES_REQUEST, GET_NOTES_SUCCESS, POST_LOGIN_FALIURE, POST_LOGIN_REQUEST, POST_LOGIN_SUCCESS } from "./action";


export const notesRequestAction = () => {
    return {type:GET_NOTES_REQUEST}
}

export const notesSuccessAction = (payload:Notes[]) => {
    return {type:GET_NOTES_SUCCESS,payload}
}

export const notesFaliureAction= () => {
    return {type:GET_NOTES_FALIURE}
}


export const loginRequestAction = () => {
    return {type:POST_LOGIN_REQUEST}
}

export const loginSuccessAction = (payload:Notes[]) => {
    return {type:POST_LOGIN_SUCCESS,payload}
}

export const loginFaliureAction= () => {
    return {type:POST_LOGIN_FALIURE}
}