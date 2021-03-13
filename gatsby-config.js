// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

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
        repositoryName: 'kvowebsite',
        // linkResolver: () => (doc) => linkResolver(doc),
        schemas: {
          page: require('./cutom_types/page.json'),
          nav: require('./cutom_types/nav.json'),
          footer: require('./cutom_types/footer.json'),
          contact: require('./cutom_types/contact.json'),
          books: require('./cutom_types/books.json'),
          "book_page": require('./cutom_types/book_page.json')
        },
      }
    }
  ],
};
