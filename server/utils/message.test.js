var expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage', () => {
	it('Should generate correct message object', () => {
		var from = 'Budi';
		var text = 'Pesan dari budi';
		var message = generateMessage(from,text);
		
		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({from,text});
	});
});