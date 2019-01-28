import React from 'react';
// import { Link, withPrefix } from 'gatsby';

import styles from './tag-list.module.css';

// TODO: Link tags to "posts by tag" page
const TagItem = ({ tag }) => (
	<li className={styles.tag}>
		<span>#{tag}</span>
		{/* <Link to={withPrefix(`/blog/tags/${tag}`)}>{`#${tag}`}</Link> */}
	</li>
);

const TagList = ({ tags }) => (
	<ul className={styles.tagGroup}>
	{tags.map((tag, index) =>
		<TagItem key={index} tag={tag} />
	)}
	</ul>
);

export default TagList;