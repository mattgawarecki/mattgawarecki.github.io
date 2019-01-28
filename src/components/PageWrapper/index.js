import { Location } from '@reach/router';
import React from 'react';

import { withPrefix, StaticQuery, graphql } from 'gatsby';

import Helmet from './helmet';
import SiteHeader from '../SiteHeader';
import SiteFooter from '../SiteFooter';

import { classes } from '../../lib/styles';

import palettes from './styles/palettes.module.css';
import styles from './styles/page-wrapper.module.css';

const PageWrapper = ({
	data,
	children,
	pageTitle = undefined,
	pageDescription = undefined
}) => {
	const siteMetadata = data.site.siteMetadata;

	const browserTitle = pageTitle
		? `${pageTitle} | ${siteMetadata.title}`
		: siteMetadata.title;

	return (
		<div className={styles.siteWrapper}>
			<Helmet
				title={browserTitle}
				description={pageDescription || siteMetadata.description}
			/>

			<a className={styles.skipToMainContent} href="#main-content">
				Skip to main content
			</a>
			
			<SiteHeader
			  className={classes(styles.siteHeader, palettes.primary)}
				title={siteMetadata.title}
				subtitle={siteMetadata.subtitle}
				navigation={siteMetadata.navigation}
				social={siteMetadata.social}
			/>

			<main id="main-content" className={classes(styles.siteContent, palettes.secondary)}>
				{children}
			</main>

			<SiteFooter className={classes(styles.siteFooter, palettes.primary)}/>
		</div>
	);
};

export default props => (
	<StaticQuery
		query={siteMetadataQuery}
		render={data => (
			<PageWrapper
				data={data}
				{...props}
			/>
		)}
	/>
);

const siteMetadataQuery = graphql`
	query {
		site {
			siteMetadata {
				title
				subtitle
				description
				navigation {
					active
					title
					path
				}
				social {
					provider
					name
					iconClass
					url
				}
			}
		}
	}
`;