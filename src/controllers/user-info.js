/* eslint-disable no-unused-vars */
module.exports = {
	name: 'user-info',
	description: 'Displays some user information',
	execute(message, args) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	},
};
