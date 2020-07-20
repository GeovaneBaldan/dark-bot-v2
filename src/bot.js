import processClient from './client-processor';
import messageHandler from './message-handler';

const HelperBot = class HelperBot {
	constructor() {
		this.client = processClient(process.env.TOKEN);
		this.messageHandler = messageHandler;
	}
};

export default HelperBot;
