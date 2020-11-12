module.exports = {
  siteMetadata: {
    siteUrl: `https://www.tridigitalmarketing.com`,
    title: `SynthDigital`,
    description: `We’re a UI/UX strategy and design agency in Dallas, Tx. We create kickass digital products accross all platforms.`,
    author: `@ghughes139`,
  },
  plugins: [
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: "UA-48748407-9",
    //     head: true,
    //     anonymize: true,
    //     respectDNT: true,
    //     defer: false,
    //   },
    // },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    // {
    //   resolve: "gatsby-plugin-robots-txt",
    //   options: {
    //     host: "https://www.tridigitalmarketing.com",
    //     sitemap: "https://www.tridigitalmarketing.com/sitemap.xml",
    //     policy: [{ userAgent: "*", allow: "/" }],
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/svgs/group-12.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
  ],
};
