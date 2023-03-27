const express = require("express")
const app = express()
const { connection } = require("./config/db")
const { auth } = require("./middleware/auth.middleware")
const { postsRoute } = require("./routes/posts.routes")
const { userRouter } = require("./routes/users.routes")
require("dotenv").config()

app.use(express.json())


//register
app.use("/users",userRouter)

//Auth
app.use(auth)

//login 
app.use("/posts",postsRoute)




app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log("server is connected to DB")
    } catch (error) {
        console.log({"msg":error.message})
    }
    console.log(`server is running at ${process.env.PORT}`)
})