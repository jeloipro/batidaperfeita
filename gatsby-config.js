/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const netlifyCmsPaths = {
  resolve: `gatsby-plugin-netlify-cms-paths`,
  options: {
    cmsConfig: `/static/admin/config.yml`,
  },
}

const settings = require("./src/util/site.json")

module.exports = {
  siteMetadata: settings.meta,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets/`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/`,
        name: `content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        gfm: true,
        plugins: [
          netlifyCmsPaths,

          {
            resolve: 'gatsby-remark-audio',
            options: {
              preload: 'auto',
              loop: false,
              controls: true,
              muted: false,
              autoplay: false
            }
          },


          {
            resolve: `gatsby-plugin-social9-socialshare`,
            options: {
              content:  `073004d757df4a7ca401fc742b11a17a`,
            }
          },

          {
            resolve: "gatsby-plugin-load-script",
            options: {
              id: "s9-sdk",
              async: true,
              defer: true,
              content: "073004d757df4a7ca401fc742b11a17a",
              src: "socialshare.min.js"
            },
          },

          {
            resolve: "gatsby-remark-embed-video",
            options: {
                width: 800,
                ratio: 1.77, 
                height: 400, 
                related: false,
                noIframeBorder: true
            },
          },
          
          `gatsby-remark-reading-time`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024,
              showCaptions: true,
              linkImagesToOriginal: false,
              tracedSVG: true,
              loading: "lazy",
            },
          },
          `gatsby-remark-responsive-iframe`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              // By default the HTML entities <>&'" are escaped.
              // Add additional HTML escapes by providing a mapping
              // of HTML entities and their escape value IE: { '}': '&#123;' }
              escapeEntities: {},
            },
          },
        ],
      },
    },
    
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-theme-ui',
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: settings.ga,
      },
    },
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Batida Perfeita`,
        short_name: `BatidaPerfeita`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        //theme_color: `#cb0226`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: "static" + settings.meta.iconimage,
        //icon: "src/images/icon.png",
        //icon: "static/favicon.ico",
      },
    },
  // Meu Plugins 

    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }]
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/blog/rss.xml",
            match: "^/blog/"
            //title: 'Batida Perfeita's RSS Feed',
            // Configurações opcionais
            // Esse cara serve para você colocar onde você quer que o feed se alimente. Por exemplo, você tem um site pessoal e tem um blog dentro dele com a url www.meusiteboladao.com/blog/
            // Aí você vai colocar o ^/blog/ nessa chave
            // Mais um opcional que eu acho útil caso você use o Feedburner, como eu.
            // É algo do tempo do ronca, eu sei, mas vai que tem gente que ainda o utiliza, então vale deixar já configurado
            //link: 'https://feeds.feedburner.com/batidaperfeita.confira.link',

          }
        ]
      }
    },  
    
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
      id: `GTM-M26S42Z` ,
      includeInDevelopment: false,
      // Defaults to null
      defaultDataLayer: { platform: "gatsby" },
      },
    },
    { 
      resolve: "gatsby-plugin-preconnect",
      options: {
        domains: [
          "https://www.google-analytics.com",
          "https://www.googletagmanager.com",
        ],
      },
    },

    
  //
    'gatsby-plugin-offline',
  ],
}
