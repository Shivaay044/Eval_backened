import { GET_NOTES_FALIURE, GET_NOTES_REQUEST, GET_NOTES_SUCCESS, POST_LOGIN_FALIURE, POST_LOGIN_REQUEST, POST_LOGIN_SUCCESS, POST_REGISTER_FALIURE, POST_REGISTER_REQUEST, POST_REGISTER_SUCCESS} from "./action";


export const notesRequestAction = () => {
    return {type:GET_NOTES_REQUEST}
}

export const notesSuccessAction = (payload:Notes[]) => {
    return {type:GET_NOTES_SUCCESS,payload}
}

export const notesFaliureAction= () => {
    return {type:GET_NOTES_FALIURE}
}


export const postLoginRequestAction = () => {
    return {type:POST_LOGIN_REQUEST}
}

export const postLoginSuccessAction = (payload:Login) => {
    return {type:POST_LOGIN_SUCCESS,payload}
}

export const postLoginFaliureAction= () => {
    return {type:POST_LOGIN_FALIURE}
}


export const postReqisterRequestAction = () => {
    return {type:POST_REGISTER_REQUEST}
}

export const postReqisterSuccessAction = (payload:Login) => {
    return {type:POST_REGISTER_SUCCESS,payload}
}

export const postReqisterFaliureAction= () => {
    return {type:POST_REGISTER_FALIURE}
}