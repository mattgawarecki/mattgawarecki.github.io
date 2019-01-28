const dateFns = require('date-fns');
const { createFilePath } = require('gatsby-source-filesystem');

const createBlogPages = require('./gatsby-apis/create-blog-pages');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  createBlogPages(graphql, createPage);
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slugValue = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value: slugValue
    });

    const contentTypeValue = slugValue.startsWith('/blog/')
      ? 'blog'
      : 'page';
    createNodeField({
      name: `contentType`,
      node,
      value: contentTypeValue
    });

    if (node.frontmatter.date) {
      createNodeField({
        name: `publishYear`,
        node,
        value: dateFns.format(node.frontmatter.date, 'YYYY')
      })
    }
  }
};
