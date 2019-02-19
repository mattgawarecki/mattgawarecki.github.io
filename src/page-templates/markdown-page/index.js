import React from 'react';
import { graphql } from 'gatsby';

import PageWrapper from '../../components/PageWrapper';

import styles from './markdown-page.module.css';


const MarkdownPage = ({ data }) => {
	const { title } = data.markdownRemark.frontmatter;
	const { html } = data.markdownRemark;

	return (
		<PageWrapper pageTitle={title}>
			<h1 className={styles.title}>{title}</h1>
			<div
				className={styles.page}
				dangerouslySetInnerHTML={{ __html: html }}
			/>
		</PageWrapper>
	);
};

export default MarkdownPage;

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
			}
		}
	}
`;