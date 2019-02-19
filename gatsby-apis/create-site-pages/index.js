const path = require('path');

const markdownPageTemplate = path.resolve('./src/page-templates/markdown-page/index.js');
const allPostsQuery = `
{
	allMarkdownRemark(
		filter: {
			fields: {
				contentType: {
					eq: "page"
				}
			}
		}
	) {
		edges {
			node {
				fields {
					slug
				}
			}
		}
	}
}
`

module.exports = (graphql, createPage) => graphql(allPostsQuery)
	.then(result => result.data.allMarkdownRemark.edges.map(e => e.node))
	.then(posts => posts.forEach(p =>
		createPage({
			path: p.fields.slug,
			component: markdownPageTemplate,
			context: {
				slug: p.fields.slug
			}
		})
	));