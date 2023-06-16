import { Server } from "socket.io";

const PORT = 9000;
const io = new Server(PORT,{
    cors:{
        origin:'',
        methods:['GET', 'POST']
    }
});

io.on('connection', socket => {
    console.log('connected')
})