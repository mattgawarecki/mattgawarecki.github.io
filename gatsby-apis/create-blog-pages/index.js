const createPosts = require('./create-posts');
const createTagIndices = require('./create-tag-indices');

module.exports = (graphql, createPage) => {
	[
		createPosts,
		createTagIndices
	].forEach(fn => fn.call(null, graphql, createPage));
};