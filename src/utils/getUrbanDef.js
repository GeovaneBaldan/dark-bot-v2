import fetch from 'node-fetch';
import queryString from 'querystring';

async function getUrbanDefinition(args) {
	const query = queryString.stringify({ term: args.join(' ') });

	const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`)
		.then(response => response.json());

	return list;
}

export default getUrbanDefinition;