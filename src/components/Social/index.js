import React from 'react';

import { classes } from '../../lib/styles';

import styles from './social.module.css';

const SocialItem = ({ className, item }) => (
	<li className={classes(className, styles.item)}>
		<a
			aria-label={`${item.provider}: ${item.name}`}
			className={styles.itemLogoLink}
			href={item.url}
		>
			<span
				aria-hidden="true"
				className={classes(item.itemLogo, item.iconClass)}
			>
			</span>
		</a>
		<a
			aria-hidden="true"
			className={styles.itemLink}
			href={item.url}
		>
			{item.name}
		</a>
	</li>
);

const Social = ({ className, itemClassName, items }) => {
	if (!items || !items.length) return null;

	return (
		<ul className={classes(className, styles.group)}>
		{items.map(i =>
			<SocialItem
				key={i.url}
				className={itemClassName}
				item={i}
			/>
		)}
		</ul>
	);
};

export default Social;