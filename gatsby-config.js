module.exports = {
  siteMetadata: {
    title: `Kristin van Ogtrop`,
    description: `Home of author Kristin van Ogtrop, former editor-in-cheif of Real Simple.`,
    author: `Lydia Gregory`, 
  },
  plugins: [
    "gatsby-plugin-sass", 
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "KristinvanOgtrop",
        linkResolver: () => (doc) => linkResolver(doc),
        schemas: {
          page: require('./custom_types/page.json')
        },
      }
    }
  ],
};
