module.exports = {
  siteMetadata: {
    title: `NCPA | Staffordshire Branch`,
    description: `NCPA Staffs are a small committee formed in 1981 dedicated to running at least 2 shows a year, the main one being the Staffordshire Country Festival held end June / early July.`,
    author: `Lee Lawton Design`,
    siteUrl: `http://www.ncpa-staffs.co.uk/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-FWKZCFT0BK", // Google Analytics / GA
        ],
        pluginConfig: {
          head: true,
          anonymize_ip: true,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
        }
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
          include: /\.inline\.svg$/
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`
  ],
}
