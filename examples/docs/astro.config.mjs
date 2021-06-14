export default {
  buildOptions: {
    // site: '',            // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
    sitemap: false, // Generate sitemap (set to "false" to disable)
  },
  renderers: [
    '@astrojs/renderer-preact'
  ]
};
