import React from 'react';
import { Link, graphql } from 'gatsby';

import PageWrapper from '../components/PageWrapper';
import PostList from '../components/PostList';

import styles from '../styles/pages/home.module.css';

const viewAllPath = '/blog/all';

const HomePage = ({ data }) => (
  <PageWrapper pageTitle='Recent Posts'>
    <h1 className={styles.header}>
      Recent Posts
      <span className={styles.headerSmall}>
        (<Link to={viewAllPath}>view all</Link>)
      </span>
    </h1>
    <PostList posts={data.allMarkdownRemark.edges.map(e => e.node)}/>
    <footer className={styles.footer}>
      <Link className={styles.viewAllLink} to={viewAllPath}>looking for more?</Link>
    </footer>
  </PageWrapper>
);

export default HomePage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fields: { contentType: { eq: "blog" } }
      }
    ) {
      edges {
        node {
          ...BlogPostSummary
        }
      }
    }
  }
`;