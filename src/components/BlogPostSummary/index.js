import React from 'react';
import { Link, graphql } from 'gatsby';
import { format } from 'date-fns';

import styles from './blog-post-summary.module.css';

import TagList from '../TagList';

const BlogPostSummary = ({ slug, title, date, tags, excerpt }) => {
	// TODO: Format date here
	const displayDate = format(date, 'MMM D');
	const displayYear = format(date, 'YYYY');

	return (
		<article className={styles.blogPostSummary}>
			<time className={styles.datestamp}>
				{displayDate} {displayYear}
			</time>
			<div className={styles.card}>
				<h2 className={styles.title}>
					<Link to={slug}>{title}</Link>
				</h2>
				<TagList
					className={styles.tagGroup}
					tags={tags}
				/>
				<div
					className={styles.excerpt}
					dangerouslySetInnerHTML={{ __html: excerpt }}
				/>
				<div className={styles.link}>
					<Link to={slug}>Continue</Link>
				</div>
			</div>
		</article>
	);
};

export default BlogPostSummary;

export const query = graphql`
  fragment BlogPostSummary on MarkdownRemark {
    id
    excerpt(pruneLength: 280, format: HTML)
    fields {
      slug
    }
    frontmatter {
      title
      date
      tags
    }
  }
`;