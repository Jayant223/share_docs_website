import {Server} from "socket.io"
import { getDocument,updateDocument } from "./controller/controller-db.js";
import Connection from "./database/db.js";

const PORT=9000;
Connection();
const io= new Server(PORT,{
    cors:{
        origin:'http://localhost:3000',
        methods:['GET','POST']
    }
})

// now we are setting connection

io.on('connection',socket=>{
   //getting data from front end
   socket.on("get-document",async documentId=>{
       const data="";
       const document=await getDocument(documentId);
       socket.join(documentId);
       socket.emit("load-document",document.data);
    socket.on("send-changes",delta=>{
        socket.broadcast.to(documentId).emit("receive-changes",delta);
       
       })
       socket.on("save-document",async data=>{
           await updateDocument(documentId,data);
       })
       console.log("connected");
   })
   
    
})

