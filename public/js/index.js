var socket = io();

socket.on('connect',function () {
	console.log('Connected to the server');
});

socket.on('disconnect',function () {
	console.log('Disconnected from server');
});

socket.on('newMessage',function(message){
	console.log('newMessage', message);
});

socket.on('joinApp',function(message){
	console.log('Welcome message: ', message.text)
});

socket.on('newUser',function(message){
	console.log('Notification: ',message.text);
});