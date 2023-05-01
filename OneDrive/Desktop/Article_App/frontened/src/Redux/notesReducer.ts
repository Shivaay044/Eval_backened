
import React from "react";
import { GET_NOTES_FALIURE, GET_NOTES_REQUEST, GET_NOTES_SUCCESS } from "./action";

const initialState: NotesState  ={
    notes:[],
    loader:false
}

const notesReducer = (state = initialState,{type,payload}: NotesAction) => {
  switch(type){
    case GET_NOTES_REQUEST : 
       return {...state,loader:false}
    case GET_NOTES_SUCCESS :
      return {...state, loader:true, notes:payload}
    case GET_NOTES_FALIURE : 
      return {...state, loader:false}
    default:{
        return state
    }
  }
}

export default notesReducer;
