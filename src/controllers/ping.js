module.exports = {
	name: 'ping',
	description: 'A ping for a pong',
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {
		message.channel.send('Pong!');
	},
};
