var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
  socket.on('chat', function(msg){
    io.emit('chat', msg);
  });
  socket.on('disconnect', function () {
    socket.emit('disconnected');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
