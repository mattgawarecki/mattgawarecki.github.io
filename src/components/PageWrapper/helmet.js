import React from 'react';
import Helmet from 'react-helmet';

// TODO: Add Open Graph tags
export default ({
	title,
	description
}) => (
	<Helmet
		htmlAttributes={{ lang: 'en' }}
		meta={[
			{ name: 'description', content: description },
		]}
		title={title}
	/>
);