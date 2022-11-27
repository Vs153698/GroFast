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


app.get("/api",(req,res)=>{
    console.log("hello")
    socketIo.on("connection",(socket)=>{
        console.log(`🌜: ${socket.id} user just connected`)
        socket.on("disconnect",()=>{
            socket.disconnect()
            console.log("🔥: A user disconnected")
        })
        socket.on("sendNotification",({message})=>{
            socket.emit('response',message)
        })
    })
    res.json({data:"Hello world"})
})

http.listen(port, () => console.log(`Example app listening on port ${port}!`))