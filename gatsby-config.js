const siteUrl = 'https://mattg.dev/';

module.exports = {
  siteMetadata: {
    siteUrl,
    
    title: 'Matt Gawarecki',
    subtitle: '(he/him)',
    description: 'Site description',

    navigation: [
      {
        active: true,
        title: 'all posts',
        path: '/blog/all'
      },
      {
        active: true,
        title: 'about me',
        path: '/about/me'
      },
      {
        active: false,
        title: 'about this site',
        path: '/about/site'
      },
      {
        active: false,
        title: 'my portfolio',
        path: '/portfolio'
      }
    ],

    social: [
      {
        provider: 'LinkedIn',
        name: '/in/mattgawarecki',
        iconClass: 'fab fa-linkedin-in',
        url: 'https://linkedin.com/in/mattgawarecki'
      },
      {
        provider: 'GitHub',
        name: '@mattgawarecki',
        iconClass: 'fab fa-github',
        url: 'https://github.com/mattgawarecki'
      },
      {
        provider: 'Twitter',
        name: '@mattgawarecki',
        iconClass: 'fab fa-twitter',
        url: 'https://twitter.com/@mattgawarecki'
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- end excerpt -->`,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants'
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-124506330-1`,
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl
      }
    },
    `gatsby-plugin-react-helmet`,
  ]
};
