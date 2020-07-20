import { Client, Collection } from 'discord.js';
import { readdirSync } from 'fs';

const processClient = token => {
	const client = new Client();
	processControllers(client);
	client.login(token).catch(error => console.log(`Failed: ${error}`));

	return client;
};

const processControllers = client => {
	const controllerFiles = readdirSync(__dirname + '/controllers');
	client.controllers = new Collection();

	for (const file of controllerFiles) {
		const controller = require(`./controllers/${file}`);
		client.controllers.set(controller.name, controller);
	}
};

export default processClient;
