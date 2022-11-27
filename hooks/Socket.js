import { io } from "socket.io-client"

const socket  = io("http://192.168.29.18:4000")
console.log("socket is",socket.connected,socket)
export default socket