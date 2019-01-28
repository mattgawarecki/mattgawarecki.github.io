import React from 'react';
import { Link, graphql } from 'gatsby';
import { format } from 'date-fns';

import PageWrapper from '../../components/PageWrapper';

import styles from '../../styles/pages/blog/all.module.css';

const PostsForYear = ({ year, posts }) => (
	<section className={styles.postsForYear}>
		<h2 className={styles.yearHeader}>{year}</h2>
		<ul className={styles.postList}>
			{posts.map(post => {
				const date = format(post.frontmatter.date, 'MMMM DD');
				return (
					<li className={styles.post} key={post.fields.slug}>
						<time className={styles.postDate} dateTime={post.frontmatter.date}>{date}</time>
						<Link className={styles.postTitle} to={post.fields.slug}>
							{post.frontmatter.title}
						</Link>
					</li>
				);
			})}
		</ul>
	</section>
);

const AllPosts = ({ data }) => {
	const postsByYear = data.allMarkdownRemark.years;

	return (
		<PageWrapper>
			<h1 className={styles.header}>
				All Posts
			</h1>

			{postsByYear.map(entry =>
				<PostsForYear
					key={entry.year}
					year={entry.year}
					posts={entry.posts.map(p => p.node)}
				/>
			)}
		</PageWrapper>
	);
};

export default AllPosts;

export const pageQuery = graphql`
	query {
		allMarkdownRemark(
			sort: { fields: [frontmatter___date], order: DESC }
			filter: { fields: { contentType: { eq: "blog" } } }
		) {
			years: group(field: fields___publishYear) {
				year: fieldValue
				posts: edges {
					node {
						fields {
							publishYear
							slug
						}
						frontmatter {
							title
							date
						}
					}
				}
			}
		}
	}
`;