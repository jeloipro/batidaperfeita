var plugins = [{
      plugin: require('/home/thor/Development/gatsby/batidaperfeita/node_modules/gatsby-plugin-social9-socialshare/gatsby-ssr'),
      options: {"plugins":[],"content":"073004d757df4a7ca401fc742b11a17a"},
    },{
      plugin: require('/home/thor/Development/gatsby/batidaperfeita/node_modules/gatsby-plugin-load-script/gatsby-ssr'),
      options: {"plugins":[],"id":"s9-sdk","async":true,"defer":true,"content":"073004d757df4a7ca401fc742b11a17a","src":"socialshare.min.js"},
    },{
      plugin: require('/home/thor/Development/gatsby/batidaperfeita/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/home/thor/Development/gatsby/batidaperfeita/node_modules/gatsby-plugin-theme-ui/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/home/thor/Development/gatsby/batidaperfeita/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"G-ZJ1KELX31M","head":false,"anonymize":false,"respectDNT":false,"exclude":[],"pageTransitionDelay":0},
    },{
      plugin: require('/home/thor/Development/gatsby/batidaperfeita/node_modules/gatsby-plugin-advanced-sitemap/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/home/thor/Development/gatsby/batidaperfeita/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Batida Perfeita","short_name":"BatidaPerfeita","start_url":"/","background_color":"#f7f0eb","theme_color":"#a2466c","display":"standalone","icon":"static/assets/batida-perfeita-favicon2.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"038e61b916270308f347ccf97aa2367e"},
    },{
      plugin: require('/home/thor/Development/gatsby/batidaperfeita/node_modules/gatsby-plugin-feed/gatsby-ssr'),
      options: {"plugins":[],"feeds":[{"query":"\n              {\n                allMarkdownRemark(\n                  sort: { order: DESC, fields: [frontmatter___date] },\n                ) {\n                  edges {\n                    node {\n                      excerpt\n                      html\n                      fields { slug }\n                      frontmatter {\n                        title\n                        date\n                      }\n                    }\n                  }\n                }\n              }\n            ","output":"/blog/rss.xml","match":"^/blog/"}]},
    },{
      plugin: require('/home/thor/Development/gatsby/batidaperfeita/node_modules/gatsby-plugin-google-tagmanager/gatsby-ssr'),
      options: {"plugins":[],"id":"GTM-M26S42Z","includeInDevelopment":false,"defaultDataLayer":{"type":"object","value":{"platform":"gatsby"}},"routeChangeEventName":"gatsby-route-change"},
    },{
      plugin: require('/home/thor/Development/gatsby/batidaperfeita/node_modules/gatsby-plugin-preconnect/gatsby-ssr'),
      options: {"plugins":[],"domains":["https://www.google-analytics.com","https://www.googletagmanager.com"]},
    },{
      plugin: require('/home/thor/Development/gatsby/batidaperfeita/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
