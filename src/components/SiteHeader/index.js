import React from 'react';
import { Link } from 'gatsby';

import Navigation from '../Navigation';
import Social from '../Social';

import headshot from './headshot.web.jpg';
import styles from './site-header.module.css';

const SiteHeader = ({ className, title, subtitle, navigation, social }) => {
	return (
    <header className={className}>
      <h1 className={styles.title}>
        <Link
          className={styles.titleText}
          to='/'
        >
          {title}
        </Link>

        <div aria-hidden="true" className={styles.logoContainer}>
          <img className={styles.logo} src={headshot}/>
        </div>
      </h1>

      <span className={styles.subtitle}>{subtitle}</span>
      
      <Navigation
        className={styles.navGroup}
        itemClassName={styles.navItem}
        links={navigation}
      />
      <Social
        className={styles.socialGroup}
        itemClassName={styles.socialItem}
        items={social}
      />
    </header>
  );
}

export default SiteHeader;