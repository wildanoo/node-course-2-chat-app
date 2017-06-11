const expect = require('expect');
const {isRealString} = require('./validation');

describe('Reject non string', () => {
	it('Should reject non-string values', () => {
		var number = 54321;
		var validation = isRealString(number);

		expect(validation).toBe(false);
	});
});

describe('Reject string with only space', () => {
	it('Should reject string with only spaces', () => {
		var spaces = '  ';
		var validation = isRealString(spaces);

		expect(validation).toBe(false);
	});
});

describe('Allow string with non-space', () => {
	it('Should allow string with non-space characters', () => {
		var char = 'Hello World   ';
		var validation = isRealString(char);

		expect(validation).toBe(true);
	});
});
