interface Notes {
    id:String
    title:String
    body:String
    subject:String
    userID:String
}

interface Login {
    id:String
    email:String,
    pass:String,
    location:String,
    age:Number
}


type NotesState = {
    notes: Notes[]
    loader:boolean
}


type NotesAction = {
    type:String
    payload:Notes[]
}


type DispatchType = (args: NotesAction) => NotesState


type LoginState = {
    isAuth : Boolean
}


type LoginAction = {
    type:String
    payload:Login
}



