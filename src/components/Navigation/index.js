import React from 'react';
import { Link } from 'gatsby';

import { classes } from '../../lib/styles';

import styles from './navigation.module.css';

const NavigationItem = ({ active, title, path }) => {
	const item = active
		? <Link to={path}>{title}</Link>
		: <span>{title} <span className={styles.comingSoon}>(coming soon!)</span></span>;

	return (
		<li className={styles.item}>
			{item}
		</li>
	);
};

const Navigation = ({ links, className }) => (
	<ul className={classes(className, styles.group)}>
	{links.map(link =>
		<NavigationItem
			key={link.path}
			{...link}
		/>
	)}
	</ul>
);

export default Navigation;