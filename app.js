const express = require('express');
const app = express();
const server = app.listen(process.env.PORT || 8080);
const socket = require('socket.io');
const io = socket(server);

app.get('/',function(req,res){
    res.sendFile(__dirname+'/views/index.html');
});
io.on('connection',function(socket){
    console.log('new socket');
    socket.emit('alertnew');
})
