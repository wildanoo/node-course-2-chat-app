var socket = io();

socket.on('connect',function () {
	console.log('Connected to the server');

	socket.emit('createMessage', {
		from: 'Wildan',
		text: 'Yup! that works for me'
	});


});

socket.on('disconnect',function () {
	console.log('Disconnected from server');
});

socket.on('newMessage',function(message){
	console.log('newMessage', message);
});

socket.on('messageFromServer',function(msg){
	console.log('Message', msg);
});



socket.emit('messageFromClient',{
	content: "Hey! I'm the client here"
});

