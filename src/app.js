import HelperBot from './bot';

const helperBot = new HelperBot();

helperBot.client.once('ready', () => {
	console.log('HelperBot is ready!');
});

helperBot.client.on('message', message => {
	const response = helperBot.messageHandler(helperBot.client, message);

	if (response === null) return;

	const { controller, msgProcessed, msgArgs } = response;

	controller.execute(msgProcessed, msgArgs);
});
