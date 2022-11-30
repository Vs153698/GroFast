const express = require("express")
const cors = require("cors")
const app = express()
const port = 4000
app.use(express.urlencoded({extended:true}))
app.use(express.json())
const http = require("http").Server(app)
const socketIo = require("socket.io")(http,{
    cors:{
        origin: "exp://192.168.29.18:19000"
    }
})
app.use(cors())

const generateId = () => Math.random().toString(36).substring(2,10)
socketIo.on("connection",(socket)=>{
    console.log(`🌜: ${socket.id} user just connected`)
    socket.on("disconnect",()=>{
        socket.disconnect()
        console.log("🔥: A user disconnected")
    })
    socket.on("sendNotification",({message})=>{
        console.log("response for message",message)
        const newMessage = {
            id: generateId(),
            text:message,
            addText:"Hello world"
        }
        socket.emit('ReceivedNotification',newMessage)
    })
})
app.get("/api",(req,res)=>{
    console.log("hello")
    res.json({data:"Hello world"})
})

http.listen(port, () => console.log(`Example app listening on port ${port}!`))