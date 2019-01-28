import React, { Fragment } from 'react';

import BlogPostSummary from '../BlogPostSummary';

class PostList extends React.Component {
  render() {
    const { posts } = this.props;

    return (
      <Fragment>
        {posts.map(post =>
          <BlogPostSummary
            key={post.id}
            excerpt={post.excerpt}
            slug={post.fields.slug}
            {...post.frontmatter}
          />
        )}
      </Fragment>
    );
  }
}

export default PostList;