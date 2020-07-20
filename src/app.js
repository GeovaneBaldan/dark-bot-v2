import DarkBot from './bot';

const darkBot = new DarkBot();

darkBot.client.once('ready', () => {
	console.log('The new DarkBot is ready!');
});

darkBot.client.on('message', message => {
	const response = darkBot.messageHandler(darkBot.client, message);

	if (response === null) return;

	const { controller, msgProcessed, msgArgs } = response;

	controller.execute(msgProcessed, msgArgs);
});
