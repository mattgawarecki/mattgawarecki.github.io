import React from 'react';
import { graphql } from 'gatsby';
import { format } from 'date-fns';

import PageWrapper from '../../components/PageWrapper';
import TagList from '../../components/TagList';
import styles from './blog-post.module.css';

import BlogPostFooter from './footer';

const BlogPost = ({ title, date, tags, html, path }) => {
	const displayDate = format(date, 'MMMM D, YYYY');

	return (
		<article className={styles.blogPost}>
			<header className={styles.header}>
				<time
						className={styles.datestamp}
						dateTime={date}
				>
					{displayDate}
				</time>
				<h1 className={styles.title}>
					{title}
				</h1>
				<TagList tags={tags} />
			</header>
			
			<div
				className={styles.content}
				dangerouslySetInnerHTML={{ __html: html }}
			/>

			<BlogPostFooter path={path} />
		</article>
	);
};

const BlogPostPage = ({ data, location }) => {
	const { title, date, tags } = data.markdownRemark.frontmatter;

	return (
		<PageWrapper pageTitle={title}>
			<BlogPost
				title={title}
				date={date}
				tags={tags}
				html={data.markdownRemark.html}
				path={location.pathname}
			/>
		</PageWrapper>
	);
};

export default BlogPostPage;

export const pageQuery = graphql`
	query($slug: String!) {
		markdownRemark(
			fields: {
				slug: { eq: $slug }
			}
		) {
			html
			frontmatter {
				title
				date
				tags
			}
		}
	}
`;