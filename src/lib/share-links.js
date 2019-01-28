import { stringify } from 'querystring';

const Twitter = url => (
	`https://twitter.com/intent/tweet?${stringify({ url })}`
);

const LinkedIn = ({ url, title = undefined, summary = undefined }) => {
	const queryParams = {
		mini: true,
		source: 'MattGawarecki.com',
		url
	};

	if (title) queryParams.title = title;
	if (summary) queryParams.summary = summary;
	
	return `https://www.linkedin.com/shareArticle?${stringify(queryParams)}`;
};

export { Twitter, LinkedIn };