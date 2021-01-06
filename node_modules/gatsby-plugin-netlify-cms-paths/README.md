# gatsby-plugin-netlify-cms-paths

A gatsby plugin to change file paths in your markdown files to Gatsby-friendly paths when using Netlify CMS to edit them.

## Installation

With npm:

```bash
npm install --save gatsby-plugin-netlify-cms-paths
```

With Yarn:

```bash
yarn add gatsby-plugin-netlify-cms-paths
```

## Usage

In your `gatsby-config.js` file:

```js
module.exports = {
  plugins: [

    // Including in your Gatsby plugins will transform any paths in your frontmatter
    `gatsby-plugin-netlify-cms-paths`,

    // Including in your Remark plugins will transform any paths in your markdown body
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-plugin-netlify-cms-paths`,
        ],
      },
    },

  ],
}
```

## Plugin Options

```js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-netlify-cms-paths`,
      options: {
        // Path to your Netlify CMS config file
        cmsConfig: `/static/admin/config.yml`
      }
    }
  ]
}
```