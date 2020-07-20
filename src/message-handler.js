const messageHandler = (client, message) => {
	if (!message.content.startsWith(process.env.PREFIX) || message.author.bot) return null;

	const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/);
	const controllerName = args.shift().toLowerCase();
	const controller = client.controllers.get(controllerName) ||
			client.controllers.find(ctr => ctr.aliases && ctr.aliases.includes(controllerName));

	if (!controller) return null;

	const response = {
		controller: controller,
		msgProcessed: message,
		msgArgs: args,
	};

	return response;
};

export default messageHandler;
