import { resolve } from 'url';
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { Twitter, LinkedIn } from '../../lib/share-links';
import { classes } from '../../lib/styles';
import styles from './blog-post.module.css';

const BlogPostFooter = ({ canonicalUrl, title, description }) => (
	<footer className={styles.footer}>
		<hr className={styles.endMarker} />

		<span>Like this article? Share it!</span>
		<ul className={styles.shareList}>
			<li>
				<span
					aria-hidden="true"
					className={classes(styles.socialIcon, 'fab', 'fa-twitter-square')}>
				</span>
				<a href={Twitter(canonicalUrl)}>Twitter</a>
			</li>
			<li>
				<span
					aria-hidden="true"
					className={classes(styles.socialIcon, 'fab', 'fa-linkedin')}>
				</span>
				<a href={LinkedIn({
					url: canonicalUrl,
					title,
					summary: description
				})}>
					LinkedIn
				</a>
			</li>
			{/*
			<li>
				<span className="fab fa-facebook"></span>
				<a href="#">Facebook</a>
			</li>
			*/}
		</ul>
	</footer>
);


export default ({ path }) => (
	<StaticQuery
		query={siteUrlQuery}
		render={data => {
			const canonicalUrl = resolve(
				data.site.siteMetadata.siteUrl,
				path
			);

			return (
				<BlogPostFooter canonicalUrl={canonicalUrl} />
			);
		}}
	/>
);

const siteUrlQuery = graphql`
	query {
		site {
			siteMetadata {
				siteUrl
			}
		}
	}
`;