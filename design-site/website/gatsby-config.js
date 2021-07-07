const path = require('path')

module.exports = {
  plugins: [
    {
      resolve: 'smooth-doc',
      options: {
        name: 'Pipeline UI',
        siteUrl: 'localhost:8000',
        description: 'Documentation for Pipeline UI, a React library for Algorand.',
        baseDirectory: path.resolve(__dirname, '../'),
        author: 'Headline Design',
        sections: ['About', 'Guide', 'Components', 'Reference', 'Solutions'],
        navItems: [{ title: 'Docs', url: '/docs/' }],
        twitterAccount: 'headline_crypto',
        githubRepositoryURL: 'https://github.com/headline-design/pipeline-ui',
        carbonAdsURL:
          '//cdn.carbonads.com/carbon.js?serve=CE7IL2JN&placement=xstyleddev',
        docSearch: {
          apiKey: 'a0c23a738fe1cfffa923daba2eb185be',
          indexName: 'smooth-doc',
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-154496255-5',
      },
    },
  ],
}
