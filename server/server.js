const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection',(socket) => {
	console.log('New user connected');

	socket.emit('newMessage', {
		from: 'John',
		text: 'See you then',
		createdAt: 12345
	});

	socket.on('createEmail', (newEmail) => {
		console.log('createEmail', newEmail);
	});

	socket.emit('messageFromServer',{
		content: "Hey! I'm the server"
	})

	socket.on('messageFromClient', (msg)=>{
		console.log('The Message', msg);
	})

	socket.on('createMessage',(message) => {
		console.log('createMessage', message);
	});

	socket.on('disconnect',() => {
		console.log('The user is out');
	});
});

server.listen(port,() => {
	console.log(`Server is up on ${port}`);
});