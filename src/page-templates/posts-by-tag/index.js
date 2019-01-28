import { graphql } from 'gatsby';

import PageWrapper from '../../components/PageWrapper';
import PostList from '../../components/PostList';

const PostsByTagPage = ({ data, title }) => (
	<PageWrapper pageTitle={title}>
		<PostList posts={data.edges.map(e => e.node)}/>
	</PageWrapper>
);

export default PostsByTagPage;

export const pageQuery = graphql`
	query($tag: String) {
		allMarkdownRemark(
			sort: {
				fields: [frontmatter___date], order: DESC
			}
			filter: {
				frontmatter: {
					tags: {
						in: [$tag]
					}
				}
			}
		) {
			edges {
				node {
					...BlogPostSummary
				}
			}
		}
	}
`;