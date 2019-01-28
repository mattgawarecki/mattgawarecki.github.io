const path = require('path');

const blogPostTemplate = path.resolve('./src/page-templates/blog-post/index.js');
const allPostsQuery = `
{
	allMarkdownRemark(
		filter: {
			fields: {
				contentType: {
					eq: "blog"
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
			component: blogPostTemplate,
			context: {
				slug: p.fields.slug
			}
		})
	));