import processClient from './client-processor';
import messageHandler from './message-handler';

const DarkBotV2 = class DarkBotV2 {
	constructor() {
		this.client = processClient(process.env.TOKEN);
		this.messageHandler = messageHandler;
	}
};

export default DarkBotV2;
