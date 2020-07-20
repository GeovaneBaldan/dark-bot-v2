import { MessageEmbed } from 'discord.js';

import getUrbanDefinition from '../utils/getUrbanDef';

const limit = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);

module.exports = {
	name: 'urban',
	description: 'Connect with Urban Dictionary\'s API',
	execute(message, args) {
		if (!args.length) return message.channel.send('You need to supply a search term!');

		getUrbanDefinition(args).then(result => {
			if(!result.length) return message.channel.send(`No results found for **${args.join(' ')}**.`);

			const [ answer ] = result;

			const embed = new MessageEmbed()
				.setColor('#EFFF00')
				.setTitle(answer.word)
				.setURL(answer.permalink)
				.addFields(
					{ name: 'Definition', value: limit(answer.definition, 1024) },
					{ name: 'Example', value: limit(answer.example, 1024) },
					{ name: 'Rating', value: `${answer.thumbs_up} thumbs up. ${answer.thumbs_down} thumbs down.` },
				);

			message.channel.send(embed);
		});
	},
};
