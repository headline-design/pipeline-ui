module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        manualInit: true,
        modulePath: `../src/cms/cms.js`, // This needs to be relative to the .docz directory
      },
    }
  ]
};