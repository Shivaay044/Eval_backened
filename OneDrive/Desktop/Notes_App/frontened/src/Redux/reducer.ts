
import React from "react";

const initialState: NotesState  ={
    notes:[],
    loader:false
}

const reducer = (state = initialState,{type,payload}: NotesAction) => {
  switch(type){
    default:{
        return state
    }
  }
}

export default reducer;
