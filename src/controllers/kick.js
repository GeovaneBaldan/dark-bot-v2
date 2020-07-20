module.exports = {
	name: 'kick',
	description: 'Kick a given member',
	execute(message, args) {
		if (!args[1]) message.channel.send('You need to specify a person!');

		if (message.member.roles.cache.has(process.env.ADMIN_ROLE_ID)) {
			const user = message.mentions.users.first();

			if(user) {
				const member = message.guild.member(user);

				if(member) {
					member
						.kick(args[2])
						.then(() => {
							message.reply(`${user.tag} was successfully kicked!`);
						}).catch(err => {
							message.reply(`I was unable to kick ${user.tag} because ${console.log(err)}`);
						});
				} else {
					message.reply('That user isn\'t in this server');
				}
			}
		} else {
			message.channel.send('You can\'t use this command because you don\'t have the right permissions');
		}
	},
};
