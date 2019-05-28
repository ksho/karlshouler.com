const path = require('path')
const withSourceMaps = require('@zeit/next-source-maps')

module.exports = withSourceMaps({
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

    webpack(config, { dev, defaultLoaders }) {
        config.module.rules.push({
            test: /\.md$/,
            include: path.join(__dirname, 'pages/posts'),
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
            '/': { page: '/' },
            '/posts': { page: '/posts' },

            // Writing
            // '/blog/2018/11/28/secure-cloud-storage/': { page: '/blog/2018-11-28-secure-cloud-storage' },
            // '/blog/2017/08/06/when-is-golden-hour/': { page: '/blog/2017-08-06-when-is-golden-hour' },
            // '/blog/2015/12/15/mile/': { page: '/blog/2015-12-15-mile' },

            // // Photos
            // '/blog/2016/09/21/sunset/': { page: '/blog/2016-09-21-sunset' },
            // '/blog/2015/05/10/discover-the-railyard/': { page: '/blog/2015-05-10-discover-the-railyard' },
            // '/blog/2015/01/06/first-snowfall-of-the-winter/': { page: '/blog/2015-01-06-first-snowfall-of-the-winter' },

        }
    },
})
