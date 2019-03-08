const path = require('path')
const withTypescript = require('@zeit/next-typescript')
const withSourceMaps = require('@zeit/next-source-maps')

module.exports = withTypescript(withSourceMaps({
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

    webpack(config, { dev, defaultLoaders }) {
        config.module.rules.push({
            test: /\.md$/,
            include: path.join(__dirname, 'pages/blog'),
            use: [
                defaultLoaders.babel,
                {
                    loader: './src/post-loader'
                }
            ]
        })

        // Absolute import paths https://moduscreate.com/blog/es6-es2015-import-no-relative-path-webpack/
        config.resolve.modules.push(path.resolve('./'))

        config.node = {
            Buffer: false
        }

        return config
    },
    exportPathMap() {
        return {
            "/": { page: "/" },
            "/blog/2018-11-28-secure-cloud-storage.html": { page: "/blog/2018-11-28-secure-cloud-storage.html" },
            "/blog/2017-08-06-when-is-golden-hour.html": { page: "/blog/2017-08-06-when-is-golden-hour.html" },
        }
    },
}))
